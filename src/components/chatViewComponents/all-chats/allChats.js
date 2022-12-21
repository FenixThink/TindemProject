import {a} from "../../components/chatViewComponents/preMessage/preMessageChat.js"

export const allChats = () => {

    /*Creacion titulo all chats*/
    const h1 = document.createElement('h1')
    h1.className = 'TitleallChats'
    h1.textContent = 'All Chat'

    /*Creacion del padre que va a contener los div 'caja'*/ 
    const preMessageChat = (a())
    const div = document.createElement('div')
    div.className = 'father-all-chats'

    div.appendChild(a())
    
    return div
}