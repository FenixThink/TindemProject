export const headerChatCreator = (id,nameUser,photo)=>{

    //Creacion de la imagen
    const img = document.createElement('img')
    img.className = 'imgTopMidChat'
    img.src = `/img/${photo}`

    //Creacion del div de la imagen
    const imgContainer = document.createElement('div')
    imgContainer.className = 'contImgTopMid'
    imgContainer.appendChild(img)
    
    //Creacion del span con el nombre del individuo en cuestion
    const spanName = document.createElement('h3')
    spanName.id=id
    spanName.className = 'nameTopChat'
    spanName.textContent = nameUser

    //Creacion del div con el contenedor que tiene la imagen y con el span
    const padreTop = document.createElement('div')
    padreTop.className = 'parentTop'

    padreTop.appendChild(imgContainer)
    padreTop.appendChild(spanName)

    return padreTop

}