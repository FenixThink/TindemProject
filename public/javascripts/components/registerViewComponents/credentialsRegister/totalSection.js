import { imageContainer } from "./logoSection.js"
import { credentialContainer } from "./credentialSection.js"

export const principalFunction = (img,firstInput,secondInput,description,interestSpan) => {

    const imageContainerAlgoQUeLaDiferencie = imageContainer(img);
    const imageContainerAlgoQUeLaDiferencieOtraVez = credentialContainer(firstInput,secondInput);

    const divFather = document.createElement('div');
    divFather.className = "seccionA"
    divFather.appendChild(imageContainerAlgoQUeLaDiferencie);
    divFather.appendChild(imageContainerAlgoQUeLaDiferencieOtraVez);
    return divFather;
}
