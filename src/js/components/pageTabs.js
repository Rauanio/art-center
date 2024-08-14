import { isInViewport } from './isInViewport';

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.page__tabs-item');
  const categories = document.querySelectorAll('.page__category-block');
  const header = document.querySelector('.header');
  const navMenu = document.querySelector('.nav__menu');
  const headerHeight = header.getBoundingClientRect().height;
  const navHeight = navMenu?.getBoundingClientRect().height;

  const topHeight = headerHeight + (navHeight ? navHeight : 0);

  console.log(topHeight);

  function updateActiveTab() {
    let activeTab = null;

    categories.forEach((category) => {
      const categoryRect = category.getBoundingClientRect();
      const isInView =
        categoryRect.top < window.innerHeight - topHeight &&
        categoryRect.bottom > topHeight;

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
          topHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  window.addEventListener('scroll', updateActiveTab);

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
