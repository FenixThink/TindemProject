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
   if (dataArea == undefined || dataArea == undefined || emails == undefined || dataUser == undefined){
      let h1 = document.createElement("h1")
      h1.textContent = "Por el momento no tenemos usuarios que mostrarte"
      let p = document.createElement("p")
      p.textContent = "Lamentamos los inconvenientes, Estamos tratando de mejorar nuestro servicio"
      right.appendChild(h1)
      right.appendChild(p)
      return divFather
   }
   right.appendChild(rightCreator(`../../../../img/${dataArea[0].img}`,dataArea,emails,dataUser ))
   return divFather;
}
