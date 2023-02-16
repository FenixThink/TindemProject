import {a} from "../preMessage/preMessageChat.js"
import { people } from "../partLeftChat/unionPartsLeft.js"
import { fetchQuerys } from "../../../home.js"




export const allChats = async() => {
    const holaMundo = await fetchQuerys().then(async (data) => {
        console.log(data)
        const [infoUser, dataUser,infoMessage,allMessages] = data;
        console.log(infoUser)
        
        /*Creacion titulo all chats*/
        const h1 = document.createElement('h3')
        h1.className = 'TitleallChats'
        h1.textContent = 'All Chat'

        
        //Objeto infor chats
        
        //Creacion del contenedor de chats
        const divMessage = document.createElement('div')
        divMessage.className = 'father-all-chats'
        console.log(infoMessage)
        infoMessage.consulta.forEach(async (e,i)=>{
            let posicition = allMessages.length-1    



                const allMessage = await fetch(`/getChatscompanyapplicant/${e.idApplicant}/${e.idCompany}`,{
                    method: 'get'
                })

            console.log(allMessage)    

            if(infoUser.message.rol == 'applicant'){


                console.log(allMessages[posicition].idCompany)
                console.log(allMessages[posicition])       
                if(e.id_company)
                divMessage.appendChild((a(e.id_company,e.name_company,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Gof12o_hZ7iwwBkfp4MLpuQqfZ610ZmAV6805F24&s",allMessages[posicition].message[0].text,allMessages[posicition].message[0].hour)))
            
            }else{

                allMessages[posicition].idCompany
                console.log(allMessages)       
                console.log()
                divMessage.appendChild((a(e.id_applicant,e.name_applicant,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Gof12o_hZ7iwwBkfp4MLpuQqfZ610ZmAV6805F24&s",allMessages[posicition].message[0].text,allMessages[posicition].message[0].hour)))

            }
        })


      




        
        // people.forEach(e=>{

        //     //Array de los mensajes de cada uno de los 
        //     let chatMessages = e.messages
        //     //Ultimo mensaje del arrays de mensaje con sus propiedades
        //     let posLastMessage = chatMessages[chatMessages.length-1]
        //     let lastMessage = posLastMessage.message
        //     posLastMessage.role=='transmitter' ? lastMessage = 'You: '+ lastMessage : lastMessage=lastMessage
        //     //Agregacion de el contenedor del chat  
            
        // })
        //console.log(infoMessage)
        // let posicition = allmessagesAplicant.length

        // divMessage.appendChild((a(infoMessage.consulta[0].id_company,infoMessage.consulta[0].nombrecompany,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Gof12o_hZ7iwwBkfp4MLpuQqfZ610ZmAV6805F24&s",allmessagesAplicant[posicition-1].message[0].text,allmessagesAplicant[posicition-1].message[0].hour)))

        // console.log(infoMessage)        
             

        
        
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