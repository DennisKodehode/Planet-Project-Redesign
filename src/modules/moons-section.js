import Io from '../assets/Io.png'
import Ganymede from '../assets/Ganymede.png'
import Callisto from '../assets/Callisto.png'
import Europa from '../assets/Europa.png'

export const moonsSection = ()  => {

    const moonCards = [
        {title: "Io", text: "most volcanic world we know; lava lakes + plumes.", image: Io},
        {title: "Ganymede", text: "biggest moon; has its own magnetic field.", image: Ganymede}, 
        {title: "Callisto", text: "ancient, cratered, mysterious interior.", image: Callisto}, 
        {title: "Europa", text: "ice shell, maybe a salty ocean.", image: Europa}
    ]

    const moonsSection = document.createElement("section")
    moonsSection.classList.add("moons-section")
    moonsSection.id = "Moons"

        // SECTION TITLE
        const moonsTitleWrapper = document.createElement("div")
            moonsTitleWrapper.classList.add("moons-title-wrapper")

            const moonsSectionTitle = document.createElement("p")
            moonsSectionTitle.classList.add("standout")
            moonsSectionTitle.textContent = "Moons"

            const moonsSectionSubtitle = document.createElement("p")
            moonsSectionSubtitle.classList.add("bodyL")
            moonsSectionSubtitle.textContent = "Jupiter has 95 confirmed moons. These are the most interesting four."
        
        // CONTENT CARDS
        const moonsContent = document.createElement("div")
        moonsContent.id = "horizontal"
            moonCards.forEach(moon => {
                const moonCard = document.createElement("div")
                moonCard.classList.add("content")
                    const moonImage = document.createElement("img")
                    moonImage.src = moon.image

                    const moonTextArea = document.createElement("div")
                    moonTextArea.classList.add("moon-text-area")
                        
                        const moonTitle = document.createElement("h2")
                        moonTitle.textContent = moon.title

                        const moonText = document.createElement("p")
                        moonText.classList.add("bodyM")
                        moonText.textContent = moon.text
            
            moonTextArea.append(moonTitle, moonText)
            moonCard.append(moonImage, moonTextArea)
            moonsContent.append(moonCard)        
            })
            
    moonsTitleWrapper.append(moonsSectionTitle, moonsSectionSubtitle)
    moonsSection.append(moonsTitleWrapper, moonsContent)

    return moonsSection
}