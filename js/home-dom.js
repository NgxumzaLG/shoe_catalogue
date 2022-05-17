// Reference all the elements
const cartItems = document.querySelector('.cart-items');
const cartItemsRespon = document.querySelector('.cart-items-respon');

// localStorage 
const shopStock = JSON.parse(localStorage.getItem('products'));
const myCart = JSON.parse(localStorage.getItem('cart'));

//  Instantiate the instance of the factory function
const shoeService = ShoeService(shopStock);

// DOM load Or Page reload
document.addEventListener('DOMContentLoaded', () => {
    shoeService.setCart(myCart);
    const currentCart = shoeService.getCart();
    const total = shoeService.getTotal(currentCart);
    
    displayAllTotals(total);

});

// FUNCTIONS *****************************

const displayAllTotals = (ourCart) => {
    // Update the number of items in the cart
    cartItems.innerHTML = `${ourCart.qty}`;
    cartItemsRespon.innerHTML = `${ourCart.qty}`;

}