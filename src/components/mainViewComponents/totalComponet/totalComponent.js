import { upperComponents } from "../componentA/componentA.js";
import { interests } from "../componentA/componentB.js";
import { renderButtons } from "../likeDislikeComponent/likeDislikeComponent.js";
import { Description } from "../descriptionComponent/descriptionComponent.js";

//Parte de la izquierda que tiene que ver con los componentes de chat
import { partLeft } from "../../chatViewComponents/partLeftChat/unionPartsLeft.js";

//Importe de los datos de usuario 
import { applicant } from "../../userDataCard/userDataCard.js";


export const TotalFunctionView = (img, nombre, valueSpan, descTitle, spanTextDescription, interestItems) => {

   // Reemplazar datos dinamicamente de un objeto
   let objectApplicant = Object.values(applicant);
   const nextTargetProfile = () => {
      document.querySelector('.mainContainer').remove()
      app.appendChild(TotalFunctionView(objectApplicant[0].profile_image, objectApplicant[0].name, objectApplicant[0].day_of_birth, "Descripcion Laboral", objectApplicant[0].description, objectApplicant[1][0].Especializaciones));
   }

   //TimeOut provisional
   setTimeout(() => {
      const vectorLike = document.querySelector("#likeVector");
      const vectorDislike = document.querySelector("#imgUnlike");
      vectorLike.addEventListener('click', nextTargetProfile);
      vectorDislike.addEventListener('click', nextTargetProfile);
   }, 1);

   const componentAInformation = upperComponents(img, nombre, valueSpan);
   const componentBDescription = interests(interestItems);
   const componentDescription = Description(descTitle, spanTextDescription);
   const componentCOptions = renderButtons();

   //Contenedores de contenido principales
   const divFather = document.createElement('div');
   divFather.className = "containerFather"
   const middleContainer = document.createElement('div');
   middleContainer.className = "mainContainer";
   const footerContainer = document.createElement('div');
   footerContainer.className = "footerContainer";

   //Componente del header de la izquierda
   const left = partLeft('Pepsi', 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
   footerContainer.appendChild(componentCOptions);
   middleContainer.appendChild(componentAInformation);
   middleContainer.appendChild(componentDescription);
   middleContainer.appendChild(componentBDescription);
   middleContainer.appendChild(footerContainer);
   divFather.appendChild(left);
   divFather.appendChild(middleContainer);
   return divFather;
}

export const totalPartLeft = () => {

}