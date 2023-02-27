import { allChats } from '../all-chats/allChats.js'

import { iconsButtons }  from '../all-chats/iconsButtons.js'

export const partLeft = async(topName,topProfileImg,data,idA) =>{

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
    const infoMessage = data[2].consulta;

    //Importando el div de los íconos
    const buttons = iconsButtons()

    //Creacion del contenedor que tendra la imagen de perfil el nombre y el buscador
    const profile = document.createElement('div')
    profile.className = 'profileCont'
    profile.appendChild(imgName)
   

    // console.log(idA)

    const chats = await allChats(data,idA,infoMessage)
    // console.log(data[1,0].message.id)



    const totalpartLeft = document.createElement('div')
    totalpartLeft.className = 'totalpartLeft'
    totalpartLeft.appendChild(profile)
    totalpartLeft.appendChild(chats)
    totalpartLeft.appendChild(buttons)

    return totalpartLeft;
}



