(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const anchors = mobileMenu.querySelectorAll('a[href*="#"]');
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (anchors.length === 0) return;

    if (!isMenuOpen) {
      anchors.forEach(anchor => {
        anchor.addEventListener('click', toggleMenu);
      });
      return;
    }

    anchors.forEach(anchor => {
      anchor.removeEventListener('click', toggleMenu);
    });
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 375px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();

const marquee = document.querySelector('.marquee');
const marqueeClass = document.querySelector('.marquee_class');
const marqueeSquare = document.querySelectorAll('.marquee__square');
const marqueeSquare2 = document.querySelectorAll('.marquee__square__2');
const footerLine = document.querySelector('.footer-line');

document.querySelectorAll('a[href^="#"').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.header-navigation').offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});

// Theme

let checkbox = document.querySelector('#switch');
let body = document.querySelector('body');

let localStorageTheme = localStorage.getItem('theme');

const setThemeColor = () => {
  localStorageTheme === 'dark' ? setDarkMode() : setLightMode();
};

const checkModeSeting = () => {
  window
    .matchMedia('(prefers-color-scheme: dark')
    .addEventListener('change', () => {
      checkThemeChange();
    });
};

const checkThemeChange = () => {
  if (
    localStorageTheme == null &&
    window.matchMedia('(prefers-color-scheme: dark').matches
  ) {
    setDarkMode();
  } else if (
    localStorageTheme &&
    window.matchMedia('(prefers-color-scheme: dark').matches
  ) {
    setDarkMode();
  } else {
    setLightMode();
  }
};

const setDarkMode = () => {
  body.classList = 'dark';
  marquee.classList.add('dark');
  marqueeClass.classList.add('dark');
  marqueeSquare.forEach(item => {
    item.classList.add('dark');
  });
  marqueeSquare2.forEach(item => {
    item.classList.add('dark');
  });
  footerLine.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  checkbox.checked = true;
};

const setLightMode = () => {
  body.classList = 'light';

  marquee.classList.remove('dark');
  marqueeClass.classList.remove('dark');
  marqueeSquare.forEach(item => {
    item.classList.remove('dark');
  });
  marqueeSquare2.forEach(item => {
    item.classList.remove('dark');
  });
  footerLine.classList.remove('dark');

  localStorage.setItem('theme', 'dark');
  localStorage.setItem('theme', 'light');

  checkbox.checked = false;
};

checkModeSeting();
checkThemeChange();
setThemeColor();

checkbox.addEventListener('click', () =>
  checkbox.checked ? setDarkMode() : setLightMode()
);
