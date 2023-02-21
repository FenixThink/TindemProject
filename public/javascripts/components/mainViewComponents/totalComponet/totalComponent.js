import { rightCreator, reloadData } from "./mainFunction.js";
//Parte de la izquierda que tiene que ver con los componentes de chat
import { partLeft } from "../../chatViewComponents/partLeftChat/unionPartsLeft.js";
//Importe de los datos de usuario 
import { applicant } from "../../userDataCard/userDataCard.js";

export const TotalFunctionView = async(dataArea,emails,dataUser,data) => {
   const objectApplicant = Object.values(applicant);
   //Contenedores de contenido principales
   const divFather = document.createElement('div');
   divFather.className = "containerFather"
   const right = document.createElement('div');
   right.className = "right";
   //Componente del header de la izquierda
   const left = await partLeft(`${dataUser[0].name} ${dataUser[0].lastname}`, dataUser[0].img,data)
   divFather.appendChild(left)

   divFather.appendChild(right);
   
   right.appendChild(rightCreator(objectApplicant[0].profile_image,dataArea,emails))
   return divFather;
}
