import { rightCreator, reloadData } from "./mainFunction.js";
//Parte de la izquierda que tiene que ver con los componentes de chat
import { partLeft } from "../../chatViewComponents/partLeftChat/unionPartsLeft.js";
//Importe de los datos de usuario 
import { applicant } from "../../userDataCard/userDataCard.js";

export const TotalFunctionView = async(dataArea,emails,id) => {
   const objectApplicant = Object.values(applicant);
   //Contenedores de contenido principales
   const divFather = document.createElement('div');
   divFather.className = "containerFather"
   const right = document.createElement('div');
   right.className = "right";
   //Componente del header de la izquierda
   const left = await partLeft('Pepsi', 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
   divFather.appendChild(left)

   divFather.appendChild(right);

   right.appendChild(rightCreator(`../../../../img/${dataArea[0].img}`,dataArea,emails,id))
   return divFather;
}
