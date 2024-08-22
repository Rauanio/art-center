import placemarkImg1 from '../../images/placemark1.png';
import placemarkImg2 from '../../images/placemark2.png'
import placemarkImg3 from '../../images/placemark3.png'

document.addEventListener('DOMContentLoaded', () => {
  function init() {

    const mapElement = document.getElementById('yandex-map');
    if (!mapElement) return;

    let map = new ymaps.Map('yandex-map', {
      center: [55.79970541585689, 49.1808012368838],
      zoom: 15,
    });

    document
      .getElementById('yandex-zoom-in')
      .addEventListener('click', function () {
        let currentZoom = map.getZoom();
        map.setZoom(currentZoom + 1);
      });

    document
      .getElementById('yandex-zoom-out')
      .addEventListener('click', function () {
        let currentZoom = map.getZoom();
        map.setZoom(currentZoom - 1);
      });

    let placemark1 = new ymaps.Placemark(
      [55.8009687940852, 49.18101029700729],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: placemarkImg1,
        iconImageSize: [87, 48],
        iconImageOffset: [-41, -25],
      }
    );

    let placemark2 = new ymaps.Placemark(
      [55.800354775971854, 49.183537355600016],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: placemarkImg2,
        iconImageSize: [101, 48],
        iconImageOffset: [0, -40],
      }
    );

    let placemark3 = new ymaps.Placemark(
      [55.79979811522637, 49.18260043837363],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: placemarkImg3,
        iconImageSize: [75, 55],
        iconImageOffset: [-60, -10],
      }
    );

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.behaviors.disable(['scrollZoom']);

    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
    map.setType('yandex#map', {});
  }

  ymaps.ready(init);
});
