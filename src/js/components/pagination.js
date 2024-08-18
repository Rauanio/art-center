export function initializePagination() {
  const paginationBtn = document.querySelector(
    '.tabs__content-active .tabs__content-pagination, .tabs__content-active .tabs__content-pagination-category'
  );
  let currentItem = 6;

  if (paginationBtn) {
    const paginationText = paginationBtn.querySelector(
      '.tabs__content-wrapper p'
    );

    const itemLength = document.querySelectorAll(
      '.tabs__content-active .tab__card, .tabs__content-active .page__category-card'
    ).length;

    const updatePaginationText = () => {
      const remainingItems = Math.min(6, itemLength - currentItem);

      paginationText.textContent = `Показать ещё ${remainingItems} из ${itemLength}`;
    };

    updatePaginationText();

    paginationBtn.onclick = () => {
      const cards = [
        ...document.querySelectorAll(
          '.tabs__content-active .tab__card, .tabs__content-active .page__category-card'
        ),
      ];

      for (let i = currentItem; i < currentItem + 6 && i < cards.length; i++) {
        cards[i].style.display = 'flex';
      }
      currentItem += 6;

      if (currentItem >= cards.length) {
        paginationBtn.style.display = 'none';
      } else {
        updatePaginationText();
      }
    };
  }
}

initializePagination();
