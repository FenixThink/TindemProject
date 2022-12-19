export function upperComponents(nombre, nit, descripcion) {
    /* Parte title*/
    const title = document.createElement('h3')
    title.textContent = nombre

    /*Parte span */
    const spanText = document.createElement('span')
    spanText.textContent = nit 

    const spanCero = document.createElement('span')
    spanCero.textContent = "000000"

    const spanDescription = document.createElement('span')
    spanDescription.textContent = descripcion

    const spanTextDescription = document.createElement('span')
    spanTextDescription.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ab sit, corrupti, doloremque esse cum placeat laborum deserunt in inventore voluptate est eius nihil delectus?"

    /*Parte parrafos*/
    const paragraphs1 = document.createElement('p')
    paragraphs1.className = "paragraphs"
    paragraphs1.appendChild(spanText)
    paragraphs1.appendChild(spanCero)

    

    const paragraphs2 = document.createElement('p')
    paragraphs2.className = "paragraphs"
    paragraphs2.appendChild(spanDescription)
    paragraphs2.appendChild(spanTextDescription)

    /*Parte imagen*/
    const imagenProfile = document.createElement('img')
    imagenProfile.className = "imagenProfile"
    imagenProfile.src = "https://i.ibb.co/D5qt45T/image-1.png"
    imagenProfile.alt = "Imagen de perfil"
    

    /*Parte divImageProfile*/
    const divImageProfile = document.createElement('div')
    divImageProfile.className = "divImageProfile"
    divImageProfile.appendChild(imagenProfile)

    /*Parte divImagen*/
    const divImagen = document.createElement('div')
    divImagen.className = "divImagen"
    divImagen.appendChild(divImageProfile)

    /*divTitles*/
    const divTitles = document.createElement('div')
    divTitles.className = "divTitles"
    divTitles.appendChild(title)

    /*divSubTitles*/
    const divSubTitles = document.createElement('div')
    divSubTitles.className = "divSubTitles"
    divSubTitles.appendChild(paragraphs1)

    /*divParagraphs*/
    const divParagraphs = document.createElement('div')
    divParagraphs.className = "divParagraphs"
    divParagraphs.appendChild(paragraphs2)

    /*Parte containerParagraphs*/
    const containerParagraphs = document.createElement('div')
    containerParagraphs.className = "containerParagraphs"
    containerParagraphs.appendChild(divTitles)
    containerParagraphs.appendChild(divSubTitles)
    containerParagraphs.appendChild(divParagraphs)

    /*container*/
    const container  = document.createElement('div')
    container.className = "container"
    container.appendChild(divImagen)
    container.appendChild(containerParagraphs)

    return container
}