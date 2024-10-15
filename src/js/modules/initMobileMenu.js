import {disableScroll, enableScroll} from '../helpers/disableScroll'

export default () => {
  const burger = document.querySelector('.header__burger')

  if (!burger) return

  const close = document.querySelector('.mobile-menu__close')
  const menu = document.querySelector('.mobile-menu')

  burger.addEventListener('click', () => {
    menu.classList.add('is-active')

    disableScroll()
  })
  close.addEventListener('click', () => {
    menu.classList.remove('is-active')

    enableScroll()
  })
}
