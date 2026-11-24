/**
 * =====================================================================
 *  THE GRAND JAIL RESTAURANT - RAJGIR
 *  Configuration & Data File
 * =====================================================================
 *  You can easily edit your restaurant info, menu items, gallery images,
 *  and contact information here without touching the HTML/CSS code!
 * =====================================================================
 */

const RESTAURANT_DATA = {
  // --- General Restaurant Information ---
  info: {
    name: "The Grand Jail Restaurant",
    tagline: "Rajgir's Most Unique Themed Dining Experience",
    shortDescription: "Experience jailhouse hospitality inside authentic prison cells with prison-style dining, inmate photo props, and mouth-watering North Indian, Mughlai, Chinese & Bihari delicacies in the historic city of Rajgir.",
    city: "Rajgir",
    state: "Bihar",
    pincode: "803116",
    address: "The Grand Jail Restaurant, Station Road / Main Market, Rajgir, Nalanda, Bihar - 803116",
    logo: "images/logo.png",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=25.0406447,85.4200883+(The+Grand+Jail+Restaurant)&t=&z=17&ie=UTF8&iwloc=B&output=embed",
    googleMapsDirectionsUrl: "https://maps.app.goo.gl/Ts6pMgGVRvF25x2A7",
    phone: "09798323383",
    displayPhone: "09798323383",
    whatsapp: "919798323383",           // WhatsApp ordering (country code + 10 digits)
    email: "contact@grandjailrajgir.com",
    openingHours: {
      everyday: "10:00 AM - 11:30 PM",
      weekdays: "10:00 AM - 11:30 PM",
      weekends: "10:00 AM - 11:30 PM",
      deliveryHours: "10:00 AM - 11:00 PM"
    },
    delivery: {
      minOrderAmount: 199,
      deliveryFee: 40,
      freeDeliveryThreshold: 499,
      estimatedMinutes: "30 - 45 mins",
      deliveryRadius: "Across Rajgir & nearby tourist spots"
    },
    socialLinks: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
      google: "https://maps.app.goo.gl/Ts6pMgGVRvF25x2A7"
    },
    promoCodes: [
      { code: "JAILBREAK", discountPercent: 15, maxDiscount: 150, minOrder: 399, description: "15% OFF up to ₹150 on orders above ₹399" },
      { code: "RAJGIR10", discountPercent: 10, maxDiscount: 100, minOrder: 249, description: "10% OFF up to ₹100 for Rajgir locals & tourists" },
      { code: "FIRSTCELL", discountPercent: 20, maxDiscount: 200, minOrder: 499, description: "Flat 20% OFF for first-time inmates" }
    ]
  },

  // --- Menu Categories ---
  categories: [
    { id: "all", name: "Full Menu", icon: "utensils" },
    { id: "jail_specials", name: "Jailhouse Specials", icon: "flame" },
    { id: "starters", name: "Lockup Starters & Tandoor", icon: "shield" },
    { id: "mains", name: "High-Security Curries", icon: "soup" },
    { id: "bihari_heritage", name: "Bihari & Rajgir Heritage", icon: "sparkles" },
    { id: "biryani", name: "Bail Biryani & Rice", icon: "bowl" },
    { id: "breads", name: "Prison Roti & Naan", icon: "wheat" },
    { id: "chinese", name: "Cellblock Chinese", icon: "drumstick" },
    { id: "beverages", name: "Freedom Drinks & Mocktails", icon: "glass" },
    { id: "desserts", name: "Sweet Parole (Desserts)", icon: "cake" }
  ],

  // --- Menu Items ---
  menuItems: [
    // Jailhouse Specials
    {
      id: "js-01",
      name: "The Grand Jail Special Handi Mutton",
      category: "jail_specials",
      isVeg: false,
      price: 490,
      spiceLevel: "Hot",
      tag: "Chef's Signature",
      bestSeller: true,
      image: "https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=800&q=80",
      description: "Tender goat meat slow-cooked in earthen clay pots with ancient Magadha spices, whole garlic bulbs, and mustard oil. Served sizzling hot in an iron jail bowl."
    },
    {
      id: "js-02",
      name: "Lockdown Butter Chicken (Boneless)",
      category: "jail_specials",
      isVeg: false,
      price: 380,
      spiceLevel: "Mild",
      tag: "Must Try",
      bestSeller: true,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
      description: "Charcoal-smoked tandoori chicken tikka simmered in a velvety, buttery cashew and sun-ripened tomato gravy infused with kasuri methi."
    },
    {
      id: "js-03",
      name: "Qaidi No. 420 Paneer Platter",
      category: "jail_specials",
      isVeg: true,
      price: 360,
      spiceLevel: "Medium",
      tag: "Bestseller",
      bestSeller: true,
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
      description: "Assortment of Malai Paneer Tikka, Pahadi Hariyali Tikka, Achari Paneer, and Tandoori Stuffed Mushroom caps served with mint chutney and onion rings."
    },
    {
      id: "js-04",
      name: "Warden's Non-Veg Tandoori Kebab Feast",
      category: "jail_specials",
      isVeg: false,
      price: 540,
      spiceLevel: "Medium",
      tag: "House Special",
      bestSeller: true,
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      description: "Grand tandoori platter loaded with Murgh Tikka, Reshmi Kebab, Chicken Seekh Kebab, and Fish Amritsari bites with charred lemon."
    },

    // Starters & Tandoor
    {
      id: "st-01",
      name: "Amritsari Paneer Tikka",
      category: "starters",
      isVeg: true,
      price: 280,
      spiceLevel: "Medium",
      tag: "Vegetarian",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      description: "Cubes of farm-fresh cottage cheese marinated in hung curd, carom seeds (ajwain), and roasted gram flour, skewered over glowing charcoal."
    },
    {
      id: "st-02",
      name: "Tandoori Malai Soya Chaap",
      category: "starters",
      isVeg: true,
      price: 260,
      spiceLevel: "Mild",
      tag: "Creamy",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=800&q=80",
      description: "Succulent soya chaap marinated with fresh cream, cashew paste, cardamom, and gentle spices roasted to smoky perfection."
    },
    {
      id: "st-03",
      name: "Murgh Afghani Tikka (Creamy)",
      category: "starters",
      isVeg: false,
      price: 340,
      spiceLevel: "Mild",
      tag: "Popular",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
      description: "Boneless chicken marinated with cashew cream, cheese, white pepper, and mace, char-grilled till meltingly tender."
    },
    {
      id: "st-04",
      name: "Crispy Chilli Babycorn & Mushroom",
      category: "starters",
      isVeg: true,
      price: 240,
      spiceLevel: "Hot",
      tag: "Crunchy",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
      description: "Golden fried tender baby corn and fresh button mushrooms tossed with green chilies, spring onions, and oriental sauces."
    },
    {
      id: "st-05",
      name: "Dahi Ke Sholey / Kebab",
      category: "starters",
      isVeg: true,
      price: 250,
      spiceLevel: "Mild",
      tag: "Crispy Outside",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      description: "Crispy bread pockets stuffed with spiced hung curd, bell peppers, coriander, and roasted cumin seeds."
    },

    // High-Security Curries (Mains)
    {
      id: "mn-01",
      name: "Dal Makhani 24-Hour Dum",
      category: "mains",
      isVeg: true,
      price: 260,
      spiceLevel: "Mild",
      tag: "All-Time Fav",
      bestSeller: true,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      description: "Whole black urad lentils slow-cooked overnight on charcoal embers with fresh cream, unsalted white butter, and hand-ground spices."
    },
    {
      id: "mn-02",
      name: "Kadhai Paneer Rogani",
      category: "mains",
      isVeg: true,
      price: 290,
      spiceLevel: "Medium",
      tag: "North Indian",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
      description: "Fresh paneer blocks and crunchy capsicum tossed in a rich, coarse coriander-fennel spiced tomato onion masala."
    },
    {
      id: "mn-03",
      name: "Paneer Lababdar Shahi",
      category: "mains",
      isVeg: true,
      price: 310,
      spiceLevel: "Mild",
      tag: "Royal",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
      description: "Cottage cheese pieces bathed in a smooth, sweet-and-savory cashew-tomato gravy grated with fresh mawa and khoya."
    },
    {
      id: "mn-04",
      name: "Murgh Korma Rajgir Style",
      category: "mains",
      isVeg: false,
      price: 370,
      spiceLevel: "Medium",
      tag: "Spiced",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
      description: "Traditional chicken curry cooked with browned caramelized onions, yogurt, fragrant green cardamom, and bay leaf."
    },
    {
      id: "mn-05",
      name: "Champaran Ahuna Handi Mutton",
      category: "mains",
      isVeg: false,
      price: 520,
      spiceLevel: "Hot",
      tag: "Bihar Special",
      bestSeller: true,
      image: "https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=800&q=80",
      description: "Authentic Bihar Ahuna mutton sealed in a clay handi with whole spices, whole garlic pods, cooked on charcoal with no water added."
    },

    // Bihari & Rajgir Heritage
    {
      id: "bh-01",
      name: "Royal Rajgir Handi Litti Chokha (Desi Ghee)",
      category: "bihari_heritage",
      isVeg: true,
      price: 220,
      spiceLevel: "Medium",
      tag: "Bihari Pride",
      bestSeller: true,
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      description: "Whole wheat balls stuffed with sattu (spiced roasted gram flour, ajwain, kalonji, mustard oil), charcoal-roasted, dipped in pure desi ghee, served with Baingan-Alu-Tamatar Chokha and green chutney."
    },
    {
      id: "bh-02",
      name: "Litti Chokha with Mutton Gravy Combo",
      category: "bihari_heritage",
      isVeg: false,
      price: 420,
      spiceLevel: "Hot",
      tag: "Grand Feast",
      bestSeller: true,
      image: "https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=800&q=80",
      description: "Four ghee-dipped roasted littis served with spicy Bihari Handi mutton curry (2 pcs) and traditional chokha."
    },
    {
      id: "bh-03",
      name: "Sattu Stuffed Tandoori Paratha",
      category: "bihari_heritage",
      isVeg: true,
      price: 130,
      spiceLevel: "Mild",
      tag: "Heritage",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
      description: "Spiced sattu stuffed whole wheat bread baked in tandoor, brushed with butter, served with curd and pickle."
    },

    // Biryani & Rice
    {
      id: "by-01",
      name: "Bail Biryani - Hyderabadi Dum Chicken",
      category: "biryani",
      isVeg: false,
      price: 340,
      spiceLevel: "Medium",
      tag: "Aromatic",
      bestSeller: true,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
      description: "Long grain aromatic basmati rice layered with succulent chicken pieces, saffron, kewra water, and fried onions. Accompanied by mirchi ka salan and burani raita."
    },
    {
      id: "by-02",
      name: "Nawabi Dum Mutton Biryani",
      category: "biryani",
      isVeg: false,
      price: 460,
      spiceLevel: "Medium",
      tag: "Royal Dum",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
      description: "Slow dum-cooked tender mutton shank pieces buried beneath saffron-infused basmati rice, served in a sealed handi with raita."
    },
    {
      id: "by-03",
      name: "Subz-E-Diwan Veg Dum Biryani",
      category: "biryani",
      isVeg: true,
      price: 260,
      spiceLevel: "Mild",
      tag: "Vegetarian",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
      description: "Fresh garden vegetables, paneer cubes, and aromatic spices cooked with fragrant basmati rice on slow dum with fresh mint."
    },

    // Prison Breads
    {
      id: "br-01",
      name: "Butter Garlic Naan (Crisp)",
      category: "breads",
      isVeg: true,
      price: 75,
      spiceLevel: "None",
      tag: "Must Order",
      bestSeller: true,
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      description: "Hand-stretched refined flour bread topped with minced garlic and fresh coriander, baked crisp in tandoor and brushed with butter."
    },
    {
      id: "br-02",
      name: "Cheese Chilli Stuffed Naan",
      category: "breads",
      isVeg: true,
      price: 110,
      spiceLevel: "Mild",
      tag: "Cheesy",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
      description: "Soft naan stuffed with molten mozzarella, cheddar cheese, and finely chopped green chilies."
    },
    {
      id: "br-03",
      name: "Laccha Paratha (Multi-layered)",
      category: "breads",
      isVeg: true,
      price: 65,
      spiceLevel: "None",
      tag: "Flaky",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      description: "Crispy, multi-layered whole wheat bread made with pure ghee in the clay oven."
    },
    {
      id: "br-04",
      name: "Tandoori Butter Roti",
      category: "breads",
      isVeg: true,
      price: 30,
      spiceLevel: "None",
      tag: "Classic",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      description: "Freshly baked whole wheat flatbread brushed with butter."
    },

    // Cellblock Chinese
    {
      id: "ch-01",
      name: "Chilli Paneer Dry / Gravy",
      category: "chinese",
      isVeg: true,
      price: 250,
      spiceLevel: "Medium",
      tag: "Classic Indo-Chinese",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
      description: "Crisp fried paneer cubes tossed with diced bell peppers, onions, dark soy sauce, and green chili paste."
    },
    {
      id: "ch-02",
      name: "Chilli Chicken Dry (Boneless)",
      category: "chinese",
      isVeg: false,
      price: 310,
      spiceLevel: "Hot",
      tag: "Crowd Favorite",
      bestSeller: true,
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
      description: "Succulent chicken chunks tossed with fiery chilies, garlic, spring onions, and oriental spices."
    },
    {
      id: "ch-03",
      name: "Hakka Wok Tossed Noodles (Veg / Chicken)",
      category: "chinese",
      isVeg: true,
      price: 190,
      spiceLevel: "Mild",
      tag: "Wok Hei",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
      description: "Thin noodles tossed on high flame with shredded cabbage, carrots, bell peppers, soy, and garlic."
    },
    {
      id: "ch-04",
      name: "Schezwan Fried Rice",
      category: "chinese",
      isVeg: true,
      price: 210,
      spiceLevel: "Hot",
      tag: "Fiery",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
      description: "Fragrant rice stir-fried in house-made spicy Sichuan red chili and garlic sauce."
    },

    // Freedom Drinks & Mocktails
    {
      id: "bv-01",
      name: "The Jailbreak Blue Lagoon",
      category: "beverages",
      isVeg: true,
      price: 150,
      spiceLevel: "None",
      tag: "Signature Drink",
      bestSeller: true,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
      description: "Refreshing curaçao citrus syrup shaken with fresh mint, lime juice, and fizzy soda, served in a syringe/flask glass."
    },
    {
      id: "bv-02",
      name: "Virgin Mint Mojito",
      category: "beverages",
      isVeg: true,
      price: 130,
      spiceLevel: "None",
      tag: "Chilled",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      description: "Crushed fresh garden mint, lime wedges, Demerara sugar syrup, topped with chilled sparkling water."
    },
    {
      id: "bv-03",
      name: "Rajgir Masala Shahi Chaas",
      category: "beverages",
      isVeg: true,
      price: 90,
      spiceLevel: "Mild",
      tag: "Digestive",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      description: "Freshly churned chilled buttermilk spiced with roasted cumin, rock salt, ginger, and fresh mint."
    },
    {
      id: "bv-04",
      name: "Chocolate Prisoner Shake",
      category: "beverages",
      isVeg: true,
      price: 170,
      spiceLevel: "None",
      tag: "Decadent",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
      description: "Thick chocolate ice cream blended with Oreo cookies, Hershey's fudge, and crowned with whipped cream."
    },

    // Sweet Parole (Desserts)
    {
      id: "ds-01",
      name: "Hot Sizzling Brownie with Vanilla",
      category: "desserts",
      isVeg: true,
      price: 190,
      spiceLevel: "None",
      tag: "Sizzling",
      bestSeller: true,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      description: "Warm Belgian chocolate walnut brownie served on a cast iron sizzler plate topped with vanilla bean ice cream and hot chocolate fudge."
    },
    {
      id: "ds-02",
      name: "Shahi Matka Kulfi with Pistachio",
      category: "desserts",
      isVeg: true,
      price: 120,
      spiceLevel: "None",
      tag: "Traditional",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80",
      description: "Rich, slow-reduced creamy kulfi frozen in a miniature earthen clay pot with saffron, almond slivers, and green cardamom."
    },
    {
      id: "ds-03",
      name: "Gulab Jamun (2 Pcs) with Rabdi",
      category: "desserts",
      isVeg: true,
      price: 130,
      spiceLevel: "None",
      tag: "Melt In Mouth",
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      description: "Golden fried khoya dumplings soaked in rose and cardamom syrup, smothered with chilled creamy Lucknowi rabdi."
    }
  ],

  // --- Jail Cells & Seating Options for Reservations ---
  cellTypes: [
    {
      id: "solitary",
      name: "The Solitary Cell (Couple / 2 Guests)",
      capacity: "1 - 2 Guests",
      vibe: "Intimate, dim candle-glow, enclosed iron bars, perfect for dates and anniversaries.",
      badge: "Most Romantic"
    },
    {
      id: "central_ward",
      name: "Central Lockup Ward (4 - 6 Guests)",
      capacity: "3 - 6 Guests",
      vibe: "Spacious themed cell with inmate bench seating, handcuff wall props, and full privacy.",
      badge: "Family Favorite"
    },
    {
      id: "vip_cell",
      name: "High-Security VIP Cell (8 - 15 Guests)",
      capacity: "7 - 15 Guests",
      vibe: "Exclusive private dining lounge with audio setup, warden-style service, ideal for birthdays & parties.",
      badge: "Parties & Celebrations"
    },
    {
      id: "courtyard",
      name: "Open Prison Courtyard Dining",
      capacity: "2 - 10 Guests",
      vibe: "Airy, open ambiance with thematic prison wall murals, ambient music, and fast service.",
      badge: "Casual Dine-in"
    }
  ],

  // --- Photo Gallery Data ---
  gallery: [
    {
      id: "gal-1",
      category: "ambiance",
      title: "The Grand Jail – Restaurant Interior",
      caption: "Step into Rajgir's most unique themed dining experience — iron bars, dim lanterns, and jail-cell seating.",
      image: "images/gallery/gallery1.webp"
    },
    {
      id: "gal-2",
      category: "ambiance",
      title: "Jail Cell Dining Area",
      caption: "Dine behind real iron bars in our atmospheric prison-themed seating zones.",
      image: "images/gallery/gallery2.webp"
    },
    {
      id: "gal-3",
      category: "ambiance",
      title: "Rustic Ambiance & Décor",
      caption: "Handcrafted jail décor, vintage props, and moody lighting that sets the mood for an unforgettable meal.",
      image: "images/gallery/gallery3.webp"
    },
    {
      id: "gal-4",
      category: "food",
      title: "Handi Mutton – Our Signature",
      caption: "Slow-cooked Champaran Ahuna Handi Mutton — the most-ordered dish at The Grand Jail.",
      image: "images/gallery/gallery4.webp"
    },
    {
      id: "gal-5",
      category: "food",
      title: "Grand Jail Feast Spread",
      caption: "A glorious spread of North Indian curries, tandoor breads, and regional Bihari delights.",
      image: "images/gallery/gallery5.webp"
    },
    {
      id: "gal-6",
      category: "food",
      title: "Fresh from the Tandoor",
      caption: "Smoky, charred perfection — straight from our live clay tandoor to your jail-cell table.",
      image: "images/gallery/gallery6.webp"
    },
    {
      id: "gal-7",
      category: "props",
      title: "Fun with Prison Props",
      caption: "Strike a pose with handcuffs, Qaidi boards, and jail-stripe props — memories you'll talk about for years!",
      image: "images/gallery/gallery7.jpg"
    },
    {
      id: "gal-8",
      category: "props",
      title: "Inmate Mugshot Moments",
      caption: "Create viral reels and family photos with our complimentary mugshot-booth props.",
      image: "images/gallery/gallery8.jpg"
    }
  ],

  // --- Services, Amenities & Highlights ---
  services: [
    {
      category: "Service options",
      icon: "bell-concierge",
      items: ["Kerbside pickup", "No-contact delivery", "Delivery", "Takeaway", "Dine-in"]
    },
    {
      category: "Popular for",
      icon: "star",
      items: ["Lunch", "Solo dining"]
    },
    {
      category: "Offerings",
      icon: "utensils",
      items: ["All you can eat", "Coffee", "Happy-hour drinks", "Private dining room", "Quick bite", "Small plates", "Vegetarian options"]
    },
    {
      category: "Dining options",
      icon: "bowl-food",
      items: ["Breakfast", "Lunch", "Dinner", "Dessert", "Seating", "Table service"]
    },
    {
      category: "Atmosphere",
      icon: "wand-magic-sparkles",
      items: ["Casual", "Trendy"]
    },
    {
      category: "Crowd",
      icon: "users",
      items: ["Family friendly", "Groups", "LGBTQ+ friendly"]
    },
    {
      category: "Planning",
      icon: "calendar-check",
      items: ["Accepts reservations"]
    },
    {
      category: "Payments",
      icon: "credit-card",
      items: ["Google Pay", "NFC mobile payments", "Cash on Delivery", "UPI"]
    },
    {
      category: "Children",
      icon: "child-reaching",
      items: ["Good for kids", "High chairs", "Kids' menu"]
    },
    {
      category: "Parking",
      icon: "square-parking",
      items: ["Free parking lot", "Free street parking"]
    },
    {
      category: "Pets",
      icon: "paw",
      items: ["Dogs allowed inside"]
    }
  ],

  // --- Real Customer Testimonials & Verified Google Reviews ---
  testimonials: [
    {
      name: "Verified Google Diner",
      role: "Google Reviewer",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      source: "Google Maps",
      sourceUrl: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s110091638439661129781!2s0x39f2ef0043edacaf:0xa2e35f3474655d6c?ved=1t:31295&ictx=111",
      review: "New theme restuarent, best food, on road location, satisfied service."
    },
    {
      name: "Local Gourmet",
      role: "Google Reviewer",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      source: "Google Maps",
      sourceUrl: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s112632582770982887215!2s0x39f2ef0043edacaf:0xa2e35f3474655d6c?ved=1t:31295&ictx=111",
      review: "Very tasty and amazing food and nice ambience."
    },
    {
      name: "Critical Diner",
      role: "Google Reviewer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 2,
      source: "Google Maps",
      sourceUrl: "https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s106765985807439982284!2s0x39f2ef0043edacaf:0xa2e35f3474655d6c?ved=1t:31295&ictx=111",
      review: "The prices are extremely high, but the food quality is very low."
    }
  ],

  // --- Frequently Asked Questions ---
  faqs: [
    {
      question: "Where is The Grand Jail Restaurant located in Rajgir?",
      answer: "We are located centrally on Station Road / Main Market in Rajgir, Nalanda, Bihar. We are easily accessible from Rajgir Railway Station, Bus Stand, and all major tourist landmarks."
    },
    {
      question: "Do you offer doorstep home delivery in Rajgir?",
      answer: "Yes! We offer fast doorstep delivery across Rajgir town, local hotels, guest houses, and resorts. Delivery is free for orders above ₹499."
    },
    {
      question: "Is table booking or jail cell reservation required?",
      answer: "Walk-ins are always warmly welcomed! However, our themed jail cells (especially the Solitary Cell for couples and VIP cell for families) fill up fast during weekends and evenings, so reserving online in advance is highly recommended."
    },
    {
      question: "Are pure vegetarian options available?",
      answer: "Yes, absolutely! We maintain separate preparation standards for pure vegetarian dishes, including paneer specials, dal makhani, litti chokha, tandoori soya chaap, and mocktails."
    },
    {
      question: "Can we click photos with the prisoner props and uniforms?",
      answer: "Definitely! Our photo booth with inmate boards, striped props, and handcuffs is complimentary for all our dining guests. Our wardens are happy to click photos for you!"
    }
  ]
};

// Export to window object for browser access
if (typeof window !== "undefined") {
  window.RESTAURANT_DATA = RESTAURANT_DATA;
}
