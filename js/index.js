// Slider

const slides = document.querySelectorAll('.slider-slide');
const buttonPrev = document.querySelector('.prev-slider-button');
const buttonNext = document.querySelector('.next-slide-button');
const bullets = document.querySelectorAll('.slider-pagination-button');
const slidesAmount = slides.length;
let currentIndex = 0;

const onSlideChange = (index) => {
  const activeSlide = document.querySelector('.slider-slide.is-active');
  const activeBullet = document.querySelector('.slider-pagination-button.is-active');

  document.body.classList.remove('color-pink');
  document.body.classList.remove('color-blue');
  document.body.classList.remove('color-yellow');
  document.body.classList.add(`${slides[index].dataset.class}`);
  activeSlide.classList.remove('is-active');
  slides[index].classList.add('is-active');
  activeBullet.classList.remove('is-active');
  bullets[index].classList.add('is-active');
};

const onPrevButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slidesAmount - 1;
  }

  onSlideChange(currentIndex);
};

const onNextButtonClick = (evt) => {
  evt.preventDefault();
  currentIndex++;

  if (currentIndex === slidesAmount) {
    currentIndex = 0;
  }

  onSlideChange(currentIndex);
};

const initSlider = () => {
  buttonPrev.addEventListener('click', onPrevButtonClick);
  buttonNext.addEventListener('click', onNextButtonClick);
  bullets.forEach((element, index) => element.addEventListener('click', () => onSlideChange(index)));
};

initSlider();

// Modal

const contactsLink = document.querySelector('.contacts-button');
const modalCloseButton = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');

contactsLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('is-open');
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('is-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.remove('is-open');
  }
});
