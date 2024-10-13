document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper-container', {
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
        mousewheel: true,
        on: {
            reachEnd: function () {
                document.querySelector('.swiper-button-next').classList.add('disabled');
            },
            reachBeginning: function () {
                document.querySelector('.swiper-button-prev').classList.add('disabled');
            },
            fromEdge: function () {
                document.querySelector('.swiper-button-next').classList.remove('disabled');
                document.querySelector('.swiper-button-prev').classList.remove('disabled');
            }
        }
    });
});
