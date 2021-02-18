window.addEventListener('DOMContentLoaded', (event) => {

  const hero = document.getElementById('hero')
  const heroSlides = document.getElementById('hero-slides')
  const dots = document.querySelectorAll('.hero-dot')
  const slides = document.querySelectorAll('.hero__content')

  let activeIndex = 0;
  let manual = false

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      manual = true
      activeIndex = i
      hero.setAttribute('class',`hero hero--${activeIndex}`)
    })
  })

  hero.setAttribute('class',`hero hero--${activeIndex}`)

  setInterval(() => {
    if (!manual && activeIndex >= (slides.length - 1)) {
      activeIndex = 0
    } else if (!manual) {
      activeIndex ++
    }
    hero.setAttribute('class',`hero hero--${activeIndex}`)
  }, 5000)

});
