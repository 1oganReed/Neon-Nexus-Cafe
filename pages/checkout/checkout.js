// array of menu item objects
const items = [
    // breakfast menu items
    {
    id:1,
    name:"Quantum Waffles",
    category:"Breakfast",
    price:12.99
    },
        {
    id:2,
    name:"Pixel Waffles",
    category:"Breakfast",
    price:11.50
    },
        {
    id:3,
    name:"Cyber Omelet",
    category:"Breakfast",
    price:15.99
    },
        {
    id:4,
    name:"Data Breakfest",
    category:"Breakfast",
    price:14.75
    },
        {
    id:5,
    name:"Ciruit board toast",
    category:"Breakfast",
    price:12.99
    },
        {
    // Lunch menu items
    id:6,
    name:"Glitch wrap",
    category:"Lunch",
    price:10.99
    },
        {
    id:7,
    name:"Fusion club sandwich",
    category:"Lunch",
    price:12.50
    },
        {
    id:8,
    name:"AI ramen bowl",
    category:"Lunch",
    price:15.99
    },
            {
    id:9,
    name:"Hologram Burger",
    category:"Lunch",
    price:15.75
    },
            {
    id:10,
    name:"Fusion Turkey Sandwich",
    category:"Lunch",
    price:13.99
    },
    // Dinner menu items

    {
    id:11,
    name:"Plasma Steak",
    category:"Dinner",
    price: 60.99
    },

    {
    id:12,
    name:"Binary Tacos",
    category:"Dinner",
    price: 20.98
    },
    {
    id:13,
    name:"Cyber Sushi",
    category:"Dinner",
    price: 21.75
    }, 
    {
    id:14,
    name:"Neon Curry Plate",
    category:"Dinner",
    price: 35.75
    },
    {
    id:15,
    name:"Quantum Rice Plate",
    category:"Dinner",
    price: 20.99
    },

    // Dessert menu items 
    {
    id:16,
    name:"Data Cube Brownies",
    category:"Dessert",
    price: 15.99
    },
        {
    id:17,
    name:"Hologram Sundae",
    category:"Dessert",
    price: 18.99
    },
        {
    id:18,
    name:"Pixel Devil Cake",
    category:"Dessert",
    price: 25.75
    },
        {
    id:19,
    name:"Quantum Icecream Float",
    category:"Dessert",
    price: 16.99
    },
    // Drink menu items 
    {
    id:20,
    name:"Blue Screen Soda",
    category:"Drink",
    price:13.99
    },
        {
    id:21,
    name:"Lightning Energy",
    category:"Drink",
    price:15.75
    },
        {
    id:22,
    name:"RGB Shake",
    category:"Drink",
    price:12.75
    },
        {
    id:23,
    name:"Nano Lemonade",
    category:"Drink",
    price:16.99
    },
        {
    id:24,
    name:"Data Tea",
    category:"Drink",
    price:12.99
        }


];

function getCart(){
   let raw = localStorage.getItem('cart');
   return raw ? JSON.parse(raw) : [];
}

function saveCart(cart){
   localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart(){
   const items = document.getElementById('cart-items');
   const totalEl = document.getElementById('cart-total');   // DOM element
   if(!items || !totalEl) return;

   const cart = getCart();
   if(!cart || cart.length === 0){
      items.innerHTML = '<p>Your cart is empty</p>';
      totalEl.textContent = '';
      return;
   }

   items.innerHTML = '';
   let total = 0;   // running number, NOT reused from above

   for(let i=0; i<cart.length; i++){
      const cartItem = cart[i];
      const line = document.createElement('div');
      line.className = 'cart-line';
      line.innerHTML = `
      <span class="cart-name">Item: ${formatName(cartItem.name)} x ${cartItem.qty}</span>
      <span class="cart-sub">$${(cartItem.price * cartItem.qty).toFixed(2)}</span>
      <div class="cart-controls">
       <button class="cart-dec" data-name="${cartItem.name}">-</button>
       <button class="cart-inc" data-name="${cartItem.name}">+</button>
       <button class="cart-remove" data-name="${cartItem.name}">Remove</button>
      </div>
      `;
      items.appendChild(line);
      total += cartItem.price * cartItem.qty;   // total is a plain number here
   }
   const taxRate = 0.056
   const tax = total * taxRate
   totalEl.innerHTML = `
      <div>Subtotal: $${total.toFixed(2)}</div>
      <div>Tax: $${tax.toFixed(2)} (5.6%)</div>
      <div>Total: $${(total + tax).toFixed(2)}</div>
   `;

   const decBtns = items.querySelectorAll('.cart-dec');
   for(let i=0; i<decBtns.length; i++){
      decBtns[i].addEventListener('click', function(){
         removeOne(this.dataset.name);
      });
   }

   const incBtns = items.querySelectorAll('.cart-inc');
   for(let i=0; i<incBtns.length; i++){
      incBtns[i].addEventListener('click', function(){
         addOne(this.dataset.name);
      });
   }

   const remBtns = items.querySelectorAll('.cart-remove');
   for(let i=0; i<remBtns.length; i++){
      remBtns[i].addEventListener('click', function(){
         removeAll(this.dataset.name);
      });
   }
}

function clearCart(){
   localStorage.clear();
   localStorage.removeItem('cart');
   displayCart();
}

function addOne(name){
   let cart = getCart();
   const item = cart.find(entry => entry.name === name);
   if(!item) return;

   item.qty = (item.qty || 1) + 1;
   saveCart(cart);
   displayCart();
}

function removeOne(name){
   let cart = getCart();
   const itemIndex = cart.findIndex(entry => entry.name === name);
   if(itemIndex === -1) return;

   cart[itemIndex].qty = (cart[itemIndex].qty || 1) - 1;
   if(cart[itemIndex].qty <= 0){
      cart.splice(itemIndex, 1);
   }

   saveCart(cart);
   displayCart();
}

function removeAll(name){
   let cart = getCart();
   let out = [];
   for(let i=0; i<cart.length; i++){
      if(cart[i].name !== name) out.push(cart[i]);
   }
   saveCart(out);
   displayCart();
}

function formatName(name) {
  return name.replace(/([A-Z])/g, ' $1').trim();
}

//dark and light mode

const darkmode = document.getElementById("Dark-mode");
const darkModeImage = darkmode.querySelector("img");
//stating tha images for the dark mode cotent 
function updateDarkModeIcon() {
  const isDark = document.documentElement.classList.contains("darkmode");
  darkModeImage.src = isDark ? "../../assets/icons/LM.png" : "../../assets/icons/DM-YP.png";
  darkModeImage.alt = isDark ? "Switch to light mode" : "Switch to dark mode";
  darkModeImage.title = isDark ? "Switch to light mode" : "Switch to dark mode";
}
/*toggle for light and dark mode basicall like hey set it to dark this is to bright for my eyes*/ 
function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle("darkmode");
  localStorage.setItem("darkMode", String(isDark));
  updateDarkModeIcon();
}

//Add lisenter so that when nutton i sclicked it knows to toggle
darkmode.addEventListener("click", toggleDarkMode);

//Save mode puts the team in locals storage saving the descions so that eve if teh user refreshes it saves the
//theme
(function applySavedMode() {
  const savedMode = localStorage.getItem("darkMode") === "true";
  if (savedMode) {
    document.documentElement.classList.add("darkmode");
  }
  //update sthe icon so that it shows the apporate picture when you change themes
  updateDarkModeIcon();
})();


let menuBtn = document.querySelector('.menu-btn');
let ham = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	ham.classList.toggle('active');
})


menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          ham.classList.toggle('active');
  })
})