document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const currentPage = body.getAttribute('class');

  if (!currentPage) {
    const path = window.location.pathname;

    if (path.includes('purchases')) {
      body.classList.add('purchases');
    } else if (path.includes('parents')) {
      body.classList.add('parents');
    } else if (path.includes('activity')) {
      body.classList.add('activity');
    } else if (path.includes('business')) {
      body.classList.add('business');
    } else if (path.includes('sport')) {
      body.classList.add('sport');
    } else if (path.includes('services')) {
      body.classList.add('services');
    } else if (path.includes('guests')) {
      body.classList.add('guests');
    }
  }
});
