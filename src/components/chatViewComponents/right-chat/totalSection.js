import { right } from "./rightChat.js"
import { options } from "../optionsChat/optionsChat.js"

export const sectionChat = (textLabelDescription) => {

    const sectionA = right('https://i.ibb.co/TrZ38Cv/Ellipse-18.png');
    const sectionB = options(textLabelDescription);

    const divFather = document.createElement('div');
    divFather.className = "container"
    divFather.appendChild(sectionA);
    divFather.appendChild(sectionB);
    return divFather;
}