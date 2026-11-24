/**
 * =====================================================================
 *  THE GRAND JAIL RESTAURANT - RAJGIR
 *  Main Application & Interactive Features Controller
 * =====================================================================
 */

(function () {
  "use strict";

  // Cache DOM Elements
  const DOM = {
    // Header Actions & Auth
    siteHeader: document.getElementById("siteHeader"),
    navMenu: document.getElementById("navMenu"),
    navLinks: document.querySelectorAll(".nav-link"),
    mobileMenuBtn: document.getElementById("mobileMenuBtn"),
    headerCartBtn: document.getElementById("headerCartBtn"),
    cartBadgeCount: document.getElementById("cartBadgeCount"),
    headerAuthBtn: document.getElementById("headerAuthBtn"),
    headerProfileBtn: document.getElementById("headerProfileBtn"),
    headerUserNameText: document.getElementById("headerUserNameText"),
    headerAvatarCircle: document.getElementById("headerAvatarCircle"),

    // Customer Login & Profile Modals
    loginModalOverlay: document.getElementById("loginModalOverlay"),
    closeLoginModalBtn: document.getElementById("closeLoginModalBtn"),
    loginForm: document.getElementById("loginForm"),
    loginPhone: document.getElementById("loginPhone"),
    loginName: document.getElementById("loginName"),
    loginOtp: document.getElementById("loginOtp"),

    profileModalOverlay: document.getElementById("profileModalOverlay"),
    closeProfileModalBtn: document.getElementById("closeProfileModalBtn"),
    profileModalAvatar: document.getElementById("profileModalAvatar"),
    profileModalName: document.getElementById("profileModalName"),
    profileModalPhone: document.getElementById("profileModalPhone"),
    tabProfileDetailsBtn: document.getElementById("tabProfileDetailsBtn"),
    tabOrderHistoryBtn: document.getElementById("tabOrderHistoryBtn"),
    profileDetailsTab: document.getElementById("profileDetailsTab"),
    orderHistoryTab: document.getElementById("orderHistoryTab"),
    profName: document.getElementById("profName"),
    profPhone: document.getElementById("profPhone"),
    profAddress: document.getElementById("profAddress"),
    profLandmark: document.getElementById("profLandmark"),
    profPincode: document.getElementById("profPincode"),
    profileUpdateForm: document.getElementById("profileUpdateForm"),
    logoutBtn: document.getElementById("logoutBtn"),
    orderHistoryList: document.getElementById("orderHistoryList"),
    userOrdersCount: document.getElementById("userOrdersCount"),

    // Sections
    sections: {
      home: document.getElementById("homeSection"),
      menu: document.getElementById("menuSection"),
      reserve: document.getElementById("reserveSection"),
      about: document.getElementById("aboutSection"),
      gallery: document.getElementById("gallerySection"),
      contact: document.getElementById("contactSection")
    },

    // Home Section
    featuredDishesGrid: document.getElementById("featuredDishesGrid"),
    testimonialsGrid: document.getElementById("testimonialsGrid"),

    // Menu Section
    menuSearchInput: document.getElementById("menuSearchInput"),
    clearSearchBtn: document.getElementById("clearSearchBtn"),
    categoryTabsWrap: document.getElementById("categoryTabsWrap"),
    dietFilterBtns: document.querySelectorAll("[data-diet]"),
    menuItemsGrid: document.getElementById("menuItemsGrid"),
    noMenuResults: document.getElementById("noMenuResults"),
    resetMenuFiltersBtn: document.getElementById("resetMenuFiltersBtn"),

    // Reservation Section
    cellOptionsContainer: document.getElementById("cellOptionsContainer"),
    selectedCellInput: document.getElementById("selectedCellInput"),
    reservationForm: document.getElementById("reservationForm"),
    resDateInput: document.getElementById("resDate"),
    resSuccessModalOverlay: document.getElementById("resSuccessModalOverlay"),
    closeResSuccessModalBtn: document.getElementById("closeResSuccessModalBtn"),
    resSuccessDoneBtn: document.getElementById("resSuccessDoneBtn"),
    resSuccessCode: document.getElementById("resSuccessCode"),
    resSuccessDetails: document.getElementById("resSuccessDetails"),
    resWhatsAppConfirmBtn: document.getElementById("resWhatsAppConfirmBtn"),

    // About & FAQs
    faqContainer: document.getElementById("faqContainer"),

    // Gallery & Lightbox
    galleryGrid: document.getElementById("galleryGrid"),
    galleryFilterTabs: document.getElementById("galleryFilterTabs"),
    lightboxModalOverlay: document.getElementById("lightboxModalOverlay"),
    closeLightboxBtn: document.getElementById("closeLightboxBtn"),
    lightboxImage: document.getElementById("lightboxImage"),
    lightboxTitle: document.getElementById("lightboxTitle"),
    lightboxCaption: document.getElementById("lightboxCaption"),

    // Contact
    contactAddress: document.getElementById("contactAddress"),
    contactPhoneLink: document.getElementById("contactPhoneLink"),
    contactCallBtn: document.getElementById("contactCallBtn"),
    contactWhatsAppBtn: document.getElementById("contactWhatsAppBtn"),
    contactForm: document.getElementById("contactForm"),

    // Cart Drawer
    cartOverlay: document.getElementById("cartOverlay"),
    cartDrawer: document.getElementById("cartDrawer"),
    closeCartBtn: document.getElementById("closeCartBtn"),
    deliveryTypeBtn: document.getElementById("deliveryTypeBtn"),
    takeawayTypeBtn: document.getElementById("takeawayTypeBtn"),
    cartItemsList: document.getElementById("cartItemsList"),
    promoCodeInput: document.getElementById("promoCodeInput"),
    applyPromoBtn: document.getElementById("applyPromoBtn"),
    promoAppliedTag: document.getElementById("promoAppliedTag"),
    appliedPromoCodeText: document.getElementById("appliedPromoCodeText"),
    removePromoBtn: document.getElementById("removePromoBtn"),
    billSubtotal: document.getElementById("billSubtotal"),
    billDeliveryFee: document.getElementById("billDeliveryFee"),
    billDeliveryRow: document.getElementById("billDeliveryRow"),
    billDiscountRow: document.getElementById("billDiscountRow"),
    billDiscount: document.getElementById("billDiscount"),
    billTaxes: document.getElementById("billTaxes"),
    billGrandTotal: document.getElementById("billGrandTotal"),
    proceedCheckoutBtn: document.getElementById("proceedCheckoutBtn"),

    // Mobile Bottom Cart
    mobileCartBar: document.getElementById("mobileCartBar"),
    mobileCartItemCount: document.getElementById("mobileCartItemCount"),
    mobileCartGrandTotal: document.getElementById("mobileCartGrandTotal"),
    mobileViewCartBtn: document.getElementById("mobileViewCartBtn"),

    // Checkout Modal
    checkoutModalOverlay: document.getElementById("checkoutModalOverlay"),
    closeCheckoutModalBtn: document.getElementById("closeCheckoutModalBtn"),
    checkoutForm: document.getElementById("checkoutForm"),
    checkoutAmountPayable: document.getElementById("checkoutAmountPayable"),
    btnPayAmountText: document.getElementById("btnPayAmountText"),
    checkoutItemsList: document.getElementById("checkoutItemsList"),
    checkoutItemCountTag: document.getElementById("checkoutItemCountTag"),
    checkoutSubtotal: document.getElementById("checkoutSubtotal"),
    checkoutDeliveryFee: document.getElementById("checkoutDeliveryFee"),
    checkoutDeliveryRow: document.getElementById("checkoutDeliveryRow"),
    checkoutTaxes: document.getElementById("checkoutTaxes"),
    checkoutDiscountRow: document.getElementById("checkoutDiscountRow"),
    checkoutDiscount: document.getElementById("checkoutDiscount"),
    deliveryAddressGroup: document.getElementById("deliveryAddressGroup"),
    deliveryLandmarkGroup: document.getElementById("deliveryLandmarkGroup"),
    payCodLabel: document.getElementById("payCodLabel"),
    payUpiLabel: document.getElementById("payUpiLabel"),
    codInfoBox: document.getElementById("codInfoBox"),
    codAmountText: document.getElementById("codAmountText"),
    upiInfoBox: document.getElementById("upiInfoBox"),
    upiAmountText: document.getElementById("upiAmountText"),
    upiQrImage: document.getElementById("upiQrImage"),
    checkoutUserStatusBanner: document.getElementById("checkoutUserStatusBanner"),
    checkoutUserText: document.getElementById("checkoutUserText"),
    checkoutAuthActionBtn: document.getElementById("checkoutAuthActionBtn"),

    // Order Success Receipt Modal
    orderSuccessModalOverlay: document.getElementById("orderSuccessModalOverlay"),
    closeOrderSuccessModalBtn: document.getElementById("closeOrderSuccessModalBtn"),
    receiptOrderId: document.getElementById("receiptOrderId"),
    receiptCustomerName: document.getElementById("receiptCustomerName"),
    receiptCustomerPhone: document.getElementById("receiptCustomerPhone"),
    receiptCustomerAddress: document.getElementById("receiptCustomerAddress"),
    receiptDeliveryType: document.getElementById("receiptDeliveryType"),
    receiptPaymentMode: document.getElementById("receiptPaymentMode"),
    receiptTableBody: document.getElementById("receiptTableBody"),
    receiptTotalAmount: document.getElementById("receiptTotalAmount"),
    receiptWhatsAppDispatchBtn: document.getElementById("receiptWhatsAppDispatchBtn"),

    // Toast
    toastContainer: document.getElementById("toastContainer")
  };

  // State Management
  const state = {
    activePage: "home",
    selectedCategory: "all",
    selectedDiet: "all",
    searchQuery: "",
    selectedGalleryCategory: "all",
    selectedCellType: "solitary"
  };

  // Safe Image Fallback
  const FALLBACK_FOOD_IMG = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80";

  /**
   * =========================================================================
   * 1. ROUTING & SPA NAVIGATION
   * =========================================================================
   */
  function navigateTo(pageId) {
    if (!DOM.sections[pageId]) {
      pageId = "home";
    }

    state.activePage = pageId;

    // Toggle Section visibility
    Object.keys(DOM.sections).forEach((key) => {
      const section = DOM.sections[key];
      if (key === pageId) {
        section.style.display = "block";
        section.classList.add("active");
      } else {
        section.style.display = "none";
        section.classList.remove("active");
      }
    });

    // Update active state in nav links
    DOM.navLinks.forEach((link) => {
      if (link.getAttribute("data-page") === pageId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Close mobile nav drawer if open
    DOM.navMenu.classList.remove("active");

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function initRouter() {
    function handleHashChange() {
      const hash = window.location.hash.replace("#", "") || "home";
      navigateTo(hash);
    }

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Run on initial load

    // Mobile nav toggle
    DOM.mobileMenuBtn.addEventListener("click", () => {
      DOM.navMenu.classList.toggle("active");
    });

    // Header scroll background effect
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        DOM.siteHeader.classList.add("scrolled");
      } else {
        DOM.siteHeader.classList.remove("scrolled");
      }
    });
  }

  /**
   * =========================================================================
   * 2. RENDER MENU & ONLINE ORDERING SYSTEM
   * =========================================================================
   */
  function initMenu() {
    renderCategoryTabs();
    renderMenuItems();
    renderFeaturedDishes();

    // Search Input Handler
    DOM.menuSearchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      DOM.clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
      renderMenuItems();
    });

    // Clear Search Button
    DOM.clearSearchBtn.addEventListener("click", () => {
      DOM.menuSearchInput.value = "";
      state.searchQuery = "";
      DOM.clearSearchBtn.style.display = "none";
      renderMenuItems();
    });

    // Diet Filter Buttons
    DOM.dietFilterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        DOM.dietFilterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.selectedDiet = btn.getAttribute("data-diet");
        renderMenuItems();
      });
    });

    // Reset Filters button
    DOM.resetMenuFiltersBtn.addEventListener("click", () => {
      state.selectedCategory = "all";
      state.selectedDiet = "all";
      state.searchQuery = "";
      DOM.menuSearchInput.value = "";
      DOM.clearSearchBtn.style.display = "none";
      DOM.dietFilterBtns.forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-diet") === "all");
      });
      renderCategoryTabs();
      renderMenuItems();
    });
  }

  function renderCategoryTabs() {
    const categories = window.RESTAURANT_DATA.categories;
    DOM.categoryTabsWrap.innerHTML = categories
      .map((cat) => {
        const isActive = cat.id === state.selectedCategory;
        return `
          <button class="category-tab-btn ${isActive ? "active" : ""}" data-category-id="${cat.id}">
            <i class="fa-solid fa-${getCategoryFaIcon(cat.icon)}"></i>
            <span>${cat.name}</span>
          </button>
        `;
      })
      .join("");

    // Bind tab clicks
    DOM.categoryTabsWrap.querySelectorAll(".category-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        DOM.categoryTabsWrap.querySelectorAll(".category-tab-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.selectedCategory = btn.getAttribute("data-category-id");
        renderMenuItems();
      });
    });
  }

  function getCategoryFaIcon(iconName) {
    const map = {
      utensils: "utensils",
      flame: "fire-flame-curved",
      shield: "shield-halved",
      soup: "bowl-food",
      sparkles: "wand-magic-sparkles",
      bowl: "bowl-rice",
      wheat: "wheat-awn",
      drumstick: "drumstick-bite",
      glass: "martini-glass-citrus",
      cake: "cake-candles"
    };
    return map[iconName] || "utensils";
  }

  function renderMenuItems() {
    const items = window.RESTAURANT_DATA.menuItems;

    // Filter Items
    const filtered = items.filter((item) => {
      // Category Match
      if (state.selectedCategory !== "all" && item.category !== state.selectedCategory) {
        return false;
      }

      // Diet Match
      if (state.selectedDiet === "veg" && !item.isVeg) return false;
      if (state.selectedDiet === "nonveg" && item.isVeg) return false;
      if (state.selectedDiet === "bestseller" && !item.bestSeller) return false;

      // Search Query Match
      if (state.searchQuery) {
        const titleMatch = item.name.toLowerCase().includes(state.searchQuery);
        const descMatch = item.description.toLowerCase().includes(state.searchQuery);
        const tagMatch = item.tag && item.tag.toLowerCase().includes(state.searchQuery);
        if (!titleMatch && !descMatch && !tagMatch) return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      DOM.menuItemsGrid.innerHTML = "";
      DOM.noMenuResults.style.display = "block";
      return;
    }

    DOM.noMenuResults.style.display = "none";
    DOM.menuItemsGrid.innerHTML = filtered.map((item) => createMenuItemCardHTML(item)).join("");

    bindMenuItemCardEvents(DOM.menuItemsGrid);
  }

  function renderFeaturedDishes() {
    const bestSellers = window.RESTAURANT_DATA.menuItems.filter((i) => i.bestSeller).slice(0, 4);
    DOM.featuredDishesGrid.innerHTML = bestSellers.map((item) => createMenuItemCardHTML(item)).join("");
    bindMenuItemCardEvents(DOM.featuredDishesGrid);
  }

  function createMenuItemCardHTML(item) {
    const currentQty = window.Cart ? window.Cart.getItemQuantity(item.id) : 0;
    const dietClass = item.isVeg ? "veg" : "non-veg";
    const dietText = item.isVeg ? "Pure Veg" : "Non-Veg";

    return `
      <div class="menu-card" data-item-id="${item.id}">
        <div class="menu-card-img-wrap">
          <img src="${item.image}" alt="${item.name}" class="menu-card-img" loading="lazy" onerror="this.onerror=null; this.src='${FALLBACK_FOOD_IMG}'">
          ${item.tag ? `<span class="menu-card-badge">${item.tag}</span>` : ""}
          <span class="menu-spice-badge">
            <i class="fa-solid fa-pepper-hot" style="color: ${item.spiceLevel === 'Hot' ? '#ef4444' : item.spiceLevel === 'Medium' ? '#f59e0b' : '#10b981'}"></i>
            ${item.spiceLevel}
          </span>
        </div>

        <div class="menu-card-content">
          <div class="menu-card-header">
            <div>
              <span class="diet-dot ${dietClass}" title="${dietText}" style="margin-right: 0.35rem;"></span>
              <h3 class="menu-item-name" style="display: inline;">${item.name}</h3>
            </div>
          </div>

          <p class="menu-item-desc">${item.description}</p>

          <div class="menu-card-footer">
            <div class="menu-item-price">₹${item.price}</div>

            <div class="action-btn-container" data-item-id="${item.id}">
              ${
                currentQty > 0
                  ? `
                  <div class="qty-controller">
                    <button class="qty-btn btn-qty-minus" data-action="minus" aria-label="Decrease quantity">−</button>
                    <span class="qty-display">${currentQty}</span>
                    <button class="qty-btn btn-qty-plus" data-action="plus" aria-label="Increase quantity">+</button>
                  </div>
                `
                  : `
                  <button class="btn-add-cart" data-action="add">
                    <i class="fa-solid fa-plus"></i> Add
                  </button>
                `
              }
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function bindMenuItemCardEvents(container) {
    container.querySelectorAll(".action-btn-container").forEach((wrap) => {
      const itemId = wrap.getAttribute("data-item-id");

      // Add Button
      const addBtn = wrap.querySelector('[data-action="add"]');
      if (addBtn) {
        addBtn.addEventListener("click", () => {
          window.Cart.addItem(itemId, 1);
        });
      }

      // Plus Button
      const plusBtn = wrap.querySelector('[data-action="plus"]');
      if (plusBtn) {
        plusBtn.addEventListener("click", () => {
          const current = window.Cart.getItemQuantity(itemId);
          window.Cart.updateQuantity(itemId, current + 1);
        });
      }

      // Minus Button
      const minusBtn = wrap.querySelector('[data-action="minus"]');
      if (minusBtn) {
        minusBtn.addEventListener("click", () => {
          const current = window.Cart.getItemQuantity(itemId);
          window.Cart.updateQuantity(itemId, current - 1);
        });
      }
    });
  }

  /**
   * =========================================================================
   * 3. CART DRAWER & CHECKOUT INTERACTION
   * =========================================================================
   */
  function initCartUI() {
    // Open cart drawer
    DOM.headerCartBtn.addEventListener("click", openCart);
    DOM.mobileViewCartBtn.addEventListener("click", openCart);

    // Close cart drawer
    DOM.closeCartBtn.addEventListener("click", closeCart);
    DOM.cartOverlay.addEventListener("click", closeCart);

    // Delivery Type Switcher
    DOM.deliveryTypeBtn.addEventListener("click", () => {
      window.Cart.setDeliveryType("delivery");
    });
    DOM.takeawayTypeBtn.addEventListener("click", () => {
      window.Cart.setDeliveryType("takeaway");
    });

    // Promo Code Application
    DOM.applyPromoBtn.addEventListener("click", () => {
      const code = DOM.promoCodeInput.value.trim();
      const res = window.Cart.applyPromo(code);
      if (res.success) {
        showToast(res.message, "success");
        DOM.promoCodeInput.value = "";
      } else {
        showToast(res.message, "warning");
      }
    });

    DOM.removePromoBtn.addEventListener("click", () => {
      window.Cart.removePromo();
      showToast("Coupon removed.", "info");
    });

    // Checkout Flow Trigger
    DOM.proceedCheckoutBtn.addEventListener("click", () => {
      closeCart();
      openCheckoutModal();
    });

    // Close Checkout Modal
    DOM.closeCheckoutModalBtn.addEventListener("click", closeCheckoutModal);

    // Payment Radio label styling and mode boxes
    const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
    paymentRadios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        const isCod = e.target.value === "COD";
        DOM.payCodLabel.classList.toggle("selected", isCod);
        DOM.payUpiLabel.classList.toggle("selected", !isCod);
        if (DOM.codInfoBox) DOM.codInfoBox.style.display = isCod ? "flex" : "none";
        if (DOM.upiInfoBox) DOM.upiInfoBox.style.display = isCod ? "none" : "block";
      });
    });

    // Checkout Form Submit
    DOM.checkoutForm.addEventListener("submit", handleCheckoutSubmit);

    // Close Order Success Modal
    DOM.closeOrderSuccessModalBtn.addEventListener("click", () => {
      DOM.orderSuccessModalOverlay.classList.remove("active");
    });

    // Subscribe to Cart State Changes for reactive updates
    window.Cart.subscribe(updateCartDisplay);
    window.Cart.notify(); // Initial refresh
  }

  function openCart() {
    DOM.cartDrawer.classList.add("active");
    DOM.cartOverlay.classList.add("active");
  }

  function closeCart() {
    DOM.cartDrawer.classList.remove("active");
    DOM.cartOverlay.classList.remove("active");
  }

  function updateCartDisplay(cartState) {
    // 1. Header Badge
    DOM.cartBadgeCount.textContent = cartState.count;
    DOM.cartBadgeCount.classList.add("bump");
    setTimeout(() => DOM.cartBadgeCount.classList.remove("bump"), 200);

    // 2. Mobile Bottom Bar
    if (cartState.count > 0) {
      DOM.mobileCartBar.classList.add("active");
      DOM.mobileCartItemCount.textContent = `${cartState.count} item${cartState.count > 1 ? "s" : ""} in tray`;
      DOM.mobileCartGrandTotal.textContent = `₹${cartState.grandTotal}`;
    } else {
      DOM.mobileCartBar.classList.remove("active");
    }

    // 3. Delivery Type buttons
    DOM.deliveryTypeBtn.classList.toggle("active", cartState.deliveryType === "delivery");
    DOM.takeawayTypeBtn.classList.toggle("active", cartState.deliveryType === "takeaway");

    // 4. Drawer Items List
    if (cartState.items.length === 0) {
      DOM.cartItemsList.innerHTML = `
        <div class="cart-empty-state">
          <i class="fa-solid fa-lock"></i>
          <h3 style="font-family: var(--font-heading); color: #fff; margin-bottom: 0.5rem;">Your Lockup Tray is Empty</h3>
          <p style="font-size: 0.9rem;">Explore our delicious menu and add dishes behind bars!</p>
          <a href="#menu" class="btn-primary" style="margin-top: 1.5rem; display: inline-flex;" onclick="window.App.closeCart();">
            <i class="fa-solid fa-utensils"></i> Browse Menu
          </a>
        </div>
      `;
      DOM.proceedCheckoutBtn.disabled = true;
    } else {
      DOM.cartItemsList.innerHTML = cartState.items
        .map(
          (item) => `
          <div class="cart-item-row">
            <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.onerror=null; this.src='${FALLBACK_FOOD_IMG}'">
            <div class="cart-item-info">
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-price">₹${item.price * item.quantity}</div>
            </div>
            <div class="qty-controller">
              <button class="qty-btn" onclick="window.Cart.updateQuantity('${item.id}', ${item.quantity - 1})">−</button>
              <span class="qty-display">${item.quantity}</span>
              <button class="qty-btn" onclick="window.Cart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
            </div>
          </div>
        `
        )
        .join("");
      DOM.proceedCheckoutBtn.disabled = false;
    }

    // 5. Promo Code Tags
    if (cartState.appliedPromo) {
      DOM.promoAppliedTag.style.display = "flex";
      DOM.appliedPromoCodeText.textContent = `${cartState.appliedPromo.code} (${cartState.appliedPromo.discountPercent}% OFF)`;
      DOM.promoInputWrap.style.display = "none";
      DOM.billDiscountRow.style.display = "flex";
      DOM.billDiscount.textContent = `- ₹${cartState.discount}`;
    } else {
      DOM.promoAppliedTag.style.display = "none";
      DOM.promoInputWrap.style.display = "flex";
      DOM.billDiscountRow.style.display = "none";
    }

    // 6. Bill Summary
    DOM.billSubtotal.textContent = `₹${cartState.subtotal}`;
    if (cartState.deliveryType === "takeaway") {
      DOM.billDeliveryFee.textContent = "FREE (Takeaway)";
    } else {
      DOM.billDeliveryFee.textContent = cartState.deliveryFee === 0 ? "FREE" : `₹${cartState.deliveryFee}`;
    }
    DOM.billTaxes.textContent = `₹${cartState.taxes.totalTax}`;
    DOM.billGrandTotal.textContent = `₹${cartState.grandTotal}`;

    // 7. Sync card buttons across the app
    syncAllMenuCardQuantities();
  }

  function syncAllMenuCardQuantities() {
    document.querySelectorAll(".action-btn-container").forEach((wrap) => {
      const itemId = wrap.getAttribute("data-item-id");
      const currentQty = window.Cart.getItemQuantity(itemId);

      if (currentQty > 0) {
        wrap.innerHTML = `
          <div class="qty-controller">
            <button class="qty-btn btn-qty-minus" data-action="minus" aria-label="Decrease quantity">−</button>
            <span class="qty-display">${currentQty}</span>
            <button class="qty-btn btn-qty-plus" data-action="plus" aria-label="Increase quantity">+</button>
          </div>
        `;
      } else {
        wrap.innerHTML = `
          <button class="btn-add-cart" data-action="add">
            <i class="fa-solid fa-plus"></i> Add
          </button>
        `;
      }

      // Rebind events for newly injected markup
      const addBtn = wrap.querySelector('[data-action="add"]');
      if (addBtn) addBtn.onclick = () => window.Cart.addItem(itemId, 1);

      const plusBtn = wrap.querySelector('[data-action="plus"]');
      if (plusBtn) plusBtn.onclick = () => window.Cart.updateQuantity(itemId, currentQty + 1);

      const minusBtn = wrap.querySelector('[data-action="minus"]');
      if (minusBtn) minusBtn.onclick = () => window.Cart.updateQuantity(itemId, currentQty - 1);
    });
  }

  function openCheckoutModal() {
    if (window.Cart.getTotalCount() === 0) {
      showToast("Your cart is empty!", "warning");
      return;
    }
    const items = window.Cart.getItems();
    const subtotal = window.Cart.getSubtotal();
    const deliveryFee = window.Cart.getDeliveryFee();
    const taxes = window.Cart.getTaxesAndCharges();
    const discount = window.Cart.getDiscountAmount();
    const total = window.Cart.getGrandTotal();
    const totalCount = window.Cart.getTotalCount();
    const isTakeaway = window.Cart.getDeliveryType() === "takeaway";

    // 1. Render item breakdown inside checkout summary box
    if (DOM.checkoutItemsList) {
      DOM.checkoutItemsList.innerHTML = items
        .map(
          (it) => `
        <div class="checkout-item-line">
          <span class="name"><strong style="color:var(--accent-gold);">${it.quantity}×</strong> ${it.name}</span>
          <span class="price">₹${it.price * it.quantity}</span>
        </div>
      `
        )
        .join("");
    }

    if (DOM.checkoutItemCountTag) {
      DOM.checkoutItemCountTag.textContent = `${totalCount} item${totalCount > 1 ? "s" : ""}`;
    }
    if (DOM.checkoutSubtotal) DOM.checkoutSubtotal.textContent = `₹${subtotal}`;
    if (DOM.checkoutDeliveryFee) {
      DOM.checkoutDeliveryFee.textContent = isTakeaway ? "FREE (Takeaway)" : deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`;
    }
    if (DOM.checkoutTaxes) DOM.checkoutTaxes.textContent = `₹${taxes.totalTax}`;
    if (DOM.checkoutDiscountRow) {
      DOM.checkoutDiscountRow.style.display = discount > 0 ? "flex" : "none";
      if (DOM.checkoutDiscount) DOM.checkoutDiscount.textContent = `- ₹${discount}`;
    }

    // Amount displays
    if (DOM.checkoutAmountPayable) DOM.checkoutAmountPayable.textContent = `₹${total}`;
    if (DOM.btnPayAmountText) DOM.btnPayAmountText.textContent = `₹${total}`;
    if (DOM.codAmountText) DOM.codAmountText.textContent = `₹${total}`;
    if (DOM.upiAmountText) DOM.upiAmountText.textContent = `₹${total}`;

    // Dynamic UPI QR code with amount
    if (DOM.upiQrImage) {
      const upiString = encodeURIComponent(`upi://pay?pa=grandjailrajgir@upi&pn=TheGrandJailRestaurant&am=${total}&cu=INR`);
      DOM.upiQrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${upiString}`;
    }

    // Hide delivery address fields if pickup chosen
    DOM.deliveryAddressGroup.style.display = isTakeaway ? "none" : "block";
    DOM.deliveryLandmarkGroup.style.display = isTakeaway ? "none" : "grid";

    const addressInput = document.getElementById("custAddress");
    if (isTakeaway) {
      addressInput.removeAttribute("required");
    } else {
      addressInput.setAttribute("required", "true");
    }

    // Auto-fill logged in user info
    if (window.Auth && window.Auth.isLoggedIn()) {
      const user = window.Auth.getCurrentUser();
      const nameInput = document.getElementById("custName");
      const phoneInput = document.getElementById("custPhone");
      const addrInput = document.getElementById("custAddress");
      const lmkInput = document.getElementById("custLandmark");

      if (nameInput && !nameInput.value) nameInput.value = user.name || "";
      if (phoneInput && !phoneInput.value) phoneInput.value = user.phone || "";
      if (addrInput && !addrInput.value) addrInput.value = user.address || "";
      if (lmkInput && !lmkInput.value) lmkInput.value = user.landmark || "";

      if (DOM.checkoutUserText) {
        DOM.checkoutUserText.innerHTML = `<i class="fa-solid fa-circle-check text-gold" style="margin-right: 0.35rem;"></i> Logged in as <strong>${user.name}</strong> (+91 ${user.phone})`;
      }
      if (DOM.checkoutAuthActionBtn) {
        DOM.checkoutAuthActionBtn.innerHTML = `<i class="fa-solid fa-user-pen"></i> My Profile`;
        DOM.checkoutAuthActionBtn.onclick = () => {
          openProfileModal();
        };
      }
    } else {
      if (DOM.checkoutUserText) {
        DOM.checkoutUserText.innerHTML = `<i class="fa-solid fa-user-tag text-gold" style="margin-right: 0.35rem;"></i> Ordering as Guest • Log in to track orders`;
      }
      if (DOM.checkoutAuthActionBtn) {
        DOM.checkoutAuthActionBtn.innerHTML = `<i class="fa-solid fa-arrow-right-to-bracket"></i> Login`;
        DOM.checkoutAuthActionBtn.onclick = () => {
          openLoginModal();
        };
      }
    }

    DOM.checkoutModalOverlay.classList.add("active");
  }

  function closeCheckoutModal() {
    DOM.checkoutModalOverlay.classList.remove("active");
  }

  function handleCheckoutSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const address = document.getElementById("custAddress").value.trim();
    const landmark = document.getElementById("custLandmark").value.trim();
    const notes = document.getElementById("custCookingNotes").value.trim();
    const paymentMode = document.querySelector('input[name="paymentMethod"]:checked').value;
    const deliveryType = window.Cart.getDeliveryType();
    const items = window.Cart.getItems();
    const grandTotal = window.Cart.getGrandTotal();
    const discount = window.Cart.getDiscountAmount();
    const promo = window.Cart.getAppliedPromo();

    // Generate Order ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `#GJ-RAJ-${randomNum}`;
    const orderDate = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    // Save order into customer's persistent order history
    if (window.Auth) {
      window.Auth.saveOrderToHistory({
        orderId,
        date: orderDate,
        customer: { name, phone, address, landmark },
        deliveryType,
        paymentMode,
        items: [...items],
        subtotal: window.Cart.getSubtotal(),
        deliveryFee: window.Cart.getDeliveryFee(),
        taxes: window.Cart.getTaxesAndCharges(),
        discount,
        grandTotal,
        notes,
        status: "Preparing in Kitchen"
      });
    }

    // Build Receipt Modal Info
    DOM.receiptOrderId.textContent = orderId;
    DOM.receiptCustomerName.textContent = name;
    DOM.receiptCustomerPhone.textContent = phone;
    DOM.receiptCustomerAddress.textContent = deliveryType === "takeaway" ? "Takeaway Pickup (Restaurant Counter, Rajgir)" : `${address} ${landmark ? `(Landmark: ${landmark})` : ""}`;
    DOM.receiptDeliveryType.textContent = deliveryType === "takeaway" ? "Self Pickup / Takeaway" : "Doorstep Delivery";
    DOM.receiptPaymentMode.textContent = paymentMode === "COD" ? "Cash on Delivery" : "UPI / QR Code on Delivery";
    DOM.receiptTotalAmount.textContent = `₹${grandTotal}`;

    DOM.receiptTableBody.innerHTML = items
      .map(
        (it) => `
        <tr>
          <td>${it.name}</td>
          <td style="text-align: center;">${it.quantity}</td>
          <td style="text-align: right; color: var(--accent-gold-light);">₹${it.price * it.quantity}</td>
        </tr>
      `
      )
      .join("");

    // Prepare WhatsApp Message Link for Direct Order Dispatch
    const restaurantWhatsApp = window.RESTAURANT_DATA.info.whatsapp;
    let waMessage = `*NEW FOOD ORDER - ${orderId}*\n`;
    waMessage += `*Restaurant:* ${window.RESTAURANT_DATA.info.name}, Rajgir\n\n`;
    waMessage += `*Customer:* ${name}\n*Phone:* ${phone}\n`;
    waMessage += `*Type:* ${deliveryType === "takeaway" ? "Takeaway / Pickup" : "Doorstep Delivery"}\n`;
    if (deliveryType === "delivery") {
      waMessage += `*Address:* ${address}\n*Landmark:* ${landmark || "N/A"}\n`;
    }
    waMessage += `*Payment:* ${paymentMode}\n\n`;
    waMessage += `*ORDER ITEMS:*\n`;
    items.forEach((it, idx) => {
      waMessage += `${idx + 1}. ${it.name} x ${it.quantity} = ₹${it.price * it.quantity}\n`;
    });
    if (promo) {
      waMessage += `*Coupon:* ${promo.code} (-₹${discount})\n`;
    }
    waMessage += `\n*TOTAL PAYABLE: ₹${grandTotal}*\n`;
    if (notes) {
      waMessage += `*Instructions:* ${notes}\n`;
    }
    waMessage += `\nPlease confirm and prepare my order!`;

    const encodedWa = encodeURIComponent(waMessage);
    DOM.receiptWhatsAppDispatchBtn.href = `https://wa.me/${restaurantWhatsApp}?text=${encodedWa}`;

    // Close checkout and open receipt
    closeCheckoutModal();
    DOM.orderSuccessModalOverlay.classList.add("active");

    // Clear cart
    window.Cart.clearCart();
    DOM.checkoutForm.reset();
    showToast(`Order ${orderId} locked in! 🔒`, "success");
  }

  /**
   * =========================================================================
   * 4. TABLE & PRISON CELL RESERVATION SYSTEM
   * =========================================================================
   */
  function initReservations() {
    // Set today as minimum booking date
    const today = new Date().toISOString().split("T")[0];
    DOM.resDateInput.min = today;
    DOM.resDateInput.value = today;

    // Render Cell Types
    const cells = window.RESTAURANT_DATA.cellTypes;
    DOM.cellOptionsContainer.innerHTML = cells
      .map(
        (cell) => `
        <div class="cell-card-select ${cell.id === state.selectedCellType ? "selected" : ""}" data-cell-id="${cell.id}">
          <div class="cell-card-header">
            <h4 class="cell-card-title">${cell.name}</h4>
            <span class="cell-badge">${cell.badge}</span>
          </div>
          <p class="cell-desc">${cell.vibe}</p>
          <div style="font-size: 0.8rem; color: var(--accent-gold-light); margin-top: 0.4rem;">
            <i class="fa-solid fa-users"></i> Capacity: ${cell.capacity}
          </div>
        </div>
      `
      )
      .join("");

    // Bind Cell selection clicks
    DOM.cellOptionsContainer.querySelectorAll(".cell-card-select").forEach((card) => {
      card.addEventListener("click", () => {
        DOM.cellOptionsContainer.querySelectorAll(".cell-card-select").forEach((c) => c.classList.remove("selected"));
        card.classList.add("selected");
        const cellId = card.getAttribute("data-cell-id");
        state.selectedCellType = cellId;
        DOM.selectedCellInput.value = cellId;
      });
    });

    // Form Submit
    DOM.reservationForm.addEventListener("submit", handleReservationSubmit);

    // Close Modal buttons
    DOM.closeResSuccessModalBtn.addEventListener("click", () => {
      DOM.resSuccessModalOverlay.classList.remove("active");
    });
    DOM.resSuccessDoneBtn.addEventListener("click", () => {
      DOM.resSuccessModalOverlay.classList.remove("active");
    });
  }

  function handleReservationSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("resName").value.trim();
    const phone = document.getElementById("resPhone").value.trim();
    const date = document.getElementById("resDate").value;
    const time = document.getElementById("resTime").value;
    const guests = document.getElementById("resGuests").value;
    const occasion = document.getElementById("resOccasion").value;
    const notes = document.getElementById("resNotes").value.trim();

    const selectedCellObj = window.RESTAURANT_DATA.cellTypes.find((c) => c.id === state.selectedCellType) || window.RESTAURANT_DATA.cellTypes[0];

    const refCode = `#CELL-${Math.floor(1000 + Math.random() * 9000)}`;

    DOM.resSuccessCode.textContent = refCode;
    DOM.resSuccessDetails.innerHTML = `
      <div><strong>Guest Name:</strong> ${name}</div>
      <div><strong>Contact:</strong> ${phone}</div>
      <div><strong>Cell Reserved:</strong> ${selectedCellObj.name}</div>
      <div><strong>Date & Time:</strong> ${date} at ${time}</div>
      <div><strong>Party Size:</strong> ${guests}</div>
      <div><strong>Occasion:</strong> ${occasion}</div>
      ${notes ? `<div><strong>Notes:</strong> ${notes}</div>` : ""}
    `;

    // WhatsApp Confirmation link
    const waText = encodeURIComponent(
      `*TABLE RESERVATION - ${refCode}*\n` +
        `*Restaurant:* The Grand Jail Restaurant, Rajgir\n\n` +
        `*Name:* ${name}\n*Phone:* ${phone}\n` +
        `*Cell Type:* ${selectedCellObj.name}\n` +
        `*Date:* ${date}\n*Time Slot:* ${time}\n` +
        `*Guests:* ${guests}\n*Occasion:* ${occasion}\n` +
        (notes ? `*Special Notes:* ${notes}\n` : "") +
        `\nPlease confirm our cell booking!`
    );

    DOM.resWhatsAppConfirmBtn.href = `https://wa.me/${window.RESTAURANT_DATA.info.whatsapp}?text=${waText}`;

    DOM.resSuccessModalOverlay.classList.add("active");
    DOM.reservationForm.reset();
    showToast(`Cell booked under ${refCode}! 🔑`, "success");
  }

  /**
   * =========================================================================
   * 5. ABOUT, TESTIMONIALS & FAQS
   * =========================================================================
   */
  function initAboutAndTestimonials() {
    // Render Testimonials
    const testims = window.RESTAURANT_DATA.testimonials;
    DOM.testimonialsGrid.innerHTML = testims
      .map(
        (t) => `
        <div class="testimonial-card">
          <div class="stars-rating">
            ${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}
          </div>
          <p class="testimonial-quote">"${t.review}"</p>
          <div class="testimonial-author">
            <img src="${t.avatar}" alt="${t.name}" class="author-avatar" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'">
            <div class="author-info">
              <h4>${t.name}</h4>
              <p>${t.role}</p>
            </div>
          </div>
        </div>
      `
      )
      .join("");

    // Render FAQs
    const faqs = window.RESTAURANT_DATA.faqs;
    DOM.faqContainer.innerHTML = faqs
      .map(
        (faq, i) => `
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden;">
          <button style="width: 100%; text-align: left; background: none; color: #fff; font-size: 1.05rem; font-weight: 600; padding: 1.25rem; display: flex; justify-content: space-between; align-items: center;" class="faq-question-btn" data-faq="${i}">
            <span><i class="fa-solid fa-circle-question text-gold" style="margin-right: 0.5rem;"></i> ${faq.question}</span>
            <i class="fa-solid fa-chevron-down faq-arrow" style="transition: transform 0.3s ease; color: var(--accent-gold);"></i>
          </button>
          <div class="faq-answer" style="display: none; padding: 0 1.25rem 1.25rem; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
            ${faq.answer}
          </div>
        </div>
      `
      )
      .join("");

    // FAQ Accordion events
    DOM.faqContainer.querySelectorAll(".faq-question-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        const arrow = btn.querySelector(".faq-arrow");
        const isOpen = answer.style.display === "block";

        answer.style.display = isOpen ? "none" : "block";
        arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
      });
    });
  }

  /**
   * =========================================================================
   * 6. GALLERY & LIGHTBOX
   * =========================================================================
   */
  function initGallery() {
    renderGallery();

    // Category filter tabs
    DOM.galleryFilterTabs.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        DOM.galleryFilterTabs.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.selectedGalleryCategory = btn.getAttribute("data-cat");
        renderGallery();
      });
    });

    // Close Lightbox
    DOM.closeLightboxBtn.addEventListener("click", () => {
      DOM.lightboxModalOverlay.classList.remove("active");
    });
    DOM.lightboxModalOverlay.addEventListener("click", (e) => {
      if (e.target === DOM.lightboxModalOverlay) {
        DOM.lightboxModalOverlay.classList.remove("active");
      }
    });
  }

  function renderGallery() {
    const galleryItems = window.RESTAURANT_DATA.gallery;
    const filtered = galleryItems.filter((item) => {
      if (state.selectedGalleryCategory === "all") return true;
      return item.category === state.selectedGalleryCategory;
    });

    DOM.galleryGrid.innerHTML = filtered
      .map(
        (g) => `
        <div class="gallery-item" data-id="${g.id}">
          <img src="${g.image}" alt="${g.title}" loading="lazy" onerror="this.onerror=null; this.src='${FALLBACK_FOOD_IMG}'">
          <div class="gallery-item-overlay">
            <h4 class="gallery-title">${g.title}</h4>
            <p class="gallery-sub">${g.caption}</p>
          </div>
        </div>
      `
      )
      .join("");

    // Bind Lightbox click
    DOM.galleryGrid.querySelectorAll(".gallery-item").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        const item = galleryItems.find((x) => x.id === id);
        if (item) {
          DOM.lightboxImage.src = item.image;
          DOM.lightboxTitle.textContent = item.title;
          DOM.lightboxCaption.textContent = item.caption;
          DOM.lightboxModalOverlay.classList.add("active");
        }
      });
    });
  }

  /**
   * =========================================================================
   * 7. CONTACT US & DIRECT INQUIRY
   * =========================================================================
  */
  function initContact() {
    const info = window.RESTAURANT_DATA.info;

    DOM.contactAddress.textContent = info.address;
    DOM.contactPhoneLink.textContent = info.displayPhone;
    DOM.contactPhoneLink.href = `tel:${info.phone.replace(/\s+/g, "")}`;
    DOM.contactCallBtn.href = `tel:${info.phone.replace(/\s+/g, "")}`;

    DOM.contactWhatsAppBtn.href = `https://wa.me/${info.whatsapp}?text=Hello%20The%20Grand%20Jail%20Restaurant,%20I%20would%20like%20to%20inquire%20about%20dining/ordering.`;

    // Inquiry form submit
    DOM.contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName").value.trim();
      const phone = document.getElementById("contactPhone").value.trim();
      const msg = document.getElementById("contactMessage").value.trim();

      const waMsg = encodeURIComponent(`*NEW INQUIRY*\n*Name:* ${name}\n*Phone:* ${phone}\n*Message:* ${msg}`);
      const directWaUrl = `https://wa.me/${info.whatsapp}?text=${waMsg}`;

      window.open(directWaUrl, "_blank");
      DOM.contactForm.reset();
      showToast("Thank you! Your message has been sent to our manager. 📩", "success");
    });
  }

  /**
   * =========================================================================
   * 8. CUSTOMER AUTHENTICATION & ORDER HISTORY CONTROLLER
   * =========================================================================
   */
  function openLoginModal() {
    DOM.loginModalOverlay.classList.add("active");
  }

  function closeLoginModal() {
    DOM.loginModalOverlay.classList.remove("active");
  }

  function openProfileModal() {
    if (!window.Auth || !window.Auth.isLoggedIn()) {
      openLoginModal();
      return;
    }
    // Refresh user info and orders
    const user = window.Auth.getCurrentUser();
    if (DOM.profileModalAvatar) DOM.profileModalAvatar.textContent = (user.name || "U").charAt(0).toUpperCase();
    if (DOM.profileModalName) DOM.profileModalName.textContent = user.name || "Inmate";
    if (DOM.profileModalPhone) DOM.profileModalPhone.textContent = `+91 ${user.phone}`;

    if (DOM.profName) DOM.profName.value = user.name || "";
    if (DOM.profPhone) DOM.profPhone.value = `+91 ${user.phone}`;
    if (DOM.profAddress) DOM.profAddress.value = user.address || "";
    if (DOM.profLandmark) DOM.profLandmark.value = user.landmark || "";
    if (DOM.profPincode) DOM.profPincode.value = user.pincode || "803116";

    renderUserOrders();

    DOM.profileModalOverlay.classList.add("active");
  }

  function closeProfileModal() {
    DOM.profileModalOverlay.classList.remove("active");
  }

  function renderUserOrders() {
    if (!window.Auth) return;
    const orders = window.Auth.getCustomerOrders();
    if (DOM.userOrdersCount) DOM.userOrdersCount.textContent = orders.length;

    if (!DOM.orderHistoryList) return;

    if (orders.length === 0) {
      DOM.orderHistoryList.innerHTML = `
        <div class="empty-orders-box">
          <i class="fa-solid fa-plate-wheat"></i>
          <h4 style="font-family: var(--font-heading); color: #fff; margin-bottom: 0.35rem;">No Past Orders Yet</h4>
          <p style="font-size: 0.88rem; margin-bottom: 1.25rem;">You haven't ordered any meals yet. Your delicious order history will appear here!</p>
          <button class="btn-primary" onclick="window.App.closeProfileModal(); window.location.hash='#menu';">
            <i class="fa-solid fa-utensils"></i> Browse Jail Menu
          </button>
        </div>
      `;
      return;
    }

    DOM.orderHistoryList.innerHTML = orders
      .map((ord) => {
        const itemsText = ord.items.map((i) => `${i.name} × ${i.quantity}`).join(", ");
        const isDelivered = ord.status === "Delivered";
        const statusClass = isDelivered ? "delivered" : "preparing";

        return `
        <div class="order-history-card">
          <div class="order-history-header">
            <div>
              <div class="order-id-tag">${ord.orderId}</div>
              <div class="order-date-text"><i class="fa-solid fa-calendar-day"></i> ${ord.date}</div>
            </div>
            <span class="order-status-pill ${statusClass}">
              <i class="fa-solid ${isDelivered ? "fa-circle-check" : "fa-spinner fa-spin"}"></i>
              ${ord.status || "Preparing in Kitchen"}
            </span>
          </div>

          <div class="order-items-snippet">
            <strong>Dishes:</strong> ${itemsText}
          </div>

          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.5rem;">
            <span><i class="fa-solid fa-location-dot"></i> ${ord.deliveryType === "takeaway" ? "Takeaway (Counter Pickup)" : ord.customer ? ord.customer.address : "Door Delivery"}</span>
            <span style="margin-left: 0.75rem;"><i class="fa-solid fa-wallet"></i> ${ord.paymentMode === "COD" ? "Cash on Delivery" : "UPI Payment"}</span>
          </div>

          <div class="order-history-footer">
            <div class="order-total-price">₹${ord.grandTotal}</div>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn-reorder" onclick="window.App.handleReorder('${ord.orderId}')">
                <i class="fa-solid fa-arrow-rotate-right"></i> Re-order
              </button>
              <button class="btn-secondary" style="padding: 0.4rem 0.75rem; font-size: 0.8rem;" onclick="window.App.viewPastReceipt('${ord.orderId}')">
                Receipt
              </button>
            </div>
          </div>
        </div>
      `;
      })
      .join("");
  }

  function handleReorder(orderId) {
    if (!window.Auth) return;
    const res = window.Auth.reOrder(orderId);
    if (res.success) {
      closeProfileModal();
      openCart();
      showToast(res.message, "success");
    } else {
      showToast(res.message, "warning");
    }
  }

  function viewPastReceipt(orderId) {
    if (!window.Auth) return;
    const orders = window.Auth.getCustomerOrders();
    const ord = orders.find((o) => o.orderId === orderId);
    if (!ord) return;

    DOM.receiptOrderId.textContent = ord.orderId;
    DOM.receiptCustomerName.textContent = ord.customer.name;
    DOM.receiptCustomerPhone.textContent = ord.customer.phone;
    DOM.receiptCustomerAddress.textContent = ord.deliveryType === "takeaway" ? "Takeaway Pickup (Restaurant Counter, Rajgir)" : `${ord.customer.address} ${ord.customer.landmark ? `(Landmark: ${ord.customer.landmark})` : ""}`;
    DOM.receiptDeliveryType.textContent = ord.deliveryType === "takeaway" ? "Self Pickup / Takeaway" : "Doorstep Delivery";
    DOM.receiptPaymentMode.textContent = ord.paymentMode === "COD" ? "Cash on Delivery" : "UPI / QR Code on Delivery";
    DOM.receiptTotalAmount.textContent = `₹${ord.grandTotal}`;

    DOM.receiptTableBody.innerHTML = ord.items
      .map(
        (it) => `
      <tr>
        <td>${it.name}</td>
        <td style="text-align: center;">${it.quantity}</td>
        <td style="text-align: right; color: var(--accent-gold-light);">₹${it.price * it.quantity}</td>
      </tr>
    `
      )
      .join("");

    const restaurantWhatsApp = window.RESTAURANT_DATA.info.whatsapp;
    let waMessage = `*FOOD ORDER INQUIRY - ${ord.orderId}*\n`;
    waMessage += `*Restaurant:* ${window.RESTAURANT_DATA.info.name}, Rajgir\n\n`;
    waMessage += `*Customer:* ${ord.customer.name} (${ord.customer.phone})\n`;
    waMessage += `*Total:* ₹${ord.grandTotal} (${ord.paymentMode})\n`;
    waMessage += `*Dishes:* ${ord.items.map((i) => `${i.name} x ${i.quantity}`).join(", ")}`;
    DOM.receiptWhatsAppDispatchBtn.href = `https://wa.me/${restaurantWhatsApp}?text=${encodeURIComponent(waMessage)}`;

    closeProfileModal();
    DOM.orderSuccessModalOverlay.classList.add("active");
  }

  function initAuthUI() {
    if (!window.Auth) return;

    // Header buttons
    if (DOM.headerAuthBtn) DOM.headerAuthBtn.addEventListener("click", openLoginModal);
    if (DOM.headerProfileBtn) DOM.headerProfileBtn.addEventListener("click", openProfileModal);

    // Close Login Modal
    if (DOM.closeLoginModalBtn) DOM.closeLoginModalBtn.addEventListener("click", closeLoginModal);
    if (DOM.loginModalOverlay) {
      DOM.loginModalOverlay.addEventListener("click", (e) => {
        if (e.target === DOM.loginModalOverlay) closeLoginModal();
      });
    }

    // Close Profile Modal
    if (DOM.closeProfileModalBtn) DOM.closeProfileModalBtn.addEventListener("click", closeProfileModal);
    if (DOM.profileModalOverlay) {
      DOM.profileModalOverlay.addEventListener("click", (e) => {
        if (e.target === DOM.profileModalOverlay) closeProfileModal();
      });
    }

    // Login Form Submit
    if (DOM.loginForm) {
      DOM.loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const phone = DOM.loginPhone.value.trim();
        const name = DOM.loginName.value.trim();

        if (phone.length < 10) {
          showToast("Please enter a valid 10-digit phone number.", "warning");
          return;
        }

        const res = window.Auth.login(phone, name);
        if (res.success) {
          closeLoginModal();
          showToast(`Welcome ${res.user.name}! Login successful. 🔑`, "success");
        } else {
          showToast(res.message, "error");
        }
      });
    }

    // Profile Tabs switching
    if (DOM.tabProfileDetailsBtn && DOM.tabOrderHistoryBtn) {
      DOM.tabProfileDetailsBtn.addEventListener("click", () => {
        DOM.tabProfileDetailsBtn.classList.add("active");
        DOM.tabOrderHistoryBtn.classList.remove("active");
        DOM.profileDetailsTab.style.display = "block";
        DOM.orderHistoryTab.style.display = "none";
      });

      DOM.tabOrderHistoryBtn.addEventListener("click", () => {
        DOM.tabOrderHistoryBtn.classList.add("active");
        DOM.tabProfileDetailsBtn.classList.remove("active");
        DOM.profileDetailsTab.style.display = "none";
        DOM.orderHistoryTab.style.display = "block";
        renderUserOrders();
      });
    }

    // Profile Update Form Submit
    if (DOM.profileUpdateForm) {
      DOM.profileUpdateForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = DOM.profName.value.trim();
        const address = DOM.profAddress.value.trim();
        const landmark = DOM.profLandmark.value.trim();
        const pincode = DOM.profPincode.value.trim();

        const res = window.Auth.updateProfile({ name, address, landmark, pincode });
        if (res.success) {
          showToast("Profile details updated successfully! 💾", "success");
        } else {
          showToast(res.message, "warning");
        }
      });
    }

    // Logout Button
    if (DOM.logoutBtn) {
      DOM.logoutBtn.addEventListener("click", () => {
        window.Auth.logout();
        closeProfileModal();
        showToast("You have been logged out.", "info");
      });
    }

    // Subscribe to Auth State
    window.Auth.subscribe(updateAuthDisplay);
    window.Auth.notify();
  }

  function updateAuthDisplay(authState) {
    if (authState.isLoggedIn && authState.user) {
      if (DOM.headerAuthBtn) DOM.headerAuthBtn.style.display = "none";
      if (DOM.headerProfileBtn) DOM.headerProfileBtn.style.display = "inline-flex";

      const firstName = (authState.user.name || "Inmate").split(" ")[0];
      if (DOM.headerUserNameText) DOM.headerUserNameText.textContent = firstName;
      if (DOM.headerAvatarCircle) DOM.headerAvatarCircle.textContent = firstName.charAt(0).toUpperCase();
    } else {
      if (DOM.headerAuthBtn) DOM.headerAuthBtn.style.display = "inline-flex";
      if (DOM.headerProfileBtn) DOM.headerProfileBtn.style.display = "none";
    }

    if (DOM.userOrdersCount) {
      DOM.userOrdersCount.textContent = (authState.orders || []).length;
    }
  }

  /**
   * =========================================================================
   * 9. TOAST NOTIFICATION UTILITY
   * =========================================================================
   */
  function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    let icon = "fa-circle-check";
    if (type === "warning") icon = "fa-triangle-exclamation";
    if (type === "error") icon = "fa-circle-xmark";
    if (type === "info") icon = "fa-circle-info";

    toast.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span>${message}</span>
    `;

    DOM.toastContainer.appendChild(toast);

    // Trigger enter animation
    setTimeout(() => toast.classList.add("show"), 20);

    // Auto remove after 3.5s
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 350);
    }, 3500);
  }

  /**
   * =========================================================================
   * 10. INITIALIZE APPLICATION
   * =========================================================================
   */
  function init() {
    initRouter();
    initMenu();
    initCartUI();
    initAuthUI();
    initReservations();
    initAboutAndTestimonials();
    initGallery();
    initContact();

    console.log("The Grand Jail Restaurant, Rajgir web application loaded successfully!");
  }

  // Expose global controller
  window.App = {
    showToast,
    openCart,
    closeCart,
    openLoginModal,
    closeLoginModal,
    openProfileModal,
    closeProfileModal,
    handleReorder,
    viewPastReceipt,
    navigateTo
  };

  // Run on DOM Ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
