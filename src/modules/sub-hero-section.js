export const subHeroSection = () => {
    
    
    const pills = ["Atmosphere", "Exploration", "Environment", "Moons"]
    
    const subHeroSection = document.createElement("section")
    subHeroSection.classList.add("section-sub-hero")

    const subHeroText = document.createElement("p")
    subHeroText.textContent = "Storms bigger than Earth. Moons on fire. Lights at the poles. Let’s tour Jupiter."
    subHeroText.classList.add("sub-hero-text")


    const menu = document.createElement("nav")
        const navPills = document.createElement("ul")
            pills.forEach(pill => {
            const navPill = document.createElement("li")
            navPill.classList.add("nav-pill")
                const navPillLink = document.createElement("a")
                    navPillLink.textContent = pill
                    navPillLink.href = `#${pill}`
                
            navPill.append(navPillLink)
            navPills.append(navPill)
            })




    menu.append(navPills)
    subHeroSection.append(subHeroText, menu)

    
    
    
    return subHeroSection
}