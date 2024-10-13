// Підключаємо Swiper
const swiper = new Swiper('.swiper', {
    loop: false, // Відключає зациклення слайдів
    slidesPerView: 1, // Відображає по одному слайду
    spaceBetween: 20, // Відстань між слайдами
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true, // Дозволяє користуватись клавіатурою
        onlyInViewport: true,
    },
    mousewheel: {
        enabled: true, // Дозволяє скролінг мишею
    },
    on: {
        reachBeginning: function () {
            // Якщо досягли початку списку, блокуємо кнопку "prev"
            document.querySelector('.swiper-button-prev').classList.add('swiper-button-disabled');
        },
        reachEnd: function () {
            // Якщо досягли кінця списку, блокуємо кнопку "next"
            document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
        },
        fromEdge: function () {
            // Якщо користувач не на початку або кінці, знімаємо блокування кнопок
            document.querySelector('.swiper-button-prev').classList.remove('swiper-button-disabled');
            document.querySelector('.swiper-button-next').classList.remove('swiper-button-disabled');
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const reviewsList = document.querySelector('.reviews-list');
    const errorPopup = document.getElementById('error-popup');

    // Функція для показу повідомлення про помилку
    function showErrorPopup(message) {
        errorPopup.textContent = message;
        errorPopup.classList.remove('hidden');
        setTimeout(() => {
            errorPopup.classList.add('hidden');
        }, 5000); // Спливаюче повідомлення зникне через 5 секунд
    }

    // Функція для відображення відгуків
    function renderReviews(reviews) {
        if (reviews.length === 0) {
            reviewsList.innerHTML = '<li class="not-found">Not found</li>';
            return;
        }

        reviews.forEach(review => {
            const listItem = document.createElement('li');
            listItem.classList.add('swiper-slide');

            listItem.innerHTML = `
                <div class="reviews-items">
                    <img src="${review.img}" class="reviews-img" width="40" height="40" alt="${review.name}" />
                    <p class="reviews-list-text">${review.text}</p>
                    <h3 class="reviews-list-title">${review.name}</h3>
                </div>
            `;
            reviewsList.appendChild(listItem);
        });
    }

    // Функція для отримання відгуків з бекенда
    function fetchReviews() {
        fetch('https://your-backend-url.com/reviews')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error fetching reviews');
                }
                return response.json();
            })
            .then(data => {
                renderReviews(data.reviews);
                initializeSwiper(); // Ініціалізація Swiper після отримання відгуків
            })
            .catch(error => {
                console.error('Error:', error);
                showErrorPopup('Error fetching reviews. Please try again later.');
                reviewsList.innerHTML = '<li class="not-found">Not found</li>';
            });
    }

    // Ініціалізація Swiper (тільки після отримання відгуків)
    function initializeSwiper() {
        new Swiper('.swiper', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            keyboard: {
                enabled: true,
            },
            spaceBetween: 30,
        });
    }

    // Викликаємо функцію отримання відгуків при завантаженні сторінки
    fetchReviews();
});

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';