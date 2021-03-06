function ShoeService(data) {
    const products = data || [];
    let userCart = [];

    function getProducts() {
        return products;

    }

    function filterProduct(searchThis) {
        const useBrand = searchThis.brand;
        const useSize = Number(searchThis.size);
        const useColor = searchThis.color;
        let results;

        if (useSize === 0) {
            if (useBrand === 'any' && useColor === 'any') { 
                // NOT Filtering
                results = products;

            } else if (useBrand !== 'any' && useColor === 'any') {
                // Filter using BRAND only
                results = products.filter(item => item.brand === useBrand);

            } else if (useBrand === 'any' && useColor !== 'any') {
                // Filter using COLOR only
                results = products.filter(item => item.color === useColor);

            } else {
                // Filter using BRAND & COLOR 
                results = products.filter(item =>item.brand === useBrand && 
                                                    item.color === useColor);
            }
        } else {
            if (useBrand === 'any' && useColor === 'any') {
                //  Filter using SIZE only
                results = products.filter(item => item.size === useSize);

            } else if (useBrand !== 'any' && useColor === 'any') {
                // Filter using BRAND & SIZE
                results = products.filter(item =>item.brand === useBrand && 
                                            item.size === useSize);
            } else if (useBrand === 'any' && useColor !== 'any') {
                // Filter using COLOR & SIZE
                results = products.filter(item =>item.color === useColor && 
                                                    item.size === useSize);

            } else {
                // Filter Using BRAND, SIZE & COLOR
                results = products.filter(item =>item.brand === useBrand && 
                            item.size === useSize && item.color === useColor);

            }
        }
        

        return results;
    }

    function setCart(inTheBag) {
        if (inTheBag !== null) {
            userCart = inTheBag.filter(item => item.quantity !== 0);

        } 
    }

    function getCart() {
        return userCart;

    }

    function setSubTotal(theProduct) {
        return 1 * theProduct.price;

    }

    function getTotal(cart) {
        let qty = 0;
        let grandTotal = 0;
        
        if (cart !== null) {
            cart.map(item => {
                qty += item.quantity;
                grandTotal += item.subTotal;

            });
        }
        
        return {
            qty,
            grandTotal
        };
    }

    function removeItem(id) {
        const currentCart = getCart();
        const excludeItem = currentCart.filter(item => item.code !== id);
        return excludeItem;
    }

    return {
        getProducts,
        getCart,
        filterProduct,
        setCart,
        setSubTotal,
        getTotal,
        removeItem

    }
}