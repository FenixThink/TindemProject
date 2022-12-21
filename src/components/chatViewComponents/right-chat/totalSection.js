import { right } from "./rightChat"
import { options } from "../optionsChat/optionsChat.js"

export const sectionChat = (textLabelDescription) => {

    const sectionA = right();
    const sectionB = options(textLabelDescription);

    const divFather = document.createElement('div');
    divFather.className = "container"
    divFather.appendChild(sectionA);
    divFather.appendChild(sectionB);
    return divFather;
}