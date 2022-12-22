
import { upperComponents } from "../componentA/componentA.js";
import { interests } from "../componentA/componentB.js";
import { renderButtons } from "../likeDislikeComponent/likeDislikeComponent.js";
import { Description } from "../descriptionComponent/descriptionComponent.js";
import { createHeader } from "../../header/createButtonsHeader.js";

export const TotalFunctionView = (img, nombre, span, valueSpan, descTitle, interestText) => {
   const componentAInformation = upperComponents(img, nombre, span, valueSpan);
   const componentHeader = createHeader();
   const componentBDescription = interests(interestText);
   const componentDescription = Description(descTitle, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore, rerum, totam fuga unde magnam debitis iure voluptate maiores nulla sit ipsum natus veritatis sequiLorem ipsum dolor sit amet consectetur adipisicing elit.");
   const componentCOptions = renderButtons();
   /*Contenedores de contenido principales*/
   const divFather = document.createElement('div');
   divFather.className = "containerFather"
   const middleContainer = document.createElement('div');
   middleContainer.className = "mainContainer";
   const footerContainer = document.createElement('div');
   footerContainer.className = "footerContainer";


   middleContainer.appendChild(componentAInformation);
   middleContainer.appendChild(componentDescription);
   middleContainer.appendChild(componentBDescription);

   footerContainer.appendChild(componentCOptions);

   divFather.appendChild(componentHeader);
   divFather.appendChild(middleContainer);
   divFather.appendChild(footerContainer);
   return divFather;
}
/*
const totalFunctionHeader = () => {
   const componentHeader = createHeader();

   const contHeader = document.createElement('div');
   contHeader.classList = "contHeader";

   contHeader.appendChild(componentHeader);
   return contHeader;
}
*/

//export const mainHeaderBusiness = totalFunctionHeader();