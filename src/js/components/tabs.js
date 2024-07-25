const tabs = document.querySelectorAll('.tabs__btn');
const tabsContent = document.querySelectorAll('.tabs__content-item');

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
