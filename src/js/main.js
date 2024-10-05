import 'focus-visible'
import lazyIMages from './modules/lazyIMages'
import documentReady from './helpers/documentReady'
import initModal from './modules/initModal'
import validation from './modules/validation'
import initSlider from './modules/initSlider'
import initProjectsSlider from './modules/initProjectsSlider'

documentReady(() => {
  window.inistroi_api = {}

  lazyIMages()
  // initModal()
  validation()
  initSlider()
  initProjectsSlider()
});
