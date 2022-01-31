// Reference all the elements
var displayCartItems = document.querySelector('.table-body');
const buyButton = document.querySelector('.purchase');

// localStorage 
let shopStock = JSON.parse(localStorage.getItem('products'));
let myCart = JSON.parse(localStorage.getItem('cart'));

let total = 0;


//  Instantiate the instance of the factory function
const shoeService = ShoeService({products: shopStock, myCart});


// DOM load Or Page reload
document.addEventListener('DOMContentLoaded', () => {
    shoeService.setCart(myCart);
    let see = shoeService.getCart();
    let total = shoeService.getTotal(see);

    if (myCart !== null) {
        myCart.forEach(item => {
            displayCartItems.innerHTML += `
                                           <tr>
                                               <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                                               <td><img src=${item.image} alt=""></td>
                                               <td>${item.brand}</td>
                                               <td>${item.price}<span class="zeros">,00</span></td>
                                               <td>${item.quantity}</td>
                                               <td>${item.price}<span class="zeros">,00</span></td>
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
                                        <th class="total">TOTAL</th>
                                        <td class="total">${total.qty}</td>
                                        <td class="total">R${total.grandTotal}<span class="zeros">,00</span></td>
                                    </tr>
                                        `;

    buyButton.addEventListener('click', () => {
        localStorage.removeItem("cart");
        location.reload();

    });

});