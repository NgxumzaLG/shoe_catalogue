// Reference all the elements
const cartItems = document.querySelector('.cart-items');
const cartItemsRespon = document.querySelector('.cart-items-respon');

// localStorage 
let shopStock = JSON.parse(localStorage.getItem('products'));
let myCart = JSON.parse(localStorage.getItem('cart'));

//  Instantiate the instance of the factory function
const shoeService = ShoeService(shopStock);

// DOM load Or Page reload
document.addEventListener('DOMContentLoaded', () => {
    shoeService.setCart(myCart);
    let currentCart = shoeService.getCart();
    let total = shoeService.getTotal(currentCart);
    
    displayAllTotals(total);

});

// FUNCTIONS
function displayAllTotals(ourCart) {
    cartItems.innerHTML = `${ourCart.qty}`;
    cartItemsRespon.innerHTML = `${ourCart.qty}`;

}