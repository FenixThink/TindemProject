import { upperComponents } from "../componentA/componentA.js";
import { interests } from "../componentA/componentB.js";
import { Description } from "../descriptionComponent/descriptionComponent.js";
import { renderButtons } from "../likeDislikeComponent/likeDislikeComponent.js";
//Importe de los datos de usuario 
import { applicant } from "../../userDataCard/userDataCard.js";
export const rightCreator = (img,dataArea,emails,dataUser) => {

    setTimeout(() => { reloadData(emails,dataUser,dataArea) }, 100);
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

    const componentAInformation = upperComponents(img, data.name, data);
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
export const reloadData = (emails,dataUser,dataArea) => {

    const large = emails.length
    const aleatory = Math.floor(Math.random() * large);
    const token = localStorage.getItem('token')

    const objectApplicant = Object.values(applicant);
    const mainContainer = document.querySelector('.mainContainer');
    const vectorLike = document.querySelector("#likeVector");
    const vectorDislike = document.querySelector("#imgUnlike");
    vectorLike.addEventListener('click', async () => {
        const dataSaveAction = {
            action:'like',
            action_author:dataUser[0].type,
            action_match:0,
            id_applicant:dataUser[0].ID,
            id_company:dataArea[0].ID
        }

        const answerFetchHavingActions = await fetch(`/allAction/${dataArea[0].ID}/${dataUser[0].ID}`,{
            method:'get'
        })
        const response = await answerFetchHavingActions.json()
        //console.log(response)
        if (response.message == 'Actions not found'){
           fetch('/ActionsCreate',{
               method:'post',
               headers:{
                   "Content-type":'application/json'
               },
               body: JSON.stringify(dataSaveAction)
           })
        }
        const emailsApplicant = await fetch(`/api/getAllEmailCompanies/${dataUser[0].ID}`, {
            method: 'get',
            headers: {
                'autorization': token
            }
        });

        const infoemails = await emailsApplicant.json();
        console.log(infoemails)
        mainContainer.remove()
        const right = document.querySelector('.right')
        right.appendChild(rightCreator(`../../../../img/${emails[aleatory][0].img}`, emails[aleatory],emails,dataUser,dataArea))
    },);
    vectorDislike.addEventListener('click', () => {
        mainContainer.remove()
        const right = document.querySelector('.right')
        right.appendChild(rightCreator(`../../../../img/${emails[aleatory][0].img}`,emails[aleatory],emails,dataUser,dataArea))
    },);
}
