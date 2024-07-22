import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

const swiper = new Swiper('.main-slider', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
  },
  spaceBetween: 8,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const swiper2 = new Swiper('.about-slider', {
  modules: [Navigation],
  spaceBetween: 8,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
