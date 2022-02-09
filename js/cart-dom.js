// Reference all the elements
const displayCartItems = document.querySelector('.table-body');
const buyButton = document.querySelector('.purchase');
const clearButton = document.querySelector('.clear-cart');
const cartItems = document.querySelector('.cart-items');
const cartItemsRespon = document.querySelector('.cart-items-respon');

// localStorage 
let shopStock = JSON.parse(localStorage.getItem('products'));
let myCart = JSON.parse(localStorage.getItem('cart'));

let total = 0;


//  Instantiate the instance of the factory function
const shoeService = ShoeService(shopStock);


// DOM load Or Page reload
document.addEventListener('DOMContentLoaded', () => {
    shoeService.setCart(myCart);
    let currentCart = shoeService.getCart();
    let total = shoeService.getTotal(currentCart);

    displayAllTotals(total);

    try {
        if (myCart !== null) {
            myCart.forEach(item => {
                displayCartItems.innerHTML += `
                                               <tr>
                                                   <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                                                   <td><img src=${item.image} alt=""></td>
                                                   <td>${item.brand}</td>
                                                   <td>${item.size}</td>
                                                   <td><span class="rand-sign">R </span>${item.price}<span class="zeros">,00</span></td>
                                                   <td>${item.quantity}</td>
                                                   <td><span class="rand-sign">R </span>${item.price}<span class="zeros">,00</span></td>
                                               </tr>
                                                   `;
           });
       
        } else {
            displayCartItems.innerHTML += `
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <th class="empty">Cart empty!</th>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                                `;
    
        }
    
        
        
        displayCartItems.innerHTML += `
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <th class="total">TOTAL</th>
                                            <td class="total">${total.qty}</td>
                                            <td class="total"><span class="rand-sign">R </span>${total.grandTotal}<span class="zeros">,00</span></td>
                                        </tr>
                                            `;
                                            
        
    } catch (error) {
        console.log(error)
        
    }
    

    buyButton.addEventListener('click', () => {
        localStorage.removeItem("cart");
        location.reload();

    });

    clearButton.addEventListener('click', () => {
        localStorage.removeItem("cart");
        location.reload();
    });

});

// FUNCTIONS
function displayAllTotals(ourCart) {
    cartItems.innerHTML = `${ourCart.qty}`;
    cartItemsRespon.innerHTML = `${ourCart.qty}`;

}