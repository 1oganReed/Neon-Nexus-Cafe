// array of menu item objects
const items = [
    {
    id:1,
    name:"Quantum Waffles",
    category:"Breakfast",
    price:12.99,
    description:""
    },
        {
    id:2,
    name:"Pixel Waffles",
    category:"Breakfast",
    price:11.50,
    description:""
    },
        {
    id:3,
    name:"",
    category:"Breakfast",
    price:,
    description:""
    },
        {
    id:4,
    name:"Cyber Omelet",
    category:"Breakfast",
    price:15.99,
    description:""
    },
        {
    id:5,
    name:"",
    category:"",
    price:,
    description:""
    },
        {
    id:6,
    name:"",
    category:"",
    price:,
    description:""
    },
        {
    id:7,
    name:"",
    category:"",
    price:,
    description:""
    },
        {
    id:8,
    name:"",
    category:"",
    price:,
    description:""
    },
        {
    id:9,
    name:"",
    category:"",
    price:,
    description:""
    },


]

let subtotal = document.getElementById("subtotal");
let total = document.getElementById("total");

function purchaseBtn() {
    document.getElementById("nextbtn")
}

function purchaseBtn() {
    document.getElementById("nextbtn")
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
