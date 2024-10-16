import axios from "axios";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const listRevievsEl = document.querySelector('.js-reviews-wrapper');

async function getReviews() {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews'; 

  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        'Accept': 'application/json'
      }
    });

    return response.data;

  } catch (error) {
    const errorMessage = error.response
      ? `Error ${error.response.status}: ${error.response.statusText}`
      : 'Network error or server unavailable';
    checkScrollToReviews(errorMessage);
    throw error; 
  }
}

function createMurkupListReviews(data) {
  const murkupReviews = data.map(item => {
    const { author, avatar_url, review } = item;
    return `
      <li class="reviews-wrapper-cart swiper-slide">
        <p class="reviews-descr">
          ${review}
        </p>
        <div class="reviews-autor-wrapper">
          <img
            class="reviews-autor-photo"
            width="40"
            height="40"
            src="${avatar_url}"
            alt="${author}"
          />
          <p class="reviews-autor-name">${author}</p>
        </div>
      </li>
    `;
  }).join('');
  return murkupReviews;
}

// Функція для відображення повідомлення "Not found"
function displayNotFoundMessage() {
  listRevievsEl.innerHTML = `<div class="reviev-not-found-wrapper">
                              <p class="revievs-not-found">Not found</p></div>`;
}

// Функція для відображення повідомлення iziToast
function displayErrorMessage(message) {
  iziToast.error({
    title: '', 
    message: message, // Точне повідомлення про помилку
    position: 'topRight', 
    timeout: 5000,
  });
}

// Функція для перевірки скролу до секції з відгуками
function checkScrollToReviews(errorMessage) {
  const options = {
    root: null, // viewport
    threshold: 0.1 // процент видимості для активації
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        displayErrorMessage(errorMessage); // Відображаємо повідомлення про помилку
        observer.unobserve(entry.target); // Зупиняємо спостереження після першого показу
      }
    });
  }, options);

  observer.observe(listRevievsEl); // Спостерігаємо за секцією
}

async function useReviews() {
  try {
    const reviews = await getReviews();
    
    if (reviews.length === 0) { // Перевірка на порожній масив
      displayNotFoundMessage(); // Відображення повідомлення, якщо немає відгуків
    } else {
      listRevievsEl.insertAdjacentHTML('afterbegin', createMurkupListReviews(reviews));
    }
  } catch (error) {
    console.error('Error using reviews:', error);
    displayNotFoundMessage(); // Відображення повідомлення при помилці
  }
}

useReviews();

// Налаштування Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 32,

  breakpoints: {
    1280: {
      slidesPerView: 2,
    },
  },

  navigation: {
    nextEl: '.reviews-arrow-box-right',
    prevEl: '.reviews-arrow-box-left',
    disabledClass: 'disabled',
  },

  loop: false,
});

// Функція для оновлення стану кнопок навігації
function updateNavigation() {
  const totalSlides = swiper.slides.length;
  const currentIndex = swiper.activeIndex;
  const viewportWidth = window.innerWidth;

  swiper.navigation.prevEl.disabled = currentIndex === 0;

  if (viewportWidth >= 1280) {
    swiper.navigation.nextEl.disabled = currentIndex >= totalSlides - 2;
  } else {
    swiper.navigation.nextEl.disabled = currentIndex >= totalSlides - 1;
  }
}

swiper.on('slideChange', updateNavigation);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    swiper.slidePrev();
  } else if (event.key === 'ArrowRight') {
    swiper.slideNext();
  }
});
