import Swiper, { Navigation, Autoplay, EffectFade } from 'swiper/swiper-bundle'

Swiper.use([Navigation, Autoplay, EffectFade])

export default () => {
  const slider = document.querySelector('.intro-slider')
  const isMobile = window.matchMedia('(max-width: 991px)').matches

  if (!slider || isMobile) return

  new Swiper(slider, {
    spaceBetween: 0,
    slidesPerView: 1,
    effect: 'fade',
    autoplay: {
      delay: 8500,
    },
    navigation: {
      prevEl: slider
        .closest('.main-slider__parent')
        .querySelector('.main-slider__btn--is-prev'),
      nextEl: slider
        .closest('.main-slider__parent')
        .querySelector('.main-slider__btn--is-next'),
    },
  });
};
