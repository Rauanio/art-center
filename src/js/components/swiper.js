import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
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
