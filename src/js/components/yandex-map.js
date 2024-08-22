import placemark1 from '../../images/placemark1.png';
import placemark2 from '../../images/placemark2.png'
import placemark3 from '../../images/placemark3.png'

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
        iconImageHref: placemark1,
        iconImageSize: [87, 48],
        iconImageOffset: [-41, -25],
      }
    );

    let placemark2 = new ymaps.Placemark(
      [55.800354775971854, 49.183537355600016],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: 'https://www.figma.com/design/t6sPO4M5yq9AwkXSbOEIAT/%D0%90%D0%A0%D0%A2-%D0%A6%D0%B5%D0%BD%D1%82%D1%80?node-id=1351-14859&t=9P1JADpMKHX0dUhy-4',
        iconImageSize: [101, 48],
        iconImageOffset: [0, -40],
      }
    );

    let placemark3 = new ymaps.Placemark(
      [55.79979811522637, 49.18260043837363],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: placemark3,
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
