export const a = function mesaje(nameChat,photo,inboxUser,hour) {

// aca ingresa el nombre
const insertNameChat = document.createElement("span");
insertNameChat.className="nameChat"
insertNameChat.textContent=nameChat
insertNameChat.style.fontSize="1.5rem"

// aca se inserta la hora
 const hourChat = document.createElement("span")
 hourChat.className="hourChat"
 hourChat.textContent=hour
 hourChat.style.alignSelf="center"
 hourChat.style.color="#757575"


// aca se inserta el ultimo mensaje
const inboxChat =document.createElement("p");
inboxChat.className="inboxChat"
inboxChat.textContent=inboxUser
inboxChat.style.width="100%"
inboxChat.style.whiteSpace="nowrap"
inboxChat.style.textOverflow="ellipsis"
inboxChat.style.overflow="hidden"
inboxChat.style.color="#757575"


// aca ingresa el nombre y la hora
const namehourChat=document.createElement("div")
namehourChat.className="nameHourChat"

namehourChat.appendChild(insertNameChat)
namehourChat.appendChild(hourChat)
namehourChat.style.display="flex";
namehourChat.style.justifyContent="space-between"





/* aca se ingresa la imagen
 */const insertPhotoChat = document.createElement("img");
insertPhotoChat.className="insertPhotoChat"
insertPhotoChat.style.width="65px";
insertPhotoChat.style.height="65px";
insertPhotoChat.src=photo;
insertPhotoChat.style.borderRadius="50%";
insertPhotoChat.style.padding="1vh"


/* aca se crea la caja interna de el inbox y el nombre
 */const interCaja =document.createElement("div")
interCaja.className="interCaja"
interCaja.style.display="flex"
interCaja.style.width="20%"
interCaja.style.flexDirection="column"
interCaja.style.justifyContent="center"
interCaja.style.gap="0.5rem"


interCaja.appendChild(namehourChat)
interCaja.appendChild(inboxChat)



/* este es el contenedor padre 
 */const caja =document.createElement("div")
 caja.className="cajaPadre"
caja.style.display="flex"
caja.style.flexDirection="rows"
caja.style.padding="1rem"

caja.appendChild(insertPhotoChat)
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
