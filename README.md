# 🏨 The Grand Jail Restaurant - Rajgir (Official Website)

A complete, fully interactive, mobile-responsive, modern website for **The Grand Jail Restaurant**, located in **Rajgir, Bihar**.

Designed with a captivating **Jailhouse / Prison-Themed Dining & Food Delivery** concept, featuring iron bar aesthetic accents, warm ambient lighting, complete online food ordering, quantity controls, delivery & takeaway checkout, table/cell reservations, interactive photo gallery with lightbox, and direct WhatsApp integrations.

---

## 🌟 Key Features

1. **🏰 Thematic Home Page:**
   - Hero banner with headline, call-to-actions, and background prison ambiance.
   - Highlights strip: Authentic Cell Dining, 30-45m Superfast Rajgir Delivery, Inmate Photo Booth.
   - 4-column "Why Dine With Us" experience showcase.
   - Chef's Special / Trending dishes carousel with direct "Add to Cart" functionality.
   - Rajgir heritage section highlighting proximity to local tourist attractions (Glass Bridge, Shanti Stupa, Hot Springs).
   - Real customer testimonials and review ratings.

2. **🍽️ Menu Page & Online Food Ordering:**
   - Real-time instant search bar (search by dish name, ingredients, or tags).
   - Diet filter toggles: **All Dishes**, **Pure Veg** (Green indicator), **Non-Veg** (Red indicator), and **Bestsellers**.
   - Horizontal category slider with 10 categories:
     - *Jailhouse Specials & Sizzlers*
     - *Lockup Starters & Tandoor*
     - *High-Security Curries (Mains)*
     - *Bihari & Rajgir Heritage (Handi Litti Chokha & Ahuna Mutton)*
     - *Bail Biryani & Pulao*
     - *Prison Roti & Naan*
     - *Cellblock Chinese & Fast Food*
     - *Freedom Drinks & Mocktails*
     - *Sweet Parole (Desserts)*
   - Dynamic quantity selector on every food card: transforms from `[+ Add]` into `[-] [qty] [+]` controls.

3. **🛍️ Interactive Cart & Slide-Over Drawer:**
   - Header cart trigger with bouncing quantity badge.
   - Mobile sticky bottom cart bar showing live item count and total.
   - Slide-over drawer with item thumbnails, itemized prices, and increment/decrement buttons.
   - **Delivery Mode Switcher**: Switch between **"Doorstep Delivery"** (includes delivery fee calculation with free delivery above ₹499) and **"Takeaway / Pickup"** (zero delivery fee).
   - **Coupon & Promo Code System**: Pre-loaded with coupons such as `JAILBREAK` (15% OFF), `RAJGIR10` (10% OFF), and `FIRSTCELL` (20% OFF) with minimum-order validation.
   - Bill breakdown: Subtotal, Delivery Fee, Taxes & Restaurant Packaging, Discounts, and Grand Total.

4. **💳 Complete Checkout, Live Order Breakdown & Payment:**
   - **Full Order Summary Box**: Displays itemized dish list, quantities, items subtotal, delivery charges, packaging & 5% GST taxes, coupon discounts, and **Total Amount Payable**.
   - **Payment Modes**:
     - **Cash on Delivery (COD)**: Displays the exact cash amount to keep ready for the delivery warden.
     - **UPI / QR on Delivery**: Live dynamic QR code with exact payable amount, supporting Google Pay, PhonePe, Paytm, and BHIM!
   - Instant Order Receipt Modal with unique Order ID (e.g., `#GJ-RAJ-8492`), status tracker, and itemized bill.
   - **"Send to WhatsApp" Dispatch**: Formats the entire order receipt into an automated WhatsApp message sent directly to the restaurant's phone number!
   - Print / Save receipt button.

5. **👤 Customer Login, Profile & Past Order History:**
   - **Mobile Number Authentication**: Log in quickly with a 10-digit mobile number and 4-digit verification code.
   - **Customer Profile**: Save default delivery address, landmark in Rajgir, and full name for 1-click checkout pre-fill!
   - **Past Orders History**: Track all past orders placed with date, dishes, order status (Preparing / Delivered), and total amount.
   - **1-Click Re-Order**: Easily re-order any past meal directly into the tray!

6. **🔑 Table & Prison Cell Reservation ("Book Your Cell"):**
   - Choose cell seating preference:
     - *The Solitary Cell (1 - 2 Guests / Romantic Couples)*
     - *Central Lockup Ward (3 - 6 Guests / Family & Friends)*
     - *High-Security VIP Cell (7 - 15 Guests / Parties & Birthdays)*
     - *Open Prison Courtyard Dining*
   - Interactive booking form with date picker, lunch/dinner time slots, guest counter, and occasion selector.
   - Instant confirmation popup with booking reference (e.g., `#CELL-7492`) and instant WhatsApp confirmation button.

6. **📖 About Us & FAQs:**
   - Story of The Grand Jail Restaurant in historic Rajgir.
   - Hygiene, pure veg and halal kitchen segregation standards.
   - Expandable FAQ accordion addressing common questions for tourists and diners.

7. **📸 Interactive Photo Gallery:**
   - Filter by categories: *All Photos*, *Jail Ambiance & Cells*, *Delicious Food*, and *Photo Booth & Fun*.
   - Full-screen Lightbox modal with captions.

8. **📍 Contact Us & Location:**
   - Centrally located address in Rajgir with Google Maps embed.
   - One-click **"WhatsApp Us"** and **"Call Now"** action buttons.
   - Direct interactive inquiry form.

---

## 📁 File Structure

```text
website 1/
├── index.html          # Main HTML structure with semantic sections and modals
├── css/
│   └── style.css       # Responsive dark luxury jail-theme styling
├── js/
│   ├── data.js         # Single configuration file: menu, contact, gallery, FAQs
│   ├── auth.js         # Customer phone login, profile & past orders history manager
│   ├── cart.js         # Cart state manager, quantity controls, promo codes, totals
│   └── app.js          # SPA router, menu filters, checkout, reservation, modals
└── README.md           # Documentation & Customization Guide
```

---

## 🛠️ How to Customize Menu, Contact & Gallery

You do **NOT** need to edit HTML code to update your restaurant details! Simply open **`js/data.js`**:

### 1. Update Contact & Restaurant Info
In `js/data.js`, find `RESTAURANT_DATA.info`:
```javascript
info: {
  name: "The Grand Jail Restaurant",
  phone: "+91 98765 43210",       // Put your real phone number here
  whatsapp: "919876543210",        // 10-digit WhatsApp number (with 91 country code, no +)
  email: "contact@grandjailrajgir.com",
  address: "Near Rajgir Railway Station Road, Main Market, Rajgir, Nalanda, Bihar - 803116",
  ...
}
```

### 2. Add or Edit Menu Dishes
In `js/data.js`, find `RESTAURANT_DATA.menuItems`:
```javascript
{
  id: "custom-01",
  name: "Your New Dish Name",
  category: "mains",             // "starters", "mains", "biryani", "beverages", etc.
  isVeg: true,                   // true for Veg (Green dot), false for Non-Veg (Red dot)
  price: 280,                    // Price in ₹
  spiceLevel: "Medium",          // "Mild", "Medium", or "Hot"
  tag: "Chef Special",
  bestSeller: true,
  image: "https://your-image-url.com/photo.jpg",
  description: "Delicious description of your dish..."
}
```

### 3. Add Photos to the Gallery
In `js/data.js`, find `RESTAURANT_DATA.gallery`:
```javascript
{
  id: "gal-9",
  category: "ambiance",          // "ambiance", "food", or "props"
  title: "New Photo Title",
  caption: "Short caption explaining the photo",
  image: "https://your-image-url.com/gallery.jpg"
}
```

---

## 🚀 How to Run the Website

### Option A: Double-Click (Zero Setup)
Simply double-click `index.html` in your file explorer. It will open in Google Chrome, Microsoft Edge, Firefox, or Safari!

### Option B: Local Development Server (Recommended)
If using VS Code or terminal:
```bash
# Using VS Code: Right-click index.html and select "Open with Live Server"
# OR using Python:
python -m http.server 8000

# OR using Node.js:
npx serve .
```
Then visit `http://localhost:8000` in your web browser.

---

## 🌐 Free Deployment Options

This website requires no compilation or backend servers, making it 100% compatible with free hosting platforms:
1. **GitHub Pages:** Create a repository, push the files, and turn on GitHub Pages in repository settings.
2. **Netlify:** Drag and drop the `website 1` folder onto [Netlify Drop](https://app.netlify.com/drop).
3. **Vercel:** Run `npx vercel` or link your GitHub repo.
4. **Any cPanel / Shared Hosting:** Upload the files directly to your `public_html` folder.

---

© 2026 The Grand Jail Restaurant, Rajgir. All rights reserved.
