import logo from '../assets/logo.png'
export const header = () => {
    const header = document.createElement("header")
        const headerLogo = document.createElement("img")
        headerLogo.src = logo
    
    header.append(headerLogo)
        
    return header
}