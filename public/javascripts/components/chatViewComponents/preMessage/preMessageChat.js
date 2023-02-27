
export const a = function mesaje(id,name1,photo,inboxUser,hour,idA) {

    // aca ingresa el nombre
    const insetNameChat = document.createElement("span");
    insetNameChat.textContent=name1
    insetNameChat.style.fontSize="1.5rem"
    
    // aca se inserta la hora
     const hourChat = document.createElement("span")
     hourChat.textContent=hour
     hourChat.style.alignSelf="center"
     hourChat.style.color="#757575"
    
    
    // aca se inserta el ultimo mensaje
    const inboxChat =document.createElement("p");
    inboxChat.textContent=inboxUser
    inboxChat.style.width="100%"
    inboxChat.style.whiteSpace="nowrap"
    inboxChat.style.textOverflow="ellipsis"
    inboxChat.style.overflow="hidden"
    inboxChat.style.color="#757575"
    
    
    // aca ingresa el nombre y la hora
    const namehourChat=document.createElement("div")
    namehourChat.className="nameHourChat"
    namehourChat.appendChild(insetNameChat)
    namehourChat.appendChild(hourChat)
    namehourChat.style.display="flex";
    namehourChat.style.justifyContent="space-between"

    //Creacion de la imagen
    const insertPhotoChat = document.createElement("img");
    insertPhotoChat.className='profileImg'
    insertPhotoChat.src=`img/${photo}`;
    
    //Creacion del contenedor que tendra la imagen
    const contImg = document.createElement('div')
    contImg.className='profileImgCont'
    contImg.appendChild(insertPhotoChat)


    const interCaja =document.createElement("div")
    interCaja.className='boxMessageAllChat'
    interCaja.style.display="flex"
    interCaja.style.width="70%"
    interCaja.style.flexDirection="column"
    interCaja.style.justifyContent="center"
    interCaja.style.marginLeft = '1rem'
/*     interCaja.style.gap="0.5rem" */
    interCaja.appendChild(namehourChat)
    interCaja.appendChild(inboxChat)
    
    const caja =document.createElement("div")
    caja.className = 'messageBox'
    caja.id = id



    caja.addEventListener('click', async()=>{
        console.log(idA)
        console.log(id)


            //fecth y su respuesta
       const Rblock = await fetch(`/allAction/RenderizadoBlock/${idA}/${id}`, {
            method: 'get'
        }).then(response => response.json())
        
        const statusBlock = Rblock[0].blocked_status.data[0]
        console.log ('statusBlock' + statusBlock)

        if (statusBlock == 1){
            console.log('hola')

           // deshabilitar input y span
            const inputMessage = document.getElementById('inputMessage');
            const span1 = document.getElementById('blockUser');

            console.log(inputMessage)
            console.log('se intento')
            
            inputMessage.remove()
            inputMessage.ariaPlaceholder = 'hola'

            alert ('hola esta entrando')
         
        }
    })
    
    caja.appendChild(contImg)
    caja.appendChild(interCaja)
    
    
    
        return caja
    }
    



/* para hacer el llamado
 */
/* document.getElementById("app").appendChild(a(
"Jose"
,"https://assets.reedpopcdn.com/pokemon_go_ditto_disguises_A16ilOs.png/BROK/resize/1200x1200%3E/format/jpg/quality/70/pokemon_go_ditto_disguises_A16ilOs.png"
," hola macaco hola macaco hola holasa    hola hola  hola macaco hola macaco"
,"13:12")
) */
