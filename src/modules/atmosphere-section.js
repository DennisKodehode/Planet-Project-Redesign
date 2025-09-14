import { atmosphereCarousel } from "./atmosphere-carousel"

export const atmosphereSection = () => {
    const atmosphereSection = document.createElement("section")
    atmosphereSection.id = "Atmosphere"

    const atmosphereTitleWrapper = document.createElement("div")
        atmosphereTitleWrapper.classList.add("atmosphere-title-wrapper")
            const atmosphereTitle = document.createElement("h2")
            atmosphereTitle.textContent = "Atmosphere"

    
    atmosphereTitleWrapper.append(atmosphereTitle)
    atmosphereSection.append(atmosphereTitleWrapper, atmosphereCarousel())

    return atmosphereSection
}