const openModalButton = document.querySelector('.openModal');
const closeModalButton = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const isModal = window.innerWidth > 1440;

console.log(isModal);

if (isModal) {
  openModalButton?.addEventListener('click', () => {
    modal.classList.add('modal__open');
    modalOverlay.classList.add('modal__overlay-open');
  });
}

closeModalButton?.addEventListener('click', () => {
  modal.classList.remove('modal__open');
  modalOverlay.classList.remove('modal__overlay-open');
});
