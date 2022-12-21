import { boxMessage } from "../../boxMessage/boxMessage.js"

export const centerCreator = ()=>{

    //Creacion de los mensajes 
    const message = boxMessage('gris','receptor',"Hi there, How are you?","12:24 PM")
    const message1 = boxMessage('gris','receptor', "Waiting for you reply.As I have to go back soon. I have to travel long distance.","12:25 PM")
    const message2 = boxMessage('verde','emisor',"Hi, I am coming there in few minutes. Please wait!! I am in taxi right now.","12:28 PM")
    const message3 = boxMessage('gris','receptor','Thank you very much, I am waiting here at StarBuck cafe.',"12:26 PM")

    //Creacion del padre donde se ubicaran los mensajes
    const div = document.createElement('div')
    div.className = "padreCenter"

        div.appendChild(message)
        div.appendChild(message1)
        div.appendChild(message2)
        div.appendChild(message3)

    return div

}