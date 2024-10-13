import axios from "axios";

const listRevievsEl = document.querySelector('.js-reviews-wrapper')





async function getReviews() {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';

  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        'Accept': 'application/json'
      }
    });

    return response.data; // Повертаємо дані

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Викидаємо помилку, щоб можна було її обробити в іншій функції
  }
}



function createMurkupListReviews(data) {
  const murkupReviews = data.map(item => {
    const { author, avatar_url, review } = item
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
    
    `
  }).join('')
  return murkupReviews
}



async function useReviews() {
  try {
    const reviews = await getReviews();
    listRevievsEl.insertAdjacentHTML('afterbegin',createMurkupListReviews(reviews))
    

  } catch (error) {
    console.error('Error using reviews:', error); // Обробляємо помилку
  }
}

// Виклик функції
useReviews();


// Імпортуйте Swiper, якщо ви використовуєте модулі
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css'; // Імпорт стилів Swiper, якщо необхідно

// Налаштування Swiper
const swiper = new Swiper('.swiper', {
  // Налаштування для кількості слайдів
  slidesPerView: 1, // за замовчуванням - 1 слайд
  spaceBetween: 32, // відстань між слайдами

  // Налаштування для адаптивності
  breakpoints: {
    1280: {
      slidesPerView: 2, // 2 слайди при ширині 1280 пікселів та більше
    },
  },

  // Кнопки навігації
  navigation: {
    nextEl: '.reviews-arrow-box-right',
    prevEl: '.reviews-arrow-box-left',
    disabledClass: 'disabled', // клас для відключених кнопок
  },

  // Додаткові налаштування (за потреби)
  loop: false, // Вимкнено зациклення, якщо потрібно
});

// Функція для оновлення стану кнопок навігації
function updateNavigation() {
  const totalSlides = swiper.slides.length;
  const currentIndex = swiper.activeIndex;
  const viewportWidth = window.innerWidth;
  // Увімкнення/вимкнення кнопок навігації
  swiper.navigation.prevEl.disabled = currentIndex === 0;
  
  if (viewportWidth >= 1280) {
    swiper.navigation.nextEl.disabled = currentIndex === totalSlides - 2;
    
  } else {
    swiper.navigation.nextEl.disabled = currentIndex === totalSlides - 1;
  }
  
}

// Додати слухача подій для оновлення кнопок навігації при зміні активного слайда
swiper.on('slideChange', updateNavigation);
