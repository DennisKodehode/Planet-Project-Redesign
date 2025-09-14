import card1 from '../assets/atmos4scars.png'
import card2 from '../assets/atmos3stacked.png'
import card3 from '../assets/atmos2reddot.png'
import card4 from '../assets/atmos1winds.png'



export const atmosphereCarousel = () => {

    const atmosphereCards = [
        {image: card1, title: "Did you know?", text: "Impacts leave scars—Jupiter’s a cosmic shield.", id: "card1", color: "#C1440E" },
        {image: card2, title: "Did you know?", text: "Stacked cloud decks: ammonia, water, more.", id: "card2", color: "#1CC5B7" },
        {image: card3, title: "Did you know?", text: "The Great Red Spot is shrinking—still huge.", id: "card3", color: "#E3B23C" },
        {image: card4, title: "Did you know?", text: "Winds > 600 km/h race around the planet.", id: "card4", color: "#E2723E" },
        {image: card1, title: "Did you know?", text: "Impacts leave scars—Jupiter’s a cosmic shield.", id: "card1", color: "#C1440E" },
        {image: card2, title: "Did you know?", text: "Stacked cloud decks: ammonia, water, more.", id: "card2", color: "#1CC5B7" },
        {image: card3, title: "Did you know?", text: "The Great Red Spot is shrinking—still huge.", id: "card3", color: "#E3B23C" },
        {image: card4, title: "Did you know?", text: "Winds > 600 km/h race around the planet.", id: "card4", color: "#E2723E" },
        {image: card1, title: "Did you know?", text: "Impacts leave scars—Jupiter’s a cosmic shield.", id: "card1", color: "#C1440E" },
        {image: card2, title: "Did you know?", text: "Stacked cloud decks: ammonia, water, more.", id: "card2", color: "#1CC5B7" },
        {image: card3, title: "Did you know?", text: "The Great Red Spot is shrinking—still huge.", id: "card3", color: "#E3B23C" },
        {image: card4, title: "Did you know?", text: "Winds > 600 km/h race around the planet.", id: "card4", color: "#E2723E" },
        {image: card1, title: "Did you know?", text: "Impacts leave scars—Jupiter’s a cosmic shield.", id: "card1", color: "#C1440E" },
        {image: card2, title: "Did you know?", text: "Stacked cloud decks: ammonia, water, more.", id: "card2", color: "#1CC5B7" },
        {image: card3, title: "Did you know?", text: "The Great Red Spot is shrinking—still huge.", id: "card3", color: "#E3B23C" },
        {image: card4, title: "Did you know?", text: "Winds > 600 km/h race around the planet.", id: "card4", color: "#E2723E" },
        {image: card1, title: "Did you know?", text: "Impacts leave scars—Jupiter’s a cosmic shield.", id: "card1", color: "#C1440E" },
        {image: card2, title: "Did you know?", text: "Stacked cloud decks: ammonia, water, more.", id: "card2", color: "#1CC5B7" },
        {image: card3, title: "Did you know?", text: "The Great Red Spot is shrinking—still huge.", id: "card3", color: "#E3B23C" },
        {image: card4, title: "Did you know?", text: "Winds > 600 km/h race around the planet.", id: "card4", color: "#E2723E" },
        {image: card1, title: "Did you know?", text: "Impacts leave scars—Jupiter’s a cosmic shield.", id: "card1", color: "#C1440E" },
        {image: card2, title: "Did you know?", text: "Stacked cloud decks: ammonia, water, more.", id: "card2", color: "#1CC5B7" },
        {image: card3, title: "Did you know?", text: "The Great Red Spot is shrinking—still huge.", id: "card3", color: "#E3B23C" },
        {image: card4, title: "Did you know?", text: "Winds > 600 km/h race around the planet.", id: "card4", color: "#E2723E" },
        {image: card1, title: "Did you know?", text: "Impacts leave scars—Jupiter’s a cosmic shield.", id: "card1", color: "#C1440E" },
        {image: card2, title: "Did you know?", text: "Stacked cloud decks: ammonia, water, more.", id: "card2", color: "#1CC5B7" },
        {image: card3, title: "Did you know?", text: "The Great Red Spot is shrinking—still huge.", id: "card3", color: "#E3B23C" },
        {image: card4, title: "Did you know?", text: "Winds > 600 km/h race around the planet.", id: "card4", color: "#E2723E" },
        {image: card1, title: "Did you know?", text: "Impacts leave scars—Jupiter’s a cosmic shield.", id: "card1", color: "#C1440E" },
        {image: card2, title: "Did you know?", text: "Stacked cloud decks: ammonia, water, more.", id: "card2", color: "#1CC5B7" },
        {image: card3, title: "Did you know?", text: "The Great Red Spot is shrinking—still huge.", id: "card3", color: "#E3B23C" },
        {image: card4, title: "Did you know?", text: "Winds > 600 km/h race around the planet.", id: "card4", color: "#E2723E" },
        {image: card1, title: "Did you know?", text: "Impacts leave scars—Jupiter’s a cosmic shield.", id: "card1", color: "#C1440E" },
        {image: card2, title: "Did you know?", text: "Stacked cloud decks: ammonia, water, more.", id: "card2", color: "#1CC5B7" },
        {image: card3, title: "Did you know?", text: "The Great Red Spot is shrinking—still huge.", id: "card3", color: "#E3B23C" },
        {image: card4, title: "Did you know?", text: "Winds > 600 km/h race around the planet.", id: "card4", color: "#E2723E" },
        {image: card1, title: "Did you know?", text: "Impacts leave scars—Jupiter’s a cosmic shield.", id: "card1", color: "#C1440E" },
        {image: card2, title: "Did you know?", text: "Stacked cloud decks: ammonia, water, more.", id: "card2", color: "#1CC5B7" },
        {image: card3, title: "Did you know?", text: "The Great Red Spot is shrinking—still huge.", id: "card3", color: "#E3B23C" },
        {image: card4, title: "Did you know?", text: "Winds > 600 km/h race around the planet.", id: "card4", color: "#E2723E" }
]

    const embla = document.createElement("section")
    embla.classList.add("embla")

    const emblaViewport = document.createElement("div")
    emblaViewport.classList.add("embla__viewport")

    const emblaContainer = document.createElement("div")
    emblaContainer.classList.add("embla__container")
    
    atmosphereCards.forEach(card => {
        const emblaSlide = document.createElement("div")
        emblaSlide.classList.add("embla__slide")
        emblaSlide.classList.add(card.id)
        emblaSlide.style.outline = `${card.color} 3px solid`

        const atmosphereImage = document.createElement("img")
        atmosphereImage.src = card.image
        atmosphereImage.classList.add("atmosphere-image")

        const atmosphereTextArea = document.createElement("div")
        atmosphereTextArea.classList.add("atmosphere-text-area")
            const atmosphereTitle = document.createElement("h3")
            atmosphereTitle.textContent = card.title
            const atmosphereText = document.createElement("p")
            atmosphereText.classList.add("bodyM")
            atmosphereText.textContent = card.text
    
        atmosphereTextArea.append(atmosphereTitle, atmosphereText)
        emblaSlide.append(atmosphereImage, atmosphereTextArea)
        emblaContainer.append(emblaSlide)

    })


    const emblaControls = document.createElement("div")
    emblaControls.classList.add("embla__controls")

    const emblaButtons = document.createElement("div")
    emblaButtons.classList.add("embla__buttons")

    const emblabtn1 = document.createElement("button")
    emblabtn1.classList.add("embla__button")
    emblabtn1.classList.add("embla__button--prev")
    emblabtn1.type = "button"
        emblabtn1.innerHTML = `
            <svg class="embla__button__svg" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
              ></path>
            </svg>
        `
    const emblabtn2 = document.createElement("button")
    emblabtn2.classList.add("embla__button")
    emblabtn2.classList.add("embla__button--next")
    emblabtn2.type = "button"
        emblabtn2.innerHTML = `
            <svg class="embla__button__svg" viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
              ></path>
            </svg>
        `
    const emblaDots = document.createElement("div")
    emblaDots.classList.add("embla__dots")
    
    emblaViewport.append(emblaContainer)

    emblaButtons.append(emblabtn1, emblabtn2)
    emblaControls.append(emblaButtons)

    embla.append(emblaViewport, emblaControls)

    return embla
}