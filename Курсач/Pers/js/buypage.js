const buyButton = document.querySelector('#buyButton');
  buyyButton.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Товар добавлен в корзину!');
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопку "Оформить заказ"
    var orderButton = document.querySelector('.order-button');
    
    // Добавляем обработчик события для нажатия на кнопку "Оформить заказ"
    orderButton.addEventListener('click', function(event) {
        // Предотвращаем поведение по умолчанию (переход по ссылке)
        event.preventDefault();
        
        // Вызываем функцию для очистки корзины
        clearCart();
        
        // Перенаправляем пользователя на index.html после очистки корзины
        window.location.href = 'index.html';
    });
});

function clearCart() {
    // Находим родительский элемент, содержащий все товары в корзине
    var cartProducts = document.getElementById('cart-products');
    // Удаляем все дочерние элементы из корзины
    while (cartProducts.firstChild) {
        cartProducts.removeChild(cartProducts.firstChild);
    }
}
