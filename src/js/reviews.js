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