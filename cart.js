/**
 * =====================================================================
 *  THE GRAND JAIL RESTAURANT - CART & ORDER SYSTEM
 * =====================================================================
 *  Handles shopping cart state, quantity controls (+ / -),
 *  promo codes, delivery fee calculations, and checkout.
 * =====================================================================
 */

const Cart = (function () {
  const STORAGE_KEY = "grand_jail_rajgir_cart_v2";
  const PROMO_STORAGE_KEY = "grand_jail_rajgir_promo_v2";
  const DELIVERY_TYPE_KEY = "grand_jail_rajgir_delivery_type_v2";

  let items = []; // Array of { id, quantity, itemData }
  let appliedPromo = null; // { code, discountPercent, maxDiscount, discountAmount }
  let deliveryType = "delivery"; // 'delivery' or 'takeaway'

  function isStorageAvailable() {
    try {
      return typeof window !== "undefined" && typeof window.localStorage !== "undefined" && window.localStorage !== null;
    } catch (e) {
      return false;
    }
  }

  // Load from localStorage
  function loadCart() {
    if (!isStorageAvailable()) return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        items = JSON.parse(stored);
      }
      const storedPromo = localStorage.getItem(PROMO_STORAGE_KEY);
      if (storedPromo) {
        appliedPromo = JSON.parse(storedPromo);
      }
      const storedType = localStorage.getItem(DELIVERY_TYPE_KEY);
      if (storedType) {
        deliveryType = storedType;
      }
    } catch (e) {
      console.warn("Storage notice:", e);
      items = [];
    }
  }

  // Save to localStorage
  function saveCart() {
    if (isStorageAvailable()) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        if (appliedPromo) {
          localStorage.setItem(PROMO_STORAGE_KEY, JSON.stringify(appliedPromo));
        } else {
          localStorage.removeItem(PROMO_STORAGE_KEY);
        }
        localStorage.setItem(DELIVERY_TYPE_KEY, deliveryType);
      } catch (e) {
        console.warn("Storage notice:", e);
      }
    }
    notifyListeners();
  }

  // Find item by ID in RESTAURANT_DATA
  function findMenuItem(itemId) {
    if (!window.RESTAURANT_DATA || !window.RESTAURANT_DATA.menuItems) return null;
    return window.RESTAURANT_DATA.menuItems.find((m) => m.id === itemId);
  }

  // Add Item to Cart
  function addItem(itemId, qty = 1) {
    const menuItem = findMenuItem(itemId);
    if (!menuItem) return false;

    const existingIndex = items.findIndex((i) => i.id === itemId);
    if (existingIndex > -1) {
      items[existingIndex].quantity += qty;
    } else {
      items.push({
        id: itemId,
        quantity: qty,
        name: menuItem.name,
        price: menuItem.price,
        isVeg: menuItem.isVeg,
        image: menuItem.image
      });
    }

    saveCart();
    showToast(`Added "${menuItem.name}" to cart! 🍽️`);
    return true;
  }

  // Update item quantity
  function updateQuantity(itemId, newQty) {
    const existingIndex = items.findIndex((i) => i.id === itemId);
    if (existingIndex === -1) return;

    if (newQty <= 0) {
      const removedItem = items[existingIndex];
      items.splice(existingIndex, 1);
      showToast(`Removed "${removedItem.name}" from cart.`);
    } else {
      items[existingIndex].quantity = newQty;
    }

    // Revalidate promo if minimum amount condition broke
    validateAppliedPromo();

    saveCart();
  }

  // Remove Item
  function removeItem(itemId) {
    updateQuantity(itemId, 0);
  }

  // Clear Cart
  function clearCart() {
    items = [];
    appliedPromo = null;
    saveCart();
  }

  // Get current quantity of specific item
  function getItemQuantity(itemId) {
    const item = items.find((i) => i.id === itemId);
    return item ? item.quantity : 0;
  }

  // Get total items count
  function getTotalCount() {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  // Calculate Subtotal
  function getSubtotal() {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Calculate Delivery Fee
  function getDeliveryFee() {
    if (deliveryType === "takeaway" || items.length === 0) return 0;
    const subtotal = getSubtotal();
    const config = window.RESTAURANT_DATA.info.delivery;
    if (subtotal >= config.freeDeliveryThreshold) {
      return 0; // Free delivery!
    }
    return config.deliveryFee;
  }

  // Set delivery type
  function setDeliveryType(type) {
    deliveryType = type === "takeaway" ? "takeaway" : "delivery";
    saveCart();
  }

  function getDeliveryType() {
    return deliveryType;
  }

  // Apply promo code
  function applyPromo(codeStr) {
    if (!codeStr || !codeStr.trim()) {
      return { success: false, message: "Please enter a valid coupon code." };
    }
    const cleanCode = codeStr.trim().toUpperCase();
    const promos = (window.RESTAURANT_DATA && window.RESTAURANT_DATA.info.promoCodes) || [];
    const promo = promos.find((p) => p.code === cleanCode);

    if (!promo) {
      return { success: false, message: `Coupon "${cleanCode}" is invalid.` };
    }

    const subtotal = getSubtotal();
    if (subtotal < promo.minOrder) {
      return {
        success: false,
        message: `Min. order amount for ${promo.code} is ₹${promo.minOrder}. Add items worth ₹${promo.minOrder - subtotal} more.`
      };
    }

    appliedPromo = promo;
    saveCart();
    return {
      success: true,
      message: `Coupon ${promo.code} applied successfully! You saved ₹${getDiscountAmount()}. 🎉`
    };
  }

  // Re-verify promo when subtotal changes
  function validateAppliedPromo() {
    if (!appliedPromo) return;
    const subtotal = getSubtotal();
    if (subtotal < appliedPromo.minOrder) {
      const oldCode = appliedPromo.code;
      appliedPromo = null;
      showToast(`Coupon ${oldCode} removed: Min order requirement (₹${appliedPromo ? appliedPromo.minOrder : ''}) not met.`, "warning");
    }
  }

  // Remove promo
  function removePromo() {
    appliedPromo = null;
    saveCart();
    return { success: true, message: "Coupon removed." };
  }

  // Calculate Discount Amount
  function getDiscountAmount() {
    if (!appliedPromo || items.length === 0) return 0;
    const subtotal = getSubtotal();
    const rawDiscount = (subtotal * appliedPromo.discountPercent) / 100;
    return Math.min(Math.round(rawDiscount), appliedPromo.maxDiscount);
  }

  // Calculate GST & packaging charges (5% GST + ₹20 packing)
  function getTaxesAndCharges() {
    const subtotal = getSubtotal();
    if (subtotal === 0) return { gst: 0, packing: 0, totalTax: 0 };
    const gst = Math.round(subtotal * 0.05); // 5% GST
    const packing = 20; // Packaging charges
    return { gst, packing, totalTax: gst + packing };
  }

  // Calculate Grand Total
  function getGrandTotal() {
    if (items.length === 0) return 0;
    const subtotal = getSubtotal();
    const delivery = getDeliveryFee();
    const discount = getDiscountAmount();
    const { totalTax } = getTaxesAndCharges();
    const total = subtotal + delivery + totalTax - discount;
    return Math.max(0, total);
  }

  // Listeners system for reactive UI updates
  const listeners = [];
  function subscribe(fn) {
    if (typeof fn === "function") {
      listeners.push(fn);
    }
  }

  function notifyListeners() {
    listeners.forEach((fn) => {
      try {
        fn({
          items: [...items],
          count: getTotalCount(),
          subtotal: getSubtotal(),
          deliveryFee: getDeliveryFee(),
          deliveryType: deliveryType,
          discount: getDiscountAmount(),
          appliedPromo: appliedPromo,
          taxes: getTaxesAndCharges(),
          grandTotal: getGrandTotal()
        });
      } catch (err) {
        console.error("Cart listener error:", err);
      }
    });
  }

  // Toast notification helper
  function showToast(message, type = "success") {
    if (window.App && typeof window.App.showToast === "function") {
      window.App.showToast(message, type);
    } else {
      console.log(`[Toast ${type}] ${message}`);
    }
  }

  // Initialize
  loadCart();

  return {
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    getItemQuantity,
    getTotalCount,
    getSubtotal,
    getDeliveryFee,
    getDeliveryType,
    setDeliveryType,
    applyPromo,
    removePromo,
    getDiscountAmount,
    getTaxesAndCharges,
    getGrandTotal,
    getItems: () => [...items],
    getAppliedPromo: () => (appliedPromo ? { ...appliedPromo } : null),
    subscribe,
    notify: notifyListeners
  };
})();

// Export to window
if (typeof window !== "undefined") {
  window.Cart = Cart;
}
