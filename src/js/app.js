import './components';
import '../styles/styles.scss';

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
    }
  }
});
