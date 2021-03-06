import Bowser from 'bowser';
import Swiper, { Navigation, Autoplay } from 'swiper';

window.addEventListener('DOMContentLoaded', () => {
  // Heroエリアを画面いっぱいに表示
  const bowser = Bowser.getParser(window.navigator.userAgent);
  if (bowser.getPlatformType() === 'mobile') {
    const hero = document.getElementById('hero');
    if (window.innerHeight > window.innerWidth) {
      hero.style.height = `${window.outerHeight}px`;
    }
  }

  /**
   * Swiper
   */
  Swiper.use([Navigation, Autoplay]);
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    speed: 500,
    // loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 85,
      },
    },
  });
});
