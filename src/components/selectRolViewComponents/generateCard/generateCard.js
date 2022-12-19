export const generateCard = (imgSrc,imgAlt,titleContent,contentText,buttonContent,urlButton)=>{

    const appModalContentmodalCard = document.createElement("div")
    appModalContentmodalCard.classList = "appModalContent-modalCard"

    const appModalContentmodalCardImagen = document.createElement("div")
    appModalContentmodalCardImagen.classList = "appModalContent-modalCardImagen"

    const img = document.createElement("img")
    img.classList = "appModalContent-modalCardImagenImg"
    img.src = imgSrc
    img.alt = imgAlt

    const h2 = document.createElement("h2")
    h2.classList = "appModalContent-modalCardTitle"
    h2.textContent = titleContent
    const p = document.createElement("p")
    p.classList = "appModalContent-modalCardText"
    p.textContent = contentText
    
    const button = document.createElement("button")
    button.type = "button"
    button.classList = "appModalContent-modalCardButton"
    button.textContent = buttonContent
    button.addEventListener("click", ()=>{
        window.location = urlButton
    })
    button.style.cursor = "pointer"

    appModalContentmodalCard.appendChild(appModalContentmodalCardImagen)
    appModalContentmodalCardImagen.appendChild(img)
    appModalContentmodalCard.appendChild(h2)
    appModalContentmodalCard.appendChild(p)
    appModalContentmodalCard.appendChild(button)
    return appModalContentmodalCard
}