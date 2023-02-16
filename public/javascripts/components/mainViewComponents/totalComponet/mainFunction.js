import { upperComponents } from "../componentA/componentA.js";
import { interests } from "../componentA/componentB.js";
import { Description } from "../descriptionComponent/descriptionComponent.js";
import { renderButtons } from "../likeDislikeComponent/likeDislikeComponent.js";
//Importe de los datos de usuario 
import { applicant } from "../../userDataCard/userDataCard.js";
export const rightCreator = (img,dataArea,emails) => {

    setTimeout(() => { reloadData(emails) }, 100);

    const [data, interestArea] = dataArea
    const array = []
    const otherArray = []

    for (const x in interestArea) {
        array.push(x)
    }
    for (let  i = 0; i < Object.values(interestArea).length; i++){
        if (interestArea[array[i]].length > 1){
            for (let  a = 0; a <= interestArea[array[a]].length; a++){
                otherArray.push(interestArea[array[i]][a])
            }
        }else{
            otherArray.push(interestArea[array[i]])
        }
    }

    //console.log(data)


    const componentAInformation = upperComponents(img, data.name, data.day_of_birth);
    const componentBDescription = interests(otherArray);
    const componentDescription = Description(data.description);
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
export const reloadData = (emails) => {
    console.log(emails.length)
    const large = emails.length
    const aleatory = Math.floor(Math.random() * large);

    const objectApplicant = Object.values(applicant);
    const mainContainer = document.querySelector('.mainContainer');
    const vectorLike = document.querySelector("#likeVector");
    const vectorDislike = document.querySelector("#imgUnlike");
    vectorLike.addEventListener('click', () => {
        mainContainer.remove()
        const right = document.querySelector('.right')
        right.appendChild(rightCreator(objectApplicant[0].profile_image, emails[aleatory],emails))
    },);
    vectorDislike.addEventListener('click', () => {
        mainContainer.remove()
        const right = document.querySelector('.right')
        right.appendChild(rightCreator('https://upload.wikimedia.org/wikipedia/commons/d/d9/Accor_Logo_2020.png',emails[aleatory],emails))
    },);
}
