const navBar = document.getElementsByClassName('nav-bar');
const home = document.getElementsByClassName('texto-nome');
const homeDois = document.getElementsByClassName('texto-nome-dois')
const paragrafo = document.getElementsByClassName('paragrafo')
const iconeDesenvolvedor = document.getElementsByClassName('icone-desenvolvedor')
const cv = document.getElementsByClassName('curriculo')

TweenMax.staggerFrom(".nav-bar", 1, {
    opacity: 0, 
    x: -20,
    ease: Power3.easeInOut
}, 0.08)

TweenMax.from(".texto-nome", 1, {
    opacity: 0, 
    y: 20,
    delay: 1,
    ease: Expo.easeInOut
})

TweenMax.from(".texto-nome-dois", 1, {
    opacity: 0, 
    y: 20,
    delay: 1.2,
    ease: Expo.easeInOut
})

TweenMax.from(".paragrafo", 1, {
    opacity: 0, 
    y: 20,
    delay: 1.3,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".icone-desenvolvedor", 1, {
    opacity: 0, 
    x: 20,
    delay: 1.5,
    ease: Power3.easeInOut
}, 0.08)


TweenMax.from(".curriculo", 1, {
    opacity: 0, 
    y: -20,
    delay: 1.3,
    ease: Expo.easeInOut
})