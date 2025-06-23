// function updateCartDisplay() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.querySelector('.shopping-cart');
//     if (!cartContainer) return;

//     cartContainer.innerHTML = '<div class="title">Shopping Bag</div>';

//     if (cart.length === 0) {
//         cartContainer.innerHTML += '<p>Здесь пока ничего нету</p>';
//     } else {
//         cart.forEach(product => {
//             const item = document.createElement('div');
//             item.classList.add('item');
//             item.innerHTML = `
//                 <div class="buttons">
//                     <button class="delete-btn" onclick="removeFromCart(${product.id})">&#x2715;</button>
//                 </div>
//                 <div class="image">
//                     <img src="${product.image}" alt="${product.title}" />
//                 </div>
//                 <div class="description">
//                     <span>${product.title}</span>
//                     <span class="price"><b>${product.price} руб.</b></span>
//                 </div>
//                 <div class="quantity">
//                     <button id="plus-btn" type="button" name="button" onclick="plus(${product.id})">
//                         +
//                     </button>
//                     <span id="quantity" data-count>${product.quantity}</span>
//                     <button id="minus-btn" type="button" name="button" onclick="minus(${product.id})">
//                         -
//                     </button>
//                 </div>
                
//             `;

//              const sum = document.getElementById("total");
//              sum.innerHTML =`
//                  <p id="total">Итого: ${getSum()}</p>
//              `;

//             cartContainer.appendChild(item);
//             // cartContainer.appendChild(sum);
//         });
//     }

//     // window.addEventListener('click', function(event) {
//     //     if (event.target == document.getElementById('plus-btn')) {
//     //         ${product.price} += product.price;
//     //         product.quantity +=1;
//     //     }
//     //     if (event.target == document.getElementById('minus-btn')) {
            
//     //     }
        
    
//     // });
// }

// function removeFromCart(productId) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const product = cart.find(p => p.id == productId);

//     if (!product) {
//         console.error("Error: No product found.");
//         return;
//     }

//     let summ = parseInt(JSON.parse(localStorage.getItem('total-summ')));

//     // Уменьшаем summ на цену удаляемого продукта
//     summ -= product.price;

//     // Фильтруем корзину, удаляя продукт с указанным productId
//     cart = cart.filter(p => p.id != productId);

//     // Обновляем localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));
//     localStorage.setItem('total-summ', JSON.stringify(summ));

//     if (cart.length === 0) {
//         const sum = document.getElementById("total");
//              sum.innerHTML =`
//                  <p id="total">Итого: ${getSum()}</p>
//              `;
//     }
//     // Обновляем отображение корзины
//     updateCartDisplay();
// }


// // const closeButton = document.getElementById('close');
// // if (closeButton) {
// //     closeButton.addEventListener('click', close);
// // }


// function plus(productId) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const product = cart.find(product => product.id == productId);

//     if (!product) {
//         console.error("Error: No product found.");
//         return;
//     }

//     product.price += (product.price)/product.quantity;
//     product.quantity += 1;
//     localStorage.setItem('cart', JSON.stringify(cart));
//     updateCartDisplay();
// }

// function minus(productId) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const product = cart.find(product => product.id == productId);
    
//     if (!product) {
//         console.error("Error: No product found.");
//         return;
//     }

//     if (product.quantity > 1) {
//         product.price -= (product.price)/product.quantity;
//         product.quantity -= 1;
//     } else {
//         cart = cart.filter(p => p.id != productId);
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     updateCartDisplay();
// }




// === ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ===

// Получить корзину из localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Сохранить корзину в localStorage
function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Посчитать общую сумму корзины
function getSum() {
    const cart = getCart();
    return cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
}

// === ОСНОВНОЙ РЕНДЕР КОРЗИНЫ ===

function updateCartDisplay() {
    const cart = getCart();
    const cartContainer = document.querySelector('.shopping-cart');
    if (!cartContainer) return; 

    cartContainer.innerHTML = '<div class="title">Shopping Bag</div>';

    if (cart.length === 0) {
        cartContainer.innerHTML += '<p class="total">Здесь пока ничего нету</p>';
    } else {
        cart.forEach(product => {
            const item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `
                <div class="buttons">
                    <button class="delete-btn" data-action="remove" data-id="${product.id}">&#x2715;</button>
                </div>
                <div class="image">
                    <img src="${product.image[0]}" alt="${product.title}" />
                </div>
                <div class="description">
                    <span>${product.title}</span>
                    <span class="price"><b>${product.price * product.quantity}$</b></span>
                </div>
                <div class="quantity">
                    <button class="plus-btn" data-action="plus" data-id="${product.id}">+</button>
                    <span data-count>${product.quantity}</span>
                    <button class="minus-btn" data-action="minus" data-id="${product.id}">-</button>
                </div>
            `;
            cartContainer.appendChild(item);
        });
        // Добавляем сумму
        const sumDiv = document.getElementById('total-price');
        sumDiv.innerHTML = `<p class='total'>Итого: ${getSum()}$</p>`;
    }
}

// === ОБРАБОТЧИКИ КОРЗИНЫ ===

document.addEventListener('DOMContentLoaded', updateCartDisplay);

// Делегирование событий для кнопок в корзине
document.querySelector('.shopping-cart').addEventListener('click', function(event) {
    const btn = event.target;
    const productId = btn.getAttribute('data-id');
    if (!productId) return;

    if (btn.getAttribute('data-action') === 'plus') {
        plus(+productId);
    } else if (btn.getAttribute('data-action') === 'minus') {
        minus(+productId);
    } else if (btn.getAttribute('data-action') === 'remove') {
        removeFromCart(+productId);
    }
});

// Удаление товара
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(p => p.id !== productId);
    setCart(cart);
    updateCartDisplay();
}

// Увеличить количество
function plus(productId) {
    let cart = getCart();
    const product = cart.find(p => p.id === productId);
    if (product) {
        product.quantity += 1;
        setCart(cart);
        updateCartDisplay();
    }
}

// Уменьшить количество
function minus(productId) {
    let cart = getCart();
    const product = cart.find(p => p.id === productId);
    if (product) {
        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            cart = cart.filter(p => p.id !== productId);
        }
        setCart(cart);
        updateCartDisplay();
    }
}