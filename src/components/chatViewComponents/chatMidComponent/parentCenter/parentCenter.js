import { boxMessage } from "../../boxMessage/boxMessage.js"
import { people } from "../../partLeftChat/unionPartsLeft.js"

export const centerCreator = ()=>{

    //Creacion del padre donde se ubicara lo de los mensajes y el input
    const div1 = document.createElement('div')
    div1.className = 'padreMensajes'

    //Creacion de los mensajes 
    const messages = Object.values(people[1].messages)
    for(let i = 0; i<messages.length;i++){

        let color = ''
        messages[i].role=='transmitter' ? color = 'verde' : color = 'gris'
        div1.appendChild(boxMessage(color,messages[i].role,messages[i].message,messages[i].hour))

    }

    //Creacion del padre donde se ubicaran los mensajes
    const div2 = document.createElement('div')
    div2.className = "padreCenter"
        

        div2.appendChild(div1)

    return div2

}