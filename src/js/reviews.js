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
        fetch('https://portfolio-js.b.goit.study/api/reviews')
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

    // Ініціалізація Swiper
    function initializeSwiper() {
        const swiper = new Swiper('.swiper', {
            loop: false,
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            mousewheel: {
                enabled: true,
            },
            on: {
                reachBeginning: function () {
                    this.navigation.prevEl.classList.add('swiper-button-disabled');
                },
                reachEnd: function () {
                    this.navigation.nextEl.classList.add('swiper-button-disabled');
                },
                fromEdge: function () {
                    this.navigation.prevEl.classList.remove('swiper-button-disabled');
                    this.navigation.nextEl.classList.remove('swiper-button-disabled');
                }
            }
        });
    }

    // Викликаємо функцію отримання відгуків при завантаженні сторінки
    fetchReviews();
});
