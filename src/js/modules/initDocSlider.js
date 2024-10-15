import Swiper, { Navigation } from 'swiper/swiper-bundle'

Swiper.use([Navigation])

export default () => {
  const slider = document.querySelector('.documentation__slider')

  if (!slider) return

  new Swiper(slider, {
    spaceBetween: 30,
    slidesPerView: 2,
    navigation: {
      prevEl: slider
        .closest('.main-slider__parent')
        .querySelector('.main-slider__btn--is-prev'),
      nextEl: slider
        .closest('.main-slider__parent')
        .querySelector('.main-slider__btn--is-next'),
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2
      }
    }
  });
};
