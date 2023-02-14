import { upperComponents } from "../componentA/componentA.js";
import { interests } from "../componentA/componentB.js";
import { Description } from "../descriptionComponent/descriptionComponent.js";
import { renderButtons } from "../likeDislikeComponent/likeDislikeComponent.js";
//Importe de los datos de usuario 
import { applicant } from "../../userDataCard/userDataCard.js";
export const rightCreator = (img, nombre, valueSpan, descTitle, spanTextDescription, interestItems) => {
    setTimeout(() => {
        reloadData()
    }, 100);
    console.log(interestItems)
    const componentAInformation = upperComponents(img, nombre, valueSpan);
    const componentBDescription = interests(interestItems);
    const componentDescription = Description(descTitle, spanTextDescription);
    const componentCOptions = renderButtons();
    const mainContainerSon = document.createElement('div');
    mainContainerSon.className = "mainContainerSon";
    const footerContainer = document.createElement('div');
    footerContainer.className = "footerContainer";
    const mainContainer = document.createElement('div');
    mainContainer.className = "mainContainer";
    footerContainer.appendChild(componentCOptions);
    mainContainerSon.appendChild(componentAInformation);
    mainContainerSon.appendChild(componentDescription);
    mainContainerSon.appendChild(componentBDescription);
    mainContainerSon.appendChild(footerContainer);
    mainContainer.appendChild(mainContainerSon)
    return mainContainer;
}
export const reloadData = () => {
    const objectApplicant = Object.values(applicant);
    const mainContainer = document.querySelector('.mainContainer');
    const vectorLike = document.querySelector("#likeVector");
    const vectorDislike = document.querySelector("#imgUnlike");
    vectorLike.addEventListener('click', () => {
        mainContainer.remove()
        const right = document.querySelector('.right')
        right.appendChild(rightCreator(objectApplicant[0].profile_image, objectApplicant[0].name, objectApplicant[0].day_of_birth, "Descripcion Laboral", objectApplicant[0].description, objectApplicant[1][0].Especializaciones))
    },);
    vectorDislike.addEventListener('click', () => {
        mainContainer.remove()
        const right = document.querySelector('.right')
        right.appendChild(rightCreator(objectApplicant[0].profile_image, objectApplicant[0].name, objectApplicant[0].day_of_birth, "Descripcion Laboral", objectApplicant[0].description, objectApplicant[1][0].Especializaciones))
    },);
}
