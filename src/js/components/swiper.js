import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

const mainSwiper = new Swiper('.main-slider', {
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

const swiperWithNav = new Swiper('.about-slider', {
  modules: [Navigation],
  spaceBetween: 8,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperWithText = new Swiper('.foodhall-slider', {
  modules: [Navigation],
  spaceBetween: 8,
  slidesPerView: 1.1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2.1,
    },
    1440: {
      slidesPerView: 2.5,
    }
  }
});
