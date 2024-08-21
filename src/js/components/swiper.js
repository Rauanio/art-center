import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

const mainSwiper = new Swiper('.main-slider', {
  modules: [Pagination, Autoplay],
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  pagination: {
    el: '.main-slider-pagination',
    clickable: true,
  },
  spaceBetween: 8,
  loop: true,
});

const swiperWithNav = new Swiper('.about-slider', {
  modules: [Navigation, Autoplay],
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  spaceBetween: 8,
  loop: true,
  navigation: {
    nextEl: `.about-slider-button-next`,
    prevEl: `.about-slider-button-prev`,
  },
});

const swiperWithText = new Swiper('.foodhall-slider', {
  modules: [Navigation],
  spaceBetween: 8,
  slidesPerView: 1.1,
  loop: true,
  navigation: {
    nextEl: `.foodhall-slider-button-next`,
    prevEl: `.foodhall-slider-button-prev`,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.1,
    },
    1440: {
      slidesPerView: 2.5,
    },
  },
});

const detailsSwiper = new Swiper('.details-slider', {
  modules: [Navigation],
  spaceBetween: 8,
  slidesPerView: 1.1,
  loop: true,
  navigation: {
    nextEl: `.details-slider-button-next`,
    prevEl: `.details-slider-button-prev`,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 1.7,
    },
  },
});

const textSwiper = new Swiper('.text-slider', {
  modules: [Navigation],
  spaceBetween: 8,
  slidesPerView: 1.1,
  loop: true,
  navigation: {
    nextEl: `.text-slider-button-next`,
    prevEl: `.text-slider-button-prev`,
  },
  breakpoints: {
    768: {
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 1.2,
    },
  },
});

const eventSwiper = new Swiper('.event-slider', {
  modules: [Navigation],
  spaceBetween: 8,
  slidesPerView: 1.3,
  loop: true,
  navigation: {
    nextEl: `.event-slider-button-next`,
    prevEl: `.event-slider-button-prev`,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.3,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
