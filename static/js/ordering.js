
//-------------- Dodavanje i uklanjanje adrese za naplatu --------------

const checkBox = document.querySelector("#check");
const billingAddress = document.querySelector(".billing-address");
const billingInputs = billingAddress.querySelectorAll('input');
billingInputs.forEach(input => input.removeAttribute('required'));

checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
        billingAddress.classList.add("hidden");
        billingInputs.forEach(input => input.removeAttribute('required'));
    } else {
        billingAddress.classList.remove("hidden");

        billingInputs.forEach(input => {
            console.log(input.getAttribute("name"));
            if ((input.getAttribute("name")) != "naselje" && input.getAttribute("name") != "okrug") {
                console.log(input.getAttribute("name"));
                input.setAttribute('required', true)
            }
        });

    }
});

//---------------- Prikazivanje proizvoda za naručivanje ---------------

const orderingProductsList = document.querySelector(".ordering-products-list");
const totalOrderingProductsPrice = document.querySelector("#ordering-products-total-price");

function addingOrderingProductsList() {
    let list = getProductsFromLocalStorage();
    orderingProductsList.innerHTML = '';
    totalPriceAllProducts = 0;
    for (let i = 0; i < list.length; i++) {
        formatedPrice = list[i].price.toLocaleString('sr-RS', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        totalPrice = list[i].price * list[i].added_quantity;
        totalPriceAllProducts += totalPrice;
        totalPrice = totalPrice.toLocaleString('sr-RS', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        formatedTotalPriceAllProducts = totalPriceAllProducts.toLocaleString('sr-RS', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        orderingProductsList.innerHTML += `
            <div class="ordering-product">
                <div class="ordering-product-img-mini-info-wrapper">
                    <img src="static/images/products/${list[i].img}" alt="${list[i].title}">
                    <div class="ordering-product-mini-info">
                        <span>${list[i].brand}</span>
                        <span>${list[i].id}</span>
                        <span>${formatedPrice} RSD x ${list[i].added_quantity}</span>
                    </div>
                </div>
                <span>${totalPrice} RSD</span>
            </div>`;
        totalOrderingProductsPrice.innerHTML = `${formatedTotalPriceAllProducts} RSD`;
    }
}

addingOrderingProductsList();

//------------------------ Ordering Form ----------------------------

document.querySelector('.ordering-form').addEventListener('submit', async function (e) {

    e.preventDefault();

    const contactData = {
        broj_telefona: this.querySelector('.contact-information input[name="broj-telefona"]').value,
        email: this.querySelector('.contact-information input[name="e-mail"]').value
    }

    const deliveryData = {
        ime: this.querySelector('.delivery-address input[name="ime"]').value,
        prezime: this.querySelector('.delivery-address input[name="prezime"]').value,
        grad: this.querySelector('.delivery-address input[name="grad"]').value,
        naselje: this.querySelector('.delivery-address input[name="naselje"]').value,
        adresa: this.querySelector('.delivery-address input[name="adresa"]').value,
        postanski_broj: this.querySelector('.delivery-address input[name="postanski-broj"]').value,
        okrug: this.querySelector('.delivery-address input[name="okrug"]').value,
    };

    const note = this.querySelector('.delivery-address textarea[name="napomena"]').value;
    let billingData = {};
    const check = this.querySelector('#check').checked;

    if (!check) {
        billingData = {
            ime: this.querySelector('.billing-address input[name="ime"]').value,
            prezime: this.querySelector('.billing-address input[name="prezime"]').value,
            grad: this.querySelector('.billing-address input[name="grad"]').value,
            naselje: this.querySelector('.billing-address input[name="naselje"]').value,
            adresa: this.querySelector('.billing-address input[name="adresa"]').value,
            postanski_broj: this.querySelector('.billing-address input[name="postanski-broj"]').value,
            okrug: this.querySelector('.billing-address input[name="okrug"]').value
        };
    } else {
        billingData = { ...deliveryData };
    }

    const orderData = {
        datum: new Date().toISOString(),
        kontakt_informacije: contactData,
        adresa_za_isporuku: deliveryData,
        adresa_za_naplatu: billingData,
        napomena: note,
        proizvodi: getProductsFromLocalStorage(),
        ukupna_cena: totalPriceAllProducts
    };

    const response = await fetch("http://localhost:5000/posalji_narudzbinu", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    });

    if (response.ok) {
        saveOrdersToLocalStorage(orderData);
        saveProductsToLocalStorage([]);
        window.location.href = "orders";
    } else {
        alert('Došlo je do greške pri naručivanju.');
    }
});