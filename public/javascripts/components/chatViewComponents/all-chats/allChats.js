import {a} from "../preMessage/preMessageChat.js"
import { people } from "../partLeftChat/unionPartsLeft.js"

export const allChats = () => {

    /*Creacion titulo all chats*/
    const h1 = document.createElement('h3')
    h1.className = 'TitleallChats'
    h1.textContent = 'All Chat'

    //Objeto infor chats


    //Creacion del contenedor de chats
    const divMessage = document.createElement('div')
    divMessage.className = 'father-all-chats'

    for(let i=1;i<=Object.keys(people).length;i++){
        
        //Array de los mensajes de cada uno de los chats
        let chatMessages = Object.values(people[i].messages)
        //Ultimo mensaje del arrays de mensaje con sus propiedades
        let posLastMessage = chatMessages[chatMessages.length-1]
        let lastMessage = posLastMessage.message
        posLastMessage.role=='transmitter' ? lastMessage = 'You: '+ lastMessage : lastMessage=lastMessage
        //Agregacion de el contenedor del chat  
        divMessage.appendChild((a(Object.keys(people)[i-1],people[i].name,people[i].profileImage,lastMessage,posLastMessage.hour)))
        
    }
    
    //Creacion del contenedor que tendra el titulo all chats y el contenedor de los mensjes
    const divAllChats = document.createElement('div')
    divAllChats.className="padreAllChat"
    divAllChats.appendChild(h1)
    divAllChats.appendChild(divMessage)


    const div = document.createElement('div')
    div.className = "padrePadre"
    div.appendChild(divAllChats)

    return div
}