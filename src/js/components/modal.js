import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

window.addEventListener('DOMContentLoaded', () => {
  const openModalButton = document.querySelector('.openModal');
  const closeModalButton = document.querySelector('.modal__close');
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal__overlay');
  const header = document.querySelector('.header__wrapper');
  const isModal = window.innerWidth > 1440;
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  console.log(scrollBarWidth, 'scroll');

  const closeModal = () => {
    modal.classList.remove('modal__open');
    modalOverlay.classList.remove('modal__overlay-open');
    enableBodyScroll(modal);
    document.body.removeAttribute('style');
    header.removeAttribute('style');
  };

  if (isModal) {
    openModalButton?.addEventListener('click', () => {
      modal.classList.add('modal__open');
      modalOverlay.classList.add('modal__overlay-open');
      disableBodyScroll(modal);
      document.body.style.paddingRight = scrollBarWidth + 'px';
      header.style.marginRight = scrollBarWidth + 'px';
    });
  }

  closeModalButton?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});
