import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import '../styles/styles.scss';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
  },
  spaceBetween: 8,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const menuButton = document.querySelector('.btn__menu');
const menuButtonText = document.querySelector('.btn__menu-text');
const burgerMenu = document.querySelector('.burger');

function toggleMenu() {
  burgerMenu.classList.toggle('burger__visible');
  menuButton.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');

  burgerMenu.classList.contains('burger__visible')
    ? (menuButtonText.textContent = 'Закрыть')
    : (menuButtonText.textContent = 'Меню');
}

menuButton.addEventListener('click', toggleMenu);

let elements = document.querySelectorAll('.rolling-text');

elements.forEach((element) => {
  let innerText = element.innerText;
  element.innerHTML = '';

  let textContainer = document.createElement('div');
  textContainer.classList.add('rolling__block');

  let span = document.createElement('span');
  span.innerText = innerText;
  span.classList.add('word');

  textContainer.appendChild(span);

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});
