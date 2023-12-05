//Slider One
const swiperOne = new Swiper('.base__block-main', {
  slidesPerView: 1,
  centeredSlides: true,

  watchOverflow: true,
  keyboard: true,

  spaceBetween: 150,

  navigation: {
    nextEl: '.base__slider-next',
    prevEl: '.base__slider-prev',
  },
  pagination: {
    el: '.base__slider-numbers',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  navigation: {
    nextEl: '.base__slider-next',
    prevEl: '.base__slider-prev',
  },

  //Animation buttons for the first slider
  on: {
    slideChangeTransitionStart: function () {
      const currentIndex = this.activeIndex;
      const totalSlides = this.slides.length;

      document
        .querySelectorAll(
          '.base__slider-next, .base__slider-prev, .base__slider-next-long, .base__slider-prev-long'
        )
        .forEach((el) => {
          el.classList.add('remove-arrow');
        });

      if (currentIndex === 0) {
        document
          .querySelector('.base__slider-next-long')
          .classList.remove('remove-arrow');
        document
          .querySelector('.base__slider-prev')
          .classList.remove('remove-arrow');
      } else if (currentIndex === totalSlides - 1) {
        document
          .querySelector('.base__slider-next')
          .classList.remove('remove-arrow');
        document
          .querySelector('.base__slider-prev-long')
          .classList.remove('remove-arrow');
      } else {
        document
          .querySelector('.base__slider-next')
          .classList.remove('remove-arrow');
        document
          .querySelector('.base__slider-prev')
          .classList.remove('remove-arrow');
      }

      const baseAndHeaderSelectors = ['.base', '.header'];
      //Change background color for the OnSlider
      if (currentIndex === 0) {
        baseAndHeaderSelectors.forEach((selector) => {
          document.querySelector(selector).style.backgroundColor = '#435476';
        });
      } else if (currentIndex === 1) {
        baseAndHeaderSelectors.forEach((selector) => {
          document.querySelector(selector).style.backgroundColor = '#ab4e3d';
        });
      } else if (currentIndex === 2) {
        baseAndHeaderSelectors.forEach((selector) => {
          document.querySelector(selector).style.backgroundColor = '#288d52';
        });
      }
    },
  },
});

//Add buttons for the slider ONE
document
  .querySelector('.base__slider-next-long')
  .addEventListener('click', function () {
    swiperOne.slideNext();
  });
document
  .querySelector('.base__slider-prev-long')
  .addEventListener('click', function () {
    swiperOne.slidePrev();
  });

//Slider Two
const swiperTwo = new Swiper('.collection__slider-main', {
  slidesPerView: 5.3,
  centeredSlides: true,
  watchOverflow: true,
  keyboard: true,
  loop: true,
  spaceBetween: 32,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: false,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    425: {
      slidesPerView: 2.6,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3.6,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3.6,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.6,
    },
    1441: {
      slidesPerView: 5.6,
    },
  },
});

//Filtering in products
const itemFilter = document.querySelectorAll('.explore__item');
document.querySelector('.explore__button').addEventListener('click', (ev) => {
  if (ev.target.tagName !== 'BUTTON') return false;

  let filterClass = ev.target.dataset.filterbtn;

  itemFilter.forEach((el) => {
    el.classList.remove('js-item__hide');
    el.removeAttribute('style');

    if (filterClass !== 'all' && !el.classList.contains(filterClass)) {
      el.classList.add('js-item__hide');
      setTimeout(() => {
        el.style.display = 'none';
      }, 500);
    }
  });
});

//Clicks on menu buttons, opening and closing menus ....
const openMenu = document.querySelector('.js-open-menu');
const closeMenu = document.querySelector('.close-menu');
const menuWrapper = document.querySelector('.menu-wrap');
const hasCollapsible = document.querySelectorAll('.has-collapsible');
const mobileBtn = document.querySelector('.mobile__burger-btn');
const mobileOpenMenu = document.querySelector('.mobile__box');
const navigationMobileOpen = document.querySelector('.nav');

mobileBtn.addEventListener('click', function () {
  mobileOpenMenu.classList.toggle('js-open');
  navigationMobileOpen.classList.toggle('js-open');
  mobileBtn.classList.toggle('js-open');
});

openMenu.addEventListener('click', function () {
  menuWrapper.classList.add('js-active');
});

closeMenu.addEventListener('click', function () {
  menuWrapper.classList.remove('js-active');
});

hasCollapsible.forEach(function (collapsible) {
  collapsible.addEventListener('click', function () {
    collapsible.classList.toggle('js-active');

    hasCollapsible.forEach(function (otherCollapsible) {
      if (otherCollapsible !== collapsible) {
        otherCollapsible.classList.remove('js-active');
      }
    });
  });
});

const menuOverflay = document.querySelector('.menu-overlay');
menuOverflay.addEventListener('click', function () {
  menuWrapper.classList.remove('js-active');
});

//Inputs validation
let form = document.querySelector('.js-form');

form.onsubmit = function (event) {
  let inputEmail = form.querySelector('#email');

  if (!inputEmail.checkValidity()) {
    inputEmail.classList.add('js-error-email');
    event.preventDefault();
  } else {
    inputEmail.classList.remove('js-error-email');
  }
};
