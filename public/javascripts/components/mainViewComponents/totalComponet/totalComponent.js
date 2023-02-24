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
   let name;
   dataUser[0].type=='applicant' ?  name = `${dataUser[0].name} ${dataUser[0].lastname}` : name = dataUser[0].name

   const left = await partLeft(name, dataUser[0].img,data)
   divFather.appendChild(left)

   divFather.appendChild(right);

   right.appendChild(rightCreator(`../../../../img/${dataArea[0].img}`,dataArea,emails,dataUser ))
   return divFather;
}
