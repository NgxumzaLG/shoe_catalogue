// Reference all the elements
const proContainer = document.getElementById('pro-container');
const cartItems = document.querySelector('.cart-items');
const cartItemsRespon = document.querySelector('.cart-items-respon');

// Compile Templates
var shopTemplateSource = document.querySelector(".shopTemplate").innerHTML;
var shopTemplate = Handlebars.compile(shopTemplateSource);

//  Start-up products for the shop

var startUp = [
    {
        code : 'NAF01',
        color : 'Blue',
        brand : 'Nike',
        size: 7,
        price : 1250,
        image: './img/shopping-bag.png',
        in_stock : 5
    },
    {
        code : 'AN01',
        color : 'Orange',
        brand : 'Adidas',
        image: './img/shopping-bag.png',
        size: 6,
        price : 750,
        in_stock : 3
    },
    {
        code : 'VSK8',
        color : 'Yellow',
        brand : 'Vans',
        image: './img/shopping-bag.png',
        size: 4,
        price : 900,
        in_stock : 1
    },
    {
        code : 'AS06',
        color : 'Brown',
        brand : 'Asics',
        image: './img/shopping-bag.png',
        size: 6,
        price : 850,
        in_stock : 1
    }
];

let cart = [];
let ourStock = [];

// localStorage 
if (localStorage['products']) {
    ourStock = JSON.parse(localStorage.getItem('products'));

} else {
    ourStock = startUp;
    updateProducts(ourStock)

}

if (localStorage['cart']) {
    cart = JSON.parse(localStorage.getItem('cart'));

}

//  Instantiate the instance of the factory function
const shoeService = ShoeService({ ourStock });


// DOM load Or Page reload
document.addEventListener('DOMContentLoaded', () => {
    shoeService.setCart(cart);
    let currentCart = shoeService.getCart();
    let total = shoeService.getTotal(currentCart);
    
    displayAllTotals(total);
    proContainer.innerHTML = shopTemplate({shopProducts: ourStock});

    const addButtons = [...document.querySelectorAll('.add-btn')];
    const brandSearch = document.getElementById('brand');
    const sizeSearch = document.getElementById('size');
    const colorSearch = document.getElementById('color');
    
    brandSearch.addEventListener('change', () => {
        let searchValues = searchInput();
        let save = shoeService.filterProduct(searchValues);

        proContainer.innerHTML = shopTemplate({shopProducts: save});
    });

    sizeSearch.addEventListener('keyup', () => {
        let searchValues = searchInput();
        let save = shoeService.filterProduct(searchValues);

        proContainer.innerHTML = shopTemplate({shopProducts: save});
    });

    colorSearch.addEventListener('change', () => {
        let searchValues = searchInput();
        let save = shoeService.filterProduct(searchValues);

        proContainer.innerHTML = shopTemplate({shopProducts: save});
    });

    addButtons.forEach(button => {
        let value = button.value;
        let inCart = cart.find(item => item.code == value);

        if (inCart) {
            button.style['color'] = 'crimson';
            button.style['transform'] = 'scale(1)';
            button.style['backgroundColor'] = '#ffccd5';
            button.style['borderColor'] = '#ffb3c1';
            button.disabled = true;
        } 

        button.addEventListener('click', event => {
            event.target.disabled = true;
            // Get the Item picked
            let thisItem = getProduct(value);
            // let subTotal = shoeService.subTotal(thisItem);
            let cartItem = {...thisItem, quantity: 1};
            // Is the Item picked in the cart??
            let someF = cart.some(items => items.code == value);

            if (someF === false) {
                cart = [...cart, cartItem];
                updateCart(cart);
                location.reload()

            }            
        });

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
