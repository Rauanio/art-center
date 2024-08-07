document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.page__tabs-item');
  const categories = document.querySelectorAll('.page__category-block');

  const headerHeight = 122;

  function updateActiveTab() {
    let activeTab = null;

    categories.forEach((category) => {
      const categoryRect = category.getBoundingClientRect();
      const isInView =
        categoryRect.top < window.innerHeight - headerHeight &&
        categoryRect.bottom > headerHeight;

      if (isInView) {
        const categoryId = category.getAttribute('id');
        activeTab = document.querySelector(
          `.page__tabs-item[href="#${categoryId}"]`
        );
      }
    });

    tabs.forEach((tab) => tab.classList.remove('page__tabs-active'));
    if (activeTab) {
      activeTab.classList.add('page__tabs-active');
    }
  }

  function debounce(fn, delay) {
    let debounceTimeout;
    return function (...args) {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  if (tabs.length > 0) {
    tabs[0].classList.add('page__tabs-active');
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      event.preventDefault();

      tabs.forEach((t) => t.classList.remove('page__tabs-active'));
      tab.classList.add('page__tabs-active');

      const targetId = tab.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  window.addEventListener('scroll', debounce(updateActiveTab, 50));

  updateActiveTab();
});

document.addEventListener('DOMContentLoaded', () => {
  const pageWrapper = document.querySelector('.page__tabs-items');
  const categoryDrawer = document.querySelector('.category__drawer-trigger');
  const header = document.querySelector('.header');
  const headerHeight = header.getBoundingClientRect().height;

  if (!pageWrapper || !categoryDrawer) {
    console.error('Required elements not found');
  } else {
    categoryDrawer.classList.add('no-transition');

    function isInViewport(element) {
      if (!element) {
        console.error('Element not found');
        return false;
      }
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function toggleBlockVisibility() {
      if (isInViewport(pageWrapper, -headerHeight)) {
        categoryDrawer.classList.remove('visible');
      } else {
        categoryDrawer.classList.add('visible');
      }
    }

    window.addEventListener('scroll', toggleBlockVisibility);
    window.addEventListener('resize', toggleBlockVisibility);

    toggleBlockVisibility();

    setTimeout(() => {
      categoryDrawer.classList.remove('no-transition');
    }, 100);
  }
});
