import Swiper, { Navigation } from 'swiper/swiper-bundle'

Swiper.use([Navigation])

export default () => {
  const sliders = document.querySelectorAll('.projects-list__slider')

  if (sliders.length === 0) return

  sliders.forEach(slider => {
    new Swiper(slider, {
      spaceBetween: 30,
      slidesPerView: 3,
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

  new Swiper('.projects-list__fake-slider', {
    spaceBetween: 30,
    slidesPerView: 3
  });
};
