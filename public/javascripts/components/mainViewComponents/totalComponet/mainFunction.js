import { upperComponents } from "../componentA/componentA.js";
import { interests } from "../componentA/componentB.js";
import { Description } from "../descriptionComponent/descriptionComponent.js";
import { renderButtons } from "../likeDislikeComponent/likeDislikeComponent.js";
//Importe de los datos de usuario 
import { applicant } from "../../userDataCard/userDataCard.js";
export const rightCreator = (img,dataArea,emails) => {

    setTimeout(() => { reloadData(emails) }, 100);
    console.log(dataArea)
    const [data, interestArea] = dataArea
    const array = []
    
    for (const x in interestArea) {
        array.push(x)
    }
    
    //Array para traer los intereses de un perfil
    const areas = Object.values(interestArea);
    const interestOfArea = []

    areas.forEach(area => {
        area.forEach(interest => {
            interestOfArea.push(interest)
        })       
    });

    // for (let  i = 0; i < Object.values(interestArea).length; i++){
    //     if (interestArea[array[i]].length > 1){
    //         for (let  a = 0; a <= interestArea[array[i]].length; a++){
    //             if(interestArea[array[i]][a]){
    //                 otherArray.push(interestArea[array[i]][a]) 
    //             }
    //         }
    //     }else if(interestArea[array[i]]){
    //         otherArray.push(interestArea[array[i]])
    //     }
    // }   
    // console.log(otherArray)

    const componentAInformation = upperComponents(img, data.name, data.day_of_birth);
    const componentBDescription = interests(interestOfArea);
    const componentDescription = Description(data.description);
    const componentCOptions = renderButtons();
    const mainContainerSon = document.createElement('div');
    mainContainerSon.className = "mainContainerSon";
    const subcontainer = document.createElement('div');
    subcontainer.className = "subcontainer";
    const footerContainer = document.createElement('div');
    footerContainer.className = "footerContainer";
    const mainContainer = document.createElement('div');
    mainContainer.className = "mainContainer";
    
    subcontainer.appendChild(componentDescription);
    subcontainer.appendChild(componentBDescription);

    componentAInformation.appendChild(footerContainer);

    footerContainer.appendChild(componentCOptions);

    mainContainerSon.appendChild(componentAInformation);
    mainContainerSon.appendChild(subcontainer);

    mainContainer.appendChild(mainContainerSon)
    return mainContainer;
}
export const reloadData = (emails) => {
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
