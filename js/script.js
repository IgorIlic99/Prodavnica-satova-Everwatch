const products = [
    {
        id: 'LT017',
        title: 'Lotus satovi',
        brand: 'Lotus',
        price: 16490.00,
        category: 'men',
        status: 'Na stanju',
        img: 'lotus_satovi_lt017.png',
        creation_date: new Date("2025-08-26"),
        highlight: true,
        added_quantity: 0,
        desc: 'Rolex Submariner — legendarni ronilački sat s vodootpornošću do 300m, automatski mehanizam, keramički bezel.'
    },
    {
        id: 'SC034',
        title: 'Sector satovi',
        brand: 'Sector',
        price: 15890.00,
        category: 'men',
        status: 'Nije na stanju',
        img: 'sector_satovi_sc034.png',
        creation_date: new Date("2025-04-02"),
        highlight: true,
        desc: 'Omega Speedmaster “Moonwatch” — sat koji je nosio astronaut Buzz Aldrin na Mjesecu, kronograf pokretan ručnim navijanjem.'
    },
    {
        id: 'SC009',
        title: 'Sector satovi',
        brand: 'Sector',
        price: 17990.00,
        category: 'men',
        status: 'Nije na stanju',
        img: 'sector_satovi_sc009.png',
        creation_date: new Date("2025-01-15"),
        highlight: true,
        desc: 'Cartier Tank Louis — elegantan dress sat, četvrtasto kućište, rimski brojevi, inspiracija ratnim tenkovima. :contentReference[oaicite:0]{index=0}'
    },
    {
        id: 'LT026',
        title: 'Lotus satovi',
        brand: 'Lotus',
        price: 23090.00,
        category: 'men',
        status: 'Na stanju',
        img: 'lotus_satovi_lt026.png',
        creation_date: new Date("2024-09-11"),
        highlight: true,
        desc: 'Patek Philippe Calatrava — klasični dress sat poznat po jednostavnom i sofisticiranom dizajnu. :contentReference[oaicite:1]{index=1}'
    },
    {
        id: 'SC014',
        title: 'Sector satovi',
        brand: 'Sector',
        price: 12500.00,
        category: 'men',
        status: 'Na stanju',
        img: 'sector_satovi_sc014.png',
        creation_date: new Date("2024-12-27"),
        highlight: true,
        desc: 'TAG Heuer Carrera — sportski kronograf inspiriran auto-moto takmičenjima, sa tačimetrom i jasnom čitljivošću.'
    },
    {
        id: 'LT003',
        title: 'Lotus satovi',
        brand: 'Lotus',
        price: 14590.00,
        category: 'men',
        status: 'Na stanju',
        img: 'lotus_satovi_lt003.png',
        creation_date: new Date("2025-03-05"),
        highlight: false,
        desc: 'Breitling Navitimer — pilotski sat sa kliznim rulem i složenim funkcijama za navigaciju.'
    },
    {
        id: 'LT033',
        title: 'Lotus satovi',
        brand: 'Lotus',
        price: 16990.00,
        category: 'men',
        status: 'Nije na stanju',
        img: 'lotus_satovi_lt033.png',
        creation_date: new Date("2024-11-28"),
        highlight: true,
        desc: 'Audemars Piguet Royal Oak — sportsko-luksuzni sat s osmerokutnim bezelom i integriranom narukvicom.'
    },
    {
        id: 'LT019',
        title: 'Lotus satovi',
        brand: 'Lotus',
        price: 21990.00,
        category: 'men',
        status: 'Na stanju',
        img: 'lotus_satovi_lt019.png',
        creation_date: new Date("2025-06-25"),
        highlight: true,
        desc: 'Hublot Big Bang — bold dizajn, kombinacija materijala (keramika, karbonska vlakna), sportski karakter.'
    },
    {
        id: 'LT024',
        title: 'Lotus satovi',
        brand: 'Lotus',
        price: 11850.00,
        category: 'men',
        status: 'Na stanju',
        img: 'lotus_satovi_lt024.png',
        creation_date: new Date("2025-04-19"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'LT007',
        title: 'Lotus satovi',
        brand: 'Lotus',
        price: 23890.00,
        category: 'men',
        status: 'Na stanju',
        img: 'lotus_satovi_lt007.png',
        creation_date: new Date("2025-01-27"),
        highlight: true,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'LT016',
        title: 'Lotus satovi',
        brand: 'Lotus',
        price: 16890.00,
        category: 'men',
        status: 'Nije na stanju',
        img: 'lotus_satovi_lt016.png',
        creation_date: new Date("2024-08-11"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'LT031',
        title: 'Lotus satovi',
        brand: 'Lotus',
        price: 11790.00,
        category: 'men',
        status: 'Na stanju',
        img: 'lotus_satovi_lt031.png',
        creation_date: new Date("2025-08-23"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'CL002',
        title: 'Calypso satovi',
        brand: 'Calypso',
        price: 4890.00,
        category: 'kid',
        status: 'Na stanju',
        img: 'calypso_satovi_cl002.png',
        creation_date: new Date("2025-06-13"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'CL047',
        title: 'Calypso satovi',
        brand: 'Calypso',
        price: 3690.00,
        category: 'kid',
        status: 'Na stanju',
        img: 'calypso_satovi_cl047.png',
        creation_date: new Date("2024-11-28"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'CA011',
        title: 'Casio satovi',
        brand: 'Casio',
        price: 5320.00,
        category: 'universal',
        status: 'Na stanju',
        img: 'casio_satovi_ca011.png',
        creation_date: new Date("2025-01-21"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'CA034',
        title: 'Casio satovi',
        brand: 'Casio',
        price: 6390.00,
        category: 'universal',
        status: 'Na stanju',
        img: 'casio_satovi_ca034.png',
        creation_date: new Date("2025-04-05"),
        highlight: true,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'FA028',
        title: 'Fossil satovi',
        brand: 'Fossil',
        price: 41390.00,
        category: 'women',
        status: 'Na stanju',
        img: 'fossil_satovi_fa028.png',
        creation_date: new Date("2025-09-25"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'FA014',
        title: 'Fossil satovi',
        brand: 'Fossil',
        price: 26790.00,
        category: 'women',
        status: 'Na stanju',
        img: 'fossil_satovi_fa014.png',
        creation_date: new Date("2025-05-13"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'RO039',
        title: 'Rosefield satovi',
        brand: 'Rosefield',
        price: 18690.00,
        category: 'women',
        status: 'Na stanju',
        img: 'rosefield_satovi_ro039.png',
        creation_date: new Date("2025-02-08"),
        highlight: true,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'RO044',
        title: 'Rosefield satovi',
        brand: 'Rosefield',
        price: 15990.00,
        category: 'women',
        status: 'Na stanju',
        img: 'rosefield_satovi_ro044.png',
        creation_date: new Date("2025-08-17"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'ES008',
        title: 'Esprit satovi',
        brand: 'Esprit',
        price: 12890.00,
        category: 'women',
        status: 'Na stanju',
        img: 'esprit_satovi_es008.png',
        creation_date: new Date("2025-10-30"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'ES021',
        title: 'Esprit satovi',
        brand: 'Esprit',
        price: 15090.00,
        category: 'men',
        status: 'Na stanju',
        img: 'esprit_satovi_es021.png',
        creation_date: new Date("2025-02-14"),
        highlight: true,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'ED013',
        title: 'Edifice satovi',
        brand: 'Edifice',
        price: 37630.00,
        category: 'men',
        status: 'Na stanju',
        img: 'edifice_satovi_ed013.png',
        creation_date: new Date("2025-01-09"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'ED036',
        title: 'Edifice satovi',
        brand: 'Edifice',
        price: 17890.00,
        category: 'men',
        status: 'Na stanju',
        img: 'edifice_satovi_ed036.png',
        creation_date: new Date("2025-05-22"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'GU018',
        title: 'Guess satovi',
        brand: 'Guess',
        price: 25390.00,
        category: 'women',
        status: 'Na stanju',
        img: 'guess_satovi_gu018.png',
        creation_date: new Date("2025-09-19"),
        highlight: true,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'GU031',
        title: 'Guess satovi',
        brand: 'Guess',
        price: 19560.00,
        category: 'women',
        status: 'Na stanju',
        img: 'guess_satovi_gu031.png',
        creation_date: new Date("2025-01-14"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'PO006',
        title: 'Police satovi',
        brand: 'Police',
        price: 35990.00,
        category: 'men',
        status: 'Na stanju',
        img: 'police_satovi_po006.png',
        creation_date: new Date("2025-11-04"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'PO043',
        title: 'Police satovi',
        brand: 'Police',
        price: 19560.00,
        category: 'men',
        status: 'Na stanju',
        img: 'police_satovi_po043.png',
        creation_date: new Date("2025-7-28"),
        highlight: true,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'TH024',
        title: 'Tommy Hilfiger satovi',
        brand: 'Tommy Hilfiger',
        price: 23090.00,
        category: 'women',
        status: 'Na stanju',
        img: 'tommy_hilfiger_satovi_th024.png',
        creation_date: new Date("2025-4-17"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'TH036',
        title: 'Tommy Hilfiger satovi',
        brand: 'Tommy Hilfiger',
        price: 19490.00,
        category: 'women',
        status: 'Na stanju',
        img: 'tommy_hilfiger_satovi_th036.png',
        creation_date: new Date("2025-03-08"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'DK005',
        title: 'Daniel Klein satovi',
        brand: 'Daniel Klein',
        price: 7400.00,
        category: 'women',
        status: 'Na stanju',
        img: 'daniel_klein_satovi_dk005.png',
        creation_date: new Date("2025-06-12"),
        highlight: true,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
    {
        id: 'DK028',
        title: 'Daniel Klein satovi',
        brand: 'Daniel Klein',
        price: 10990.00,
        category: 'men',
        status: 'Na stanju',
        img: 'daniel_klein_satovi_dk028.png',
        creation_date: new Date("2025-06-12"),
        highlight: false,
        desc: 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'
    },
];

//------------- Funkcija za upisivanje u LocalStorage --------------

function saveProductsToLocalStorage(products) {
    localStorage.setItem("products", JSON.stringify(products));
}

//-------------- Funkcija za čitanje iz LocalStorage --------------

function getProductsFromLocalStorage() {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
        const parsed = JSON.parse(storedProducts);
        return parsed.map(p => ({
            ...p,
            creation_date: new Date(p.creation_date)
        }));
    }
    return [];
}

//------------------ Dodavanje proizvoda u korpu -------------------

document.addEventListener("click", function (e) {
    const button = e.target.closest(".product-btn");
    if (button) {
        e.preventDefault();
        const productId = button.dataset.id;
        addToCartLIst(productId);
    }
});

let addedToCartList = [];
let index = 0;
let exist;

function addToCartLIst(productId) {
    product = products.filter(p => p.id === productId);
    exist = false;
    if (product[0].status === 'Na stanju') {
        addedToCartList = getProductsFromLocalStorage();
        index = addedToCartList.length;
        if (addedToCartList.length == 0) {
            addedToCartList[0] = product[0];
            addedToCartList[0].added_quantity = counterValue;
            index = 1;
        } else {
            for (let i = 0; i < addedToCartList.length; i++) {
                if (addedToCartList[i].id === product[0].id) {
                    if (addedToCartList[i].added_quantity < 5 && (addedToCartList[i].added_quantity + counterValue) <= 5) {
                        addedToCartList[i].added_quantity += counterValue;
                    } else {
                        addedToCartList[i].added_quantity = 5;
                        alert('Dostigli ste maksimalni broj proizvoda!');
                    }
                    exist = true;
                }
            }
            if (!exist) {
                addedToCartList[index] = product[0];
                addedToCartList[index].added_quantity = counterValue;
                index++;
            }
        }
        saveProductsToLocalStorage(addedToCartList);
        setTotalQuantityInCartTitle();
        addToCart(addedToCartList);
    } else {
        alert('Proizvod nije na stanju!');
    }
}

const productsCartList = document.querySelectorAll(".products-cart-list");
const totalProductsPrice = document.querySelectorAll(".products-cart-total");
let totalPrice;
let totalPriceAllProducts;
let formatedTotalPriceAllProducts;

function addToCart(productFromList) {
    for (let i = 0; i < productsCartList.length; i++) {
        productsCartList[i].innerHTML = '';
        totalPriceAllProducts = 0;
        for (let j = 0; j < productFromList.length; j++) {
            product = productFromList[j];
            formatedPrice = product.price.toLocaleString('sr-RS', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
            totalPrice = product.price * product.added_quantity;
            totalPriceAllProducts += totalPrice;
            totalPrice = totalPrice.toLocaleString('sr-RS', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
            formatedTotalPriceAllProducts = totalPriceAllProducts.toLocaleString('sr-RS', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
            productsCartList[i].innerHTML += `
                <div class="products-added-to-cart-wrapper">
                    <div class="product-img-mini-info-wrapper">
                        <img src="images/products/${product.img}" alt="${product.title}">
                        <div class="product-mini-info">
                            <span>${product.brand}</span>
                            <span>${product.id}</span>
                            <span>${formatedPrice} RSD x ${product.added_quantity}</span>
                        </div>
                    </div>
                    <div class="product-quantity-wrapper">
                        <div class="product-quantity">
                            <span class='btn-desc' data-id="${product.id}">-</span>
                            <span>${product.added_quantity}</span>
                            <span class='btn-asc'data-id="${product.id}">+</span>
                        </div>
                        <span>${totalPrice} RSD</span>
                    </div>
                </div>`;
            totalProductsPrice[i].innerHTML = `${formatedTotalPriceAllProducts} RSD`;
        }
    }
}

if (getProductsFromLocalStorage().length != 0) {
    addToCart(getProductsFromLocalStorage());
}

//--------------- Smanjivanje broja proizvoda u korpi --------------

document.addEventListener("click", function (e) {
    const button = e.target.closest(".btn-desc");
    if (button) {
        const productId = button.dataset.id;
        addedToCartList = getProductsFromLocalStorage();
        for (let j = 0; j < addedToCartList.length; j++) {
            if (addedToCartList[j].id == productId) {
                if (addedToCartList[j].added_quantity > 1) {
                    addedToCartList[j].added_quantity--;
                    addToCart(addedToCartList);
                } else if (addedToCartList[j].added_quantity == 1) {
                    addedToCartList.splice(j, 1);
                    index--;
                    addToCart(addedToCartList);
                    for (let i = 0; i < productsCartList.length; i++) {
                        if (addedToCartList.length == 0) {
                            productsCartList[i].innerHTML = '<p>Korpa je prazna</p>';
                            totalProductsPrice[i].innerHTML = '0 RSD';
                        }
                    }
                }
            }
        }
        saveProductsToLocalStorage(addedToCartList);
        setTotalQuantityInCartTitle();
    }
});

//--------------- Povećanje broja proizvoda u korpi --------------

document.addEventListener("click", function (e) {
    const button = e.target.closest(".btn-asc");
    if (button) {
        const productId = button.dataset.id;
        addedToCartList = getProductsFromLocalStorage();
        for (let i = 0; i < addedToCartList.length; i++) {
            if (addedToCartList[i].id == productId) {
                if (addedToCartList[i].added_quantity < 5) {
                    addedToCartList[i].added_quantity++;
                    addToCart(addedToCartList);
                } else if (addedToCartList[i].added_quantity == 5) {
                    alert('Dostigli ste maksimalni broj proizvoda!');
                }
            }
        }
        saveProductsToLocalStorage(addedToCartList);
        setTotalQuantityInCartTitle();
    }
});

//----------------- Otvaranje i zatvaranje korpe ----------------

document.addEventListener("click", function (e) {
    const button = e.target.closest("#cart-btn");
    if (button) {
        e.preventDefault();
        const popUpCart = document.querySelector(".pop-up-cart");
        popUpCart.classList.toggle('pop-up');
    }
});

//------------------ Brojač proizvoda u korpi -------------------

const cartTitle = document.querySelectorAll(".cart-title");
let totalQuantity;

function setTotalQuantityInCartTitle() {
    totalQuantity = 0;
    for (let i = 0; i < getProductsFromLocalStorage().length; i++) {
        totalQuantity += getProductsFromLocalStorage()[i].added_quantity;
    }
    for (let i = 0; i < cartTitle.length; i++) {
        cartTitle[i].innerHTML = `Korpa: <span style='font-size: 18px;'>${totalQuantity}</span>`;
    }
}

setTotalQuantityInCartTitle();

//------------------ Otvaranje opisa proizvoda -----------------

const popUpProduct = document.querySelector(".pop-up-product");
const popUpProductWrapper = document.querySelector(".pop-up-product-wrapper");
let counter = document.querySelector(".counter");
let counterValue = 1;

document.addEventListener("click", function (e) {
    const button = e.target.closest(".product-link");
    if (button) {
        e.preventDefault();
        counterValue = 1;
        document.body.style.overflow = 'hidden';
        const productId = button.dataset.id;
        for (let j = 0; j < products.length; j++) {
            if (products[j].id == productId) {
                product = products[j];
            }
        }
        formatedPrice = product.price.toLocaleString('sr-RS', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        popUpProductWrapper.innerHTML = `
            <img src="images/products/${product.img}" alt="${product.title}">
            <div class="pop-up-product-content">
                <h3>${product.title}</h3>
                <span>Šifra artikla: ${product.id}</span>
                <span>${product.status}</span>
                <span>${formatedPrice} RSD x 1</span>
                <div class="product-quantity">
                    <span class="counter-desc" role="button">-</span>
                    <span class="counter">${counterValue}</span>
                    <span class="counter-asc" role="button">+</span>
                </div>
                <div class="product-description">
                    <p>${product.desc}</p>
                </div>
                <a href="">
                    <div class="white-button product-btn" data-id="${product.id}">
                        <span>Dodaj u korpu</span>
                    </div>
                </a>
                <div class="close-btn">
                    <img src="icons/close_icon.svg" alt="Close">
                </div>
            </div>
        `;
        popUpProduct.classList.remove("pop-up-product-close");
    }
});

//----------------- Zatvaranje opisa proizvoda ------------------

document.addEventListener("click", function (e) {
    const button = e.target.closest(".close-btn");
    if (button) {
        popUpProduct.classList.add("pop-up-product-close");
        counterValue = 1;
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.key === "Esc") {
        popUpProduct.classList.add("pop-up-product-close");
        counterValue = 1;
        document.body.style.overflow = 'auto';
    }
});

//--------------- Umanjivanje vrednosti brojača  ----------------

document.addEventListener("click", function (e) {
    const button = e.target.closest(".counter-desc");
    if (button) {
        if (counterValue > 1) {
            counter = document.querySelector(".counter");
            counterValue--;
            counter.innerHTML = `${counterValue}`;
        }
    }
});

//----------------- Uvećavanje vrednosti brojača  ------------------

const ip = document.querySelector(".product-quantity");

document.addEventListener("click", function (e) {
    const button = e.target.closest(".counter-asc");
    if (button) {
        if (counterValue < 5) {
            counter = document.querySelector(".counter");
            counterValue++;
            counter.innerHTML = `${counterValue}`;
        }
    }
});

//-------------------- Pop-Up Products Search ----------------------

const popUpSearch = document.querySelector(".pop-up-search");

function applySearchFilter() {
    const search = document.querySelector('#pop-up-search').value.trim().toLowerCase();
    let list = products.filter(p => (p.title.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search) || p.id.toLowerCase().includes(search)));
    renderProductsInPopUpSearch(list);
}

document.querySelector('#pop-up-search').addEventListener('input', applySearchFilter);

//----------------- Otvaranje i zatvaranje pretrage ----------------

document.addEventListener("click", function (e) {
    const button = e.target.closest("#search-btn");
    if (button) {
        e.preventDefault();
        popUpSearch.classList.toggle('pop-up');
    }
});

//------------ Prikazivanje rezultata u Pop-Up Search --------------

const filteredSearchProducts = document.querySelector(".filtered-search-products");

function renderProductsInPopUpSearch(filteredProducts) {
    if (filteredProducts.length == 0) {
        filteredSearchProducts.innerHTML = '<p>Nema rezultata pretrage</p>';
    } else if (document.querySelector('#pop-up-search').value.trim().toLowerCase() != '') {
        filteredSearchProducts.innerHTML = '';
        for (let i = 0; i < filteredProducts.length; i++) {
            formatedPrice = filteredProducts[i].price.toLocaleString('sr-RS', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            filteredSearchProducts.innerHTML += `
                <a href="" class="product-link" data-id="${filteredProducts[i].id}">
                    <div class="product-img-mini-info-wrapper">
                        <img src="images/products/${filteredProducts[i].img}" alt="${filteredProducts[i].title}">
                        <div class="product-mini-info filtered-product-mini-info">
                            <span>${filteredProducts[i].title} - ${filteredProducts[i].id}</span>
                            <span>${filteredProducts[i].status}</span>
                            <span>${formatedPrice} RSD</span>
                        </div>
                    </div>
                </a>`;
        }
    } else {
        filteredSearchProducts.innerHTML = '<p>Nema rezultata pretrage</p>';
    }
}

//------------------------- Naručivanje -------------------------

document.addEventListener("click", function (e) {
    const button = e.target.closest(".order-button");
    if (button) {
        e.preventDefault();

        if (totalQuantity != 0) {
            window.location.href = "ordering.html";
        } else {
            alert("Nema proizvoda za naručivanje!");
        }
    }
});

//-------- Funkcija za upisivanje naružbina u LocalStorage --------

function saveOrdersToLocalStorage(orderData) {
    const storedOrders = localStorage.getItem("orders");
    const orders = storedOrders ? JSON.parse(storedOrders) : [];
    orders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(orders));
}

//-------- Funkcija za čitanje naružbina iz LocalStorage ---------

function getOrdersFromLocalStorage() {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
        const parsed = JSON.parse(storedOrders);
        return parsed;
    }
    return [];
}

//-------------- Sakrivanje dugmeta za narudžbine ---------------

if(getOrdersFromLocalStorage().length == 0) {
    document.querySelector("#orders-btn").classList.add("hidden-element");
}