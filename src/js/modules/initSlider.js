import Swiper, { Navigation, Pagination } from 'swiper/swiper-bundle'

Swiper.use([Navigation, Pagination])

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
      pagination: {
        el: slider
          .closest('.main-slider__parent')
          .querySelector('.main-slider__counts'),
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + ' / ' + swiper.slides.length;
        }
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

  if (document.querySelector('.projects__fake-list')) {
    new Swiper('.projects__fake-list', {
      spaceBetween: 0,
      slidesPerView: 4
    });
  }

};
