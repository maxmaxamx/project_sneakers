$(document).ready(function(){
  AOS.init();
});



let summ = 0;
localStorage.setItem('total-summ',JSON.stringify(summ));


const buttons = document.querySelectorAll(".view-details");

function show(event) {
    const productCard = event.target.closest('.product-card');
    if (!productCard) {
        console.log('err');
        return;
    }

    const productId = productCard.dataset.id;
    const product = products.find(p => p.id == productId);
    if (!product) return;

    const carousel = document.getElementById("owl");

    // Если слайдер уже инициализирован, отключаем его
    if ($(carousel).hasClass('slick-initialized')) {
        $(carousel).slick('unslick');
    }

    carousel.innerHTML = ''; // очищаем слайды

    // Добавляем новые слайды
    for(let i = 0; i < product.image.length; i++) {
        const slide = document.createElement("div");
        slide.classList.add("slide");
        const img = document.createElement("img");
        img.src = product.image[i];
        slide.appendChild(img);
        carousel.appendChild(slide);
    }

    // Заполняем данные модального окна
    document.getElementById('modal-title').textContent = product.title;
    document.getElementById('modal-price').textContent = `Цена: $${product.price}`;
    document.getElementById('modal-description').textContent = product.description;

    // Показываем модальное окно
    document.getElementById('modal').classList.remove('hidden');

    // Инициализируем Slick после отображения модального окна и добавления слайдов
    $(carousel).slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Кнопка "Добавить в корзину"
    const addToCartButton = document.getElementById('add-to-cart');
    addToCartButton.onclick = () => addToCart(product.id);
}

// Открытие модального окна
function close(){
    const carousel = document.getElementById("owl");
    carousel.innerHTML = '';
    document.getElementById('modal').classList.add('hidden');
}


// Добавление в корзину
function addToCart(productId) {
    if (!productId) {
        console.error("Error: No product ID found.");
        return;
    }

    const product = products.find(product => product.id == productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(p => p.id == productId);

    let summ = parseInt(JSON.parse(localStorage.getItem('total-summ')));

    if (existingProduct) {
        existingProduct.quantity += 1;
        summ += product.price;
    } else {
        product.quantity = 1;
        cart.push(product);
        summ += product.price;
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    localStorage.setItem('total-summ', JSON.stringify(summ));

    updateCartDisplay();

}

document.addEventListener('click', (event) => {
    if(event.target === document.getElementById("modal")){
        close();
    }
});


buttons.forEach(btn => btn.addEventListener('click', show));


function displayProducts(productsArray) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = ''; // Очищаем контейнер

    productsArray.slice(0, 9).forEach(product => {
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

displayProducts(products);

function showEnter() {
    let ent = document.getElementById('enter-main');
    if (ent) {
        ent.classList.remove('hidden');
    } else {
        console.error("Error: No element with class 'enterr' found.");
    }
}

document.getElementById('enter-button').addEventListener('click', showEnter);

function closeEnter() {
    const enterDiv = document.getElementById('enter-main');
    if (enterDiv) {
        enterDiv.classList.add('hidden');
    } else {
        console.error("Error: No element with id 'enter-main' found.");
    }
}




