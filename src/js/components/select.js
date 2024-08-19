const selectList = document.querySelector('.center__tabs-list');
const selectButton = document.querySelector('.center__tabs-select-top');
const chevronIcon = document.querySelector('.chevron-icon');

const toggleSelect = () => {
  selectList.classList.toggle('center__tabs-list-active');
  chevronIcon.classList.toggle('chevron-icon-rotated');
  selectButton.classList.toggle('center__tabs-select-active')
};

selectButton.addEventListener('click', toggleSelect);
