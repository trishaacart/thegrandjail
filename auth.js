/**
 * =====================================================================
 *  THE GRAND JAIL RESTAURANT - CUSTOMER AUTH & ORDER HISTORY
 * =====================================================================
 *  Handles phone-number customer login, profile storage,
 *  order history persistence, and re-ordering functionality.
 * =====================================================================
 */

const Auth = (function () {
  const USER_STORAGE_KEY = "grand_jail_user_v2";
  const ORDERS_STORAGE_KEY = "grand_jail_orders_history_v2";

  let currentUser = null; // { phone, name, address, landmark, pincode, createdAt }
  let inMemoryOrders = []; // In-memory fallback
  let inMemoryProfiles = {};
  const listeners = [];

  function isStorageAvailable() {
    try {
      return typeof window !== "undefined" && typeof window.localStorage !== "undefined" && window.localStorage !== null;
    } catch (e) {
      return false;
    }
  }

  // Load user from localStorage
  function loadUser() {
    if (!isStorageAvailable()) return;
    try {
      const stored = localStorage.getItem(USER_STORAGE_KEY);
      if (stored) {
        currentUser = JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Auth load error:", e);
      currentUser = null;
    }
  }

  // Save user to localStorage
  function saveUser() {
    if (isStorageAvailable()) {
      try {
        if (currentUser) {
          localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(currentUser));
        } else {
          localStorage.removeItem(USER_STORAGE_KEY);
        }
      } catch (e) {
        console.warn("Auth save error:", e);
      }
    }
    notifyListeners();
  }

  // Login or Register with Phone
  function login(phoneStr, nameStr = "", addressStr = "", landmarkStr = "") {
    const cleanPhone = phoneStr.replace(/\D/g, "").slice(-10);
    if (cleanPhone.length < 10) {
      return { success: false, message: "Please enter a valid 10-digit mobile number." };
    }

    const cleanName = nameStr.trim() || `Inmate-${cleanPhone.slice(-4)}`;

    // Check if we already have an existing profile for this phone in past records
    const allUsers = getAllSavedProfiles();
    const existing = allUsers[cleanPhone] || {};

    currentUser = {
      phone: cleanPhone,
      name: nameStr.trim() || existing.name || cleanName,
      address: addressStr.trim() || existing.address || "",
      landmark: landmarkStr.trim() || existing.landmark || "",
      pincode: existing.pincode || "803116",
      createdAt: existing.createdAt || new Date().toISOString()
    };

    allUsers[cleanPhone] = currentUser;
    inMemoryProfiles[cleanPhone] = currentUser;

    if (isStorageAvailable()) {
      try {
        localStorage.setItem("grand_jail_all_profiles_v2", JSON.stringify(allUsers));
      } catch (e) {
        console.warn(e);
      }
    }

    saveUser();
    return { success: true, user: currentUser, message: `Welcome, ${currentUser.name}! You are logged in.` };
  }

  // Logout
  function logout() {
    currentUser = null;
    saveUser();
    return { success: true, message: "Logged out successfully." };
  }

  // Update profile
  function updateProfile(updatedData) {
    if (!currentUser) {
      return { success: false, message: "No user is currently logged in." };
    }

    currentUser = {
      ...currentUser,
      name: (updatedData.name !== undefined ? updatedData.name.trim() : currentUser.name) || currentUser.name,
      address: updatedData.address !== undefined ? updatedData.address.trim() : currentUser.address,
      landmark: updatedData.landmark !== undefined ? updatedData.landmark.trim() : currentUser.landmark,
      pincode: updatedData.pincode !== undefined ? updatedData.pincode.trim() : currentUser.pincode
    };

    const allUsers = getAllSavedProfiles();
    allUsers[currentUser.phone] = currentUser;
    inMemoryProfiles[currentUser.phone] = currentUser;

    if (isStorageAvailable()) {
      try {
        localStorage.setItem("grand_jail_all_profiles_v2", JSON.stringify(allUsers));
      } catch (e) {
        console.warn(e);
      }
    }

    saveUser();
    return { success: true, user: currentUser, message: "Profile updated successfully!" };
  }

  // Helper for multiple profiles
  function getAllSavedProfiles() {
    if (!isStorageAvailable()) return { ...inMemoryProfiles };
    try {
      const stored = localStorage.getItem("grand_jail_all_profiles_v2");
      return stored ? JSON.parse(stored) : { ...inMemoryProfiles };
    } catch (e) {
      return { ...inMemoryProfiles };
    }
  }

  // -------------------------------------------------------------
  // ORDERS PERSISTENCE & HISTORY
  // -------------------------------------------------------------
  function getAllOrders() {
    if (!isStorageAvailable()) return [...inMemoryOrders];
    try {
      const stored = localStorage.getItem(ORDERS_STORAGE_KEY);
      const orders = stored ? JSON.parse(stored) : inMemoryOrders;
      inMemoryOrders = [...orders];
      return orders;
    } catch (e) {
      return [...inMemoryOrders];
    }
  }

  function saveOrderToHistory(orderData) {
    try {
      const allOrders = getAllOrders();
      allOrders.unshift(orderData); // Latest order first
      inMemoryOrders = [...allOrders];

      if (isStorageAvailable()) {
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(allOrders));
      }

      // Also ensure customer profile is recorded
      if (orderData.customer && orderData.customer.phone) {
        const phone = orderData.customer.phone.replace(/\D/g, "").slice(-10);
        if (phone.length === 10) {
          if (!currentUser || currentUser.phone !== phone) {
            login(phone, orderData.customer.name, orderData.customer.address, orderData.customer.landmark);
          } else {
            // Update saved address if empty
            if (!currentUser.address && orderData.customer.address) {
              updateProfile({
                address: orderData.customer.address,
                landmark: orderData.customer.landmark || ""
              });
            }
          }
        }
      }
    } catch (e) {
      console.warn("Order history save error:", e);
    }
    notifyListeners();
  }

  // Get orders for current user (or specific phone number)
  function getCustomerOrders(phone = null) {
    const targetPhone = phone ? phone.replace(/\D/g, "").slice(-10) : currentUser ? currentUser.phone : null;
    const all = getAllOrders();
    if (!targetPhone) return all; // Return all local orders if unauthenticated
    return all.filter((ord) => {
      if (!ord.customer || !ord.customer.phone) return false;
      const ordPhone = ord.customer.phone.replace(/\D/g, "").slice(-10);
      return ordPhone === targetPhone;
    });
  }

  // Re-order past order items
  function reOrder(orderId) {
    const all = getAllOrders();
    const order = all.find((o) => o.orderId === orderId);
    if (!order || !order.items || order.items.length === 0) {
      return { success: false, message: "Order not found." };
    }

    if (!window.Cart) {
      return { success: false, message: "Cart system not ready." };
    }

    let addedCount = 0;
    order.items.forEach((item) => {
      window.Cart.addItem(item.id, item.quantity);
      addedCount += item.quantity;
    });

    if (order.deliveryType) {
      window.Cart.setDeliveryType(order.deliveryType);
    }

    return {
      success: true,
      message: `Added ${addedCount} item(s) from order ${orderId} back to your tray!`
    };
  }

  // Subscriptions
  function subscribe(fn) {
    if (typeof fn === "function") listeners.push(fn);
  }

  function notifyListeners() {
    listeners.forEach((fn) => {
      try {
        fn({
          user: currentUser ? { ...currentUser } : null,
          isLoggedIn: !!currentUser,
          orders: getCustomerOrders()
        });
      } catch (err) {
        console.error("Auth listener error:", err);
      }
    });
  }

  // Initialize
  loadUser();

  return {
    getCurrentUser: () => (currentUser ? { ...currentUser } : null),
    isLoggedIn: () => !!currentUser,
    login,
    logout,
    updateProfile,
    saveOrderToHistory,
    getCustomerOrders,
    reOrder,
    subscribe,
    notify: notifyListeners
  };
})();

// Export
if (typeof window !== "undefined") {
  window.Auth = Auth;
}
