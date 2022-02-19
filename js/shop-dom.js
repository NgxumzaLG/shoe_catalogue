// Reference all the elements
const proContainer = document.getElementById('pro-container');
const cartItems = document.querySelector('.cart-items');
const cartItemsRespon = document.querySelector('.cart-items-respon');

// Compile Templates
var shopTemplateSource = document.querySelector(".shopTemplate").innerHTML;
var shopTemplate = Handlebars.compile(shopTemplateSource);

let cart = [];
let ourStock = [];

// Does the localStorage have any product yet?
if (localStorage['products']) {
    let fromLocalStorage = JSON.parse(localStorage.getItem('products'));
    // If our product list has more product than localStorage the update localStorage
    if (fromLocalStorage.length === productList.length) {
        ourStock = fromLocalStorage;

    } else {
        ourStock = productList;
        localStorage.clear();
        updateProducts(ourStock);


    }

} else {
    ourStock = productList;
    updateProducts(ourStock);

}

// Is there any cart that already exists in the localStorage?
if (localStorage['cart']) {
    cart = JSON.parse(localStorage.getItem('cart'));

}

//  Instantiate the instance of the factory function
const shoeService = ShoeService(ourStock);
let addButtons;


// DOM load Or Page reload
document.addEventListener('DOMContentLoaded', () => {
    shoeService.setCart(cart);
    let currentCart = shoeService.getCart();
    let total = shoeService.getTotal(currentCart);
    
    displayAllTotals(total);
    proContainer.innerHTML = shopTemplate({shopProducts: ourStock});

    // Deconstruct the nodelist into an normal array of buttons
    addButtons = [...document.querySelectorAll('.add-btn')];
    const brandSearch = document.getElementById('brand');
    const sizeSearch = document.getElementById('size');
    const colorSearch = document.getElementById('color');

    addToCart(addButtons, cart);
    
    brandSearch.addEventListener('change', () => {
        let searchValues = searchInput();
        let save = shoeService.filterProduct(searchValues);

        if (save.length !== 0) {
            proContainer.innerHTML = shopTemplate({shopProducts: save});
            addButtons = [...document.querySelectorAll('.add-btn')];
            addToCart(addButtons, cart);

        } else {
            proContainer.innerHTML = `
                                        <div class="search-results">
                                        <h4>Sorry! no item found</h4>
                                        </div>
                                    `;
        }
    });

    sizeSearch.addEventListener('keyup', () => {
        let searchValues = searchInput();
        let save = shoeService.filterProduct(searchValues);

        if (save.length !== 0) {
            proContainer.innerHTML = shopTemplate({shopProducts: save});
            addButtons = [...document.querySelectorAll('.add-btn')];
            addToCart(addButtons, cart);

        } else {
            proContainer.innerHTML = `
                                        <div class="search-results">
                                        <h4>Sorry! no item found</h4>
                                        </div>
                                    `;
        }
    });

    colorSearch.addEventListener('change', () => {
        let searchValues = searchInput();
        let save = shoeService.filterProduct(searchValues);

        if (save.length !== 0) {
            proContainer.innerHTML = shopTemplate({shopProducts: save});
            addButtons = [...document.querySelectorAll('.add-btn')];
            addToCart(addButtons, cart);

        } else {
            proContainer.innerHTML = `
                                        <div class="search-results">
                                        <h4>Sorry! no item found</h4>
                                        </div>
                                    `;
        }
    });

});


// FUNCTIONS
function updateProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));

}

function updateCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));

}

function getProduct(code) {
    let products = ourStock;
    let test = products.find(product => product.code == code);

    return test;
}

function searchInput() {
    return {
        brand: document.querySelector('.search-brand').value,
        size: document.querySelector('.search-size').value,
        color: document.querySelector('.search-color').value
    };
}

function displayAllTotals(ourCart) {
    cartItems.innerHTML = `${ourCart.qty}`;
    cartItemsRespon.innerHTML = `${ourCart.qty}`;

}

function addToCart(addBtns, products) {
    addBtns.forEach(button => {
        let value = button.value;
        let inCart = products.find(item => item.code === value);

        if (inCart) {
            // Update the Item that already exists in the cart
            button.style['color'] = 'crimson';
            button.style['transform'] = 'scale(1)';
            button.style['backgroundColor'] = '#ffccd5';
            button.style['borderColor'] = '#ff758f';
            button.disabled = true;
        } 

        button.addEventListener('click', () => {
            // Get the Item picked
            let thisItem = getProduct(value);
            let subTotal = shoeService.setSubTotal(thisItem);
            let cartItem = {...thisItem, quantity: 1, subTotal};
            // Is the Item picked in the cart??
            let inTheCart = products.some(items => items.code === value);

            if (inTheCart === false) {
                // Add the Item in the cart and update localStorage
                products = [...products, cartItem];
                updateCart(products);
                location.reload()

            }            
        });
    });
}
