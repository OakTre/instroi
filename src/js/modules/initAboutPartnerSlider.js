import Swiper, { Navigation } from 'swiper/swiper-bundle'

Swiper.use([Navigation])

export default () => {
  const sliders = document.querySelectorAll('.about-partner__slider')

  if (sliders.length === 0) return

  sliders.forEach(slider => {
    new Swiper(slider, {
      spaceBetween: 10,
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
  })
};
