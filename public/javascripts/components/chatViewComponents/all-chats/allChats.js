import {a} from "../preMessage/preMessageChat.js"
import { people } from "../partLeftChat/unionPartsLeft.js"
import { fetchQuerys } from "../../../home.js"




export const allChats = async() => {
    const holaMundo = await fetchQuerys().then(data => {
        const [infoUser, dataUser,infoMessage] = data;
      
        console.log(infoMessage.consulta[0]);
        /*Creacion titulo all chats*/
        const h1 = document.createElement('h3')
        h1.className = 'TitleallChats'
        h1.textContent = 'All Chat'

        //Objeto infor chats


        //Creacion del contenedor de chats
        const divMessage = document.createElement('div')
        divMessage.className = 'father-all-chats'

        // people.forEach(e=>{

        //     //Array de los mensajes de cada uno de los 
        //     let chatMessages = e.messages
        //     //Ultimo mensaje del arrays de mensaje con sus propiedades
        //     let posLastMessage = chatMessages[chatMessages.length-1]
        //     let lastMessage = posLastMessage.message
        //     posLastMessage.role=='transmitter' ? lastMessage = 'You: '+ lastMessage : lastMessage=lastMessage
        //     //Agregacion de el contenedor del chat  
            
        // })
        divMessage.appendChild((a(infoMessage.consulta[0].id_company,infoMessage.consulta[0].name_company,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Gof12o_hZ7iwwBkfp4MLpuQqfZ610ZmAV6805F24&s","lastMessage","12-5-2023")))


        
        
        //Creacion del contenedor que tendra el titulo all chats y el contenedor de los mensjes
        const divAllChats = document.createElement('div')

        divAllChats.className="padreAllChat"
        divAllChats.appendChild(h1)
        divAllChats.appendChild(divMessage)
        

        const div = document.createElement('div')
        div.className = "padrePadre"
        div.appendChild(divAllChats)

       return div
    })
    return holaMundo
}