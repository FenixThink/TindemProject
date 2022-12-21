export const headerChatCreator = (nameUser,src)=>{

    //Creacion de la imagen
    const img = document.createElement('img')
    img.className = 'imgTopMidChat'
    img.src = src

    //Creacion del div de la imagen
    const imgContainer = document.createElement('div')
    imgContainer.className = 'contImgTopMid'
    imgContainer.appendChild(img)
    
    //Creacion del span con el nombre del individuo en cuestion
    const spanName = document.createElement('span')
    spanName.className = 'nameTopChat'
    spanName.textContent = nameUser

    //Creacion del div con el contenedor que tiene la imagen y con el span
    const padreTop = document.createElement('div')
    padreTop.className = 'parentTop'

    padreTop.appendChild(imgContainer)
    padreTop.appendChild(spanName)

    return padreTop

}