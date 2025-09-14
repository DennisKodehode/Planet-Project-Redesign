import Aurora from '../assets/Aurora.png'
import Bubble from '../assets/Bubble.png'
import Particles from '../assets/Particles.png'

export const environmentSection = () => {

    const magneticFacts = [
  {
    title: "Auroras = space weather art",
    text: "Jupiter’s poles blaze with auroras far brighter than Earth’s. They’re fueled not just by the solar wind, but also by Io’s volcanic gases.",
    img: Aurora,
    color: "#1CC5B7"
  },
  {
    title: "A giant magnetic bubble",
    text: "Jupiter’s magnetosphere is the largest structure in the solar system. If we could see it, it would stretch wider than the Sun itself.",
    img: Bubble,
    color: "#5C4E8D" 
  },
  {
    title: "Particles: tiny bullets at light speeds",
    text: "Charged particles trapped in the magnetic field race near light speed. They batter Jupiter’s moons and any spacecraft that ventures close.",
    img: Particles,
    color: "#E3B23C" 
  }
];


    const environmentSection = document.createElement("section")
    environmentSection.id = "Environment"

        // POSTER SECTION
        const heroPoster = document.createElement("div")
        heroPoster.classList.add("hero-poster")
            const posterTitle = document.createElement("h2")
            posterTitle.classList.add("poster-title")
            posterTitle.textContent = "Magnetic Environment"
        heroPoster.append(posterTitle)

        // CARD SECTION
        const factBoxWrapper = document.createElement("div")
        factBoxWrapper.classList.add("factbox-wrapper")

        magneticFacts.forEach(fact => {
        const factBox = document.createElement("div")
        factBox.classList.add("factbox")

        const factBoxImg = document.createElement("img")
        factBoxImg.classList.add("factbox-img")
        factBoxImg.src = fact.img

        const factBoxTextWrapper = document.createElement("div")
        factBoxTextWrapper.classList.add("factbox-text-wrapper")

            const factBoxTitle = document.createElement("h3")
            factBoxTitle.textContent = fact.title
            factBoxTitle.style.textDecoration = `underline ${fact.color} 3px `

            const factBoxText = document.createElement("p")
            factBoxText.classList.add("bodyM")
            factBoxText.textContent = fact.text
        
        
        factBoxTextWrapper.append(factBoxTitle, factBoxText)
        factBox.append(factBoxImg, factBoxTextWrapper)
        factBoxWrapper.append(factBox)
        })





    environmentSection.append(heroPoster, factBoxWrapper)
    return environmentSection
}