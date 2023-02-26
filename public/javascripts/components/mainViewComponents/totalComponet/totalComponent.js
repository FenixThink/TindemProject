import { rightCreator, reloadData } from "./mainFunction.js";
//Parte de la izquierda que tiene que ver con los componentes de chat
import { partLeft } from "../../chatViewComponents/partLeftChat/unionPartsLeft.js";
//Importe de los datos de usuario 
import { applicant } from "../../userDataCard/userDataCard.js";

export const TotalFunctionView = async(dataArea,emails,dataUser,data,idA) => {
   const objectApplicant = Object.values(applicant);
   //Contenedores de contenido principales
   const divFather = document.createElement('div');
   divFather.className = "containerFather"
   const right = document.createElement('div');
   right.className = "right";
   //Componente del header de la izquierda
   let name;
   dataUser[0].type=='applicant' ?  name = `${dataUser[0].name} ${dataUser[0].lastname}` : name = dataUser[0].name
   
   const left = await partLeft(name, dataUser[0].img,data,idA)
   divFather.appendChild(left)

   divFather.appendChild(right);
   console.log(dataUser[0])
   right.appendChild(rightCreator(objectApplicant[0].profile_image,dataArea,emails))
   return divFather;
}
