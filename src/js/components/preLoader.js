window.addEventListener('load', function () {
  const preloader = document.querySelector('.pre__loader');

  const loaderDuration = 1500;

  setTimeout(() => {
    preloader.style.transition = 'opacity 0.3s ease';
    preloader.style.opacity = '0';

    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, loaderDuration);
});
