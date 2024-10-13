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
