import Jupiter from  '../assets/Jupiter.png'
export const heroSection = () => {
    const heroSection = document.createElement("section")
    heroSection.classList.add("section-hero")

    const heroSectionWrapper = document.createElement("div")
    heroSectionWrapper.classList.add("section-hero-wrapper")
    
    const textArea = document.createElement("div")
    textArea.classList.add("hero-text-area")

    const textWrapper = document.createElement("div")

    const heroTitle = document.createElement("h1")
    heroTitle.textContent = "Jupiter"
    const heroSubtitle = document.createElement("p")
    heroSubtitle.textContent = "Chaos. Beauty. Power."
    heroSubtitle.classList.add("subtitleL")

    const heroImage = document.createElement("img")
    heroImage.src = Jupiter
    heroImage.classList.add("hero-image")
    
    textWrapper.append(heroTitle, heroSubtitle)
    textArea.append(textWrapper)
    heroSectionWrapper.append(textArea, heroImage)
    heroSection.append(heroSectionWrapper)



    return heroSection; 
}