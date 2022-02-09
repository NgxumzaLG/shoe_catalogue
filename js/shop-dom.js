// Reference all the elements
const proContainer = document.getElementById('pro-container');
const cartItems = document.querySelector('.cart-items');
const cartItemsRespon = document.querySelector('.cart-items-respon');

// Compile Templates
var shopTemplateSource = document.querySelector(".shopTemplate").innerHTML;
var shopTemplate = Handlebars.compile(shopTemplateSource);

let cart = [];
let ourStock = [];

// localStorage 
if (localStorage['products']) {
    let fromLocalStorage = JSON.parse(localStorage.getItem('products'));   
    ourStock = fromLocalStorage;


} else {
    ourStock = productList;
    updateProducts(ourStock)

}

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

    addButtons = [...document.querySelectorAll('.add-btn')];
    const brandSearch = document.getElementById('brand');
    const sizeSearch = document.getElementById('size');
    const colorSearch = document.getElementById('color');

    addToCart(addButtons, cart);
    
    brandSearch.addEventListener('change', () => {
        let searchValues = searchInput();
        let save = shoeService.filterProduct(searchValues);

        proContainer.innerHTML = shopTemplate({shopProducts: save});
        addButtons = [...document.querySelectorAll('.add-btn')];
        addToCart(addButtons, cart);
    });

    sizeSearch.addEventListener('keyup', () => {
        let searchValues = searchInput();
        let save = shoeService.filterProduct(searchValues);

        proContainer.innerHTML = shopTemplate({shopProducts: save});
        addButtons = [...document.querySelectorAll('.add-btn')];
        addToCart(addButtons, cart);
    });

    colorSearch.addEventListener('change', () => {
        let searchValues = searchInput();
        let save = shoeService.filterProduct(searchValues);

        proContainer.innerHTML = shopTemplate({shopProducts: save});
        addButtons = [...document.querySelectorAll('.add-btn')];
        addToCart(addButtons, cart);
    });

    // addButtons.forEach(button => {
    //     let value = button.value;
    //     let inCart = cart.find(item => item.code == value);

    //     if (inCart) {
    //         button.style['color'] = 'crimson';
    //         button.style['transform'] = 'scale(1)';
    //         button.style['backgroundColor'] = '#ffccd5';
    //         button.style['borderColor'] = '#ffb3c1';
    //         button.disabled = true;
    //     } 

    //     button.addEventListener('click', event => {
    //         event.target.disabled = true;
    //         // Get the Item picked
    //         let thisItem = getProduct(value);
    //         // let subTotal = shoeService.subTotal(thisItem);
    //         let cartItem = {...thisItem, quantity: 1};
    //         // Is the Item picked in the cart??
    //         let someF = cart.some(items => items.code == value);

    //         if (someF === false) {
    //             cart = [...cart, cartItem];
    //             updateCart(cart);
    //             location.reload()

    //         }            
    //     });

    // });
    // console.log(addButtons);

    // addButtons.addEventListener('click', function() {
    //     let test = addButtons.value;
    //     console.log(test);
    // })


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
        let inCart = products.find(item => item.code == value);

        if (inCart) {
            button.style['color'] = 'crimson';
            button.style['transform'] = 'scale(1)';
            button.style['backgroundColor'] = '#ffccd5';
            button.style['borderColor'] = '#ffb3c1';
            button.disabled = true;
        } 

        button.addEventListener('click', () => {
            // Get the Item picked
            let thisItem = getProduct(value);
            // let subTotal = shoeService.subTotal(thisItem);
            let cartItem = {...thisItem, quantity: 1};
            // Is the Item picked in the cart??
            let someF = products.some(items => items.code == value);

            if (someF === false) {
                products = [...products, cartItem];
                updateCart(products);
                location.reload()

            }            
        });
    });
}
