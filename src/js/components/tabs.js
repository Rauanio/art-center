const tabs = document.querySelectorAll('.tabs__btn');
const tabsContent = document.querySelectorAll('.tabs__content-item');
const ApplicationTabs = document.querySelectorAll('.application__tabs-btn');
const ApplicationTabsContent = document.querySelectorAll('.application__tabs-item');

tabs.forEach((tab, index) =>
  tab.addEventListener('click', () => {
    tabsContent.forEach((content) =>
      content.classList.remove('tabs__content-active')
    );
    tabs.forEach((tab) => tab.classList.remove('tabs__btn-active'));

    tabsContent[index].classList.add('tabs__content-active');
    tabs[index].classList.add('tabs__btn-active');
  })
);



ApplicationTabs.forEach((tab, index) =>
  tab.addEventListener('click', () => {
    ApplicationTabsContent.forEach((content) =>
      content.classList.remove('application__tabs-item-active')
    );
    ApplicationTabs.forEach((tab) => tab.classList.remove('application__tabs-btn-active'));

    ApplicationTabsContent[index].classList.add('application__tabs-item-active');
    ApplicationTabs[index].classList.add('application__tabs-btn-active');
  })
);

