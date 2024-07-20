import './components';
import '../styles/styles.scss';

document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const currentPage = body.getAttribute('class');

  if (!currentPage) {
    const path = window.location.pathname;

    if (path.includes('purchases')) {
      body.classList.add('purchases');
    } else if (path.includes('parentAndChild')) {
      body.classList.add('parentAndChild');
    } else if (path.includes('activity')) {
      body.classList.add('activity');
    }
  }
});
