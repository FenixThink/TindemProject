import {a} from "../preMessage/preMessageChat.js"
import { fetchQuerys } from "../../../home.js"
import { divSearch } from '../all-chats/search.js'




export const allChats = async(data,idA) => {

        const [infoUser, dataUser,infoMessage,allMessages] = data;
        const id_apli = data[0,1][0].ID

        /*Creacion titulo all chats*/
        const titleChats = document.createElement('div');
        titleChats.className='titleChats';


        const title = document.createElement('div');
        title.className='title'
        const h1 = document.createElement('p')
        h1.className = 'TitleallChats'
        h1.textContent = 'All Chat'
        
        //Objeto infor chats
        
        //Creacion del contenedor de chats
        const divMessage = document.createElement('div')
        divMessage.className = 'father-all-chats'
        infoMessage.consulta.forEach(async (e,i)=>{
   
            
            let user, userData, allMessage, dataChat, position,lastMessage, aplicante;

            if(infoUser.message.rol == 'applicant'){

                user = await fetch(`/company/${e.id_company}`,{
                    method: 'get'
                })
                userData = await user.json()
                
                allMessage = await fetch(`/getChatscompanyapplicant/${dataUser[0].ID}/${e.id_company}`,{
                    method: 'get'
                })

                dataChat = await allMessage.json()
                position = dataChat.Message.length - 1 

                aplicante = data[0,1][0].ID

                if(position>=0){

                    if(dataChat.Message[position].message[0].role === infoUser.message.rol){
                        lastMessage = `You: ${dataChat.Message[position].message[0].text}`
                    }else{
                        lastMessage = dataChat.Message[position].message[0].text
                    }                    

                    divMessage.appendChild((a(userData.id,userData.name,userData.img,lastMessage,dataChat.Message[position].message[0].hour,aplicante)))
                }else{
                    divMessage.appendChild((a(userData.id,userData.name,userData.img,'','',aplicante)))
                }
            
                    
            }else{

                user = await fetch(`/aspirant/${e.id_applicant}`,{
                    method: 'get'
                })
                userData = await user.json()
                
                allMessage = await fetch(`/getChatscompanyapplicant/${e.id_applicant}/${dataUser[0].ID}`,{
                    method: 'get'
                })  

                dataChat = await allMessage.json()
                position = dataChat.Message.length - 1 

                if(position>=0){

                    if(dataChat.Message[position].message[0].role === infoUser.message.rol){
                        lastMessage = `You: ${dataChat.Message[position].message[0].text}`
                    }else{
                        lastMessage = dataChat.Message[position].message[0].text
                    }                    

                    divMessage.appendChild((a(userData.id,userData.name,userData.img,lastMessage,dataChat.Message[position].message[0].hour,aplicante)))


                    
                }else{
                    divMessage.appendChild((a(userData.id,userData.name,userData.img,'','','',aplicante)))
                }
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
        // let posicition = allmessagesAplicant.length

        // divMessage.appendChild((a(infoMessage.consulta[0].id_company,infoMessage.consulta[0].nombrecompany,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Gof12o_hZ7iwwBkfp4MLpuQqfZ610ZmAV6805F24&s",allmessagesAplicant[posicition-1].message[0].text,allmessagesAplicant[posicition-1].message[0].hour)))


        
        const search = divSearch(infoMessage)
        
        
        //Creacion del contenedor que tendra el titulo all chats y el contenedor de los mensjes
        const divAllChats = document.createElement('div')

        divAllChats.className="padreAllChat"

        title.appendChild(h1)
        titleChats.appendChild(title)
        titleChats.appendChild(search)
        divAllChats.appendChild(titleChats)
        
        divAllChats.appendChild(divMessage)
        

        const div = document.createElement('div')
        div.className = "padrePadre"
        div.appendChild(divAllChats)

       return div

}