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

// shopping cart array

let cart = [];

// function to display all menu items
function displayItems(){
    console.log(items);
    const grid=document.getElementById('itemsGrid');
    let html = '';
    // loop through items array and create HTML for each
    for(let i=0; i<items.length;i++){
        const item=items[i];
        html+=`
        <div class="item-card">
            <div class="item-icon">${item.icon}</div>
            <div class="item-category">${item.category}</div>
            <div class="item-name">${item.name}</div>
            <div class="item-desc">${item.description}</div>

            <div class="item-footer">
                <div class="item-price">$${item.price}</div>
                <button class="add-btn" onclick="addToCart(${item.id})">Add to cart</button>
            </div>
        </div>
        
        `;
    }
    grid.innerHTML=html;
}


document.getElementById("menuitems").innerHTML = "";


function calculateSubTotal(){
    for(let i=0; i <= cart.length; i++){
        
    }
}

function addToCart(itemId){
    let selectedItem = null; //null data type returns te object if not found.
    // 1st array of objects
    for (let i=0; i<items.length; i++){
        if(items[i].id===itemId){
            selectedItem=items[i];
            break;
        }
    }

    if(selecteditem){
        // check if menu item is already exists in cart
    let existingItem=null;
    // 2nd array
    for(let i=0; i<cart.length; i++){
        if(cart[i].id===itemId){
            existingItem=cart[i];
            break;
            }
        }
        if(existingItem){
            existingItem.quantity++;

        } else{
            cart.push({
                id:selectedItem.id,
                name:selectedItem.name,
                price:selectedItem.price,
                quantity:1
            });
            console.log(cart);
        }

        updateCartDisplay();
    
    }

}

function updateCartDisplay(){
    const cartCount= document.getElementById('cartCount');
    const cartItems= document.getElementById('cartItems');
    const cartTotal= document.getElementById('cartTotal');

    let totalItems=0;
    for(let i=0; i<cart.length; i++){
        totalItems+=cart[i].quantity;
        console.log(totalItems);

    }
    cartCount.textContent=totalItems;
    // display cart items
    if(cart.length===0){
        cartItems.innerHTML=
        `
        <div style="text-align: center; padding:40px; color:#999;">Your Cart Is Empty</div>`;
        cartTotal.textContent="$0";
        return;
    }
    let cartHTML="";
    let total=0;
    for(let i=0;i<cart.length; i++){
        const item=cart[i];
        const itemTotal=item.price*item.quantity;
        console.log(itemTotal);
        total+=itemTotal;
        console.log(total);
        cartHTML+=`
        <div class="cart-item">
            <div class="cart-item">${item.namee} * ${item.quantity} </div>
            <div class="cart-item">$${itemTotal} </div>
        </div>
        `;
    }
    cartItems.innerHTML=cartHTML;
    cartTotal.textContent=`$${total}`;

}

// toggle cart model
function toggleCart() {
    const model = document.getElementById('cartModel');
    if(model.classList.contains("active")){
        model.classList.remove("active");

    }
    else{
        model.classList.add("active");
    }
    
}
