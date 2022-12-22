import { divSearch } from "../all-chats/search.js";
export const a = function mensaje(nameChat,photo,inboxUser,hour) {
   
    // aca ingresa el nombre
    const insertNameChat = document.createElement("span");
    insertNameChat.className="nameChat"
    insertNameChat.textContent=nameChat
    insertNameChat.style.fontSize="1.5rem"

    const insertNameChat2 = document.createElement("span");
    insertNameChat2.className="nameChat"
    insertNameChat2.textContent='Muezz'
    insertNameChat2.style.fontSize="1.5rem"

    const insertNameChat3 = document.createElement("span");
    insertNameChat3.className="nameChat"
    insertNameChat3.textContent='Client'
    insertNameChat3.style.fontSize="1.5rem"

    const insertNameChat4 = document.createElement("span");
    insertNameChat4.className="nameChat"
    insertNameChat4.textContent='Shehnaz'
    insertNameChat4.style.fontSize="1.5rem"

    const insertNameChat5 = document.createElement("span");
    insertNameChat5.className="nameChat"
    insertNameChat5.textContent='Zilan'
    insertNameChat5.style.fontSize="1.5rem"

    // aca se inserta la hora
     const hourChat = document.createElement("span")
     hourChat.className="hourChat"
     hourChat.textContent=hour
     hourChat.style.alignSelf="center"
     hourChat.style.color="#757575"

     const hourChat2 = document.createElement("span")
     hourChat2.className="hourChat"
     hourChat2.textContent='9:00 AM'
     hourChat2.style.alignSelf="center"
     hourChat2.style.color="#757575"

     const hourChat3 = document.createElement("span")
     hourChat3.className="hourChat"
     hourChat3.textContent='9:12 AM'
     hourChat3.style.alignSelf="center"
     hourChat3.style.color="#757575"

     const hourChat4 = document.createElement("span")
     hourChat4.className="hourChat"
     hourChat4.textContent='12:35 PM'
     hourChat4.style.alignSelf="center"
     hourChat4.style.color="#757575"

     const hourChat5 = document.createElement("span")
     hourChat5.className="hourChat"
     hourChat5.textContent='12:35 PM'
     hourChat5.style.alignSelf="center"
     hourChat5.style.color="#757575"


    // aca se inserta el ultimo mensaje
    const inboxChat =document.createElement("p");
    inboxChat.className="inboxChat"
    inboxChat.textContent=inboxUser
    inboxChat.style.width="100%"
    inboxChat.style.whiteSpace="nowrap"
    inboxChat.style.textOverflow="ellipsis"
    inboxChat.style.overflow="hidden"
    inboxChat.style.color="#757575"

    const inboxChat2 =document.createElement("p");
    inboxChat2.className="inboxChat"
    inboxChat2.textContent='You: I will send you the work file'
    inboxChat2.style.width="100%"
    inboxChat2.style.whiteSpace="nowrap"
    inboxChat2.style.textOverflow="ellipsis"
    inboxChat2.style.overflow="hidden"
    inboxChat2.style.color="#757575"

    const inboxChat3 =document.createElement("p");
    inboxChat3.className="inboxChat"
    inboxChat3.textContent='What time are we there?'
    inboxChat3.style.width="100%"
    inboxChat3.style.whiteSpace="nowrap"
    inboxChat3.style.textOverflow="ellipsis"
    inboxChat3.style.overflow="hidden"
    inboxChat3.style.color="#757575"

    const inboxChat4 =document.createElement("p");
    inboxChat4.className="inboxChat"
    inboxChat4.textContent='Call ended'
    inboxChat4.style.width="100%"
    inboxChat4.style.whiteSpace="nowrap"
    inboxChat4.style.textOverflow="ellipsis"
    inboxChat4.style.overflow="hidden"
    inboxChat4.style.color="#757575"

    const inboxChat5 =document.createElement("p");
    inboxChat5.className="inboxChat"
    inboxChat5.textContent='Thank you very much, I am wait'
    inboxChat5.style.width="100%"
    inboxChat5.style.whiteSpace="nowrap"
    inboxChat5.style.textOverflow="ellipsis"
    inboxChat5.style.overflow="hidden"
    inboxChat5.style.color="#757575"


    // aca ingresa el nombre y la hora
    const namehourChat=document.createElement("div")
    namehourChat.className="nameHourChat"
    namehourChat.appendChild(insertNameChat)
    namehourChat.appendChild(hourChat)
    namehourChat.style.display="flex";
    namehourChat.style.justifyContent="space-between"

    const namehourChat2=document.createElement("div")
    namehourChat2.className="nameHourChat"
    namehourChat2.appendChild(insertNameChat2)
    namehourChat2.appendChild(hourChat2)
    namehourChat2.style.display="flex";
    namehourChat2.style.justifyContent="space-between"

    const namehourChat3=document.createElement("div")
    namehourChat3.className="nameHourChat"
    namehourChat3.appendChild(insertNameChat3)
    namehourChat3.appendChild(hourChat3)
    namehourChat3.style.display="flex";
    namehourChat3.style.justifyContent="space-between"

    const namehourChat4=document.createElement("div")
    namehourChat4.className="nameHourChat"
    namehourChat4.appendChild(insertNameChat4)
    namehourChat4.appendChild(hourChat4)
    namehourChat4.style.display="flex";
    namehourChat4.style.justifyContent="space-between"

    const namehourChat5=document.createElement("div")
    namehourChat5.className="nameHourChat"
    namehourChat5.appendChild(insertNameChat5)
    namehourChat5.appendChild(hourChat5)
    namehourChat5.style.display="flex";
    namehourChat5.style.justifyContent="space-between"

    /* aca se ingresa la imagen*/
    const insertPhotoChat = document.createElement("img");
    insertPhotoChat.className="insertPhotoChat"
    insertPhotoChat.style.width="65px";
    insertPhotoChat.style.height="65px";
    insertPhotoChat.src='https://i.ibb.co/VSrTQ77/Ellipse-5.png';
    insertPhotoChat.style.borderRadius="50%";
    insertPhotoChat.style.padding="1vh"

    const insertPhotoChat2 = document.createElement("img");
    insertPhotoChat2.className="insertPhotoChat"
    insertPhotoChat2.style.width="65px";
    insertPhotoChat2.style.height="65px";
    insertPhotoChat2.src='https://i.ibb.co/1m6HCnT/Ellipse-12.png';
    insertPhotoChat2.style.borderRadius="50%";
    insertPhotoChat2.style.padding="1vh"

    const insertPhotoChat3 = document.createElement("img");
    insertPhotoChat3.className="insertPhotoChat"
    insertPhotoChat3.style.width="65px";
    insertPhotoChat3.style.height="65px";
    insertPhotoChat3.src='https://i.ibb.co/Nj38P87/Ellipse-17.png';
    insertPhotoChat3.style.borderRadius="50%";
    insertPhotoChat3.style.padding="1vh"

    const insertPhotoChat4 = document.createElement("img");
    insertPhotoChat4.className="insertPhotoChat"
    insertPhotoChat4.style.width="65px";
    insertPhotoChat4.style.height="65px";
    insertPhotoChat4.src='https://i.ibb.co/VY17RQS/Ellipse-18-1.png';
    insertPhotoChat4.style.borderRadius="50%";
    insertPhotoChat4.style.padding="1vh"

    const insertPhotoChat5 = document.createElement("img");
    insertPhotoChat5.className="insertPhotoChat"
    insertPhotoChat5.style.width="65px";
    insertPhotoChat5.style.height="65px";
    insertPhotoChat5.src='https://i.ibb.co/TrZ38Cv/Ellipse-18.png';
    insertPhotoChat5.style.borderRadius="50%";
    insertPhotoChat5.style.padding="1vh"


    /* aca se crea la caja interna de el inbox y el nombre*/
    const interCaja =document.createElement("div")
    interCaja.className="interCaja"
    interCaja.style.display="flex"
    interCaja.style.width="100%"
    interCaja.style.flexDirection="column"
    interCaja.style.justifyContent="center"
    interCaja.appendChild(namehourChat)
    interCaja.appendChild(inboxChat)

    const interCaja2 =document.createElement("div")
    interCaja2.className="interCaja"
    interCaja2.style.display="flex"
    interCaja2.style.width="100%"
    interCaja2.style.flexDirection="column"
    interCaja2.style.justifyContent="center"
    interCaja2.appendChild(namehourChat2)
    interCaja2.appendChild(inboxChat2)

    const interCaja3 =document.createElement("div")
    interCaja3.className="interCaja"
    interCaja3.style.display="flex"
    interCaja3.style.width="100%"
    interCaja3.style.flexDirection="column"
    interCaja3.style.justifyContent="center"
    interCaja3.appendChild(namehourChat3)
    interCaja3.appendChild(inboxChat3)

    const interCaja4 =document.createElement("div")
    interCaja4.className="interCaja"
    interCaja4.style.display="flex"
    interCaja4.style.width="100%"
    interCaja4.style.flexDirection="column"
    interCaja4.style.justifyContent="center"
    interCaja4.appendChild(namehourChat4)
    interCaja4.appendChild(inboxChat4)

    const interCaja5 =document.createElement("div")
    interCaja5.className="interCaja"
    interCaja5.style.display="flex"
    interCaja5.style.width="100%"
    interCaja5.style.flexDirection="column"
    interCaja5.style.justifyContent="center"
    interCaja5.appendChild(namehourChat5)
    interCaja5.appendChild(inboxChat5)

    /* este es el contenedor padre */
    const caja =document.createElement("div")
    caja.className="cajaPadre"
    caja.style.display="flex"
    caja.style.flexDirection="rows"
    caja.style.padding="1vh"

    caja.appendChild(insertPhotoChat5)
    caja.appendChild(interCaja5)

    const caja2 =document.createElement("div")
    caja2.className="cajaPadre3"
    caja2.style.display="flex"
    caja2.style.flexDirection="rows"
    caja2.style.padding="1vh"

    caja2.appendChild(insertPhotoChat4)
    caja2.appendChild(interCaja4)

    const caja3 =document.createElement("div")
    caja3.className="cajaPadre4"
    caja3.style.display="flex"
    caja3.style.flexDirection="rows"
    caja3.style.padding="1vh"

    caja3.appendChild(insertPhotoChat3)
    caja3.appendChild(interCaja3)

    const caja4 =document.createElement("div")
    caja4.className="cajaPadre5"
    caja4.style.display="flex"
    caja4.style.flexDirection="rows"
    caja4.style.padding="1vh"

    caja4.appendChild(insertPhotoChat2)
    caja4.appendChild(interCaja2)

    const caja5 =document.createElement("div")
    caja5.className="cajaPadre6"
    caja5.style.display="flex"
    caja5.style.flexDirection="rows"
    caja5.style.padding="1vh"

    caja5.appendChild(insertPhotoChat)
    caja5.appendChild(interCaja)

    const h1 = document.createElement('h1')
    h1.className = 'title-all-chats'
    h1.textContent = 'All Chats'

    const divPadre = document.createElement('div')
    divPadre.className = 'conainer-all-chat'
    divPadre.appendChild(h1)
    divPadre.appendChild(caja)
    divPadre.appendChild(caja2)
    divPadre.appendChild(caja3)
    divPadre.appendChild(caja4)
    divPadre.appendChild(caja5)

    const chat=divSearch()//esta parte es de felipe olarte
    const parent=document.createElement('div')//creando el contenedor padere que va a contener el buscador y la vista chatall
    parent.className='parentChat'
    parent.appendChild(chat)
    parent.appendChild(divPadre)

    return parent//hasta aquí termina lo de felipe olarte
}


/* para hacer el llamado
 */
/* document.getElementById("app").appendChild(a(
"Jose"
,"https://assets.reedpopcdn.com/pokemon_go_ditto_disguises_A16ilOs.png/BROK/resize/1200x1200%3E/format/jpg/quality/70/pokemon_go_ditto_disguises_A16ilOs.png"
," hola macaco hola macaco hola holasa    hola hola  hola macaco hola macaco"
,"13:12")
) */
