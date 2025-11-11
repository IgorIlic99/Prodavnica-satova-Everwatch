
//-------------- Prikazivanje proizvoda na stranici -------------

const productsItemsWrapper = document.querySelector(".products-section-items-wrapper");
let product;
let formatedPrice;
let renderTimeout;

function renderProducts(productsList) {
    clearTimeout(renderTimeout);
    productsItemsWrapper.classList.add('hidden');
    productsItemsWrapper.innerHTML = '';
    renderTimeout = setTimeout(() => {
        for (let i = 0; i < productsList.length; i++) {
            const product = productsList[i];
            const formatedPrice = product.price.toLocaleString('sr-RS', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            productsItemsWrapper.innerHTML += `
                <div class="products-section-items">
                    <a href="" class="product-link" data-id="${product.id}">
                        <img src="images/products/${product.img}" alt="${product.title}">
                    </a>
                    <div class="products-section-items-text-btn">
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

        productsItemsWrapper.classList.remove('hidden');
    }, 400);
}

renderProducts(products);

//-------------------------- Filteri-----------------------------

const select = s => document.querySelector(s);

function applyFilters() {
    const search = select('#search').value.trim().toLowerCase();
    const filter = select('#filter').value;
    const filterBrands = select('#filter-brands').value;
    let filterStock = select('#filter-stock').value;
    if (filterStock === 'in_stock') {
        filterStock = 'na stanju';
    } else if (filterStock === 'out_stock') {
        filterStock = 'nije na stanju';
    }
    const sort = select('#sort').value;
    let list = products.filter(p => (p.title.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search) || p.id.toLowerCase().includes(search)));
    if (filter !== 'all') { list = list.filter(p => p.category === filter); }
    if (filterBrands !== 'all') { list = list.filter(p => p.brand.toLowerCase() === filterBrands); }
    if (filterStock !== 'all') { list = list.filter(p => p.status.toLowerCase() === filterStock); }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    renderProducts(list);
}

select('#search').addEventListener('input', applyFilters);
select('#filter').addEventListener('change', applyFilters);
select('#filter-brands').addEventListener('change', applyFilters);
select('#filter-stock').addEventListener('change', applyFilters);
select('#sort').addEventListener('change', applyFilters);
