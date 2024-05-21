    document.addEventListener('DOMContentLoaded', function() {
        // Находим форму оплаты
        var paymentForm = document.querySelector('form');

        // Находим все поля формы
        var cardNumberInput = document.getElementById('card-number');
        var cardExpiryInput = document.getElementById('card-expiry');
        var cardCvcInput = document.getElementById('card-cvc');
        var cardHolderInput = document.getElementById('card-holder');

        // Находим кнопку "Buy"
        var buyButton = document.getElementById('buyButton');

        // Добавляем обработчик события для отправки формы
        paymentForm.addEventListener('submit', function(event) {
            // Предотвращаем отправку формы
            event.preventDefault();

            // Выполняем валидацию
            if (validateCardNumber(cardNumberInput.value) &&
                validateCardExpiry(cardExpiryInput.value) &&
                validateCardCvc(cardCvcInput.value) &&
                validateCardHolder(cardHolderInput.value)) {
                // Если все данные валидны, разрешаем отправку формы
                paymentForm.submit();
                // Очищаем корзину
                clearCart();
            }
        });

        // Функция для валидации номера карты
        function validateCardNumber(cardNumber) {
            var cardNumberPattern = /^\d{12}$/;
            if (!cardNumberPattern.test(cardNumber)) {
                alert('Номер карты должен содержать только 12 цифр.');
                return false;
            }
            return true;
        }

        // Функция для валидации срока действия карты
        function validateCardExpiry(cardExpiry) {
            var cardExpiryPattern = /^(0[1-9]|1[0-2])\/(\d{2})$/;
            if (!cardExpiryPattern.test(cardExpiry)) {
                alert('Срок действия карты должен иметь формат: MM/YY.');
                return false;
            }
            var today = new Date();
            var currentMonth = today.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
            var currentYear = today.getFullYear() % 100; // Получаем последние две цифры текущего года
            var [expiryMonth, expiryYear] = cardExpiry.split('/');
            expiryMonth = parseInt(expiryMonth, 10);
            expiryYear = parseInt(expiryYear, 10);
            if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
                alert('Карта просрочена.');
                return false;
            }
            return true;
        }

        // Функция для валидации CVC
        function validateCardCvc(cardCvc) {
            var cardCvcPattern = /^\d{3}$/;
            if (!cardCvcPattern.test(cardCvc)) {
                alert('CVC должен содержать только 3 цифры.');
                return false;
            }
            return true;
        }

        // Функция для валидации имени на карте
        function validateCardHolder(cardHolder) {
            var cardHolderPattern = /^[A-Za-z]+\s[A-Za-z]+$/;
            if (!cardHolderPattern.test(cardHolder)) {
                alert('Имя на карте должно содержать только английские буквы и пробел.');
                return false;
            }
            return true;
        }

        // Функция для очистки корзины
        function clearCart() {
            // Очищаем данные о корзине в LocalStorage
            localStorage.removeItem('cart');
        }
    });
