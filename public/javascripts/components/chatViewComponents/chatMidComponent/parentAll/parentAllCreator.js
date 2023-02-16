import { headerChatCreator } from "../headerChatMid/headerChatMid.js";
import { centerCreator } from "../parentCenter/parentCenter.js"
import { inputCreator } from "../../../input/input.js"
import { boxMessage } from "../../boxMessage/boxMessage.js"
import { people } from "../../partLeftChat/unionPartsLeft.js";
import { fetchQuerys } from "../../../../home.js";


export const parentParentCreator = async (id,profileName,photo)=>{
    
    const holaMundo = await fetchQuerys().then(data => {
        
        const [infoUser, dataUser,infoMessage,allmessagesAplicant] = data
        //console.log(infoMessage.consulta[1].id_company)

        const center = centerCreator()
        const top = headerChatCreator(id,profileName,photo)
        
        
        //Creacion input
        const input = inputCreator()
        input.placeholder = "Type a message"
        input.className = "inputSendMessage"
        //Contenedor para el input
        const inputCont = document.createElement('div')
        inputCont.className = 'contInputSend'
        inputCont.appendChild(input)
        
//Configuracion de la agregacion del contenedor del mensaje al chat
inputCont.addEventListener('keyup',(e)=>{
    if(e.code == 'Enter'){
        if(input.value){
            
            //Envio visual del mensaje por el chat
            const padreCentro = document.querySelector('.padreMensajes')
            let date = new Date()   
            let zone = ''
            date.getHours()>12 ? zone='PM' : zone='AM'
            let now = `${date.toLocaleString('es-CO').slice(9,15)} ${zone}`
            
            padreCentro.appendChild(boxMessage('verde','transmitter',input.value,now))
            
            
            
            
            //Guardado del mensaje en la lista de mensajes existentes en el chat con la otra persona
            const personId = document.querySelector('.nameTopChat').id
            const posLastMessage = Object.values(people[personId].messages).length  
            
            people[personId].messages[posLastMessage+1]={
                message:input.value,
                hour: `${date.toLocaleString('es-CO').slice(10,14)} ${zone}`,
                role:'transmitter'
            }
            //Actualizacion del ultimo mensaje de la barra lateral izquierda del chat
            const boxChat = document.querySelectorAll('.boxMessageAllChat')
            boxChat.forEach(e=>{
                if(e.parentElement.id==personId){
                    e.lastChild.textContent = 'You: ' + input.value 
                }
            })
            const text = input.value
            setTimeout(() => {
                const recep = document.querySelector('.nameTopChat')
                const idRecep = new Number(recep.id)
               const body ={
                   "idApplicant":infoUser.message.id,
                   "idCompany":idRecep,
                   "message":{
                       
                       text:text,
                       hour: `${date.toLocaleString('es-CO').slice(10,16)} ${zone}`,
                       role:'transmitter'
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