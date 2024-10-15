import gsap from 'gsap'

export default () => {
  const advantages = document.querySelector('.advantages__list')

  if (!advantages) return

  const items = document.querySelectorAll('.advantages__item .site-container')

  items.forEach(item => {
    const image = item.querySelector('.advantages__image')
    const x = gsap.quickTo(image, 'x', {
      duration: 2,
      ease: 'power2'
    })

    item.addEventListener('mousemove', (event) => {
      x(event.x)

      gsap.to(image, {
        opacity: 1,
        ease: 'power2'
      });
    })

    item.addEventListener('mouseleave', (event) => {
      x(0)

      gsap.to(image, {
        opacity: 0,
        ease: 'power2'
      });
    })
  })
}
