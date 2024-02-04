const text = new SplitType('h1');
const intro = document.querySelector('h2');

const tl = gsap.timeline({defaults: {
    ease: 'power4.inOut'
}});

gsap.set('h1', {
    autoAlpha: 1
});

tl.from(text.chars, {
    opacity:0,
    y:40,
    skewX: 30,
    stagger: .15,
    duration:.4
})
.to(text.chars, {
    y: -40,
    opacity:0,
    skewX: -30,
    stagger: .15,
    duration:.4
})
.to('section', {
    scaleY:0
})
.from(intro, {
    opacity:0,
    y:40
})
.to(intro, {
    opacity:1,
    y:0
})
.from('.emoji', {
    y:90
})
.to('.emoji', {
    y:0,
    ease: "elastic.out(1,0.3)",
})
// smooth scroll

const lenis = new Lenis()

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)