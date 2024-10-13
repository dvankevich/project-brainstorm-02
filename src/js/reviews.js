const reviewsContainer = document.querySelector('.reviews-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < reviewsContainer.children.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

function updateSlider() {
    const cardWidth = reviewsContainer.children[0].offsetWidth + 20; // card width + margin
    reviewsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
