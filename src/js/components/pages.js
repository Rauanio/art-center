export const pages = [
  'purchases',
  'parents',
  'activity',
  'business',
  'sport',
  'services',
  'guests',
];

document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const currentPage = body.getAttribute('class');

  if (!currentPage) {
    const path = window.location.pathname;

    pages.map((page) => {
      if (path.includes(page)) {
        body.classList.add(page);
      }
    });
  }
});
