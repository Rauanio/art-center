document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.page__tabs-item');
  
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
            targetElement.getBoundingClientRect().top + window.scrollY - 122;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      });
    });
  });