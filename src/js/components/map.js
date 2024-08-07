document.addEventListener('DOMContentLoaded', function () {
  const svgElement = document.getElementById('svg-map');
  const panzoom = Panzoom(svgElement, {
    maxScale: 3,
    minScale: 0.5,
    contain: 'outside',
  });

  svgElement.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);

  // panzoom.zoom(1.7, { animate: true });

  const zoomInButton = document.getElementById('zoom-in');
  const zoomOutButton = document.getElementById('zoom-out');

  zoomInButton.addEventListener('click', function () {
    panzoom.zoomIn();
  });

  zoomOutButton.addEventListener('click', function () {
    panzoom.zoomOut();
  });
});

const buildings = document.querySelectorAll('.building');

buildings.forEach((building) => {
  building.addEventListener('click', (e) => {
    const title = e.target.dataset.title;

    console.log(title);
  });
});
