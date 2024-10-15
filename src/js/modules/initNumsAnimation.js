import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default () => {
  const items = document.querySelectorAll('.numbers-wrapper')

  if (items.length === 0) return

  gsap.set(items, {
    y: '100%'
  })

  ScrollTrigger.batch(items, {
    start: 'top 80%',
    onEnter: (item, triggers) => {
      gsap.to(item, {
        y: 0
      })
    },
    onEnterBack: (item, triggers) => {}
  })

}
