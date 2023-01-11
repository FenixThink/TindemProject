import { AreasRoles } from "../../modalOneCreateComponet/modalCreator.js";
import { buttonCreator } from '../../button/button.js'
import { area } from './spanArea.js'
import { title } from './tellUsAboutYourself.js'
import { rolesPerson } from '../../modalOneCreateComponet/modalCratorTwo.js'





  
// creacion del contenedor padre con los otros archovos exportados 
export const contentDad=()=>{
  
  
  


  const title1=title()
  
  const spanArea=area()
  const btnAdd=buttonCreator()
  btnAdd.textContent = 'Agrega tu interés laboral:'
  btnAdd.className = "interestBtn"

  btnAdd.onclick=function(){
    document.querySelector(".modalPadre").style.display="grid"
  }
  
  const parent=document.createElement('div')
  parent.className="parentInterest"
  parent.appendChild(title1)
  parent.appendChild(spanArea)
  parent.appendChild(btnAdd)
  

  return parent
  
}


 export function enviar(e) {  
   e.forEach(i => {
    document.querySelector(".rolesInProfiles").appendChild(i)
 i.style.color="#4267C7"
 i.style.background="#D4D9FF"
 /*  de esta manerq me dejo calncelar el evento onclick
 */ 
i.onclick=function (){this.background=""}
}) ;


}
