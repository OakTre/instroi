import Swiper, { Navigation } from 'swiper/swiper-bundle'

Swiper.use([Navigation])

export default () => {
  const slider = document.querySelector('.project-slider__container')

  if (!slider) return

  new Swiper(slider, {
    spaceBetween: 0,
    slidesPerView: 1,
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
