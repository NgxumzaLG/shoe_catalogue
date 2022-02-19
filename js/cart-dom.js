// Reference all the elements
const displayCartItems = document.querySelector('.table-body');
const buyButton = document.querySelector('.purchase');
const clearButton = document.querySelector('.clear-cart');
const cartItems = document.querySelector('.cart-items');
const cartItemsResponive = document.querySelector('.cart-items-respon');


// localStorage 
let shopStock = JSON.parse(localStorage.getItem('products'));
let myCart = JSON.parse(localStorage.getItem('cart'));

let total = 0;
let addIcon;


//  Instantiate the instance of the factory function
const shoeService = ShoeService(shopStock);


// DOM load Or Page reload
document.addEventListener('DOMContentLoaded', () => {
    shoeService.setCart(myCart);
    let currentCart = shoeService.getCart();
    let total = shoeService.getTotal(currentCart);

    displayAllTotals(total);
    updatedCartDisplay(currentCart, total);
    addIcon = [...document.querySelectorAll('.fa-plus')];
    updateAddIcon(addIcon, currentCart);


    displayCartItems.addEventListener('click', event => {
        if (event.target.classList.contains('fa-times-circle')) {
            let removeItem = event.target;
            let itemId = removeItem.id;
            let excludeItem = shoeService.removeItem(itemId);

            shoeService.setCart(excludeItem);
            currentCart = shoeService.getCart();
            total = shoeService.getTotal(currentCart);
            displayAllTotals(total);
            updateCart(currentCart);
            displayCartItems.innerHTML = '';
            updatedCartDisplay(currentCart, total);
            addIcon = [...document.querySelectorAll('.fa-plus')];
            updateAddIcon(addIcon, currentCart);
            // displayCartItems.removeChild(removeItem.parentElement.parentElement)

        } else if (event.target.classList.contains('fa-plus')) {
            let addQty = event.target;
            let itemId = addQty.id;
            let tempItem = currentCart.find(item => item.code === itemId);
            if (tempItem.quantity !== tempItem.in_stock) {
                tempItem.quantity ++;
                tempItem.subTotal = tempItem.quantity * tempItem.price;
            }
            
            shoeService.setCart(currentCart);
            currentCart = shoeService.getCart();
            total = shoeService.getTotal(currentCart);
            displayAllTotals(total);
            updateCart(currentCart);
            displayCartItems.innerHTML = '';
            updatedCartDisplay(currentCart, total);
            addIcon = [...document.querySelectorAll('.fa-plus')];
            updateAddIcon(addIcon, currentCart);

        } else if (event.target.classList.contains('fa-minus')) {
            let subtractQty = event.target;
            let itemId = subtractQty.id;
            let tempItem = currentCart.find(item => item.code === itemId);
            if (tempItem.quantity !== 0) {
                tempItem.quantity --;
                tempItem.subTotal = tempItem.quantity * tempItem.price;
            }
            
            shoeService.setCart(currentCart);
            currentCart = shoeService.getCart();
            total = shoeService.getTotal(currentCart);
            displayAllTotals(total);
            updateCart(currentCart);
            displayCartItems.innerHTML = '';
            updatedCartDisplay(currentCart, total);
            addIcon = [...document.querySelectorAll('.fa-plus')];
            updateAddIcon(addIcon, currentCart);
        }

    });
    

    buyButton.addEventListener('click', () => {
        clearCart();
        
    });

    clearButton.addEventListener('click', () => {
        clearCart();
        
    });

});


// FUNCTIONS
function updateCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));

}

function displayAllTotals(ourCart) {
    cartItems.innerHTML = `${ourCart.qty}`;
    cartItemsResponive.innerHTML = `${ourCart.qty}`;

}

function clearCart() {
    localStorage.removeItem("cart");
    currentCart = null;
    shoeService.setCart(null);
    total = shoeService.getTotal(null);
    displayAllTotals(total);
    displayCartItems.innerHTML = '';
    updatedCartDisplay(currentCart, total);

}

function updatedCartDisplay(cart, total) {
    let theCart = cart || [];
    try {
        if (theCart.length !== 0) {
            theCart.forEach(item => {
                displayCartItems.innerHTML += `
                                               <tr>
                                                   <td><i id=${item.code} class="far fa-times-circle"></i></td>
                                                   <td><img src=${item.image} alt=""></td>
                                                   <td><span class="model-text"><strong class="brand-text">${item.brand}:</strong> ${item.model}</span></td>
                                                   <td>${item.size}</td>
                                                   <td><span class="rand-sign">R </span>${item.price}<span class="zeros">,00</span></td>
                                                   <td><i id=${item.code} class="fas fa-plus"></i><span class="space">${item.quantity}
                                                   </span><i id=${item.code} class="fas fa-minus"></i></td>
                                                   <td><span class="rand-sign">R </span>${item.subTotal}<span class="zeros">,00</span></td>
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

}

function updateAddIcon(addIcons, products) {
    addIcons.forEach(icon => {
        let id = icon.id;
        let inCart = products.find(item => item.code === id);

        if (inCart.quantity === inCart.in_stock) {
            icon.style['color'] = 'crimson';
    
        } 
    });
}

