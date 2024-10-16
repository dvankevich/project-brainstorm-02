// Функція, яка спостерігає за входом елементів у видиму область
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      // Додаємо клас для анімації при вході у видиму область
      change.target.classList.add('element-show');
    }
  });
}

// Налаштування спостерігача для .element-animation
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);

// Спостереження за елементами з класом .element-animation
let elements = document.querySelectorAll('.element-animation');
elements.forEach(elm => observer.observe(elm)); // Використовуємо forEach для зручності

// Функція для спостереження за правими елементами
function onEntryRight(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      // Додаємо клас для анімації при вході у видиму область
      change.target.classList.add('element-show-right');
    }
  });
}

// Налаштування спостерігача для правих елементів
let optionsRight = { threshold: [0] }; // Змінено threshold на 0
let observerRight = new IntersectionObserver(onEntryRight, optionsRight);

// Спостереження за елементами з класом .element-animation-right
let elementsRight = document.querySelectorAll('.element-animation-right');
elementsRight.forEach(elm => observerRight.observe(elm)); // Використовуємо forEach для зручності

// Функція для спостереження за лівими елементами
function onEntryLeft(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      // Додаємо клас для анімації при вході у видиму область
      change.target.classList.add('element-show-left');
    }
  });
}

// Налаштування спостерігача для лівих елементів
let optionsLeft = { threshold: [0] }; // Змінено threshold на 0
let observerLeft = new IntersectionObserver(onEntryLeft, optionsLeft);

// Спостереження за елементами з класом .element-animation-left
let elementsLeft = document.querySelectorAll('.element-animation-left');
elementsLeft.forEach(elm => observerLeft.observe(elm)); // Використовуємо forEach для зручності
