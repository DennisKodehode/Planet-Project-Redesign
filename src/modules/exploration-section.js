import timeline1 from '../assets/timeline1.png'
import timeline2 from '../assets/timeline2.png'
import timeline3 from '../assets/timeline3.png'
import timeline4 from '../assets/timeline4.png'
import timeline5 from '../assets/timeline5.png'
import timeline6 from '../assets/timeline6.png'
import timeline7 from '../assets/timeline7.png'
import timeline8 from '../assets/timeline8.png'

export const explorationSection = () => {

const missions = [
  {
    title: "Pioneer 10",
    description: "NASA’s first spacecraft to visit Jupiter. Launched in March 1972, Pioneer 10 made its closest approach on December 4, 1973. It sent back the first direct observations and images of Jupiter before continuing outward on an escape trajectory. Contact was maintained until 2003, when it was 7.6 billion miles away.",
    startYear: "1972",
    endYear: "2003",
    image: timeline1,
    status: "past-dot"
  },
  {
    title: "Pioneer 11",
    description: "Launched in 1973, Pioneer 11 flew even closer to Jupiter in December 1974. It provided detailed data and images of the planet before heading onward to Saturn. Like its twin, Pioneer 11 carried a gold plaque as a message for any extraterrestrials that might find it.",
    startYear: "1973",
    endYear: "1995",
    image: timeline2,
    status: "past-dot"
  },
  {
    title: "Voyager 1",
    description: "Launched September 5, 1977, Voyager 1 flew past Jupiter in March 1979. It discovered a thin ring system, two new moons, and revealed Io’s dramatic volcanic activity. The probe is now in interstellar space, still transmitting data more than 45 years later.",
    startYear: "1977",
    endYear: "Ongoing",
    image: timeline3,
    status: "ongoing-dot"
  },
  {
    title: "Voyager 2",
    description: "Launched August 20, 1977, Voyager 2 reached Jupiter in April 1979. It captured stunning time-lapse images of Jupiter’s atmospheric circulation and made close passes of Europa and Io. Voyager 2 is the only spacecraft to have visited all four giant planets: Jupiter, Saturn, Uranus, and Neptune.",
    startYear: "1977",
    endYear: "Ongoing",
    image: timeline4,
    status: "ongoing-dot"
  },
  {
    title: "Galileo",
    description: "Launched by the Space Shuttle Atlantis in 1989, Galileo arrived at Jupiter in 1995. It deployed an atmospheric probe and orbited for almost 8 years, making multiple flybys of Europa, Ganymede, and Io. To avoid contaminating Europa’s subsurface ocean, Galileo was deliberately plunged into Jupiter’s atmosphere in 2003.",
    startYear: "1989",
    endYear: "2003",
    image: timeline5,
    status: "past-dot"
  },
  {
    title: "Cassini",
    description: "Although bound for Saturn, NASA’s Cassini spacecraft conducted a major Jupiter observation campaign from October 2000 to March 2001 during its flyby. Cassini captured about 26,000 images, producing the most detailed global portrait of Jupiter at the time.",
    startYear: "2000",
    endYear: "2001",
    image: timeline6,
    status: "past-dot"
  },
  {
    title: "Juno",
    description: "Launched in August 2011, Juno entered orbit around Jupiter in July 2016. It is studying the planet’s origin, interior structure, atmosphere, and magnetosphere. Its mission has been extended through September 2025, with each orbit providing unique close-up views of Jupiter and its moons.",
    startYear: "2011",
    endYear: "Ongoing",
    image: timeline7,
    status: "ongoing-dot"
  },
  {
    title: "Europa Clipper",
    description: "Set to launch in October 2024 and arrive in 2030, NASA’s Europa Clipper will perform dozens of close flybys of Jupiter’s moon Europa. Its instruments will study the icy shell and subsurface ocean to assess whether Europa has the conditions necessary for life.",
    startYear: "2024",
    endYear: "2034",
    image: timeline8,
    status: "ongoing-dot"
  }
];


    const explorationSection = document.createElement("section")
    explorationSection.id = "Exploration"
        const explorationTitleWrapper = document.createElement("div")
        explorationTitleWrapper.classList.add("exploration-title-wrapper")
            const explorationTitle = document.createElement("h2")
            explorationTitle.textContent = "Exploration of Jupiter"
    
    const timeLine = document.createElement("div")
    timeLine.classList.add("timeline")

        const timeLineContent = document.createElement("div")
        timeLineContent.classList.add("time-line-content")

            missions.forEach(mission => {
                const horizontalRow = document.createElement("div")
                horizontalRow.classList.add("horizontal-row")
                    
                // TEXT FIELD
                    const timeLineTextArea = document.createElement("div")
                    timeLineTextArea.classList.add("timeline-text-area")
                        const timeLineTitle = document.createElement("h4")
                        timeLineTitle.textContent = mission.title

                        const timeLineText = document.createElement("p")
                        timeLineText.classList.add("bodyS")
                        timeLineText.textContent = mission.description
                    
                    timeLineTextArea.append(timeLineTitle, timeLineText)        
                    
                // DOT+YEARS
                    const yearAndDot = document.createElement("div")
                    yearAndDot.classList.add("year-and-dot")

                        const startYear = document.createElement("p")
                        startYear.classList.add("timeline-year-p")
                        startYear.classList.add("text-align-right")
                        startYear.textContent = mission.startYear

                        const endYear = document.createElement("p")
                        endYear.classList.add("timeline-year-p")
                        endYear.textContent = mission.endYear

                        const timeLineDot = document.createElement("div")
                        timeLineDot.classList.add(mission.status)
                    
                    yearAndDot.append(startYear, timeLineDot, endYear)

                    // IMG
                    const timeLineImg = document.createElement("img")
                    timeLineImg.classList.add("timeline-img")
                    timeLineImg.src = mission.image


                
                horizontalRow.append(timeLineTextArea, yearAndDot, timeLineImg)
                timeLineContent.append(horizontalRow)
            })
            


        const timeLineSpine = document.createElement("div")
        timeLineSpine.classList.add("timeline-spine")




explorationTitleWrapper.append(explorationTitle)

timeLine.append(timeLineContent, timeLineSpine)
explorationSection.append(explorationTitleWrapper, timeLine)

return explorationSection
}