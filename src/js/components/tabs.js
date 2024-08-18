import { initializePagination } from "./pagination";

const tabs = document.querySelectorAll('.tabs__btn');
const tabsContent = document.querySelectorAll('.tabs__content-item');
const applicationTabs = document.querySelectorAll('.application__tabs-btn');
const applicationTabsContent = document.querySelectorAll('.application__tabs-item');
const centerTabs = document.querySelectorAll('.center__tabs-btn');
const centerTabsContent = document.querySelectorAll('.center__tabs-item');

tabs.forEach((tab, index) =>
  tab.addEventListener('click', () => {
    tabsContent.forEach((content) =>
      content.classList.remove('tabs__content-active')
    );
    tabs.forEach((tab) => tab.classList.remove('tabs__btn-active'));

    tabsContent[index].classList.add('tabs__content-active');
    tabs[index].classList.add('tabs__btn-active');

    initializePagination()
  })
);

applicationTabs.forEach((tab, index) =>
  tab.addEventListener('click', () => {
    applicationTabsContent.forEach((content) =>
      content.classList.remove('application__tabs-item-active')
    );
    applicationTabs.forEach((tab) => tab.classList.remove('application__tabs-btn-active'));

    applicationTabsContent[index].classList.add('application__tabs-item-active');
    applicationTabs[index].classList.add('application__tabs-btn-active');
  })
);

centerTabs.forEach((tab, index) =>
  tab.addEventListener('click', () => {
    centerTabsContent.forEach((content) =>
      content.classList.remove('center__tabs-item-active')
    );
    centerTabs.forEach((tab) => tab.classList.remove('center__tabs-btn-active'));

    centerTabsContent[index].classList.add('center__tabs-item-active');
    centerTabs[index].classList.add('center__tabs-btn-active');
  })
);

