import '../styles/styles.scss';
var swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination'
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});
var menuButton = document.querySelector('.btn__menu');
var burgerMenu = document.querySelector('.burger');
var gridCards = document.querySelector('.main__grid');
var application = document.querySelector('.application');
var footer = document.querySelector('footer');
function toggleMenu() {
  burgerMenu.classList.toggle('burger__visible');
  gridCards.classList.toggle('hidden');
  application.classList.toggle('hidden');
  footer.classList.toggle('hidden');
}
menuButton.addEventListener('click', toggleMenu);