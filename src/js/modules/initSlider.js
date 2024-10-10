import Swiper, { Navigation } from 'swiper/swiper-bundle'

Swiper.use([Navigation])

export default () => {
  const sliders = document.querySelectorAll('.main-slider')

  if (sliders.length === 0) return

  sliders.forEach(slider => {
    new Swiper(slider, {
      spaceBetween: 0,
      slidesPerView: 4,
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
          slidesPerView: 1
        },
        768: {
          slidesPerView: 3
        },
        991: {
          slidesPerView: 4
        }
      }
    });
  })

  new Swiper('.projects__fake-list', {
    spaceBetween: 0,
    slidesPerView: 4
  });
};
