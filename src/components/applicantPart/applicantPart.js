import { buttonCreator } from "../button/button.js"

export function partCreator(src, textConTitle ,textContP){

    //Creacion de la etiqueta img 
    const img = document.createElement('img')
    img.src = src

    //Creacion del fondo blanco de la imagen
    const back = document.createElement('div')
    back.className = 'fondoImg'

    //Creacion del titulo rol
    const titleRol = document.createElement('h2')
    titleRol.textContent = textConTitle
    titleRol.className = 'tituloRol'

    //Creacion del contenedor que tendra la etiqueta img y texto para poder manejar los espaciados entre si
    const divImgText = document.createElement('div')
    divImgText.className = 'topCard'
    divImgText.appendChild(img)
    divImgText.appendChild(titleRol)

    //Creacion de la descripcion del rol
    const descRol = document.createElement('p')
    descRol.textContent = textContP
    descRol.className = 'parrafoRol'

   //Creacion del boton
    const btn = buttonCreator('Continuar','botonContinuar')

    //Creacion del padre de la parte
    const parent = document.createElement('div')
    parent.appendChild(divImgText)
    parent.appendChild(btn)

    return parent

}