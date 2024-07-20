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