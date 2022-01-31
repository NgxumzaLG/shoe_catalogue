function ShoeService(data) {
    var products = data.products || [];
    var userCart = [];

    function getProducts() {
        return products;

    }

    function filterProduct(searchThis) {
        let useBrand = searchThis.brand;
        let useSize = Number(searchThis.size);
        let useColor = searchThis.color;
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
        userCart = inTheBag;
    }

    function getCart() {
        return userCart;

    }

    function subTotal(theProduct) {
        return 1 * theProduct.price;

    }

    function getTotal(cart) {
        let qty = 0;
        let grandTotal = 0;
        if (cart !== null) {
            for (const item of cart) {
                qty += item.quantity;
                grandTotal += item.price;
        
            }
        }
        
        return {
            qty,
            grandTotal
        };
    }

    return {
        getProducts,
        getCart,
        filterProduct,
        setCart,
        subTotal,
        getTotal

    }
}