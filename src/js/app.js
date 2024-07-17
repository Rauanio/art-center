import '../styles/styles.scss';

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const menuButton = document.querySelector('.btn__menu');
const burgerMenu = document.querySelector('.burger');
const gridCards = document.querySelector('.main__grid');
const application = document.querySelector('.application');
const footer = document.querySelector('footer');

function toggleMenu() {
  burgerMenu.classList.toggle('burger__visible');
  gridCards.classList.toggle('hidden');
  application.classList.toggle('hidden');
  footer.classList.toggle('hidden');
}

menuButton.addEventListener('click', toggleMenu);
