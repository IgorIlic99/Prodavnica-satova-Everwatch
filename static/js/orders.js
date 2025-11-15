
//---------------------- Orders Section ------------------------

const ordersSection = document.querySelector(".orders-section");
let ordersInformation = getOrdersFromLocalStorage();

for (let i = 0; i < ordersInformation.length; i++) {

    const datum = new Date(ordersInformation[i].datum);

    const srpskiDatumLatinica = datum.toLocaleDateString('sr-Latn-RS', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric' 
    });

    ordersSection.innerHTML += `
            <div class="orders-section-content">
                <div class="container">
                    <h2>Narudžbina broj ${(i + 1)}</h2>
                    <div class="orders-section-wrapper">
                        <div class="orders-information">
                            <div class="contact-information">
                                <h3>KONTAKT INFORMACIJE</h3>
                                <div class="orders-content">
                                    <span>Broj telefona: ${ordersInformation[i].kontakt_informacije.broj_telefona}</span>
                                    <span>E-mail adresa: ${ordersInformation[i].kontakt_informacije.email}</span>
                                    <span>Datum: ${srpskiDatumLatinica}</span>
                                </div>
                            </div>
                            <div class="delivery-address">
                                <h3>ADRESA ZA ISPORUKU</h3>
                                <div class="orders-content">
                                    <span>Ime: ${ordersInformation[i].adresa_za_isporuku.ime}</span>
                                    <span>Prezime: ${ordersInformation[i].adresa_za_isporuku.prezime}</span>
                                    <span>Grad: ${ordersInformation[i].adresa_za_isporuku.grad}</span>
                                    <span>Naselje: ${ordersInformation[i].adresa_za_isporuku.naselje}</span>
                                    <span>Adresa: ${ordersInformation[i].adresa_za_isporuku.adresa}</span>
                                    <span>Poštanski broj: ${ordersInformation[i].adresa_za_isporuku.postanski_broj}</span>
                                    <span>Okrug: ${ordersInformation[i].adresa_za_isporuku.okrug}</span>
                                    <span>Napomena: ${ordersInformation[i].napomena}</span>
                                </div>
                            </div>
                            <div class="billing-address">
                                <h3>ADRESA ZA NAPLATU</h3>
                                <div class="orders-content">
                                    <span>Ime: ${ordersInformation[i].adresa_za_naplatu.ime}</span>
                                    <span>Prezime: ${ordersInformation[i].adresa_za_naplatu.prezime}</span>
                                    <span>Grad: ${ordersInformation[i].adresa_za_naplatu.grad}</span>
                                    <span>Naselje: ${ordersInformation[i].adresa_za_naplatu.naselje}</span>
                                    <span>Adresa: ${ordersInformation[i].adresa_za_naplatu.adresa}</span>
                                    <span>Poštanski broj: ${ordersInformation[i].adresa_za_naplatu.postanski_broj}</span>
                                    <span>Okrug: ${ordersInformation[i].adresa_za_naplatu.okrug}</span>
                                </div>
                            </div>
                        </div>
                        <div class="orders-products">
                            <h3>NARUČENI PROIZVODI</h3>
                            <div class="orders-products-list"></div>
                            <div class="orders-products-delivery">
                                <span>Dostava:</span>
                                <span>Besplatna</span>
                            </div>
                            <div class="orders-products-total-price">
                                <span>Ukupno:</span>
                                <span id="orders-products-total-price">154.980,00 RSD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

    let ordersSectionContent = document.querySelectorAll(".orders-section-content");
    let ordersProductsDelivery = document.querySelectorAll(".orders-products-delivery");

    if (i % 2 != 0) {
        ordersSectionContent[i].style.backgroundColor = "var(--silver)";
        ordersProductsDelivery[i].style.borderBottom = "var(--dark-blue) 3px solid";
    }

    let orderProducts = ordersInformation[i].proizvodi;
    let ordersProductList = document.querySelectorAll(".orders-products-list");
    ordersProductList[i].innerHTML = '';
    let totalOrdersProductsPrice = document.querySelectorAll("#orders-products-total-price");
    totalPriceAllProducts = 0;

    for (let j = 0; j < orderProducts.length; j++) {
        formatedPrice = orderProducts[j].price.toLocaleString('sr-RS', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        totalPrice = orderProducts[j].price * orderProducts[j].added_quantity;
        totalPriceAllProducts += totalPrice;
        totalPrice = totalPrice.toLocaleString('sr-RS', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        formatedTotalPriceAllProducts = totalPriceAllProducts.toLocaleString('sr-RS', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        ordersProductList[i].innerHTML += `
                <div class="orders-product">
                    <div class="orders-product-img-mini-info-wrapper">
                        <img src="static/images/products/${orderProducts[j].img}" alt="${orderProducts[j].title}">
                        <div class="orders-product-mini-info">
                            <span>${orderProducts[j].brand}</span>
                            <span>${orderProducts[j].id}</span>
                            <span>${formatedPrice} RSD x ${orderProducts[j].added_quantity}</span>
                        </div>
                    </div>
                    <span>${totalPrice} RSD</span>
                </div>`;
        totalOrdersProductsPrice[i].innerHTML = `${formatedTotalPriceAllProducts} RSD`;
    }
}
