import 'focus-visible'
import lazyIMages from './modules/lazyIMages'
import documentReady from './helpers/documentReady'
import initModal from './modules/initModal'
import validation from './modules/validation'
import initSlider from './modules/initSlider'
import initPartnersSlider from './modules/initPartnersSlider'
import initProjectSlider from './modules/initProjectSlider'
import initDocSlider from './modules/initDocSlider'
import initMap from './modules/initMap'
import initAboutPartnerSlider from './modules/initAboutPartnerSlider'
import initMobileMenu from './modules/initMobileMenu'
import initDirectionsSlider from './modules/initDirectionsSlider'
import initAdvatntagesHoder from './modules/initAdvatntagesHoder'
import initNumsAnimation from './modules/initNumsAnimation'
import initIntroSlider from './modules/initIntroSlider'

documentReady(() => {
  window.inistroi_api = {}

  lazyIMages()
  // initModal()
  validation()
  initSlider()
  initPartnersSlider()
  initProjectSlider()
  initDocSlider()
  initMap()
  initAboutPartnerSlider()
  initMobileMenu()
  initDirectionsSlider()
  initAdvatntagesHoder()
  initNumsAnimation()
  initIntroSlider()
});
