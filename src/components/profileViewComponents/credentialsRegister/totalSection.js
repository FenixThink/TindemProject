import { imageContainer } from "./logoSection.js"
import { credentialContainer } from "./credentialSection.js"

export const principalFunction = (img,firstInput,secondInput, name, userName, email, psw) => {

    const imageContainerAlgoQUeLaDiferencie = imageContainer(img);
    const imageContainerAlgoQUeLaDiferencieOtraVez = credentialContainer(firstInput,secondInput, name, userName, email, psw);

    const divFather = document.createElement('div');
    divFather.className = "seccionA"
    divFather.appendChild(imageContainerAlgoQUeLaDiferencie);
    divFather.appendChild(imageContainerAlgoQUeLaDiferencieOtraVez);
    return divFather;
}
