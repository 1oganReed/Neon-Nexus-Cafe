// function saveobject(){
   let menu= [
   //breakfest
    {
    name:"quantumWaffles",
    catergory:"Breakfeast",
    price:12.99,
    image:"",
   },
      {
    name:"pixelWaffles",
    catergory:"Breakfeast",
    price:11.50,
    image:"",
   },
      {
    name:"cyberOmelet",
    catergory:"Breakfeast",
    price:15.99,
    image:"",
   },

      {
    name:"dataBreakfeast",
    catergory:"Breakfeast",
    price:14.75,
    image:"",
   },
    {
    name:"circuitBoardToast",
    catergory:"Breakfeast",
    price:12.99,
    image:"",
   },
   /*Breakfest area Done*/ 
   //lunch  area
   {
    name:"glitchWrap",
    catergory:"Lunch",
    price:10.99,
    image:"",
   },
      {
    name:"fusionClubSandwich",
    catergory:"Lunch",
    price:12.50,
    image:"",
   },
      {
    name:"aiRamenBowl",
    catergory:"Lunch",
    price:15.99,
    image:"",
   },
      {
    name:"hologramBurger",
    catergory:"Lunch",
    price:15.75,
    image:"",
   },
    {
    name:"fusionTurkeySandwich",
    catergory:"Lunch",
    price:13.99,
    image:"",
   },
   /* Lunch area done */
   //Dinner area
   {
    name:"plasmaSteak",
    catergory:"Dinner",
    price:60.99,
    image:"",
   },
      {
    name:"binaryTacos",
    catergory:"Dinner",
    price:20.98,
    image:"",
   },
      {
    name:"cyberSushi",
    catergory:"Dinner",
    price:21.75,
    image:"",
   },
      {
    name:"neonCurryPlate",
    catergory:"Dinner",
    price:35.75,
    image:"",
   },
    {
    name:"quantumRicePlate",
    catergory:"Dinner",
    price:20.99,
    image:"",
   },
   /*Dinner area Done */
   //Derserts
   {
    name:"dataCubeBrownies",
    catergory:"Derserts",
    price:15.99,
    image:"",
   },
      {
    name:"hologramSundae",
    catergory:"Derserts",
    price:18.99,
    image:"",
   },
      {
    name:"pixelDevilCake",
    catergory:"Derserts",
    price:25.75,
    image:"",
   },
    {
    name:"quantumIcecreamFloat",
    catergory:"Derserts",
    price:16.99,
    image:"",
   },
   /*Dersert area done */
   //Drinks Done
   {
    name:"blueScreenSoda",
    catergory:"Drink",
    price:13.99,
    image:"",
   },
      {
    name:"lightningEnergy",
    catergory:"Drink",
    price:15.75,
    image:"",
   },
      {
    name:"rgbShake",
    catergory:"Drink",
    price:12.75,
    image:"",
   },
      {
    name:"nanoLemonade",
    catergory:"Drink",
    price:16.99,
    image:"",
   },
    {
    name:"dataTea",
    catergory:"Drink",
    price:12.99,
    image:"",
   },
   /*Drinks done */
   ];

// let cart = [];

// function cartItem(itemName, itemPrice){
//    this.name = itemName,
//    this.price = itemPrice
// }

// function addToCart(){
//    let cartItem = new cartItem(name.value, price.value);
//    let cartStringified = JSON.stringify(cartItem);

//    cartItemData.push(cartItemStringified);
//    localStorage.setItem('data', cartItemData)
// }

function getCart(){
   const raw = localStorage.getItem('cart');
   return raw ? JSON.parse(raw) : [];
}

function saveCart(cart){
   localStorage.setItem('cart', JSON.stringify(cart));
}

// call from button click
function addToCart(itemName){
   const item = menu.find(i => i.name === itemName);
   if(!item){
      console.warn('addToCart: item not found', itemName);
      return
   }
   const cart = getCart();

   let foundIndex = -1;
   for(let i=0; i<cart.length; i++){
      if(cart[i].name === item.name){foundIndex = i; break;}
   }

   if(foundIndex !== -1){
      cart[foundIndex].qty = (cart[foundIndex].qty || 1) + 1;
   }
   else{
      cart.push({name: item.name, price: item.price, qty: 1});
   }
   
   saveCart(cart);
   alert(`${item.name} added to cart`);
}
// end adding to cart
//
//
// start toggle the opening of cart
function toggleCart(){
   const cart = document.getElementById('cart');
   if(!cart) return;
   const isOpen = !cart.classList.toggle('hidden');
   if(isOpen) displayCart();
}

function displayCart(){
   const items = document.getElementById('cart-items');
   const totalEl = document.getElementById('cart-total');
   if(!items || !totalEl) return;

   const cart = getCart();
   if(!cart || cart.length === 0){
      items.innerHTML = '<p>Your cart is empty</p>';
      totalEl.textContent = '';
      return;
   }

   items.innerHTML = '';
   let total = 0;

   for(let i=0; i<cart.length; i++){
      const cartItem = cart[i];
      const line = document.createElement('div');
      line.className = 'cart-line';
      line.innerHTML = `
      <span class="cart-name">${formatName(cartItem.name)} x ${cartItem.qty}</span>
      <span class="cart-sub">$${(cartItem.price * cartItem.qty).toFixed(2)}</span>
      <div class="cart-controls">
       <button class="cart-dec" data-name="${cartItem.name}">-</button>
       <button class="cart-inc" data-name="${cartItem.name}">+</button>
       <button class="cart-remove" data-name="${cartItem.name}">Remove</button>
      </div>
      `;
      items.appendChild(line);
      total += cartItem.price * cartItem.qty;
   }

   totalEl.textContent = `Total: $${total.toFixed(2)}`;

   const remBtns = items.querySelectorAll('.cart-remove');
   for(let i=0; i<remBtns.length; i++){
      remBtns[i].addEventListener('click', function(){
         removeAll(this.dataset.name);
      });
   }
}

function closeCart(){
   const cart = document.getElementById('cart');
   if(!cart) return;
   cart.classList.add('hidden');
}

function clearCart(){
   saveCart([]);
   displayCart();
}

function changeQty(name, delta){
   const cart = getCart();
   const idx = cart.findIndex(i => i.name === name);
   if(idx === -1) return;

   cart[idx].qty += delta;

   if(cart[idx].qty <= 0){
      cart.splice(idx, 1);
   }

   saveCart(cart);
   displayCart();
}

// function removeAll(name){
//    const cart = getCart();
//    const out = [];
//    for(let i=0; i<cart.length; i++){
//       if(cart[i].name !== name) out.push(cart[i]);
//    }
//    saveCart(out);
//    displayCart();
// }

function formatName(name) {
  return name.replace(/([A-Z])/g, ' $1').trim();
}
