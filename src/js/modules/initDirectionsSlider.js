import Swiper from 'swiper/swiper-bundle'

export default () => {
  const slider = document.querySelector('.directions-list__slider')

  if (!slider) return

  new Swiper(slider, {
    spaceBetween: 10,
    slidesPerView: 1
  });
};
