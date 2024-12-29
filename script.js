const ellipses = document.querySelectorAll('.circle')

ellipses.forEach((el, i) => {
  gsap.to(el, {
    duration: 1,
    attr: {
      rx: 7.5
    },
    delay: i * -1,
    yoyo: true,
    repeat: -1,
    ease: 'none',
  })  
})
