
import { upperComponents } from "../componentA/componentA.js";
import { interests } from "../componentA/componentB.js";
import { renderButtons } from "../likeDislikeComponent/likeDislikeComponent.js";
import { Description } from "../descriptionComponent/descriptionComponent.js";

    const TotalFunctionView = () => {
     const componentAInformation = upperComponents("Nombre de empresa","nit","Descripción de empresa");
     const componentBDescription = interests();
     const componentCOptions = renderButtons();
     const componentDescription = Description("Descripción de la vacante", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore, rerum, totam fuga unde magnam debitis iure voluptate maiores nulla sit ipsum natus veritatis sequi!");
     const divFather = document.createElement('div');
        divFather.className = "containerFather"
        divFather.appendChild(componentAInformation);
        divFather.appendChild(componentDescription);
        divFather.appendChild(componentBDescription);
        divFather.appendChild(componentCOptions); 
     return divFather;

}

export const mainViewBusiness = TotalFunctionView();