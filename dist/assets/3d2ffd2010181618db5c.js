import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import '../styles/styles.scss';
var swiper = new Swiper('.swiper', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination'
  },
  spaceBetween: 8,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});
var menuButton = document.querySelector('.btn__menu');
var menuButtonText = document.querySelector('.btn__menu-text');
var burgerMenu = document.querySelector('.burger');
function toggleMenu() {
  burgerMenu.classList.toggle('burger__visible');
  menuButton.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
  burgerMenu.classList.contains('burger__visible') ? menuButtonText.textContent = 'Закрыть' : menuButtonText.textContent = 'Меню';
}
menuButton.addEventListener('click', toggleMenu);
var elements = document.querySelectorAll('.rolling-text');
elements.forEach(function (element) {
  var innerText = element.innerText;
  element.innerHTML = '';
  var textContainer = document.createElement('div');
  textContainer.classList.add('rolling__block');
  var span = document.createElement('span');
  span.innerText = innerText;
  span.classList.add('word');
  textContainer.appendChild(span);
  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});