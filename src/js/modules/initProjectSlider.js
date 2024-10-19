import Swiper, { Navigation, Pagination } from 'swiper/swiper-bundle'

Swiper.use([Navigation, Pagination])

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
    pagination: {
      el: slider
        .closest('.main-slider__parent')
        .querySelector('.project-slider__counts'),
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return current + ' / ' + swiper.slides.length;
      }
    },
  });
};
