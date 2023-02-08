import { upperComponents } from "../componentA/componentA.js";
import { interests } from "../componentA/componentB.js";
import { renderButtons } from "../likeDislikeComponent/likeDislikeComponent.js";
import { Description } from "../descriptionComponent/descriptionComponent.js";
//Parte de la izquierda que tiene que ver con los componentes de chat
import { partLeft } from "../../chatViewComponents/partLeftChat/unionPartsLeft.js";
//Importe de los datos de usuario 

import { applicant } from "../../userDataCard/userDataCard.js";


export const TotalFunctionView = (img, nombre, valueSpan, introDescription, descTitle, interestText) => {

   //:c
   // Reemplazar datos dinamicamente de un objeto
   const nextTargetProfile = () => {
      for (let i = 1; i <= Object.keys(applicant).length; i++) {
         let applicantInterests = Object.values(applicant[i].titulos)
         console.log(applicantInterests);
         app.appendChild(TotalFunctionView(applicant[i].profile_image, applicant[i].name, applicant[i].age, applicant[i].description));
      }
   }
   //TimeOut provisional
   setTimeout(() => {
      const vectorLike = document.querySelector("#likeVector");
      const vectorDislike = document.querySelector("#unlikeVector");
      vectorLike.addEventListener('click', nextTargetProfile);
      vectorDislike.addEventListener('click', nextTargetProfile);
   }, 1);



   const componentAInformation = upperComponents(img, nombre, valueSpan, introDescription);
   const componentBDescription = interests(interestText);
   const componentDescription = Description(descTitle, "LoremDescTitle ipsum dolor sit amet consectetur adipisicing elit. Enim labore, rerum, totam fuga unde magnam debitis iure voluptate maiores nulla sit ipsum natus veritatis sequiLorem ipsum dolor sit amet consectetur adipisicing elit.");
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
