import { right } from "./rightChat.js"
import { options } from "../optionsChat/optionsChat.js"

export const sectionChat = (name,img,description) => {

    
    //Creacion de la x para volver a visualizar las cartas
    const exit = document.createElement('span')
    exit.className = 'x'
    exit.textContent = 'X'

    const sectionA = right(name,img,description);
    const sectionB = options();


    const divFather = document.createElement('div');
    divFather.className = "containerChatDescr"
    divFather.appendChild(exit)
    divFather.appendChild(sectionA);
    divFather.appendChild(sectionB);
    return divFather;
}