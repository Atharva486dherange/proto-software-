/* =============================================================
   Trailmark — Full Travel Agency Platform
   Vanilla JS · in-memory prototype
   ============================================================= */

/* ─────────────────────────────────────────────
   DATA — PACKAGES
───────────────────────────────────────────── */
function buildItinerary(dest, days, pool) {
  return Array.from({ length: days }, (_, i) => {
    const d = i + 1;
    return {
      day: d,
      activities: d === 1
        ? `Arrive in ${dest}. Check in and take an easy evening walk.`
        : d === days
        ? `Leisure morning, final shopping, check out and transfer for departure.`
        : pool[(d - 2) % pool.length]
    };
  });
}

const PACKAGES = [
  { id:"pkg-goa",    name:"Goa Beach Escape",        destination:"Goa",        country:"India",     tags:["beach","adventure"],  price:18000, days:4, emoji:"🏖️", image:"https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=600&q=75", description:"Sun, surf and seafood along Goa's north and south coastlines, with a parasailing session and a sunset cruise.", itinerary: buildItinerary("Goa",4,["Beach-hop across Baga and Anjuna. Paragliding in the afternoon.","Old Goa heritage churches, spice plantation lunch, sunset river cruise."]) },
  { id:"pkg-manali", name:"Manali Mountain Retreat",  destination:"Manali",     country:"India",     tags:["mountains","adventure"], price:22000, days:5, emoji:"🏔️", image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Manali_City.jpg/960px-Manali_City.jpg", description:"Pine forests, river rafting on the Beas and a day trip to snow-capped Solang Valley.", itinerary: buildItinerary("Manali",5,["Hadimba Temple and Old Manali cafes.","Full-day Solang Valley — cable car and snow activities.","White-water rafting on the Beas river."]) },
  { id:"pkg-jaipur", name:"Jaipur Heritage Trail",    destination:"Jaipur",     country:"India",     tags:["heritage"],            price:15000, days:3, emoji:"🏯", image:"https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=75", description:"The Pink City's forts and palaces, with a rooftop dinner overlooking the old city.", itinerary: buildItinerary("Jaipur",3,["Amber Fort, City Palace and Hawa Mahal."]) },
  { id:"pkg-kerala", name:"Kerala Backwaters Bliss",  destination:"Alleppey",   country:"India",     tags:["wildlife","spiritual"], price:26000, days:4, emoji:"🛶", image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/House_Boat_DSW.jpg/960px-House_Boat_DSW.jpg", description:"An overnight houseboat drifting through Kerala's mirror-still backwaters plus a spice-garden village walk.", itinerary: buildItinerary("Alleppey",4,["Houseboat cruise through the backwaters.","Spice plantation walk and Kathakali performance."]) },
  { id:"pkg-ladakh", name:"Ladakh High Passes",       destination:"Leh",        country:"India",     tags:["mountains","adventure"],price:45000, days:7, emoji:"⛰️", image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=75", description:"Monasteries, high-altitude passes and the turquoise stillness of Pangong Lake.", itinerary: buildItinerary("Leh",7,["Acclimatisation day — Leh Palace and market.","Nubra Valley via Khardung La.","Pangong Lake day trip.","Magnetic Hill and Sangam viewpoint.","Monastery circuit — Thiksey, Hemis and Shey."]) },
  { id:"pkg-rishi",  name:"Rishikesh Spiritual Sojourn",destination:"Rishikesh",country:"India",     tags:["spiritual","adventure"],price:13000, days:3, emoji:"🕉️", image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Trayambakeshwar_Temple_VK.jpg/960px-Trayambakeshwar_Temple_VK.jpg", description:"Riverside yoga, Ganga Aarti at Triveni Ghat and a rapid-grade white-water rafting run.", itinerary: buildItinerary("Rishikesh",3,["Sunrise yoga, rafting on the Ganges, Ganga Aarti at dusk."]) },
  { id:"pkg-andaman",name:"Andaman Island Hopping",   destination:"Port Blair", country:"India",     tags:["beach","wildlife"],    price:38000, days:6, emoji:"🐠", image:"https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=600&q=75", description:"Coral reefs, bioluminescent kayaking and the white sands of Radhanagar Beach.", itinerary: buildItinerary("Port Blair",6,["Cellular Jail and light-and-sound show.","Ferry to Havelock, sunset at Radhanagar Beach.","Scuba diving at Elephant Beach.","Neil Island beaches."]) },
  { id:"pkg-darj",   name:"Darjeeling Tea Trails",    destination:"Darjeeling", country:"India",     tags:["mountains","heritage"], price:21000, days:4, emoji:"🍵", image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Darjeeling%2C_India%2C_Darjeeling_tea_in_variety%2C_Black_tea.jpg/960px-Darjeeling%2C_India%2C_Darjeeling_tea_in_variety%2C_Black_tea.jpg", description:"Toy-train rides, working tea estates and sunrise over Kanchenjunga from Tiger Hill.", itinerary: buildItinerary("Darjeeling",4,["Tiger Hill sunrise, Batasia Loop and toy-train joy ride.","Tea estate tour, tasting and Zoological Park."]) },
  { id:"pkg-bali",   name:"Bali Island Getaway",      destination:"Bali",       country:"Indonesia", tags:["beach","heritage"],    price:52000, days:6, emoji:"🌺", image:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=75", description:"Rice-terrace views in Ubud, temple visits at golden hour and beach clubs along Seminyak.", itinerary: buildItinerary("Bali",6,["Ubud rice terraces and Monkey Forest.","Tanah Lot and Uluwatu sunset tour.","Snorkelling at Nusa Penida.","Seminyak beach clubs and Balinese spa."]) },
  { id:"pkg-agra",   name:"Taj Mahal Weekend",        destination:"Agra",       country:"India",     tags:["heritage"],            price:12000, days:2, emoji:"🕌", image:"https://images.unsplash.com/photo-1585506942812-e72b29cef752?w=600&q=75", description:"Witness the breathtaking beauty of the Taj Mahal at sunrise and explore the historic Agra Fort.", itinerary: buildItinerary("Agra",2,["Taj Mahal sunrise visit and Agra Fort.","Fatehpur Sikri excursion and shopping."]) },
  { id:"pkg-udaipur",name:"Udaipur Royal Getaway",    destination:"Udaipur",    country:"India",     tags:["heritage","spiritual"],price:24000, days:4, emoji:"🏰", image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Udaipur_City_Palace.jpg/960px-Udaipur_City_Palace.jpg", description:"Experience the romantic city of lakes, majestic palaces, and sunset boat rides on Lake Pichola.", itinerary: buildItinerary("Udaipur",4,["City Palace and Jagdish Temple.","Lake Pichola sunset boat ride.","Monsoon Palace (Sajjangarh) and Fateh Sagar."]) },
  { id:"pkg-varanasi",name:"Varanasi Mystical Journey",destination:"Varanasi",  country:"India",     tags:["spiritual","heritage"],price:16000, days:3, emoji:"🪔", image:"https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=75", description:"Immerse yourself in India's spiritual heart with Ganges boat rides and mesmerizing evening Aartis.", itinerary: buildItinerary("Varanasi",3,["Kashi Vishwanath Temple and evening Ganga Aarti.","Early morning boat ride on the Ganges, Sarnath visit."]) },
  { id:"pkg-munnar", name:"Munnar Tea Hills",         destination:"Munnar",     country:"India",     tags:["mountains","wildlife"],price:19000, days:4, emoji:"🌿", image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Munnar_Overview.jpg/960px-Munnar_Overview.jpg", description:"Lush green tea plantations, misty mountains, and the exotic wildlife of Eravikulam National Park.", itinerary: buildItinerary("Munnar",4,["Tea Museum and estate walk.","Eravikulam National Park and Mattupetty Dam."]) },
  { id:"pkg-dubai",  name:"Dubai Desert & City Luxury",destination:"Dubai",     country:"UAE",       tags:["adventure","beach"],   price:65000, days:5, emoji:"🏙️", image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=75", description:"Dazzling skyscrapers, dune bashing in the desert, and world-class luxury shopping.", itinerary: buildItinerary("Dubai",5,["Burj Khalifa and Dubai Mall.","Desert Safari with BBQ dinner.","Palm Jumeirah and Marina dhow cruise."]) },
  { id:"pkg-maldives",name:"Maldives Overwater Bliss",destination:"Maldives",   country:"Maldives",  tags:["beach","adventure"],   price:85000, days:5, emoji:"🏝️", image:"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=75", description:"Stay in a luxurious overwater villa, snorkel in crystal-clear waters, and relax on pristine beaches.", itinerary: buildItinerary("Maldives",5,["Arrival and resort check-in.","Snorkeling, diving, or spa day.","Sunset dolphin cruise."]) },
  { id:"pkg-sikkim", name:"Sikkim Alpine Adventure",  destination:"Gangtok",    country:"India",     tags:["mountains","adventure"],price:28000, days:6, emoji:"🏔️", image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Kangch-Goechala.jpg/960px-Kangch-Goechala.jpg", description:"Stunning Himalayan views, ancient monasteries, and the breathtaking Tsomgo Lake.", itinerary: buildItinerary("Gangtok",6,["Gangtok local sightseeing and Rumtek Monastery.","Tsomgo Lake and Baba Mandir excursion.","Nathu La Pass (subject to permit)."]) }
];

/* ─────────────────────────────────────────────
   DATA — HOTELS
───────────────────────────────────────────── */
const HOTELS = [
  { id:"h1",  name:"The Leela Goa",           destination:"Goa",       stars:5, pricePerNight:12000, amenities:["Pool","Spa","WiFi","Beach"], emoji:"🏖️", image:"https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=75" },
  { id:"h2",  name:"Baga Beach Resort",        destination:"Goa",       stars:3, pricePerNight:3200,  amenities:["WiFi","AC","Breakfast"],     emoji:"🌴", image:null },
  { id:"h3",  name:"Zostel Manali",            destination:"Manali",    stars:2, pricePerNight:800,   amenities:["WiFi","Common Room"],        emoji:"🏔️", image:null },
  { id:"h4",  name:"Manali Heights Resort",    destination:"Manali",    stars:4, pricePerNight:6500,  amenities:["Pool","Spa","WiFi","View"],  emoji:"⛰️", image:"https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?w=600&q=75" },
  { id:"h5",  name:"Samode Haveli Jaipur",     destination:"Jaipur",    stars:5, pricePerNight:18000, amenities:["Heritage","Pool","Spa"],     emoji:"🏯", image:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=75" },
  { id:"h6",  name:"Pearl Palace Heritage",    destination:"Jaipur",    stars:3, pricePerNight:2200,  amenities:["WiFi","AC","Restaurant"],   emoji:"🌟", image:null },
  { id:"h7",  name:"Kumarakom Lake Resort",    destination:"Alleppey",  stars:5, pricePerNight:22000, amenities:["Lake View","Ayurveda","Pool"], emoji:"🛶", image:null },
  { id:"h8",  name:"The Grand Dragon Ladakh",  destination:"Leh",       stars:4, pricePerNight:9500,  amenities:["View","WiFi","Restaurant"], emoji:"⛰️", image:null },
  { id:"h9",  name:"InDus Indus River Camp",   destination:"Leh",       stars:3, pricePerNight:4000,  amenities:["Camping","Meals","WiFi"],   emoji:"🏕️", image:null },
  { id:"h10", name:"Ananda in the Himalayas",  destination:"Rishikesh", stars:5, pricePerNight:25000, amenities:["Spa","Yoga","Pool","View"],  emoji:"🕉️", image:null },
  { id:"h11", name:"Mango Havelock Resort",    destination:"Port Blair", stars:4, pricePerNight:8000,  amenities:["Beach","Pool","WiFi"],       emoji:"🐠", image:null },
  { id:"h12", name:"Mayfair Darjeeling",       destination:"Darjeeling",stars:5, pricePerNight:14000, amenities:["View","Spa","WiFi"],         emoji:"🍵", image:null },
  { id:"h13", name:"Alaya Resort Ubud Bali",   destination:"Bali",      stars:5, pricePerNight:16000, amenities:["Pool","Spa","View","WiFi"],  emoji:"🌺", image:"https://images.unsplash.com/photo-1570213489059-0aac6626cade?w=600&q=75" },
  { id:"h14", name:"Seminyak Beach Hostel",    destination:"Bali",      stars:2, pricePerNight:1200,  amenities:["WiFi","Common Area"],        emoji:"🏄", image:null }
];

/* ─────────────────────────────────────────────
   DATA — TRANSPORT
───────────────────────────────────────────── */
const TRANSPORT = {
  flights: [
    { id:"f1",  from:"Mumbai",   to:"Goa",       icon:"✈️", operator:"IndiGo",       dep:"07:30", arr:"09:00", duration:"1h 30m", price:3800, seats:120, type:"flights" },
    { id:"f2",  from:"Delhi",    to:"Goa",       icon:"✈️", operator:"Air India",    dep:"09:15", arr:"11:45", duration:"2h 30m", price:5200, seats:160, type:"flights" },
    { id:"f3",  from:"Delhi",    to:"Leh",       icon:"✈️", operator:"IndiGo",       dep:"06:00", arr:"07:45", duration:"1h 45m", price:7500, seats:80,  type:"flights" },
    { id:"f4",  from:"Mumbai",   to:"Bali",      icon:"✈️", operator:"Air Asia",     dep:"10:00", arr:"16:30", duration:"6h 30m", price:14500,seats:200, type:"flights" },
    { id:"f5",  from:"Delhi",    to:"Kochi",     icon:"✈️", operator:"SpiceJet",     dep:"08:45", arr:"11:30", duration:"2h 45m", price:5800, seats:140, type:"flights" },
    { id:"f6",  from:"Mumbai",   to:"Port Blair",icon:"✈️", operator:"IndiGo",       dep:"05:30", arr:"09:15", duration:"3h 45m", price:8900, seats:120, type:"flights" },
  ],
  buses: [
    { id:"b1",  from:"Delhi",    to:"Manali",    icon:"🚌", operator:"HRTC AC Volvo",dep:"17:00", arr:"08:00+1",duration:"15h",  price:1200, seats:40, type:"buses" },
    { id:"b2",  from:"Delhi",    to:"Rishikesh", icon:"🚌", operator:"UPSRTC AC",    dep:"06:30", arr:"12:00",  duration:"5h 30m",price:550, seats:45, type:"buses" },
    { id:"b3",  from:"Mumbai",   to:"Goa",       icon:"🚌", operator:"Kadamba AC",   dep:"22:00", arr:"07:30+1",duration:"9h 30m",price:900, seats:40, type:"buses" },
    { id:"b4",  from:"Kochi",    to:"Alleppey",  icon:"🚌", operator:"KSRTC",        dep:"09:00", arr:"10:30",  duration:"1h 30m",price:120, seats:50, type:"buses" },
    { id:"b5",  from:"Siliguri", to:"Darjeeling",icon:"🚌", operator:"SNT",          dep:"07:00", arr:"11:30",  duration:"4h 30m",price:350, seats:40, type:"buses" },
  ],
  cabs: [
    { id:"c1",  from:"Goa Airport",  to:"Baga Beach",  icon:"🚗", operator:"Rapido Cab",   dep:"On demand", arr:"~30 min", duration:"30 min",price:450,  seats:4, type:"cabs" },
    { id:"c2",  from:"Manali",       to:"Solang Valley",icon:"🚗",operator:"Local Taxi",   dep:"On demand", arr:"~45 min", duration:"45 min",price:600,  seats:4, type:"cabs" },
    { id:"c3",  from:"Jaipur Airport",to:"City Centre", icon:"🚗", operator:"Ola Outstation",dep:"On demand",arr:"~25 min", duration:"25 min",price:380, seats:4, type:"cabs" },
    { id:"c4",  from:"Cochin Airport",to:"Alleppey",    icon:"🚗", operator:"Kerala Cabs",  dep:"On demand", arr:"~1h 30m",  duration:"1h 30m",price:1800,seats:6, type:"cabs" },
    { id:"c5",  from:"Leh Airport",  to:"City Centre",  icon:"🚗", operator:"Ladakh Taxi",  dep:"On demand", arr:"~20 min", duration:"20 min",price:700,  seats:6, type:"cabs" },
  ]
};

/* ─────────────────────────────────────────────
   DATA — AGENTS
───────────────────────────────────────────── */
const AGENTS_DATA = [
  { id:"ag1", name:"Atharva Dherange",  specialties:["Ladakh","Mountains","Adventure"], rating:4.9, trips:214, exp:"8 yrs", initials:"AD", status:"Active" },
  { id:"ag2", name:"Priya Sharma",      specialties:["Goa","Beach","Honeymoon"],        rating:4.8, trips:187, exp:"6 yrs", initials:"PS", status:"Active" },
  { id:"ag3", name:"Rohan Mehta",       specialties:["Kerala","Heritage","Wildlife"],   rating:4.9, trips:302, exp:"10 yrs",initials:"RM", status:"Active" },
  { id:"ag4", name:"Sneha Kulkarni",    specialties:["Bali","International","Luxury"],  rating:4.7, trips:143, exp:"5 yrs", initials:"SK", status:"Active" },
  { id:"ag5", name:"Vijay Patil",       specialties:["Rajasthan","Heritage","Culture"], rating:4.8, trips:265, exp:"9 yrs", initials:"VP", status:"Active" },
  { id:"ag6", name:"Anita Desai",       specialties:["Rishikesh","Spiritual","Yoga"],   rating:4.9, trips:178, exp:"7 yrs", initials:"AD", status:"Active" }
];

/* ─────────────────────────────────────────────
   DATA — REVIEWS
───────────────────────────────────────────── */
let REVIEWS = [
  { id:"rv1", author:"Dhananjay Borse",  pkg:"Goa Beach Escape",        rating:5, text:"Absolutely loved it! Every detail was sorted — the hotel, transport, activities. 10/10 would book again.", date:"2026-10-18", status:"Approved" },
  { id:"rv2", author:"Siddhesh Kawad",   pkg:"Ladakh High Passes",      rating:5, text:"Breathtaking landscapes and a perfectly paced itinerary. Atharva was an incredible guide.", date:"2026-11-10", status:"Pending" },
  { id:"rv3", author:"Parth Kokate",     pkg:"Jaipur Heritage Trail",   rating:4, text:"Loved the heritage hotels and the rooftop dinner. Could have had one more day at Amber Fort.", date:"2026-09-25", status:"Approved" },
  { id:"rv4", author:"Riya Shah",        pkg:"Kerala Backwaters Bliss", rating:5, text:"The houseboat experience was magical. Completely stress-free booking process through Trailmark.", date:"2026-08-14", status:"Pending" },
  { id:"rv5", author:"Meera Joshi",      pkg:"Bali Island Getaway",     rating:4, text:"Fantastic resort selection. The Ubud rice terraces at sunrise were worth every rupee.", date:"2026-07-30", status:"Approved" },
  { id:"rv6", author:"Karan Singh",      pkg:"Manali Mountain Retreat", rating:5, text:"Rafting on the Beas was exhilarating. Agent sorted everything from airport to checkout.", date:"2026-06-20", status:"Pending" }
];

/* ─────────────────────────────────────────────
   SEEDED BOOKINGS
───────────────────────────────────────────── */
let bookings = [
  { id:"BK-1001", type:"package",   touristName:"Dhananjay Borse",  ref:"pkg-goa",    name:"Goa Beach Escape",      destination:"Goa",      detail:"4 days · 2 travellers", startDate:"2026-10-12", totalPrice:36000,  status:"Confirmed", travelers:2, createdAt:Date.now()-864e5*6 },
  { id:"BK-1002", type:"package",   touristName:"Siddhesh Kawad",   ref:"pkg-ladakh", name:"Ladakh High Passes",    destination:"Leh",      detail:"7 days · 3 travellers", startDate:"2026-11-02", totalPrice:135000, status:"Pending",   travelers:3, createdAt:Date.now()-864e5*2 },
  { id:"BK-1003", type:"package",   touristName:"Parth Kokate",     ref:"pkg-jaipur", name:"Jaipur Heritage Trail", destination:"Jaipur",   detail:"3 days · 4 travellers", startDate:"2026-09-20", totalPrice:60000,  status:"Confirmed", travelers:4, createdAt:Date.now()-864e5*10},
  { id:"BK-1004", type:"hotel",     touristName:"Dhananjay Borse",  ref:"h1",         name:"The Leela Goa",         destination:"Goa",      detail:"3 nights", startDate:"2026-10-12", totalPrice:36000, status:"Confirmed", travelers:2, createdAt:Date.now()-864e5*6 },
  { id:"BK-1005", type:"transport", touristName:"Siddhesh Kawad",   ref:"f3",         name:"Delhi → Leh (IndiGo)",  destination:"Leh",      detail:"1 passenger", startDate:"2026-11-02",totalPrice:7500,  status:"Confirmed", travelers:1, createdAt:Date.now()-864e5*2 }
];

let users = [
  { id:"u-1", name:"Dhananjay Borse",  role:"Tourist",      status:"Active" },
  { id:"u-2", name:"Siddhesh Kawad",   role:"Tourist",      status:"Active" },
  { id:"u-3", name:"Parth Kokate",     role:"Tourist",      status:"Active" },
  { id:"u-4", name:"Atharva Dherange", role:"Travel Agent", status:"Active" },
  { id:"u-5", name:"Riya Shah",        role:"Tourist",      status:"Suspended" },
  { id:"u-6", name:"Priya Sharma",     role:"Travel Agent", status:"Active" }
];

let bookingIdSeq = 1006;
let activeAgTrTab = "flights";
let activeAbTab   = "all";

/* ─────────────────────────────────────────────
   STATE
───────────────────────────────────────────── */
let currentUser   = null;
let activeView    = null;
let prevView      = null;
let currentPkg    = null;
let pendingPayment= null;
let activeChips   = new Set();
let activeTTab    = "flights";
let activeTrTab   = "all";
let editingPkgId  = null;
let selectedRole  = "tourist";
let wishlist      = new Set();

/* ─────────────────────────────────────────────
   LOCALSTORAGE PERSISTENCE
───────────────────────────────────────────── */
const DEFAULT_BOOKINGS = JSON.parse(JSON.stringify(bookings));
const DEFAULT_USERS    = JSON.parse(JSON.stringify(users));
const DEFAULT_REVIEWS  = JSON.parse(JSON.stringify(REVIEWS));

function loadState() {
  try {
    const b = localStorage.getItem("tm-bookings"); if (b) { bookings = JSON.parse(b); bookingIdSeq = bookings.reduce((m,x)=>Math.max(m,+(x.id.replace("BK-",""))||0),1005)+1; }
    const u = localStorage.getItem("tm-users");    if (u) users = JSON.parse(u);
    const r = localStorage.getItem("tm-reviews");  if (r) REVIEWS = JSON.parse(r);
    const w = localStorage.getItem("tm-wishlist");  if (w) wishlist = new Set(JSON.parse(w));
  } catch(e) { console.warn("Failed to load state:", e); }
}
function persist() {
  try {
    localStorage.setItem("tm-bookings", JSON.stringify(bookings));
    localStorage.setItem("tm-users",    JSON.stringify(users));
    localStorage.setItem("tm-reviews",  JSON.stringify(REVIEWS));
    localStorage.setItem("tm-wishlist", JSON.stringify([...wishlist]));
  } catch(e) { console.warn("Failed to persist state:", e); }
}
function resetDemoData() {
  bookings = JSON.parse(JSON.stringify(DEFAULT_BOOKINGS));
  users    = JSON.parse(JSON.stringify(DEFAULT_USERS));
  REVIEWS  = JSON.parse(JSON.stringify(DEFAULT_REVIEWS));
  wishlist = new Set();
  bookingIdSeq = 1006;
  localStorage.removeItem("tm-bookings"); localStorage.removeItem("tm-users");
  localStorage.removeItem("tm-reviews");  localStorage.removeItem("tm-wishlist");
  toast("Demo data has been reset!");
}
loadState();

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const fmt  = n => `₹${(+n).toLocaleString("en-IN")}`;
const today= () => new Date().toISOString().split("T")[0];
const durB = d => d <= 3 ? "short" : d <= 5 ? "mid" : "long";
const stars= n => "⭐".repeat(n);
const fmtDate = s => { try { return new Date(s+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}); } catch { return s||"—"; } };

let _toast; function toast(msg, dur=3200) { const el=$("#toast"); el.textContent=msg; el.hidden=false; clearTimeout(_toast); _toast=setTimeout(()=>el.hidden=true,dur); }

const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function debounce(fn, ms=300) { let t; return (...a) => { clearTimeout(t); t=setTimeout(()=>fn(...a), ms); }; }

function setFieldError(inputEl, msg) {
  const field = inputEl.closest(".field") || inputEl.parentElement;
  field.classList.add("field-error");
  let err = field.querySelector(".error-msg");
  if (!err) { err = document.createElement("span"); err.className = "error-msg"; field.appendChild(err); }
  err.textContent = msg;
}
function clearFieldError(inputEl) {
  const field = inputEl.closest(".field") || inputEl.parentElement;
  field.classList.remove("field-error");
  const err = field.querySelector(".error-msg");
  if (err) err.remove();
}
function clearAllErrors(formEl) {
  formEl.querySelectorAll(".field-error").forEach(f => f.classList.remove("field-error"));
  formEl.querySelectorAll(".error-msg").forEach(e => e.remove());
}

/* ─────────────────────────────────────────────
   SCREEN ROUTING
───────────────────────────────────────────── */
function showScreen(id) {
  ["screen-landing","screen-auth","screen-app"].forEach(s => {
    const el = document.getElementById(s);
    if (el) el.hidden = (s !== id);
  });
  if (id === "screen-landing") renderLandingPage();
}

/* ─────────────────────────────────────────────
   DARK MODE
───────────────────────────────────────────── */
function initTheme() {
  const saved = localStorage.getItem("tm-theme");
  if (saved === "dark") document.documentElement.setAttribute("data-theme","dark");
  updateThemeButtons();
}
function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme","dark");
  localStorage.setItem("tm-theme", isDark ? "light" : "dark");
  updateThemeButtons();
}
function updateThemeButtons() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const icon = isDark ? "☀️" : "🌙";
  document.querySelectorAll(".theme-toggle").forEach(b => b.textContent = icon);
}
document.addEventListener("click", e => { if(e.target.closest(".theme-toggle")) toggleTheme(); });
initTheme();

/* ─────────────────────────────────────────────
   LANDING PAGE
───────────────────────────────────────────── */
function renderLandingPage() {
  // Featured packages
  const destRow = $("#lp-dest-row");
  if (destRow && !destRow.hasChildNodes()) {
    destRow.innerHTML = PACKAGES.slice(0,4).map(p => `
      <div class="lp-dest-card" data-lp-pkg="${p.id}">
        ${p.image ? `<img src="${p.image}" alt="${p.name}">` : `<div class="lp-dest-card-ph">${p.emoji}</div>`}
        <div class="lp-dest-card-body">
          <h4>${p.name}</h4>
          <span>${p.destination}, ${p.country}</span>
          <strong>${fmt(p.price)} <span style="font-size:11px;font-family:var(--font-body);font-weight:400;color:var(--text-muted)">/ person</span></strong>
        </div>
      </div>`).join("");
  }
  // Agents
  const agGrid = $("#lp-agents-grid");
  if (agGrid && !agGrid.hasChildNodes()) {
    agGrid.innerHTML = AGENTS_DATA.map(a => `
      <div class="agent-card">
        <div class="agent-avatar">${a.initials}</div>
        <h4>${a.name}</h4>
        <p class="agent-spec">${a.specialties[0]} · ${a.exp} experience</p>
        <p class="agent-rating">⭐ ${a.rating}</p>
        <p class="agent-bookings">${a.trips}+ trips arranged</p>
      </div>`).join("");
  }
}

// Landing nav scroll-to
document.addEventListener("click", e => {
  const link = e.target.closest("[data-lnav]");
  if (!link) return;
  e.preventDefault();
  const target = document.getElementById("lnav-" + link.dataset.lnav);
  if (target) target.scrollIntoView({ behavior: "smooth" });
  closeLpNav();
});

// Landing → auth
["lp-signin-btn","lp-getstarted-btn","hero-explore-btn","hero-agents-btn","lp-all-dest-btn","lp-about-cta","lp-final-cta"].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener("click", () => showScreen("screen-auth"));
});

// Landing dest card → auth
document.addEventListener("click", e => {
  if (e.target.closest("[data-lp-pkg]")) showScreen("screen-auth");
});

// Landing mobile nav
const lpHamburger = $("#lp-hamburger");
const pubMobileNav= $("#pub-mobile-nav");
if (lpHamburger) {
  lpHamburger.addEventListener("click", () => {
    const open = !pubMobileNav.hidden;
    pubMobileNav.hidden = open;
    lpHamburger.classList.toggle("open", !open);
  });
}
document.getElementById("mob-signin")?.addEventListener("click", e => { e.preventDefault(); showScreen("screen-auth"); });
function closeLpNav() { if (pubMobileNav) pubMobileNav.hidden = true; if (lpHamburger) lpHamburger.classList.remove("open"); }

/* ─────────────────────────────────────────────
   AUTH (Screen 2)
───────────────────────────────────────────── */
document.getElementById("auth-back-btn")?.addEventListener("click", () => showScreen("screen-landing"));

$$(".role-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    $$(".role-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    selectedRole = tab.dataset.role;
    const isTourist = selectedRole === "tourist";
    $("#form-tourist").hidden = !isTourist;
    $("#form-staff").hidden   =  isTourist;
    $("#tourist-otp-wrap").hidden = true;
    $("#tourist-send-otp").hidden = false;
    $("#tourist-continue").hidden = true;
  });
});

$("#tourist-send-otp")?.addEventListener("click", (e) => {
  const nameEl = $("#tourist-name"), phoneEl = $("#tourist-phone");
  const name = nameEl.value.trim(), phone = phoneEl.value.trim();
  clearAllErrors(nameEl.closest("form"));
  let valid = true;
  if (!name) { setFieldError(nameEl, "Name is required"); valid = false; }
  if (!phone || !/^\d{10}$/.test(phone)) { setFieldError(phoneEl, "Enter a valid 10-digit phone number"); valid = false; }
  if (!valid) return;

  const btn = e.target;
  btn.classList.add("btn-loading");
  btn.disabled = true;
  setTimeout(() => {
    btn.classList.remove("btn-loading");
    btn.disabled = false;
    $("#tourist-otp-wrap").hidden = false;
    $("#tourist-send-otp").hidden = true;
    $("#tourist-continue").hidden = false;
    toast("OTP sent! (prototype — enter any 4 digits)");
  }, 1000);
});

$("#form-tourist")?.addEventListener("submit", e => {
  e.preventDefault();
  const nameEl = $("#tourist-name"), otpEl = $("#tourist-otp");
  const name = esc(nameEl.value.trim()), otp = otpEl.value.trim();
  clearAllErrors(e.target);
  let valid = true;
  if (!name) { setFieldError(nameEl, "Name is required"); valid = false; }
  if (!/^\d{4}$/.test(otp)) { setFieldError(otpEl, "Enter a valid 4-digit OTP"); valid = false; }
  if (!valid) return;
  login("tourist", name);
});

$("#form-staff")?.addEventListener("submit", e => {
  e.preventDefault();
  const nameEl = $("#staff-name");
  const name = esc(nameEl.value.trim());
  clearAllErrors(e.target);
  if (!name) { setFieldError(nameEl, "Name is required"); return; }
  login(selectedRole, name);
});

function roleName(r) { return {tourist:"Tourist",agent:"Travel Agent",admin:"Admin"}[r]||r; }

function login(role, name) {
  currentUser = { name, role };
  if (!users.find(u=>u.name===name)) { users.push({ id:`u-${Date.now()}`, name, role:roleName(role), status:"Active" }); persist(); }

  // Clear every view before building the new role's nav
  ALL_VIEWS.forEach(v => {
    const el = document.getElementById("view-"+v);
    if (el) el.classList.remove("active");
  });
  activeView = null; prevView = null;
  activeAbTab = "all"; activeAgTrTab = "flights"; activeTrTab = "all"; activeTTab = "flights";

  $("#current-user-name").textContent = name;
  $("#current-user-role").textContent = roleName(role);
  buildNav(role);
  showScreen("screen-app");
  switchView({ tourist:"dashboard", agent:"agent-packages", admin:"admin-agents" }[role]);
}

$("#logout-btn")?.addEventListener("click", () => {
  // Fully reset all state
  currentUser=null; activeView=null; prevView=null; currentPkg=null; pendingPayment=null;
  activeChips=new Set(); wishlist=new Set();
  activeAbTab="all"; activeAgTrTab="flights"; activeTrTab="all"; activeTTab="flights";
  ALL_VIEWS.forEach(v => {
    const el = document.getElementById("view-"+v);
    if (el) el.classList.remove("active");
  });
  // Reset auth form
  $$(".role-tab").forEach(t=>t.classList.remove("active"));
  $(".role-tab[data-role='tourist']")?.classList.add("active");
  selectedRole="tourist";
  $("#form-tourist").hidden=false; $("#form-staff").hidden=true;
  $("#tourist-otp-wrap").hidden=true; $("#tourist-send-otp").hidden=false; $("#tourist-continue").hidden=true;
  $("#form-tourist").reset(); $("#form-staff").reset();
  showScreen("screen-landing");
});

/* ─────────────────────────────────────────────
   APP NAV
───────────────────────────────────────────── */
const NAV_ITEMS = {
  tourist: [{l:"Dashboard",v:"dashboard"},{l:"Explore",v:"explore"},{l:"Hotels",v:"hotels"},{l:"Transport",v:"transport"},{l:"My Trips",v:"trips"},{l:"Agents",v:"agents"},{l:"About",v:"about"}],
  agent:   [{l:"Packages",v:"agent-packages"},{l:"Hotels",v:"agent-hotels"},{l:"Transport",v:"agent-transport"},{l:"Itineraries",v:"agent-itineraries"},{l:"Bookings",v:"agent-bookings"},{l:"About",v:"about"}],
  admin:   [{l:"Agents",v:"admin-agents"},{l:"Tourists",v:"admin-users"},{l:"Reviews",v:"admin-reviews"},{l:"Reports",v:"admin-reports"},{l:"Packages",v:"admin-packages"},{l:"About",v:"about"}]
};

const ALL_VIEWS = ["dashboard","explore","package","hotels","transport","trips","payment","agents","agent-packages","agent-hotels","agent-transport","agent-itineraries","agent-bookings","admin-agents","admin-users","admin-reviews","admin-reports","admin-packages","about"];

function buildNav(role) {
  const items = NAV_ITEMS[role]||[];
  ["topnav","mobile-nav"].forEach(navId => {
    const nav = document.getElementById(navId);
    if (!nav) return;
    nav.innerHTML = "";
    items.forEach(item => {
      const btn = document.createElement("button");
      btn.textContent = item.l;
      btn.dataset.navView = item.v;
      btn.type = "button";
      btn.addEventListener("click", () => { switchView(item.v); closeMobileNav(); });
      nav.appendChild(btn);
    });
  });
}

function switchView(viewId) {
  ALL_VIEWS.forEach(v => {
    const el = document.getElementById("view-"+v);
    if (el) el.classList.toggle("active", v===viewId);
  });
  $$("[data-nav-view]").forEach(b => b.classList.toggle("active", b.dataset.navView===viewId));
  prevView = activeView; activeView = viewId;
  const renders = {
    dashboard:"renderDashboard", explore:"renderExplore", hotels:"renderHotels", transport:"renderTransport",
    trips:"renderTrips", agents:"renderAgentsView",
    "agent-packages":"renderAgentPackages", "agent-hotels":"renderAgentHotels",
    "agent-transport":"renderAgentTransport", "agent-itineraries":"renderAgentItineraries",
    "agent-bookings":"renderAgentBookings",
    "admin-agents":"renderAdminAgents", "admin-users":"renderAdminUsers",
    "admin-reviews":"renderAdminReviews", "admin-reports":"renderAdminReports",
    "admin-packages":"renderAdminPackages"
  };
  if (renders[viewId]) window[renders[viewId]]?.();
}

// Hamburger
const hamburger  = document.getElementById("hamburger");
const mobileNav  = document.getElementById("mobile-nav");
hamburger?.addEventListener("click", () => {
  const open = !mobileNav.hidden;
  mobileNav.hidden = open;
  hamburger.classList.toggle("open", !open);
});
function closeMobileNav() { if(mobileNav)mobileNav.hidden=true; if(hamburger)hamburger.classList.remove("open"); }

/* ─────────────────────────────────────────────
   TOURIST — DASHBOARD
───────────────────────────────────────────── */
function renderDashboard() {
  const myBookings = bookings.filter(b=>b.touristName===currentUser?.name);
  const upcoming = myBookings.filter(b=>b.status==="Paid" || b.status==="Confirmed").length;
  const spent = myBookings.filter(b=>b.status==="Paid" || b.status==="Confirmed").reduce((sum,b)=>sum+b.totalPrice, 0);

  $("#dash-welcome").textContent = `Welcome back, ${currentUser?.name.split(" ")[0]||"Traveler"}!`;
  $("#dash-upcoming-count").textContent = upcoming;
  $("#dash-spent").textContent = fmt(spent);
  $("#dash-wishlist-count").textContent = wishlist.size;

  // Recommendations (random 3)
  const recGrid = $("#dash-recommended-grid");
  if (recGrid) {
    const recs = [...PACKAGES].sort(()=>.5 - Math.random()).slice(0,3);
    recGrid.innerHTML = recs.map(p => `
      <div class="dest-card" data-pkg-id="${p.id}" tabindex="0" role="button" aria-label="${p.name}">
        ${p.image?`<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.outerHTML='<div class=dest-card-placeholder>${p.emoji}</div>'">`:`<div class="dest-card-placeholder">${p.emoji}</div>`}
        <div class="dest-card-body">
          <h3>${p.name}</h3>
          <div class="dest-meta"><span>${p.destination}, ${p.country}</span><span>${p.days} days</span></div>
          <div class="dest-tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
          <p class="dest-price">${fmt(p.price)} <span>/ person</span></p>
          <button class="wish-btn${wishlist.has(p.id)?" active":""}" data-wish="${p.id}" type="button" title="${wishlist.has(p.id)?"Remove from wishlist":"Save to wishlist"}">${wishlist.has(p.id)?"♥":"♡"} ${wishlist.has(p.id)?"Saved":"Save"}</button>
        </div>
      </div>
    `).join("");
    // Wishlist binding for recommended
    recGrid.querySelectorAll("[data-wish]").forEach(wb => wb.addEventListener("click", e => {
      e.stopPropagation();
      const id = wb.dataset.wish;
      wishlist.has(id) ? wishlist.delete(id) : wishlist.add(id);
      toast(wishlist.has(id) ? "💛 Added to wishlist!" : "Removed from wishlist.");
      persist();
      renderDashboard(); // Re-render to update counts & buttons
    }));
  }

  // Activity Feed
  const feed = $("#dash-activity-feed");
  if (feed) {
    const activities = myBookings.slice().reverse().slice(0, 4).map(b => {
      const isHotel = b.type==="hotel";
      const isTransport = ["flight","bus","cab"].includes(b.type);
      const icon = isHotel ? "🏨" : isTransport ? (b.type==="flight"?"✈️":b.type==="bus"?"🚌":"🚕") : "🎒";
      const actionText = b.status==="Cancelled" ? "Cancelled booking" : "Booked";
      return `<div class="dash-activity-item">
        <div class="icon">${icon}</div>
        <div class="text"><strong>${actionText}</strong> for ${b.destination} (${b.name})</div>
        <div class="time">${fmtDate(b.createdAt)}</div>
      </div>`;
    });
    feed.innerHTML = activities.length ? activities.join("") : `<div class="empty-state" style="padding:20px;border-radius:12px;border:1px dashed var(--border)">No recent activity to show.</div>`;
  }
}
document.getElementById("dash-go-explore")?.addEventListener("click", () => switchView("explore"));

/* ─────────────────────────────────────────────
   TOURIST — EXPLORE
───────────────────────────────────────────── */
function filteredPkgs() {
  const q=$("#search-destination")?.value.trim().toLowerCase()||"";
  const dur=$("#search-duration")?.value||"";
  const bud=+($("#search-budget")?.value||80000);
  const sort=$("#search-sort")?.value||"none";
  let results = PACKAGES.filter(p =>
    (!q || p.name.toLowerCase().includes(q) || p.destination.toLowerCase().includes(q)) &&
    (!dur || durB(p.days)===dur) &&
    (p.price<=bud) &&
    (!activeChips.size || p.tags.some(t=>activeChips.has(t)))
  );
  if (sort === "price-asc") results.sort((a,b)=>a.price-b.price);
  else if (sort === "price-desc") results.sort((a,b)=>b.price-a.price);
  else if (sort === "duration-asc") results.sort((a,b)=>a.days-b.days);
  else if (sort === "duration-desc") results.sort((a,b)=>b.days-a.days);
  else if (sort === "name-asc") results.sort((a,b)=>a.name.localeCompare(b.name));
  return results;
}

function renderExplore() {
  const list=filteredPkgs(), grid=$("#destination-grid"), cnt=$("#results-count");
  if (!grid) return;
  cnt.textContent=list.length;
  grid.innerHTML = list.length
    ? list.map(p=>`
        <div class="dest-card" data-pkg-id="${p.id}" tabindex="0" role="button" aria-label="${p.name}">
          ${p.image?`<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.outerHTML='<div class=dest-card-placeholder>${p.emoji}</div>'">`:`<div class="dest-card-placeholder">${p.emoji}</div>`}
          <div class="dest-card-body">
            <h3>${p.name}</h3>
            <div class="dest-meta"><span>${p.destination}, ${p.country}</span><span>${p.days} days</span></div>
            <div class="dest-tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
            <p class="dest-price">${fmt(p.price)} <span>/ person</span></p>
            <button class="wish-btn${wishlist.has(p.id)?" active":""}" data-wish="${p.id}" type="button" title="${wishlist.has(p.id)?"Remove from wishlist":"Save to wishlist"}">${wishlist.has(p.id)?"♥":"♡"} ${wishlist.has(p.id)?"Saved":"Save"}</button>
          </div>
        </div>`).join("")
    : `<div class="empty-state"><p style="font-size:40px">🔍</p><p>No packages match your filters.</p></div>`;
}

const debouncedRenderExplore = debounce(renderExplore, 300);

document.getElementById("search-destination")?.addEventListener("input", debouncedRenderExplore);
document.getElementById("search-duration")?.addEventListener("change", renderExplore);
document.getElementById("search-sort")?.addEventListener("change", renderExplore);

document.getElementById("search-budget")?.addEventListener("input", () => {
  $("#budget-output").textContent = (+$("#search-budget").value).toLocaleString("en-IN");
  renderExplore();
});

document.getElementById("clear-filters-btn")?.addEventListener("click", () => {
  $("#search-destination").value = "";
  $("#search-duration").value = "";
  $("#search-sort").value = "none";
  const budgetSlider = $("#search-budget");
  if (budgetSlider) { budgetSlider.value = 50000; $("#budget-output").textContent = "50,000"; }
  activeChips.clear();
  $$(".chip[data-interest]").forEach(c => c.classList.remove("active"));
  renderExplore();
});
document.addEventListener("click", e => {
  const chip = e.target.closest(".chip[data-interest]");
  if (!chip) return;
  const i = chip.dataset.interest;
  activeChips.has(i) ? activeChips.delete(i) : activeChips.add(i);
  chip.classList.toggle("active", activeChips.has(i));
  renderExplore();
});
document.addEventListener("click", e => {
  const wb = e.target.closest("[data-wish]");
  if (wb) {
    e.stopPropagation();
    const id = wb.dataset.wish;
    wishlist.has(id) ? wishlist.delete(id) : wishlist.add(id);
    toast(wishlist.has(id) ? "💛 Added to wishlist!" : "Removed from wishlist.");
    persist();
    renderExplore();
    return;
  }
  const card = e.target.closest(".dest-card[data-pkg-id]");
  if (card) openPackage(card.dataset.pkgId);
});
document.addEventListener("keydown", e => {
  if (e.key==="Enter") { const card=e.target.closest(".dest-card[data-pkg-id]"); if(card) openPackage(card.dataset.pkgId); }
});
document.addEventListener("click", e => { if(e.target.id==="back-to-explore") switchView("explore"); });

/* ─────────────────────────────────────────────
   TOURIST — PACKAGE DETAIL
───────────────────────────────────────────── */
function openPackage(pkgId) {
  currentPkg = PACKAGES.find(p=>p.id===pkgId);
  if (!currentPkg) return;
  renderPackageDetail();
  switchView("package");
}

function renderPackageDetail() {
  const p = currentPkg, con = $("#package-detail"); if(!con)return;
  const tags = p.tags.map(t=>`<span class="tag">${t}</span>`).join("");
  const itin = p.itinerary.map(d=>`
    <div class="itinerary-day">
      <div class="itinerary-day-num">Day ${d.day}</div>
      <textarea data-day="${d.day}" aria-label="Day ${d.day}">${d.activities}</textarea>
    </div>`).join("");

  con.innerHTML = `
    <div class="pd-hero">
      ${p.image?`<img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'">`:`<div style="height:270px;background:var(--paper-deep);border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;font-size:64px;margin-bottom:18px">${p.emoji}</div>`}
      <p class="ticket-code" style="margin-top:10px">${p.country.toUpperCase()}</p>
      <h2>${p.name}</h2>
      <div class="pd-meta"><span>📍 ${p.destination}</span><span>📅 ${p.days} days</span><span>💰 ${fmt(p.price)}/person</span></div>
      <div class="pd-tags">${tags}</div>
      <p class="pd-desc">${p.description}</p>
      <h3 style="margin-top:24px;font-size:17px">Day-by-day itinerary</h3>
      <p style="font-size:12px;color:var(--text-muted);margin-bottom:10px">Edit any day to personalise your trip.</p>
      <div class="itinerary-list">${itin}</div>
    </div>
    <div>
      <div class="booking-card">
        <h3>Book this trip</h3>
        <div class="booking-row"><span>Package</span><strong>${p.name}</strong></div>
        <div class="booking-row"><span>Duration</span><strong>${p.days} days</strong></div>
        <div class="booking-row"><span>Per person</span><strong>${fmt(p.price)}</strong></div>
        <hr class="booking-divider">
        <div class="booking-fields">
          <label class="field"><span>Departure date</span><input type="date" id="book-date" min="${today()}"></label>
          <label class="field"><span>Travellers</span>
            <select id="book-travelers">${[1,2,3,4,5,6].map(n=>`<option>${n} traveller${n>1?"s":""}</option>`).join("")}</select></label>
        </div>
        <div class="booking-total"><span>Total</span><strong id="book-total">${fmt(p.price)}</strong></div>
        <div style="font-size:11px;color:var(--text-muted);margin:4px 0 16px">All-inclusive · no hidden fees</div>
        <button class="btn btn-amber" id="pkg-book-btn" type="button" style="width:100%">Proceed to payment →</button>
      </div>
    </div>`;

  con.addEventListener("input", e => {
    if (!e.target.matches("textarea[data-day]")) return;
    const day = p.itinerary.find(d=>d.day===+e.target.dataset.day);
    if (day) day.activities = e.target.value;
  });
  const travEl = $("#book-travelers"), totalEl = $("#book-total");
  travEl?.addEventListener("change", () => { totalEl.textContent = fmt(p.price * (+travEl.selectedIndex+1)); });
  $("#pkg-book-btn")?.addEventListener("click", () => {
    const dateVal = $("#book-date")?.value;
    if (!dateVal) { toast("Please pick a departure date."); return; }
    const travelers = travEl.selectedIndex + 1;
    pendingPayment = { type:"package", ref:p.id, name:p.name, destination:p.destination, detail:`${p.days} days · ${travelers} traveller${travelers>1?"s":""}`, startDate:dateVal, pricePerUnit:p.price, travelers, total:p.price*travelers };
    // Pre-fill Hotels search with this package's destination for convenience
    const hd = document.getElementById("hotel-dest"); if (hd) hd.value = p.destination;
    openPayment();
  });
}

/* ─────────────────────────────────────────────
   TOURIST — HOTELS
───────────────────────────────────────────── */
function renderHotels(filterDest) {
  const grid = $("#hotels-grid"); if(!grid) return;
  const destQ = (filterDest || $("#hotel-dest")?.value||"").toLowerCase();
  const starsQ = $("#hotel-stars")?.value||"";
  const budQ   = +($("#hotel-budget")?.value||20000);

  const list = HOTELS.filter(h =>
    (!destQ || h.destination.toLowerCase().includes(destQ)) &&
    (!starsQ || h.stars===+starsQ) &&
    h.pricePerNight <= budQ
  );

  grid.innerHTML = list.length
    ? list.map(h=>`
        <div class="hotel-card">
          ${h.image?`<img src="${h.image}" alt="${h.name}" loading="lazy" onerror="this.outerHTML='<div class=hotel-card-ph>${h.emoji}</div>'">`:`<div class="hotel-card-ph">${h.emoji}</div>`}
          <div class="hotel-card-body">
            <p class="hotel-name">${h.name}</p>
            <p class="hotel-location">📍 ${h.destination}</p>
            <p class="hotel-stars">${stars(h.stars)} ${h.stars}-Star</p>
            <div class="hotel-amenities">${h.amenities.map(a=>`<span class="amenity">${a}</span>`).join("")}</div>
            <div class="hotel-price">
              <div class="hotel-rate">${fmt(h.pricePerNight)} <span>/ night</span></div>
              <button class="btn btn-amber btn-small" data-book-hotel="${h.id}" type="button">Book</button>
            </div>
          </div>
        </div>`).join("")
    : `<div class="empty-state"><p style="font-size:40px">🏨</p><p>No hotels match your search.</p></div>`;

  grid.querySelectorAll("[data-book-hotel]").forEach(btn => {
    btn.addEventListener("click", () => {
      const hotel = HOTELS.find(h=>h.id===btn.dataset.bookHotel);
      const ci = $("#hotel-checkin")?.value || "";
      const co = $("#hotel-checkout")?.value || "";
      if (!ci || !co) { toast("Please select check-in and check-out dates."); return; }
      if (co <= ci) { toast("Check-out date must be after check-in date."); return; }
      let nights = 1;
      try { const a=new Date(ci), b=new Date(co); nights=Math.max(1,Math.round((b-a)/86400000)); } catch {}
      pendingPayment = { type:"hotel", ref:hotel.id, name:hotel.name, destination:hotel.destination, detail:`${nights} night${nights>1?"s":""}`, startDate:ci, pricePerUnit:hotel.pricePerNight, travelers:nights, total:hotel.pricePerNight*nights };
      openPayment();
    });
  });
}

document.getElementById("hotel-search-btn")?.addEventListener("click", () => renderHotels());
document.getElementById("hotel-budget")?.addEventListener("input", () => {
  $("#hotel-budget-out").textContent = (+$("#hotel-budget").value).toLocaleString("en-IN");
  renderHotels();
});

/* ─────────────────────────────────────────────
   TOURIST — TRANSPORT
───────────────────────────────────────────── */
$$("#view-transport .t-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    $$("#view-transport .t-tab").forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    activeTTab = tab.dataset.ttab;
    renderTransport();
  });
});

function renderTransport() {
  const grid = $("#transport-results"); if(!grid) return;
  const fromQ = ($("#tr-from")?.value||"").toLowerCase();
  const toQ   = ($("#tr-to")?.value||"").toLowerCase();
  const list  = TRANSPORT[activeTTab] || [];
  const filtered = list.filter(t =>
    (!fromQ || t.from.toLowerCase().includes(fromQ)) &&
    (!toQ   || t.to.toLowerCase().includes(toQ))
  );

  grid.innerHTML = filtered.length
    ? filtered.map(t=>`
        <div class="transport-card">
          <div class="transport-icon">${t.icon}</div>
          <div class="transport-info">
            <div class="transport-route">${t.from} → ${t.to}</div>
            <div class="transport-meta">
              <span>🏢 ${t.operator}</span>
              <span>🕐 ${t.dep} – ${t.arr}</span>
              <span>⏱ ${t.duration}</span>
              <span>💺 ${t.seats} seats</span>
            </div>
          </div>
          <div class="transport-price">
            <span class="transport-rate">${fmt(t.price)}</span>
            <span class="transport-rate-note">/ person</span>
            <button class="btn btn-amber btn-small" data-book-tr="${t.id}" style="margin-top:8px" type="button">Book</button>
          </div>
        </div>`).join("")
    : `<div class="empty-state"><p style="font-size:40px">🔍</p><p>No ${activeTTab} found matching your search.</p></div>`;

  grid.querySelectorAll("[data-book-tr]").forEach(btn => {
    btn.addEventListener("click", () => {
      const tr = list.find(t=>t.id===btn.dataset.bookTr);
      const pax = +($("#tr-pax")?.value||1);
      pendingPayment = { type:"transport", ref:tr.id, name:`${tr.from} → ${tr.to} (${tr.operator})`, destination:tr.to, detail:`${pax} passenger${pax>1?"s":""} · ${tr.dep}`, startDate:$("#tr-date")?.value||today(), pricePerUnit:tr.price, travelers:pax, total:tr.price*pax };
      openPayment();
    });
  });
}

document.getElementById("transport-search-btn")?.addEventListener("click", renderTransport);

/* ─────────────────────────────────────────────
   PAYMENT
───────────────────────────────────────────── */
function openPayment() { renderPayment(); switchView("payment"); }

document.addEventListener("click", e => { if(e.target.id==="back-from-payment") switchView(prevView||"explore"); });

function renderPayment() {
  const p=pendingPayment, con=$("#payment-container"); if(!p||!con)return;
  con.innerHTML = `
    <div class="payment-summary">
      <h3>Booking summary</h3>
      <div class="pay-item"><span>Type</span><strong>${p.type.charAt(0).toUpperCase()+p.type.slice(1)}</strong></div>
      <div class="pay-item"><span>Name</span><strong>${p.name}</strong></div>
      <div class="pay-item"><span>Destination</span><strong>${p.destination}</strong></div>
      <div class="pay-item"><span>Detail</span><strong>${p.detail}</strong></div>
      <div class="pay-item"><span>Date</span><strong>${fmtDate(p.startDate)}</strong></div>
      <div class="pay-item"><span>Unit price</span><strong>${fmt(p.pricePerUnit)}</strong></div>
      <div class="pay-item"><span>Quantity</span><strong>${p.travelers}</strong></div>
      <div class="pay-total-row"><span>Total payable</span><strong>${fmt(p.total)}</strong></div>
    </div>
    <div class="payment-form">
      <h3>💳 Payment details</h3>
      <div class="pay-methods">
        <button class="pay-method-btn active" data-pm="card" type="button">💳 Card</button>
        <button class="pay-method-btn" data-pm="upi" type="button">📱 UPI</button>
        <button class="pay-method-btn" data-pm="netbanking" type="button">🏦 Net Banking</button>
      </div>
      <div class="pay-fields" id="pay-fields-wrap"></div>
      <p class="pay-secure-note">🔒 Secured by 256-bit SSL encryption · prototype only</p>
      <button class="btn btn-amber" id="pay-now-btn" type="button" style="width:100%;font-size:16px;padding:14px">
        Pay ${fmt(p.total)} →
      </button>
    </div>`;

  renderPayFields("card");

  con.querySelectorAll(".pay-method-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      con.querySelectorAll(".pay-method-btn").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      renderPayFields(btn.dataset.pm);
    });
  });

  $("#pay-now-btn")?.addEventListener("click", (e) => {
    const activeMethod = con.querySelector(".pay-method-btn.active")?.dataset.pm;
    const form = $("#pay-fields-wrap");
    clearAllErrors(form);
    let valid = true;

    if (activeMethod === "card") {
      const name = $("#pay-card-name"), num = $("#pay-card-num"), exp = $("#pay-card-exp"), cvv = $("#pay-card-cvv");
      if (!name.value.trim()) { setFieldError(name, "Name is required"); valid = false; }
      if (num.value.replace(/\s/g, '').length < 15) { setFieldError(num, "Invalid card number"); valid = false; }
      if (!/^\d{2}\/\d{2}$/.test(exp.value)) { setFieldError(exp, "Format MM/YY"); valid = false; }
      if (cvv.value.length < 3) { setFieldError(cvv, "Invalid CVV"); valid = false; }
    } else if (activeMethod === "upi") {
      const upi = $("#pay-upi-id");
      if (!upi.value || !upi.value.includes("@")) { setFieldError(upi, "Invalid UPI ID"); valid = false; }
    } else {
      const nb = $("#pay-nb-id");
      if (!nb.value.trim()) { setFieldError(nb, "Customer ID is required"); valid = false; }
    }

    if (!valid) return;
    confirmPayment();
  });
}

function renderPayFields(method) {
  const wrap = $("#pay-fields-wrap"); if(!wrap) return;
  if (method==="card") {
    wrap.innerHTML = `
      <label class="field"><span>Cardholder name</span><input type="text" id="pay-card-name" placeholder="${currentUser?.name||"Name on card"}"></label>
      <label class="field"><span>Card number</span><input type="text" id="pay-card-num" placeholder="4242 4242 4242 4242" maxlength="19"></label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <label class="field"><span>Expiry</span><input type="text" id="pay-card-exp" placeholder="MM/YY" maxlength="5"></label>
        <label class="field"><span>CVV</span><input type="password" id="pay-card-cvv" placeholder="•••" maxlength="4"></label>
      </div>`;
  } else if (method==="upi") {
    wrap.innerHTML = `<label class="field"><span>UPI ID</span><input type="text" id="pay-upi-id" placeholder="yourname@upi"></label>`;
  } else {
    wrap.innerHTML = `
      <label class="field"><span>Bank</span>
        <select><option>State Bank of India</option><option>HDFC Bank</option><option>ICICI Bank</option><option>Axis Bank</option><option>Kotak Bank</option></select></label>
      <label class="field"><span>Customer ID / Username</span><input type="text" id="pay-nb-id" placeholder="Net banking ID"></label>`;
  }
}

function confirmPayment() {
  if (!pendingPayment) return;
  const payBtn = $("#pay-now-btn");
  if (payBtn) { payBtn.classList.add("btn-loading"); payBtn.disabled = true; }

  setTimeout(() => {
    const p = pendingPayment;
    const bk = {
      id: `BK-${bookingIdSeq++}`,
      type: p.type, ref: p.ref, name: p.name,
      destination: p.destination, detail: p.detail,
      startDate: p.startDate, totalPrice: p.total,
      travelers: p.travelers, touristName: currentUser?.name||"Guest",
      status: "Paid", createdAt: Date.now()
    };
    bookings.push(bk);
    persist();
    pendingPayment = null;
    if (payBtn) { payBtn.classList.remove("btn-loading"); payBtn.disabled = false; }
    showSuccessModal(bk);
  }, 1800);
}

function showSuccessModal(bk) {
  const modal = document.getElementById("modal-overlay");
  if (!modal) return;
  const colors = ["#C98A2C","#1F6F5C","#A23E2E","#2563A8","#F5E0AD","#D4EDE6"];
  let confettiHTML = "";
  for (let i = 0; i < 40; i++) {
    const c = colors[i % colors.length];
    const left = Math.random()*100;
    const delay = Math.random()*1.2;
    const size = 6 + Math.random()*6;
    confettiHTML += `<div class="confetti" style="left:${left}%;animation-delay:${delay}s;width:${size}px;height:${size}px;background:${c};border-radius:${Math.random()>.5?'50%':'2px'}"></div>`;
  }
  modal.innerHTML = `
    <div class="modal-card">
      <div class="confetti-container">${confettiHTML}</div>
      <div class="success-check"><svg viewBox="0 0 36 36"><path d="M6 18 L14 26 L30 10"/></svg></div>
      <h2>Payment Successful!</h2>
      <p class="modal-sub">Your booking has been confirmed. Here are the details:</p>
      <div class="modal-details">
        <div class="pay-item"><span>Booking ref</span><strong>${bk.id}</strong></div>
        <div class="pay-item"><span>Name</span><strong>${bk.name}</strong></div>
        <div class="pay-item"><span>Destination</span><strong>${bk.destination}</strong></div>
        <div class="pay-item"><span>Date</span><strong>${fmtDate(bk.startDate)}</strong></div>
        <div class="pay-item"><span>Total paid</span><strong style="color:var(--teal);font-size:18px">${fmt(bk.totalPrice)}</strong></div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-primary" id="modal-view-trips" type="button">View My Trips</button>
        <button class="btn btn-ghost" id="modal-close-btn" type="button">Close</button>
      </div>
    </div>`;
  modal.hidden = false;
  modal.querySelector("#modal-view-trips")?.addEventListener("click", () => { modal.hidden = true; switchView("trips"); });
  modal.querySelector("#modal-close-btn")?.addEventListener("click", () => { modal.hidden = true; switchView("trips"); });
  modal.addEventListener("click", e => { if (e.target === modal) { modal.hidden = true; switchView("trips"); } }, { once: true });
}

/* ─────────────────────────────────────────────
   TOURIST — MY TRIPS
───────────────────────────────────────────── */
$$(".tr-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    $$(".tr-tab").forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    activeTrTab = tab.dataset.trtab;
    renderTrips();
  });
});

function renderTrips() {
  const list = $("#trips-list"); if(!list) return;
  let mine = bookings.filter(b=>b.touristName===currentUser?.name);
  if (activeTrTab!=="all") mine = mine.filter(b=>b.type===activeTrTab);
  if (!mine.length) {
    list.innerHTML=`<div class="empty-state"><p style="font-size:40px">🗺️</p><p>No ${activeTrTab==="all"?"":""+activeTrTab+" "}bookings yet.</p></div>`;
    return;
  }
  list.innerHTML = mine.map(b=>ticketHTML(b,{cancellable:b.status==="Pending", canReview:b.status==="Paid"||b.status==="Confirmed"})).join("");
  wireActions(list);
}

/* ─────────────────────────────────────────────
   TOURIST — AGENTS
───────────────────────────────────────────── */
function renderAgentsView() {
  const grid = $("#agents-list"); if(!grid) return;
  grid.innerHTML = AGENTS_DATA.map(a=>`
    <div class="agent-card-app">
      <div class="agent-avatar-app">${a.initials}</div>
      <h3>${a.name}</h3>
      <p class="agent-meta">⭐ ${a.rating} · ${a.exp} · ${a.trips}+ trips</p>
      <div class="agent-specialties">${a.specialties.map(s=>`<span class="specialty-tag">${s}</span>`).join("")}</div>
      <div class="agent-stats">
        <div class="agent-stat-item"><strong>${a.trips}</strong><span>Trips</span></div>
        <div class="agent-stat-item"><strong>${a.rating}</strong><span>Rating</span></div>
        <div class="agent-stat-item"><strong>${a.exp}</strong><span>Experience</span></div>
      </div>
      <button class="btn btn-primary btn-small" style="width:100%" data-contact-agent="${a.id}" type="button">Book consultation</button>
    </div>`).join("");
  grid.querySelectorAll("[data-contact-agent]").forEach(btn => {
    btn.addEventListener("click", () => {
      const a = AGENTS_DATA.find(x=>x.id===btn.dataset.contactAgent);
      toast(`📧 Consultation request sent to ${a.name}! They will contact you within 24 hours.`, 4000);
    });
  });
}

/* ─────────────────────────────────────────────
   TICKET HTML
───────────────────────────────────────────── */
function ticketHTML(b, {cancellable=false, agentControls=false, canReview=false}={}) {
  const typeBadge = {package:"badge-package",hotel:"badge-hotel",transport:"badge-transport"}[b.type||"package"];
  const typeLabel = {package:"Package",hotel:"Hotel",transport:"Transport"}[b.type||"package"];
  return `
    <div class="ticket" id="tk-${b.id}">
      <div class="ticket-main">
        <span class="ticket-type-badge ${typeBadge}">${typeLabel}</span>
        <h3>${b.name}</h3>
        <p class="ticket-sub">${b.destination} · ${b.detail||""}</p>
        <div class="ticket-meta-row">
          <div><strong>${fmtDate(b.startDate)}</strong><span>Date</span></div>
          <div><strong>${b.touristName}</strong><span>Traveller</span></div>
          <div><strong>${fmt(b.totalPrice)}</strong><span>Total</span></div>
          <div><strong>${b.id}</strong><span>Booking ref</span></div>
        </div>
      </div>
      <div class="ticket-side">
        <span class="status-badge status-${b.status}">${b.status}</span>
        <button class="btn btn-ghost btn-xs" data-print="${b.id}" type="button" title="Print e-ticket">🖨 Print</button>
        ${canReview?`<button class="btn btn-ghost btn-xs" data-review="${b.id}" type="button" style="color:var(--amber)">⭐ Review</button>`:""}
        ${cancellable?`<button class="btn btn-danger btn-xs" data-cancel="${b.id}" type="button">Cancel</button>`:""}
        ${agentControls&&b.status==="Pending"?`
          <button class="btn btn-confirm btn-xs" data-confirm="${b.id}" type="button">✓ Confirm</button>
          <button class="btn btn-danger btn-xs" data-reject="${b.id}" type="button">✗ Reject</button>`:""}
      </div>
    </div>`;
}

function wireActions(root) {
  root.querySelectorAll("[data-print]").forEach(btn => {
    btn.addEventListener("click", () => {
      const bk = bookings.find(b=>b.id===btn.dataset.print); if(!bk) return;
      const w = window.open("","_blank","width=600,height=500");
      w.document.write(`<!DOCTYPE html><html><head><title>E-Ticket ${bk.id}</title>
        <style>body{font-family:sans-serif;padding:32px;color:#16241F}
        h2{margin:0 0 4px}p{margin:4px 0;font-size:14px;color:#555}
        .ref{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#C98A2C;font-weight:700}
        .total{font-size:22px;font-weight:700;margin-top:16px}
        hr{border:none;border-top:1px dashed #ccc;margin:16px 0}
        @media print{button{display:none}}</style></head>
        <body>
        <p class="ref">TRAILMARK · E-TICKET</p>
        <h2>${bk.name}</h2>
        <p>📍 ${bk.destination} &nbsp;·&nbsp; ${bk.detail||""}</p>
        <hr>
        <p><strong>Booking ref:</strong> ${bk.id}</p>
        <p><strong>Traveller:</strong> ${bk.touristName}</p>
        <p><strong>Date:</strong> ${fmtDate(bk.startDate)}</p>
        <p><strong>Status:</strong> ${bk.status}</p>
        <p class="total">Total paid: ₹${(+bk.totalPrice).toLocaleString("en-IN")}</p>
        <hr>
        <p style="font-size:11px;color:#999">Prototype — no real booking was made. Trailmark Travel Pvt. Ltd.</p>
        <br><button onclick="window.print()">🖨 Print</button>
        </body></html>`);
      w.document.close();
    });
  });
  root.querySelectorAll("[data-cancel]").forEach(btn => {
    btn.addEventListener("click", () => {
      const bk=bookings.find(b=>b.id===btn.dataset.cancel);
      if (bk) { bk.status="Cancelled"; persist(); toast("Booking cancelled."); renderTrips(); }
    });
  });
  root.querySelectorAll("[data-review]").forEach(btn => {
    btn.addEventListener("click", () => {
      const bk=bookings.find(b=>b.id===btn.dataset.review);
      if (bk) openReviewModal(bk);
    });
  });
  root.querySelectorAll("[data-confirm]").forEach(btn => {
    btn.addEventListener("click", () => {
      const bk=bookings.find(b=>b.id===btn.dataset.confirm);
      if (bk) { bk.status="Confirmed"; persist(); toast(`${bk.id} confirmed.`); renderAgentBookings(); }
    });
  });
  root.querySelectorAll("[data-reject]").forEach(btn => {
    btn.addEventListener("click", () => {
      const bk=bookings.find(b=>b.id===btn.dataset.reject);
      if (bk) { bk.status="Cancelled"; persist(); toast(`${bk.id} rejected.`); renderAgentBookings(); }
    });
  });
}

function openReviewModal(bk) {
  const modal = document.getElementById("modal-overlay");
  if (!modal) return;
  modal.innerHTML = `
    <div class="modal-card">
      <h2>Write a Review</h2>
      <p class="modal-sub">How was your experience with ${bk.name}?</p>
      <form id="review-form">
        <div class="star-picker">
          <input type="radio" id="star5" name="rating" value="5"><label for="star5" title="5 stars">★</label>
          <input type="radio" id="star4" name="rating" value="4"><label for="star4" title="4 stars">★</label>
          <input type="radio" id="star3" name="rating" value="3"><label for="star3" title="3 stars">★</label>
          <input type="radio" id="star2" name="rating" value="2"><label for="star2" title="2 stars">★</label>
          <input type="radio" id="star1" name="rating" value="1"><label for="star1" title="1 star">★</label>
        </div>
        <textarea id="review-text" class="field" style="width:100%;height:100px;padding:12px;margin-bottom:20px;border-radius:var(--radius);border:1px solid var(--border);background:var(--paper-deep);color:var(--text)" placeholder="Share your experience..."></textarea>
        <div class="modal-actions">
          <button class="btn btn-primary" type="submit">Submit Review</button>
          <button class="btn btn-ghost" id="modal-close-rev" type="button">Cancel</button>
        </div>
      </form>
    </div>`;
  modal.hidden = false;
  modal.querySelector("#modal-close-rev")?.addEventListener("click", () => { modal.hidden = true; });
  modal.querySelector("#review-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const rating = e.target.rating.value;
    const text = esc($("#review-text").value.trim());
    if (!rating) { toast("Please select a rating."); return; }
    if (!text) { toast("Please write a review."); return; }
    
    REVIEWS.unshift({
      id: "R-"+Date.now(),
      author: currentUser.name,
      rating: +rating,
      text: text,
      status: "Pending" // Will show up in Admin panel
    });
    persist();
    toast("Review submitted! Waiting for approval.");
    modal.hidden = true;
  });
}

/* ─────────────────────────────────────────────
   AGENT — MANAGE PACKAGES
───────────────────────────────────────────── */
function renderAgentPackages() {
  const t=$("#agent-package-table"); if(!t) return;
  t.innerHTML = PACKAGES.map(p=>`
    <div class="agent-row">
      <div class="agent-row-placeholder">${p.emoji}</div>
      <div class="agent-row-info">
        <strong>${p.name}</strong>
        <span>${p.destination}, ${p.country} · ${p.days} days · ${fmt(p.price)}/person · ${p.tags.join(", ")}</span>
      </div>
      <div class="agent-row-actions">
        <button class="btn btn-ghost btn-small" data-edit-pkg="${p.id}" type="button">Edit</button>
        <button class="btn btn-danger btn-small" data-del-pkg="${p.id}" type="button">Delete</button>
      </div>
    </div>`).join("")||`<div class="empty-state">No packages. Add one above.</div>`;

  t.querySelectorAll("[data-edit-pkg]").forEach(b=>b.addEventListener("click",()=>openPkgForm(b.dataset.editPkg)));
  t.querySelectorAll("[data-del-pkg]").forEach(b=>b.addEventListener("click",()=>{
    const idx=PACKAGES.findIndex(p=>p.id===b.dataset.delPkg);
    if(idx!==-1){PACKAGES.splice(idx,1);toast("Package deleted.");renderAgentPackages();}
  }));
}

document.addEventListener("click", e => { if(e.target.id==="new-package-btn") openPkgForm(null); });

function openPkgForm(pkgId) {
  editingPkgId=pkgId;
  const p=pkgId?PACKAGES.find(x=>x.id===pkgId):null;
  const wrap=$("#agent-package-form-wrap"); if(!wrap) return;
  wrap.hidden=false;
  wrap.innerHTML=`
    <div class="package-form">
      <label class="field full"><span>Package name</span><input type="text" id="pf-name" value="${p?p.name:""}" placeholder="e.g. Goa Beach Escape"></label>
      <label class="field"><span>Destination</span><input type="text" id="pf-dest" value="${p?p.destination:""}" placeholder="e.g. Goa"></label>
      <label class="field"><span>Country</span><input type="text" id="pf-country" value="${p?p.country:""}" placeholder="e.g. India"></label>
      <label class="field"><span>Days</span><input type="number" id="pf-days" value="${p?p.days:""}" min="1" max="30"></label>
      <label class="field"><span>Price ₹/person</span><input type="number" id="pf-price" value="${p?p.price:""}" min="1000"></label>
      <label class="field"><span>Tags (comma-separated)</span><input type="text" id="pf-tags" value="${p?p.tags.join(", "):""}" placeholder="beach, adventure"></label>
      <label class="field full"><span>Description</span><textarea id="pf-desc" rows="2">${p?p.description:""}</textarea></label>
      <div class="package-form-actions">
        <button class="btn btn-primary" id="pf-save" type="button">${p?"Update":"Add package"}</button>
        <button class="btn btn-ghost" id="pf-cancel" type="button">Cancel</button>
      </div>
    </div>`;
  $("#pf-cancel").addEventListener("click",()=>{wrap.hidden=true;wrap.innerHTML="";});
  $("#pf-save").addEventListener("click",()=>{
    const name=$("#pf-name").value.trim(), dest=$("#pf-dest").value.trim(), country=$("#pf-country").value.trim();
    const days=+$("#pf-days").value, price=+$("#pf-price").value;
    const tags=$("#pf-tags").value.split(",").map(t=>t.trim()).filter(Boolean);
    const desc=$("#pf-desc").value.trim();
    if(!name||!dest||!days||!price){toast("Please fill in all required fields.");return;}
    if(editingPkgId){
      const idx=PACKAGES.findIndex(x=>x.id===editingPkgId);
      if(idx!==-1){PACKAGES[idx]={...PACKAGES[idx],name,destination:dest,country,days,price,tags,description:desc};toast("Package updated!");}
    } else {
      PACKAGES.push({id:`pkg-${Date.now()}`,name,destination:dest,country,days,price,tags,description:desc,emoji:"✈️",image:null,itinerary:buildItinerary(dest,days,["Explore the local area."])});
      toast("Package added!");
    }
    wrap.hidden=true;wrap.innerHTML="";renderAgentPackages();
  });
}

/* ─────────────────────────────────────────────
   AGENT — MANAGE HOTELS
───────────────────────────────────────────── */
function renderAgentHotels() {
  const t=$("#agent-hotel-table"); if(!t) return;
  t.innerHTML=HOTELS.map(h=>`
    <div class="agent-row">
      <div class="agent-row-placeholder">${h.emoji}</div>
      <div class="agent-row-info">
        <strong>${h.name}</strong>
        <span>${h.destination} · ${stars(h.stars)} · ${fmt(h.pricePerNight)}/night · ${h.amenities.join(", ")}</span>
      </div>
      <div class="agent-row-actions">
        <button class="btn btn-ghost btn-small" data-edit-hotel="${h.id}" type="button">Edit</button>
        <button class="btn btn-danger btn-small" data-del-hotel="${h.id}" type="button">Delete</button>
      </div>
    </div>`).join("");
  t.querySelectorAll("[data-del-hotel]").forEach(b=>b.addEventListener("click",()=>{
    const idx=HOTELS.findIndex(h=>h.id===b.dataset.delHotel);
    if(idx!==-1){HOTELS.splice(idx,1);toast("Hotel removed.");renderAgentHotels();}
  }));
  t.querySelectorAll("[data-edit-hotel]").forEach(b=>b.addEventListener("click",()=>openHotelForm(b.dataset.editHotel)));
}

document.addEventListener("click", e => {
  if(e.target.id==="new-hotel-btn") openHotelForm(null);
});

function openHotelForm(hotelId) {
  const h = hotelId ? HOTELS.find(x=>x.id===hotelId) : null;
  const wrap = $("#agent-hotel-form-wrap"); if(!wrap) return;
  wrap.hidden = false;
  wrap.innerHTML = `
    <div class="package-form">
      <label class="field"><span>Hotel name</span><input type="text" id="hf-name" value="${h?h.name:""}" placeholder="e.g. The Leela Goa"></label>
      <label class="field"><span>Destination</span><input type="text" id="hf-dest" value="${h?h.destination:""}" placeholder="e.g. Goa"></label>
      <label class="field"><span>Stars (1–5)</span><input type="number" id="hf-stars" value="${h?h.stars:3}" min="1" max="5"></label>
      <label class="field"><span>Price ₹/night</span><input type="number" id="hf-price" value="${h?h.pricePerNight:""}" min="200"></label>
      <label class="field full"><span>Amenities (comma-separated)</span><input type="text" id="hf-amenities" value="${h?h.amenities.join(", "):""}" placeholder="WiFi, Pool, Spa"></label>
      <div class="package-form-actions">
        <button class="btn btn-primary" id="hf-save" type="button">${h?"Update hotel":"Add hotel"}</button>
        <button class="btn btn-ghost" id="hf-cancel" type="button">Cancel</button>
      </div>
    </div>`;
  $("#hf-cancel").addEventListener("click",()=>{wrap.hidden=true;wrap.innerHTML="";});
  $("#hf-save").addEventListener("click",()=>{
    const name=$("#hf-name").value.trim(), dest=$("#hf-dest").value.trim();
    const starsV=+$("#hf-stars").value, price=+$("#hf-price").value;
    const amenities=$("#hf-amenities").value.split(",").map(a=>a.trim()).filter(Boolean);
    if(!name||!dest||!starsV||!price){toast("Please fill in all required fields.");return;}
    if(hotelId){
      const idx=HOTELS.findIndex(x=>x.id===hotelId);
      if(idx!==-1){HOTELS[idx]={...HOTELS[idx],name,destination:dest,stars:starsV,pricePerNight:price,amenities};toast("Hotel updated!");}
    } else {
      HOTELS.push({id:`h-${Date.now()}`,name,destination:dest,stars:starsV,pricePerNight:price,amenities,emoji:"🏨",image:null});
      toast("Hotel added!");
    }
    wrap.hidden=true;wrap.innerHTML="";renderAgentHotels();
  });
}

/* ─────────────────────────────────────────────
   AGENT — MANAGE TRANSPORT
───────────────────────────────────────────── */
function renderAgentTransport() {
  const t=$("#agent-transport-table"); if(!t) return;
  const list=TRANSPORT[activeAgTrTab]||[];
  t.innerHTML = list.map(tr=>`
    <div class="agent-row">
      <div class="agent-row-placeholder">${tr.icon}</div>
      <div class="agent-row-info">
        <strong>${tr.from} → ${tr.to}</strong>
        <span>${tr.operator} · ${tr.dep}–${tr.arr} · ${tr.duration} · ${fmt(tr.price)}/person · ${tr.seats} seats</span>
      </div>
      <div class="agent-row-actions">
        <button class="btn btn-ghost btn-small" data-edit-tr="${tr.id}" type="button">Edit</button>
        <button class="btn btn-danger btn-small" data-del-tr="${tr.id}" type="button">Delete</button>
      </div>
    </div>`).join("")||`<div class="empty-state">No routes. Add one above.</div>`;
  t.querySelectorAll("[data-del-tr]").forEach(b=>b.addEventListener("click",()=>{
    const idx=list.findIndex(x=>x.id===b.dataset.delTr);
    if(idx!==-1){list.splice(idx,1);toast("Route deleted.");renderAgentTransport();}
  }));
  t.querySelectorAll("[data-edit-tr]").forEach(b=>b.addEventListener("click",()=>openTransportForm(b.dataset.editTr)));
}

document.addEventListener("click", e=>{
  const tab=e.target.closest("[data-agtr]");
  if(tab && document.getElementById("view-agent-transport")?.classList.contains("active")){
    document.querySelectorAll("[data-agtr]").forEach(x=>x.classList.remove("active"));
    tab.classList.add("active");
    activeAgTrTab=tab.dataset.agtr;
    renderAgentTransport();
  }
});
document.addEventListener("click", e=>{ if(e.target.id==="new-transport-btn") openTransportForm(null); });

function openTransportForm(trId) {
  const list=TRANSPORT[activeAgTrTab]||[];
  const tr=trId?list.find(x=>x.id===trId):null;
  const wrap=$("#agent-transport-form-wrap"); if(!wrap) return;
  wrap.hidden=false;
  const icons={flights:"✈️",buses:"🚌",cabs:"🚗"};
  wrap.innerHTML=`
    <div class="package-form">
      <label class="field"><span>From</span><input type="text" id="tf-from" value="${tr?tr.from:""}" placeholder="e.g. Mumbai"></label>
      <label class="field"><span>To</span><input type="text" id="tf-to" value="${tr?tr.to:""}" placeholder="e.g. Goa"></label>
      <label class="field"><span>Operator</span><input type="text" id="tf-op" value="${tr?tr.operator:""}" placeholder="e.g. IndiGo"></label>
      <label class="field"><span>Departure</span><input type="text" id="tf-dep" value="${tr?tr.dep:""}" placeholder="07:30"></label>
      <label class="field"><span>Arrival</span><input type="text" id="tf-arr" value="${tr?tr.arr:""}" placeholder="09:00"></label>
      <label class="field"><span>Duration</span><input type="text" id="tf-dur" value="${tr?tr.duration:""}" placeholder="1h 30m"></label>
      <label class="field"><span>Price ₹/person</span><input type="number" id="tf-price" value="${tr?tr.price:""}" min="50"></label>
      <label class="field"><span>Seats</span><input type="number" id="tf-seats" value="${tr?tr.seats:""}" min="1"></label>
      <div class="package-form-actions">
        <button class="btn btn-primary" id="tf-save" type="button">${tr?"Update":"Add route"}</button>
        <button class="btn btn-ghost" id="tf-cancel" type="button">Cancel</button>
      </div>
    </div>`;
  $("#tf-cancel").addEventListener("click",()=>{wrap.hidden=true;wrap.innerHTML="";});
  $("#tf-save").addEventListener("click",()=>{
    const from=$("#tf-from").value.trim(), to=$("#tf-to").value.trim(), op=$("#tf-op").value.trim();
    const dep=$("#tf-dep").value.trim(), arr=$("#tf-arr").value.trim(), dur=$("#tf-dur").value.trim();
    const price=+$("#tf-price").value, seats=+$("#tf-seats").value;
    if(!from||!to||!op||!price){toast("Please fill in all required fields.");return;}
    if(trId){
      const idx=list.findIndex(x=>x.id===trId);
      if(idx!==-1){list[idx]={...list[idx],from,to,operator:op,dep,arr,duration:dur,price,seats};toast("Route updated!");}
    } else {
      list.push({id:`${activeAgTrTab[0]}${Date.now()}`,from,to,icon:icons[activeAgTrTab],operator:op,dep,arr,duration:dur,price,seats,type:activeAgTrTab});
      toast("Route added!");
    }
    wrap.hidden=true;wrap.innerHTML="";renderAgentTransport();
  });
}

/* ─────────────────────────────────────────────
   AGENT — MANAGE ITINERARIES
───────────────────────────────────────────── */
function renderAgentItineraries() {
  const picker=$("#agent-itin-picker"), editor=$("#agent-itin-editor");
  if(!picker) return;
  editor.hidden=true; editor.innerHTML="";
  picker.innerHTML=PACKAGES.map(p=>`
    <div class="agent-row">
      <div class="agent-row-placeholder">${p.emoji}</div>
      <div class="agent-row-info">
        <strong>${p.name}</strong>
        <span>${p.destination} · ${p.days} days · ${p.itinerary.length} days in itinerary</span>
      </div>
      <div class="agent-row-actions">
        <button class="btn btn-primary btn-small" data-edit-itin="${p.id}" type="button">Edit itinerary</button>
      </div>
    </div>`).join("");
  picker.querySelectorAll("[data-edit-itin]").forEach(b=>b.addEventListener("click",()=>{
    const p=PACKAGES.find(x=>x.id===b.dataset.editItin); if(!p) return;
    editor.hidden=false;
    editor.innerHTML=`
      <div style="background:var(--paper-raised);border:1px solid var(--border);border-radius:var(--radius-lg);padding:22px;margin-top:16px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <h3 style="margin:0">${p.name} — Itinerary</h3>
          <button class="btn btn-ghost btn-small" id="itin-close-btn" type="button">Close</button>
        </div>
        <div class="itinerary-list" id="agent-itin-list">
          ${p.itinerary.map(d=>`
            <div class="itinerary-day">
              <div class="itinerary-day-num">Day ${d.day}</div>
              <textarea data-itin-day="${d.day}" data-itin-pkg="${p.id}" aria-label="Day ${d.day}">${d.activities}</textarea>
            </div>`).join("")}
        </div>
        <div style="margin-top:14px;display:flex;gap:10px">
          <button class="btn btn-primary btn-small" id="itin-add-day-btn" type="button">+ Add day</button>
          <button class="btn btn-amber btn-small" id="itin-save-btn" type="button">Save itinerary</button>
        </div>
      </div>`;
    $("#itin-close-btn").addEventListener("click",()=>{editor.hidden=true;editor.innerHTML="";});
    editor.addEventListener("input",ev=>{
      if(!ev.target.matches("[data-itin-day]")) return;
      const day=p.itinerary.find(d=>d.day===+ev.target.dataset.itinDay);
      if(day) day.activities=ev.target.value;
    });
    $("#itin-add-day-btn").addEventListener("click",()=>{
      const newDay={day:p.itinerary.length+1, activities:`Day ${p.itinerary.length+1} — explore the local area.`};
      p.itinerary.push(newDay); p.days=p.itinerary.length;
      const list=$("#agent-itin-list");
      const row=document.createElement("div"); row.className="itinerary-day";
      row.innerHTML=`<div class="itinerary-day-num">Day ${newDay.day}</div><textarea data-itin-day="${newDay.day}" data-itin-pkg="${p.id}">${newDay.activities}</textarea>`;
      list.appendChild(row);
      row.querySelector("textarea").addEventListener("input",ev=>{ newDay.activities=ev.target.value; });
      toast(`Day ${newDay.day} added.`);
    });
    $("#itin-save-btn").addEventListener("click",()=>{toast(`Itinerary for "${p.name}" saved!`);});
  }));
}

/* ─────────────────────────────────────────────
   AGENT — BOOKING REQUESTS (tabbed by type)
───────────────────────────────────────────── */
function renderAgentBookings() {
  const list=$("#agent-bookings-list"); if(!list) return;
  const filtered = activeAbTab==="all" ? bookings : bookings.filter(b=>b.type===activeAbTab);
  const sorted=[...filtered].sort((a,b)=>b.createdAt-a.createdAt);
  if(!sorted.length){list.innerHTML=`<div class="empty-state"><p style="font-size:36px">📭</p><p>No ${activeAbTab==="all"?"":""+activeAbTab+" "}bookings yet.</p></div>`;return;}
  list.innerHTML=sorted.map(b=>ticketHTML(b,{agentControls:true})).join("");
  wireActions(list);
}

document.addEventListener("click", e=>{
  const tab=e.target.closest("[data-abtab]");
  if(tab && document.getElementById("view-agent-bookings")?.classList.contains("active")){
    document.querySelectorAll("[data-abtab]").forEach(x=>x.classList.remove("active"));
    tab.classList.add("active");
    activeAbTab=tab.dataset.abtab;
    renderAgentBookings();
  }
});

/* ─────────────────────────────────────────────
   ADMIN — TRAVEL AGENTS
───────────────────────────────────────────── */
function renderAdminAgents() {
  const t=$("#admin-agents-table"); if(!t) return;
  t.innerHTML=AGENTS_DATA.map(a=>`
    <div class="agent-row">
      <div class="agent-row-placeholder" style="background:var(--ink);color:var(--amber);border-radius:50%;width:48px;height:48px;font-family:var(--font-display);font-weight:700;font-size:16px;display:flex;align-items:center;justify-content:center">${a.initials}</div>
      <div class="agent-row-info">
        <strong>${a.name}</strong>
        <span>${a.specialties.join(", ")} · ⭐ ${a.rating} · ${a.trips} trips · ${a.exp} · <span class="status-badge status-${a.status==="Active"?"Confirmed":"Cancelled"}" style="font-size:9px;padding:2px 6px">${a.status}</span></span>
      </div>
      <div class="agent-row-actions">
        ${a.status==="Active"
          ? `<button class="btn btn-danger btn-small" data-suspend-ag="${a.id}" type="button">Suspend</button>`
          : `<button class="btn btn-confirm btn-small" data-activate-ag="${a.id}" type="button">Activate</button>`}
        <button class="btn btn-ghost btn-small" data-view-ag="${a.id}" type="button">View profile</button>
      </div>
    </div>`).join("");
  t.querySelectorAll("[data-suspend-ag]").forEach(b=>b.addEventListener("click",()=>{
    const a=AGENTS_DATA.find(x=>x.id===b.dataset.suspendAg);
    if(a){a.status="Suspended";toast(`${a.name} suspended.`);renderAdminAgents();}
  }));
  t.querySelectorAll("[data-activate-ag]").forEach(b=>b.addEventListener("click",()=>{
    const a=AGENTS_DATA.find(x=>x.id===b.dataset.activateAg);
    if(a){a.status="Active";toast(`${a.name} reactivated.`);renderAdminAgents();}
  }));
  t.querySelectorAll("[data-view-ag]").forEach(b=>b.addEventListener("click",()=>{
    const a=AGENTS_DATA.find(x=>x.id===b.dataset.viewAg);
    if(!a) return;
    const agBks=bookings.filter(bk=>bk.touristName===a.name||a.specialties.some(s=>bk.destination?.includes(s)));
    toast(`${a.name}: ⭐${a.rating} rating · ${a.trips} trips · ${a.exp} experience`);
  }));
}

/* ─────────────────────────────────────────────
   ADMIN — USERS (Tourists only)
───────────────────────────────────────────── */
function renderAdminUsers() {
  const t=$("#admin-users-table"); if(!t) return;
  const tourists=users.filter(u=>u.role==="Tourist");
  t.innerHTML=tourists.map(u=>`
    <div class="agent-row">
      <div class="agent-row-placeholder">🧳</div>
      <div class="agent-row-info">
        <strong>${u.name}</strong>
        <span>Tourist · Bookings: ${bookings.filter(b=>b.touristName===u.name).length} · <span class="status-badge status-${u.status==="Active"?"Confirmed":"Cancelled"}" style="font-size:9px;padding:2px 6px">${u.status}</span></span>
      </div>
      <div class="agent-row-actions">
        ${u.status==="Active"?`<button class="btn btn-danger btn-small" data-suspend="${u.id}" type="button">Suspend</button>`:`<button class="btn btn-confirm btn-small" data-activate="${u.id}" type="button">Activate</button>`}
        <button class="btn btn-danger btn-small" data-del-user="${u.id}" type="button">Delete</button>
      </div>
    </div>`).join("")||`<div class="empty-state">No tourist accounts found.</div>`;
  t.querySelectorAll("[data-suspend]").forEach(b=>b.addEventListener("click",()=>{const u=users.find(x=>x.id===b.dataset.suspend);if(u){u.status="Suspended";persist();toast(`${u.name} suspended.`);renderAdminUsers();}}));
  t.querySelectorAll("[data-activate]").forEach(b=>b.addEventListener("click",()=>{const u=users.find(x=>x.id===b.dataset.activate);if(u){u.status="Active";persist();toast(`${u.name} reactivated.`);renderAdminUsers();}}));
  t.querySelectorAll("[data-del-user]").forEach(b=>b.addEventListener("click",()=>{const idx=users.findIndex(x=>x.id===b.dataset.delUser);if(idx!==-1){const u=users.splice(idx,1)[0];persist();toast(`${u.name} deleted.`);renderAdminUsers();}}));
}

/* ─────────────────────────────────────────────
   ADMIN — REVIEWS
───────────────────────────────────────────── */
function renderAdminReviews() {
  const list=$("#admin-reviews-list"); if(!list) return;
  list.innerHTML=REVIEWS.map(r=>`
    <div class="ticket" id="rv-${r.id}">
      <div class="ticket-main">
        <span class="ticket-type-badge ${r.status==="Approved"?"badge-package":"badge-hotel"}">${r.status}</span>
        <h3>${r.author} — ${"⭐".repeat(r.rating)}</h3>
        <p class="ticket-sub">${r.pkg} · ${r.date}</p>
        <p style="font-size:14px;color:var(--text-muted);font-style:italic;margin-top:6px">"${r.text}"</p>
      </div>
      <div class="ticket-side">
        ${r.status==="Pending"
          ? `<button class="btn btn-confirm btn-xs" data-approve-rv="${r.id}" type="button">✓ Approve</button>
             <button class="btn btn-danger btn-xs" data-dismiss-rv="${r.id}" type="button">✗ Dismiss</button>`
          : `<span style="font-size:11px;color:var(--teal);font-weight:700">Published</span>`}
      </div>
    </div>`).join("")||`<div class="empty-state">No reviews yet.</div>`;
  list.querySelectorAll("[data-approve-rv]").forEach(b=>b.addEventListener("click",()=>{
    const r=REVIEWS.find(x=>x.id===b.dataset.approveRv);
    if(r){r.status="Approved";persist();toast(`Review by ${r.author} approved.`);renderAdminReviews();}
  }));
  list.querySelectorAll("[data-dismiss-rv]").forEach(b=>b.addEventListener("click",()=>{
    const idx=REVIEWS.findIndex(x=>x.id===b.dataset.dismissRv);
    if(idx!==-1){REVIEWS.splice(idx,1);persist();toast("Review dismissed.");renderAdminReviews();}
  }));
}

/* ─────────────────────────────────────────────
   ADMIN — REPORTS
───────────────────────────────────────────── */
function renderAdminReports() {
  const total=bookings.length;
  const confirmed=bookings.filter(b=>["Confirmed","Paid"].includes(b.status)).length;
  const pending=bookings.filter(b=>b.status==="Pending").length;
  const cancelled=bookings.filter(b=>b.status==="Cancelled").length;
  const revenue=bookings.filter(b=>["Confirmed","Paid"].includes(b.status)).reduce((s,b)=>s+b.totalPrice,0);
  const pkgBks=bookings.filter(b=>b.type==="package").length;
  const hotelBks=bookings.filter(b=>b.type==="hotel").length;
  const trBks=bookings.filter(b=>b.type==="transport").length;
  const activeAgents=AGENTS_DATA.filter(a=>a.status==="Active").length;
  const tripsPln=PACKAGES.length;
  const approvedRevs=REVIEWS.filter(r=>r.status==="Approved").length;

  $("#report-stats").innerHTML=`
    <div class="stat-card"><strong>${fmt(revenue)}</strong><span>Total revenue</span></div>
    <div class="stat-card"><strong>${total}</strong><span>Total bookings</span></div>
    <div class="stat-card"><strong>${confirmed}</strong><span>Confirmed</span></div>
    <div class="stat-card"><strong>${pending}</strong><span>Pending</span></div>
    <div class="stat-card"><strong>${cancelled}</strong><span>Cancelled</span></div>
    <div class="stat-card"><strong>${tripsPln}</strong><span>Trips planned</span></div>
    <div class="stat-card"><strong>${activeAgents}</strong><span>Active agents</span></div>
    <div class="stat-card"><strong>${approvedRevs}</strong><span>Published reviews</span></div>
    <div class="stat-card"><strong>${users.filter(u=>u.role==="Tourist").length}</strong><span>Tourists</span></div>
    <div class="stat-card"><strong>${HOTELS.length}</strong><span>Partner hotels</span></div>`;

  // Bookings by type
  const typeData=[["Packages",pkgBks],["Hotels",hotelBks],["Transport",trBks]];
  const maxT=Math.max(...typeData.map(x=>x[1]),1);
  $("#report-chart-type").innerHTML=typeData.map(([l,c])=>`
    <div class="bar-row">
      <div class="bar-label">${l}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${(c/maxT*100).toFixed(1)}%"></div></div>
      <div class="bar-value">${c}</div>
    </div>`).join("");

  // Bookings by destination
  const byDest={};
  bookings.forEach(b=>{byDest[b.destination]=(byDest[b.destination]||0)+1;});
  const maxV=Math.max(...Object.values(byDest),1);
  $("#report-chart").innerHTML=Object.entries(byDest).sort((a,b)=>b[1]-a[1]).map(([d,c])=>`
    <div class="bar-row">
      <div class="bar-label">${d}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${(c/maxV*100).toFixed(1)}%"></div></div>
      <div class="bar-value">${c}</div>
    </div>`).join("")||"<p style='font-size:14px;color:var(--text-muted)'>No data yet.</p>";

  // Revenue by month
  const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const revData=[82000,91000,67000,115000,143000,178000,212000,198000,167000,234000,256000,289000];
  const maxR=Math.max(...revData);
  $("#revenue-chart").innerHTML=months.map((m,i)=>`
    <div class="bar-row">
      <div class="bar-label">${m} '26</div>
      <div class="bar-track"><div class="bar-fill amber" style="width:${(revData[i]/maxR*100).toFixed(1)}%"></div></div>
      <div class="bar-value" style="font-size:10px">${(revData[i]/1000).toFixed(0)}K</div>
    </div>`).join("");

  // Top agents by trips
  const maxAg=Math.max(...AGENTS_DATA.map(a=>a.trips),1);
  $("#report-chart-agents").innerHTML=[...AGENTS_DATA].sort((a,b)=>b.trips-a.trips).map(a=>`
    <div class="bar-row">
      <div class="bar-label">${a.name.split(" ")[0]} ${a.name.split(" ")[1]?.[0]||""}.</div>
      <div class="bar-track"><div class="bar-fill" style="width:${(a.trips/maxAg*100).toFixed(1)}%;background:var(--amber)"></div></div>
      <div class="bar-value">${a.trips}</div>
    </div>`).join("");
}

/* ─────────────────────────────────────────────
   ADMIN — RESET DEMO DATA
───────────────────────────────────────────── */
document.addEventListener("click", e => {
  if(e.target.id==="reset-demo-btn") { resetDemoData(); renderAdminReports(); }
});

/* ─────────────────────────────────────────────
   ADMIN — ALL PACKAGES
───────────────────────────────────────────── */
function renderAdminPackages() {
  const t=$("#admin-packages-table"); if(!t) return;
  t.innerHTML=PACKAGES.map(p=>`
    <div class="agent-row">
      <div class="agent-row-placeholder">${p.emoji}</div>
      <div class="agent-row-info">
        <strong>${p.name}</strong>
        <span>${p.destination}, ${p.country} · ${p.days} days · ${fmt(p.price)}/person</span>
      </div>
      <div class="agent-row-actions">
        <span class="status-badge status-Confirmed" style="font-size:9px">Active</span>
        <button class="btn btn-danger btn-small" data-admin-del-pkg="${p.id}" type="button">Remove</button>
      </div>
    </div>`).join("");
  t.querySelectorAll("[data-admin-del-pkg]").forEach(b=>b.addEventListener("click",()=>{
    const idx=PACKAGES.findIndex(p=>p.id===b.dataset.adminDelPkg);
    if(idx!==-1){PACKAGES.splice(idx,1);toast("Package removed.");renderAdminPackages();}
  }));
}

/* ─────────────────────────────────────────────
   AI ASSISTANT WIDGET
───────────────────────────────────────────── */
const aiFab = document.getElementById("ai-fab");
const aiChatWindow = document.getElementById("ai-chat-window");
const aiCloseBtn = document.getElementById("ai-close-btn");
const aiChatForm = document.getElementById("ai-chat-form");
const aiChatInput = document.getElementById("ai-chat-input");
const aiChatMessages = document.getElementById("ai-chat-messages");
let aiIsTyping = false;

aiFab?.addEventListener("click", () => { aiChatWindow.hidden = false; aiChatInput.focus(); });
aiCloseBtn?.addEventListener("click", () => { aiChatWindow.hidden = true; });

function appendAiMessage(html, type="ai-bot") {
  const msgEl = document.createElement("div");
  msgEl.className = `ai-message ${type}`;
  msgEl.innerHTML = html;
  aiChatMessages.appendChild(msgEl);
  aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

function showAiTyping() {
  const msgEl = document.createElement("div");
  msgEl.className = "ai-message ai-bot ai-typing-indicator";
  msgEl.innerHTML = `<div class="ai-bubble"><div class="ai-typing"><span class="ai-dot"></span><span class="ai-dot"></span><span class="ai-dot"></span></div></div>`;
  aiChatMessages.appendChild(msgEl);
  aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
  return msgEl;
}

function askAi(query) {
  const lowerQ = query.toLowerCase();
  
  // Recommend packages based on keywords
  let recommended = PACKAGES.filter(p => p.tags.some(t => lowerQ.includes(t.toLowerCase())) || lowerQ.includes(p.destination.toLowerCase()));
  if (recommended.length === 0) {
    if (lowerQ.includes("cheap") || lowerQ.includes("budget")) recommended = [...PACKAGES].sort((a,b)=>a.price-b.price).slice(0, 2);
    else if (lowerQ.includes("luxury")) recommended = [...PACKAGES].sort((a,b)=>b.price-a.price).slice(0, 2);
    else recommended = [...PACKAGES].sort(()=>0.5 - Math.random()).slice(0, 1);
  } else {
    recommended = recommended.slice(0, 2); // Max 2 recommendations
  }

  let responseHtml = `<div class="ai-bubble">Here is what I found for you:</div>`;
  if (lowerQ.includes("hello") || lowerQ.includes("hi") || lowerQ.includes("hey")) {
    responseHtml = `<div class="ai-bubble">Hello! I'm here to help you find your dream vacation. What kind of destination are you looking for?</div>`;
  } else if (lowerQ.includes("weather") || lowerQ.includes("visa")) {
    responseHtml = `<div class="ai-bubble">I specialize in finding you the best travel packages on Trailmark! I recommend checking your destination's official tourism website for the latest weather and visa information. Can I help you search for a trip instead?</div>`;
  } else {
    // Generate package cards
    const cardsHtml = recommended.map(p => `
      <div class="ai-pkg-card" onclick="document.getElementById('ai-chat-window').hidden=true; if(!currentUser){toast('Please sign in to view packages.');showScreen('screen-auth');}else if(window.openPackage){openPackage('${p.id}');}">
        ${p.image ? `<img src="${p.image}" alt="">` : `<div style="height:100px;background:var(--paper-deep);display:flex;align-items:center;justify-content:center;font-size:24px">${p.emoji}</div>`}
        <div class="ai-pkg-card-body">
          <h4>${p.name}</h4>
          <p>${fmt(p.price)}/pp</p>
        </div>
      </div>
    `).join("");
    
    responseHtml = `
      <div class="ai-bubble">I found some amazing options that might fit what you're looking for!</div>
      ${cardsHtml}
    `;
  }

  // Simulate delay
  const typingEl = showAiTyping();
  setTimeout(() => {
    typingEl.remove();
    appendAiMessage(responseHtml, "ai-bot");
    aiIsTyping = false;
  }, 1200 + Math.random() * 800);
}

aiChatForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (aiIsTyping) return;
  const text = esc(aiChatInput.value.trim());
  if (!text) return;
  
  appendAiMessage(`<div class="ai-bubble">${text}</div>`, "ai-user");
  aiChatInput.value = "";
  aiIsTyping = true;
  askAi(text);
});

/* ─────────────────────────────────────────────
   INIT
───────────────────────────────────────────── */
showScreen("screen-landing");
