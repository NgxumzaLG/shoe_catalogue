const productList = [
    {
        code : 'VOSG20',
        color : 'Green',
        brand : 'Vans',
        model: 'Old skool',
        image: './img/vans_old-skool_green.webp',
        size: 8,
        price : 950,
        in_stock : 5
    },
    {
        code : 'NAJR01',
        color : 'Red',
        brand : 'Nike',
        model: 'Air jordan 1',
        image: './img/nike_air-jordan1_red.jpg',
        size: 4,
        price : 1700,
        in_stock : 1
    },
    {
        code : 'RCNO01',
        color : 'Orange',
        brand : 'Reebok',
        model: 'Classic nylon',
        image: './img/reebok_classic-nylon_orange.jpg',
        size: 6,
        price : 1350,
        in_stock : 3
    },
    {
        code : 'NAM97W',
        color : 'White',
        brand : 'Nike',
        model: 'Air max 97',
        image: './img/nike_air-max97_white.webp',
        size: 5,
        price : 3350,
        in_stock : 2
    },
    {
        code : 'CRSB05',
        color : 'Black',
        brand : 'Converse',
        model: 'Run star',
        image: './img/converse_run-star_black.jpg',
        size: 7,
        price : 1800,
        in_stock : 4
    },
    {
        code : 'VSK8HIR',
        color : 'Red',
        brand : 'Vans',
        model: 'Sk8 hi',
        image: './img/vans_sk8-hi_red.webp',
        size: 8,
        price : 900,
        in_stock : 5
    },
    {
        code : 'NAMB02',
        color : 'Black',
        brand : 'Nike',
        model: 'Air max',
        image: './img/nike_air-max_black.jpg',
        size: 3,
        price : 1400,
        in_stock : 2
    },

    {
        code : 'RCB01',
        color : 'Brown',
        brand : 'Reebok',
        model: 'Classic',
        image: './img/reebok_classic_brown.jpg',
        size: 4,
        price : 700,
        in_stock : 1
    },
    {
        code : 'RC85W',
        color : 'White',
        brand : 'Reebok',
        model: 'Club c85',
        image: './img/reebok_club-c85_white.jpg',
        size: 3,
        price : 1300,
        in_stock : 3
    },
    {
        code : 'CRSY1',
        color : 'Yellow',
        brand : 'Converse',
        model: 'Run star',
        image: './img/converse_run-star_yellow.jpeg',
        size: 8,
        price : 1500,
        in_stock : 2
    },
    {
        code : 'AFEW2',
        color : 'White',
        brand : 'Adidas',
        model: 'Forum exhibit',
        image: './img/adidas_forum-exhibit_white.jpg',
        size: 4,
        price : 1400,
        in_stock : 3
    },
    {
        code : 'ACFFB1',
        color : 'Blue',
        brand : 'Asics',
        model: 'Court ff',
        image: './img/asics_court-ff_blue.jpg',
        size: 8,
        price : 2000,
        in_stock : 1
    },
    {
        code : 'RNXO01',
        color : 'Orange',
        brand : 'Reebok',
        model: 'Nano x',
        image: './img/reebok_nano-x_orange.jpg',
        size: 3,
        price : 2300,
        in_stock : 2
    },
    {
        code : 'NAJB02',
        color : 'Brown',
        brand : 'Nike',
        model: 'Air Jordan 1',
        image: './img/nike_air-jordan1_brown.png',
        size: 6,
        price : 1500,
        in_stock : 3
    },
    {
        code : 'ANR1B1',
        color : 'Black',
        brand : 'Adidas',
        model: 'Nmd r1',
        image: './img/adidas_nmd-r1_black.jpg',
        size: 5,
        price : 1300,
        in_stock : 4
    },
    {
        code : 'AGRW02',
        color : 'White',
        brand : 'Asics',
        model: ' Gel resolution',
        image: './img/asics_gel-resolution_white.jpg',
        size: 6,
        price : 1850,
        in_stock : 1
    },
    {
        code : 'CASW04',
        color : 'White',
        brand : 'Converse',
        model: 'All star',
        image: './img/converse_all-star_white.jpg',
        size: 7,
        price : 750,
        in_stock : 2
    },
    {
        code : 'AC80B1',
        color : 'Blue',
        brand : 'Adidas',
        size: 7,
        model: 'Continental 80',
        price : 1250,
        image: './img/adidas_continental-80_blue.jpg',
        in_stock : 5
    },
    {
        code : 'ANR1B2',
        color : 'Brown',
        brand : 'Adidas',
        model: 'Nmd r1',
        image: './img/adidas_nmd-r1_brown.jpg',
        size: 4,
        price : 1900,
        in_stock : 3
    },
    {
        code : 'AGLW02',
        color : 'White',
        brand : 'Asics',
        model: 'Gel lyte',
        image: './img/asics_gel-lyte_white.jpg',
        size: 3,
        price : 1700,
        in_stock : 2
    },
    {
        code : 'VSK8HIB',
        color : 'Black',
        brand : 'Vans',
        model: 'Sk8 hi',
        image: './img/vans_sk8-hi_black.jpg',
        size: 6,
        price : 750,
        in_stock : 3
    },
    {
        code : 'AFEB01',
        color : 'Black',
        brand : 'Adidas',
        model: 'Forum exhibit',
        image: './img/adidas_forum-exhibit_black.jpg',
        size: 4,
        price : 1450,
        in_stock : 4
    },
    {
        code : 'AGB01',
        color : 'Black',
        brand : 'Asics',
        model: 'Gel',
        image: './img/asics_gel_black.jpg',
        size: 3,
        price : 1500,
        in_stock : 2
    },
    {
        code : 'CASR03',
        color : 'Red',
        brand : 'Converse',
        model: 'All star',
        image: './img/converse_all-star_red.jpg',
        size: 7,
        price : 850,
        in_stock : 2
    },
    {
        code : 'RCNB02',
        color : 'Blue',
        brand : 'Reebok',
        model: 'Classic nylon',
        image: './img/reebok_classic-nylon_blue.jpg',
        size: 6,
        price : 1300,
        in_stock : 4
    },
    {
        code : 'VOSWF11',
        color : 'White',
        brand : 'Vans',
        model: 'Old skool',
        image: './img/vans_old-skool_white.jpg',
        size: 7,
        price : 650,
        in_stock : 5
    },
    {
        code : 'ASW01',
        color : 'White',
        brand : 'Adidas',
        model: 'Superstar',
        image: './img/adidas_superstar_white.jpg',
        size: 5,
        price : 700,
        in_stock : 3
    },
    {
        code : 'ANMB01',
        color : 'Black',
        brand : 'Asics',
        model: 'Nimbus',
        image: './img/asics_nimbus_black.jpeg',
        size: 8,
        price : 2050,
        in_stock : 2
    }
];