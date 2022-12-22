import { inputCreator } from "../../../input/input.js"
import { boxMessage } from "../../boxMessage/boxMessage.js"

export const centerCreator = ()=>{

    //Creacion de los mensajes 
    const message = boxMessage('gris','receptor',"Hi there, How are you?","12:24 PM")
    const message1 = boxMessage('gris','receptor', "Waiting for you reply.As I have to go back soon. I have to travel long distance.","12:25 PM")
    const message2 = boxMessage('verde','emisor',"Hi, I am coming there in few minutes. Please wait!! I am in taxi right now.","12:28 PM")
    const message3 = boxMessage('gris','receptor','Thank you very much, I am waiting here at StarBuck cafe.',"12:26 PM")

    //Creacion input
    const input = inputCreator()
    input.className = "inputSendMessage"
    input.placeholder = "Type a message"

    //Contenedor para el input
    const inputCont = document.createElement('div')
    inputCont.className = 'contInputSend'
    inputCont.appendChild(input)

    //Creacion del padre donde se ubicara lo de los mensajes y el input
    const div1 = document.createElement('div')
    div1.className = 'padreMensajes'

    //Creacion del padre donde se ubicaran los mensajes
    const div2 = document.createElement('div')
    div2.className = "padreCenter"
    
        div1.appendChild(message)
        div1.appendChild(message1)
        div1.appendChild(message2)
        div1.appendChild(message3)
        div2.appendChild(div1)
        div2.appendChild(inputCont)

    return div2

}