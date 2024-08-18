document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.querySelector('.pre__loader');

  window.addEventListener('load', function () {
    const loaderDuration = 1000;

    setTimeout(() => {
      preloader.style.transition = 'opacity 0.5s ease';
      preloader.style.opacity = '0';

      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }, loaderDuration);
  });
});
