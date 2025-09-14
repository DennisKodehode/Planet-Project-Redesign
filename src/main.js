import './style.css'
import { heroSection } from './modules/hero-section.js'
import { subHeroSection } from './modules/sub-hero-section.js'
import { atmosphereSection } from './modules/atmosphere-section.js'
import { explorationSection } from './modules/exploration-section.js'
import { environmentSection } from './modules/environment-section.js'
import { moonsSection } from './modules/moons-section.js'
import { header } from './modules/header.js'
import { footer } from './modules/footer.js'

import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './modules/EmblaCarouselArrowButtons'
import { addDotBtnsAndClickHandlers } from './modules/EmblaCarouselDotButton'

import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.querySelector('#app').append(
    header(), 
    heroSection(), 
    subHeroSection(), 
    atmosphereSection(), 
    explorationSection(), 
    environmentSection(), 
    moonsSection(), 
    footer())

const OPTIONS = {
  loop: false,
  align: 'center',
  containScroll: 'trimSnaps',
  slidesToScroll: 1
}

const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
const nextBtnNode = emblaNode.querySelector('.embla__button--next')
const dotsNode = emblaNode.querySelector('.embla__dots')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS)

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtnNode,
  nextBtnNode
)
const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode
)

emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
emblaApi.on('destroy', removeDotBtnsAndClickHandlers)

const contents = gsap.utils.toArray("#horizontal .content")
gsap.to(contents, {
    xPercent: -100 * (contents.length - 1), 
    scrollTrigger: {
        trigger: "#horizontal",
        pin: true, 
        scrub: 1

    }
})


