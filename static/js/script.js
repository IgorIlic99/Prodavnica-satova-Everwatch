async function run() {
    try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
            throw new Error('Mreža ne radi. Status: ' + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Greška pri dohvaćanju podataka:", error);
        throw error;
    }
}

run().then(podaci => {
    if (podaci) {

        products = podaci;

        for (let i = 0; i < podaci.length; i++) {
            products[i].creation_date = new Date(podaci[i].creation_date);
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
                        <img src="static/images/products/${product.img}" alt="${product.title}">
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
            <img src="static/images/products/${product.img}" alt="${product.title}">
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
                    <img src="static/images/icons/close_icon.svg" alt="Close">
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
                        <img src="static/images/products/${filteredProducts[i].img}" alt="${filteredProducts[i].title}">
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

                if (totalQuantity == 0) {
                    e.preventDefault();
                    alert("Nema proizvoda za naručivanje!");
                }
            }
        });

    }
});

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

if (getOrdersFromLocalStorage().length != 0) {
    document.querySelector("#orders-btn").classList.add("hidden-element");
    document.querySelector("#orders-btn").classList.remove("orders-btn");
}

