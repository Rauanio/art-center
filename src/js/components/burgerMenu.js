import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { pages } from './pages';

window.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.btn__menu');
  const menuButtonText = document.querySelector('.btn__menu-text');
  const burgerMenu = document.querySelector('.burger');
  const centerPopup = document.querySelector('.center__popup');
  const centerPopupBtn = document.querySelectorAll('.center__popup-btn');
  const closeCenterPopup = document.querySelector('.center__tabs-close');
  const header = document.querySelector('.header');
  const headerWrapper = document.querySelector('.header__wrapper');
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  const pathname = window.location.pathname;

  function toggleMenu() {
    const isVisible = burgerMenu.classList.toggle('burger__visible');
    header.classList.toggle('header__burger');
    menuButton.classList.toggle('is-open');

    if (isVisible) {
      disableBodyScroll(burgerMenu);
      document.body.removeAttribute('class');
      document.body.style.paddingRight = scrollBarWidth + 'px';
      headerWrapper.style.marginRight = scrollBarWidth + 'px';
      menuButtonText.textContent = 'Закрыть';
    } else {
      enableBodyScroll(burgerMenu);
      pages.map((page) => {
        if (pathname.includes(page)) {
          document.body.setAttribute('class', page);
        }
      });
      menuButtonText.textContent = 'Меню';
      document.body.removeAttribute('style');
      headerWrapper.removeAttribute('style');
    }
  }

  function togglePopup() {
    centerPopup.classList.add('center__popup-visible');
    disableBodyScroll(centerPopup);
    document.body.style.paddingRight = scrollBarWidth + 'px';
  }

  function closePopup() {
    centerPopup.classList.remove('center__popup-visible');
    enableBodyScroll(centerPopup);
    document.body.removeAttribute('style');
  }

  menuButton.addEventListener('click', toggleMenu);
  centerPopupBtn.forEach((btn) => {
    btn.addEventListener('click', togglePopup);
  });
  closeCenterPopup.addEventListener('click', closePopup);
});
