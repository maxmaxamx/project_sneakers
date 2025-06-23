function displayProducts(productsArray) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = ''; // Очищаем контейнер

    productsArray.forEach(product => {
        const button = document.createElement('button');
        button.classList.add('view-details');
        button.textContent = "Подробнее";
        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.dataset.id = product.id;

        const productImage = document.createElement('img');
        productImage.src = product.image[0];
        productImage.alt = product.title;
        productImage.classList.add('img-small');

        const productTitle = document.createElement('h3');
        productTitle.textContent = product.title;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDescription.classList.add('hidden');

        const mod = document.createElement('div');
        mod.innerHTML = `<div id="modal" class="modal hidden">
        <div class="modal-content"> 
            <h2 id="modal-title">Название товара</h2>
            <div class="single-item" id="owl"></div>
            <p><b id="modal-price">Цена: $0</b></p>
            <p id="modal-description">Описание товара...</p>    
            <button id="add-to-cart" data-cart onclick="addToCart(event)">Добавить в корзину</button>
        </div>
    </div>`

        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productPrice);
        productCard.appendChild(productDescription);
        productCard.appendChild(button);
        productCard.appendChild(mod);

        productsContainer.appendChild(productCard);
        button.addEventListener('click', show);
        
    });
}

function sortByPriceAscending() {
    products.sort((a, b) => a.price - b.price);
    displayProducts(products);
}

function sortByPriceDescending() {
    products.sort((a, b) => b.price - a.price);
    displayProducts(products);
}

// Изначальное отображение товаров
displayProducts(products);
