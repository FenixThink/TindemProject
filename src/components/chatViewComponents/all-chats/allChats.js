import { divSearch } from "../all-chats/search.js";
import {a} from "../preMessage/preMessageChat.js"

export const allChats = () => {

    /*Creacion titulo all chats*/
    const h1 = document.createElement('h3')
    h1.className = 'TitleallChats'
    h1.textContent = 'All Chat'


    //Creaion del search de los chat
    const search = divSearch()

    /*Creacion del padre que va a contener los div 'caja'*/ 
    const message1 = (a("Zilan",'https://i.ibb.co/TrZ38Cv/Ellipse-18.png','Thank you very much, I am waiting here at StarBuck cafe.','12:35 PM'))
    const message2 = (a("Shehnaz",'https://i.ibb.co/qCKxy6S/Ellipse-18.png','Call ended.','12:35 PM'))
    const message3 = (a("Client",'https://i.ibb.co/R0hRwTw/Ellipse-17.png','What time are we there?','12:35 PM'))
    const message4 = (a("Mueez",'https://i.ibb.co/C2MLMnD/Ellipse-12.png','You: I will send you the work file','12:35 PM'))
    const message5 = (a("Hasnain",'https://i.ibb.co/bFvyPdM/Ellipse-5.png','You: I will send you the work file','12:35 PM'))
    const message6 = (a("Saleem",'https://i.ibb.co/k2mJsQW/Ellipse-11.png','You: I will send you the work file','12:35 PM'))
 
 //reacion del contenedor de chats
    const divMessage = document.createElement('div')
    divMessage.className = 'father-all-chats'

    divMessage.appendChild(message1)
    divMessage.appendChild(message2)
    divMessage.appendChild(message3)
    divMessage.appendChild(message4)
    divMessage.appendChild(message5)
    divMessage.appendChild(message6)
    
    //Creacion del contenedor que tendra el titulo all chats y el contenedor de los mensjes
    const divAllChats = document.createElement('div')
    divAllChats.className="padreAllChat"
    divAllChats.appendChild(h1)
    divAllChats.appendChild(divMessage)


    const div = document.createElement('div')
    div.className = "padrePadre"
    div.appendChild(search)
    div.appendChild(divAllChats)

    return div
}