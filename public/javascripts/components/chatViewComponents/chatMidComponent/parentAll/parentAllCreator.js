import { headerChatCreator } from "../headerChatMid/headerChatMid.js";
import { centerCreator } from "../parentCenter/parentCenter.js"
import { inputCreator } from "../../../input/input.js"
import { boxMessage } from "../../boxMessage/boxMessage.js"
import { fetchQuerys } from "../../../../home.js";


export const parentParentCreator = async (id,profileName,photo,data)=>{
    
    const holaMundo = await fetchQuerys().then(data => {

        const [infoUser, dataUser,infoMessage,allmessagesAplicant] = data
        //console.log(infoMessage.consulta[1].id_company)
        
        const center = centerCreator()
        const top = headerChatCreator(id,profileName,photo)
        
        //Creacion input
        const input = inputCreator()
        input.placeholder = "Type a message"
        input.className = "inputSendMessage"
        input.id = "inputMessage"
        //Contenedor para el input
        const inputCont = document.createElement('div')
        inputCont.className = 'contInputSend'
        inputCont.id = "contInputSend"
        
        inputCont.appendChild(input)
        
        // setInterval(async(e)=>{
        //     const personId = document.querySelector('.nameTopChat').id
        //     if(personId){
            
        //     let id_applicant, id_company;
        //     if(infoUser.message.rol === 'applicant'){
        //         id_applicant = dataUser[0].ID;
        //         id_company = personId;
        //     }else{
        //         id_applicant = personId;
        //         id_company = dataUser[0].ID;
        //         }
        //         const chat = await fetch(`/getChatscompanyapplicant/${id_applicant}/${id_company}`,{
        //             method: 'get'
        //         })
                
        //         const chatData = await chat.json()
        //         let lastMessageObject = chatData.Message.length 
                
        //         const local = localStorage.getItem('numMessage') || lastMessageObject
        //         const num = JSON.parse(local)

        //         if(num.value != lastMessageObject ){
                    
        //             const padreCentro = document.querySelector('.padreMensajes')
        //             const messages = document.querySelectorAll('.message')
        //             const last = messages.length - 1
        //             console.log(chatData.Message[lastMessageObject - 1].message[0])
        //             if(messages[last].textContent != chatData.Message[lastMessageObject - 1].message[0].text){   

        //                 let color,cargo;

        //             if(infoUser.message.rol == 'applicant'){
        //                 if(chatData.Message[lastMessageObject - 1].message[0].role == 'applicant'){
        //                     color = 'verde';
        //                     cargo = 'applicant-right'    
        //                 }else{
        //                     color = 'gris'
        //                 }

        //             }else{
        //                 if(chatData.Message[lastMessageObject - 1].message[0].role == 'company'){
        //                     color = 'verde';
        //                     cargo = 'company-right'    
        //                 }else{
        //                     color = 'gris'
        //                 }
        //             }
                    
        //                 padreCentro.appendChild(boxMessage('verde',cargo,chatData.Message[lastMessageObject-1].message[0].text,chatData.Message[lastMessageObject-1].message[0].hour))
        //                 let diEnd = padreCentro.scrollHeight - padreCentro.clientHeight;
        //                 padreCentro.scrollTop+=diEnd
        //             }

        //     } 

        //         const CantMessage = {
        //             value:lastMessageObject
        //         }
        //         localStorage.setItem('numMessage',JSON.stringify(CantMessage))

        //     }
        // },3000)
                
//Configuracion de la agregacion del contenedor del mensaje al chat
inputCont.addEventListener('keyup',async (e)=>{
    
    if(e.code == 'Enter'){
        if(input.value){
            //Envio visual del mensaje por el chat
            const padreCentro = document.querySelector('.padreMensajes')
            let date = new Date()   
            let zone = ''
            date.getHours()>12 ? zone='PM' : zone='AM'
            let now = `${date.toLocaleString('es-CO').slice(9,15)} ${zone}`
            
            
            padreCentro.appendChild(boxMessage('verde','transmitter',input.value,now))
            
            /* people[personId].messages[posLastMessage+1]={
                message:input.value,
                hour: `${date.toLocaleString('es-CO').slice(10,14)} ${zone}`,
                role:'transmitter'
            } */
            const personId = document.querySelector('.nameTopChat').id
            //Actualizacion del ultimo mensaje de la barra lateral izquierda del chat
            const boxChat = document.querySelectorAll('.boxMessageAllChat')
            boxChat.forEach(e=>{
                console.log(e.parentElement.id, personId)
                if(e.parentElement.id==personId){
                    e.lastChild.textContent = 'You: ' + input.value 
                }
            })
            const text = input.value
            setTimeout(() => {
                const recep = document.querySelector('.nameTopChat')
                const idRecep = new Number(recep.id)
                let idCompany, idApplicant;
                if(infoUser.message.rol == 'applicant'){
                    idCompany = idRecep;
                    idApplicant = dataUser[0].ID
                }else{
                    idCompany = dataUser[0].ID;
                    idApplicant = idRecep
                }
                console.log(idApplicant, idCompany)
                const body ={
                   "idApplicant":idApplicant,
                   "idCompany":idCompany,
                   "message":{
                       
                       text:text,
                       hour: `${date.toLocaleString('es-CO').slice(10,16)} ${zone}`,
                       role: infoUser.message.rol
                    }
                } 
                fetch('/chats',{
                       method:'Post', 
                       headers:{
                           "Content-type":"Application/json"},
                           body: JSON.stringify(body)
                           
               })
               
            }, 1000);
            

            
            let diEnd = padreCentro.scrollHeight - padreCentro.clientHeight;
            padreCentro.scrollTop+=diEnd
            
            input.value = ''
        }
    }
})

const parent = document.createElement('div')
parent.className = "parentParentMid"
parent.appendChild(top)
parent.appendChild(center)
parent.appendChild(inputCont)

return parent

})

return holaMundo
}