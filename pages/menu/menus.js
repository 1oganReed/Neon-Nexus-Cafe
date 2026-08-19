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
   cart.push(item);
   saveCart(cart)

   alert(`${item.name} added to cart`);
}

// function addItemLocalStorage(menuItem){
//    let menuItems = getItemsFromStorage();
//    menuItems.push(menuItem);
//    localStorage.setItem('menuItem', JSON.stringify(menuItems));
// }

// function getItemsFromStorage(){
//    let menuItems = getItemsFromStorage();
//    const menuItemsLS = localStorage.getItem('menuItems');
//    if(menuItemsLS === null){
//       menuItems = [];
//    }
//    else{
//       menuItems = JSON.parse(menuItemsLS);
//    }
//    return menuItems
// }

//Java script light mode switch instantly 



// //local storage 
// let menuString=JSON.stringify(menu);
// localStorage.setItem("Menu", menuString);
// document.getElementById("output").textContent=
// "Item saved "+"\n"+  menuString;
// document.getElementById("output").textContent =
// "item saved"+ "\n"+ menuString, null;
// }

// //loadind storage
// function loadObject(){
//    let savedmenu = localStorage.getItem("menu");
//    if(savedmenu){
//       let studentObject = JSON.parse(savedmenu);
//       document.getElementById("output").textContent =
//       "Item added:"+
//       "Name"+ menuObject.name+"\n"+
//       "Price:"+ menuObject.price;
//    }

//    else {
//          document.getElementById("output").textContent=
//          "No Item found on Menu"
//       }

//    }

//    function clearStorage(){
//           localStorage.clear();
//             document.getElementById("cleared");
//    }


//    //function color switch light mode 
 

