import { boxMessage } from "../../boxMessage/boxMessage.js"

export const centerCreator = ()=>{

    //Creacion de contenedor del mensaje
    const message = boxMessage('gris','receptor')
    const message1 = boxMessage('gris','receptor')
    const message2 = boxMessage('verde','emisor')
    const message3 = boxMessage('gris','receptor')

    //Creacion del padre 
    const div = document.createElement('div')
    div.className = "padreCenter"

        div.appendChild(message)
        div.appendChild(message1)
        div.appendChild(message2)
        div.appendChild(message3)

    return div

}