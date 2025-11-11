//------------------------- Hero Slider ----------------------------- 

const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.toggle("active", i == index);
        dots[i].classList.toggle("active", i == index);
    }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 4000);
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        clearInterval(slideInterval);
        currentIndex = parseInt(dots[i].getAttribute("index"));
        showSlide(currentIndex);
        startSlider();
    });
}

showSlide(currentIndex);
startSlider();

//------------------------- Brands Section --------------------------- 

const brands = document.querySelector(".brands-wrapper");

for (let i = 0; i < brands.children.length; i++) {
    brands.children[i].addEventListener("mouseenter", () => {
        for (let j = 0; j < brands.children.length; j++) {
            brands.children[j].style.filter = 'grayscale(100%)';
        }
        brands.children[i].style.filter = 'grayscale(0%)';
    });
    brands.children[i].addEventListener("mouseleave", () => {
        for (let j = 0; j < brands.children.length; j++) {
            brands.children[j].style.filter = 'grayscale(0%)';
        }
    });
}

//------------------------ Highlight Section -------------------------- 

const highlightItemsWrapper = document.querySelector(".highlight-items-wrapper");
let highlightProducts = [];
let highlightProductsIndex = 0;
let itemsPerPage = 4;
let product;
let formatedPrice;
let currentProductIndex = 0;

for (let i = 0; i < products.length; i++) {
    if (products[i].highlight == true) {
        highlightProducts[highlightProductsIndex++] = products[i];
    }
}

function renderProducts(startIndex) {
    highlightItemsWrapper.classList.add('hidden');
    setTimeout(() => {
        for (let i = 0; i < itemsPerPage; i++) {
            product = highlightProducts[(startIndex + i) % highlightProducts.length];
            formatedPrice = product.price.toLocaleString('sr-RS', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            highlightItemsWrapper.innerHTML +=
                `<div class="products-slider-items">
                    <a href="" class="product-link" data-id="${product.id}">
                        <img src="images/products/${product.img}" alt="${product.title}">
                    </a>
                    <div class="products-slider-items-text-btn">
                        <a href="" class="product-link" data-id="${product.id}">
                            <h3>${product.title.toUpperCase()} - ${product.id}</h3>
                        </a>
                        <span>${product.status}</span>
                        <span>${formatedPrice} RSD</span>
                        <a href="">
                            <div class="white-button product-btn" data-id="${product.id}">
                                <span>Dodaj u korpu</span>
                            </div>
                        </a>
                    </div>    
                </div>`;
        }
        highlightItemsWrapper.classList.remove('hidden');
    }, 400);
}

renderProducts(currentProductIndex);

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
    highlightItemsWrapper.innerHTML = '';
    currentProductIndex = (currentProductIndex - itemsPerPage + highlightProducts.length) % highlightProducts.length;
    renderProducts(currentProductIndex);
});

rightArrow.addEventListener("click", () => {
    highlightItemsWrapper.innerHTML = '';
    currentProductIndex = (currentProductIndex + itemsPerPage) % highlightProducts.length;
    renderProducts(currentProductIndex);
});

const arrows = document.querySelectorAll(".slide-arrow");

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("mouseenter", () => {
        arrows[i].children[0].style.color = "white";
    });
    arrows[i].addEventListener("mouseleave", () => {
        arrows[i].children[0].style.color = "#122A57";
    });
}

const highlightWrapper = document.querySelector(".highlight-wrapper");

highlightWrapper.addEventListener("mouseenter", () => {
    arrows[0].style.left = '0';
    arrows[0].style.opacity = '1';
    arrows[1].style.right = '0';
    arrows[1].style.opacity = '1';
});
highlightWrapper.addEventListener("mouseleave", () => {
    arrows[0].style.left = '-40px';
    arrows[0].style.opacity = '0';
    arrows[1].style.right = '-40px';
    arrows[1].style.opacity = '0';
});

//--------------------- Latest Products Section ----------------------- 

const latestProductsItemsWrapper = document.querySelector(".latest-products-items-wrapper");
const sortedProducts = [...products].sort((a, b) => b.creation_date - a.creation_date);
const latestTen = sortedProducts.slice(0, 10);

function renderLatestProducts(startIndex) {
    latestProductsItemsWrapper.classList.add('hidden');
    setTimeout(() => {
        for (let i = 0; i < itemsPerPage; i++) {
            product = latestTen[(startIndex + i) % latestTen.length];
            const formatedPrice = product.price.toLocaleString('sr-RS', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            latestProductsItemsWrapper.innerHTML += `
                <div class="products-slider-items">
                    <a href="" class="product-link" data-id="${product.id}">
                        <img src="images/products/${product.img}" alt="${product.title}">
                    </a>
                    <div class="products-slider-items-text-btn">
                        <a href="" class="product-link" data-id="${product.id}">
                            <h3>${product.title.toUpperCase()} - ${product.id}</h3>
                        </a>
                        <span>${product.status}</span>
                        <span>${formatedPrice} RSD</span>
                        <a href="">
                            <div class="white-button product-btn" data-id="${product.id}">
                                <span>Dodaj u korpu</span>
                            </div>
                        </a>
                    </div>    
                </div>
            `;
        };
        latestProductsItemsWrapper.classList.remove('hidden');
    }, 400);
}

renderLatestProducts(currentProductIndex);

const latestLeftArrow = document.querySelector(".latest-left-arrow");
const latestRightArrow = document.querySelector(".latest-right-arrow");

latestLeftArrow.addEventListener("click", () => {
    latestProductsItemsWrapper.innerHTML = '';
    currentProductIndex = (currentProductIndex - itemsPerPage + latestTen.length) % latestTen.length;
    renderLatestProducts(currentProductIndex);
});

latestRightArrow.addEventListener("click", () => {
    latestProductsItemsWrapper.innerHTML = '';
    currentProductIndex = (currentProductIndex + itemsPerPage) % latestTen.length;
    renderLatestProducts(currentProductIndex);
});

const latestArrows = document.querySelectorAll(".latest-arrow");
const latestProductWrapper = document.querySelector(".latest-products-wrapper");

latestProductWrapper.addEventListener("mouseenter", () => {
    latestArrows[0].style.left = '0';
    latestArrows[0].style.opacity = '1';
    latestArrows[1].style.right = '0';
    latestArrows[1].style.opacity = '1';
});
latestProductWrapper.addEventListener("mouseleave", () => {
    latestArrows[0].style.left = '-40px';
    latestArrows[0].style.opacity = '0';
    latestArrows[1].style.right = '-40px';
    latestArrows[1].style.opacity = '0';
});