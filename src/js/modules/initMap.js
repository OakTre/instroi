export default () => {
  const container = document.querySelector('.map__container')

  if (!container) return;

  const blocks = Array.from(document.querySelectorAll('.map__info-block'))

  container.addEventListener('click', (event) => {
    if (event.target.classList.contains('map__item')) {
      blocks.forEach(block => block.classList.remove('is-visible'))

      blocks[event.target.dataset.mapBlock].classList.add('is-visible')
    } else {
      blocks.forEach(block => block.classList.remove('is-visible'))
    }
  })
}
