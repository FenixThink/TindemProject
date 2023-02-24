import { allChats } from '../all-chats/allChats.js'
import { divSearch } from '../all-chats/search.js'
import { iconsButtons }  from '../all-chats/iconsButtons.js'

export const partLeft = async(topName,topProfileImg,data) =>{
    
    //Creacion de la imagen
    const img = document.createElement('img')
    img.className='profileImg'
    img.src=`img/${topProfileImg}`
    
    //Creacion del contenedor de la imagen
    const imgCont = document.createElement('div')
    imgCont.className = 'profileImgCont'
    imgCont.appendChild(img)

    //Creacion del span del nombre
    const name = document.createElement('div')
    name.className='profileName'
    name.textContent = topName

    //Creacion del contenedor que tendra la imagen y el nombre de perfil
    const imgName = document.createElement('div')
    imgName.className = 'leftProfile'
    imgName.appendChild(imgCont)
    imgName.appendChild(name)
    
    //Creaion del search de los chat
    const search = divSearch()

    //Importando el div de los íconos
    const buttons = iconsButtons()

    //Creacion del contenedor que tendra la imagen de perfil el nombre y el buscador
    const profile = document.createElement('div')
    profile.className = 'profileCont'
    profile.appendChild(imgName)
    profile.appendChild(search)

    const chats = await allChats(data)
    console.log(data)



    const totalpartLeft = document.createElement('div')
    totalpartLeft.className = 'totalpartLeft'
    totalpartLeft.appendChild(profile)
    totalpartLeft.appendChild(chats)
    totalpartLeft.appendChild(buttons)

    return totalpartLeft;
}



