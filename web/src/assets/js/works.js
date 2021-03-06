import Swiper, { Pagination, EffectFade, Autoplay } from 'swiper';

window.addEventListener('DOMContentLoaded', () => {
  /**
   * Swiper
   */
  Swiper.use([Pagination, EffectFade, Autoplay]);
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.swiper-container', {
    speed: 500,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
});
