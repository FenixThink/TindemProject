import { imageContainer } from "./logoSection.js"
import { credentialContainer } from "./credentialSection.js"

const FuncionPrincipal = () => {

    const imageContainerAlgoQUeLaDiferencie = imageContainer();
    const imageContainerAlgoQUeLaDiferencieOtraVez = credentialContainer();

    const divFather = document.createElement('div');
    divFather.className = "seccionA"
    divFather.appendChild(imageContainerAlgoQUeLaDiferencie);
    divFather.appendChild(imageContainerAlgoQUeLaDiferencieOtraVez);
    return divFather;
}

export const constMainFunction = FuncionPrincipal();