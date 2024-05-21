// Получаем список товаров
const products = document.querySelectorAll('.product');

// Добавляем обработчик события клика на кнопку "Добавить в корзину"
products.forEach(product => {
  const addButton = product.querySelector('.button');
  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const productName = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('.price').textContent;

    // Получаем список товаров в корзине из localstorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Добавляем новый товар в корзину
    cart.push({ name: productName, price: productPrice });

    // Сохраняем обновленный список товаров в корзине в localstorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Обновляем список товаров в корзине на странице
    renderCart();
  });
});

// Добавляем обработчик события клика на кнопку "Удалить из корзины"
function attachRemoveButtonHandler(productElement, productIndex) {
  const removeButton = productElement.querySelector('.remove-button');
  removeButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Получаем список товаров в корзине из localstorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Удаляем товар из корзины
    cart.splice(productIndex, 1);

    // Сохраняем обновленный список товаров в корзине в localstorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Обновляем список товаров в корзине на странице
    renderCart();
  });
}

// Функция для отображения списка товаров в корзине на странице
function renderCart() {
  const cartProducts = document.querySelector('#cart-products');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Очищаем список товаров в корзине на странице
  cartProducts.innerHTML = '';

  // Добавляем каждый товар из корзины на страницу
  cart.forEach((product, index) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <div class="product-details">
        <p class="price">${product.price}</p>
        <a href="#" class="remove-button">Удалить из корзины</a>
      </div>
    `;
    cartProducts.appendChild(productElement);

    // Добавляем обработчик события клика на кнопку "Удалить из корзины"
    attachRemoveButtonHandler(productElement, index);
  });
}

// Вызываем функцию для отображения списка товаров в корзине при загрузке страницы
renderCart();



