
import { modalARCreate } from "../../modalCreateComponet/modalCreator.js";
import { buttonCreator } from '../../button/button.js'
import { area } from './spanArea.js'
import { title } from './tellUsAboutYourself.js'

let areas =["Ingenieria de sistemas","Administracion de empresas","Comunicacion  social","Finanzas y negocios internacionales","Mercadeo y publicidad","Seguridad","Servcios generales","Medicina"]
let igs =["Inteligencia artificial y algoritmia","Sistemas digitales","Product manager","Backend","Diseño en redes ","Arquitectura de Sorftware"]
let rolesPerson=[]
// creacion del contenedor padre con los otros archovos exportados 
export const contentDad=(interestSpan)=>{
    const title1=title()
    
    const spanArea=area()
    const btnAdd=buttonCreator()
    btnAdd.textContent = interestSpan
    btnAdd.className = "interestBtn"
    btnAdd.onclick=function(){



      document.querySelector(".Padre").appendChild(modalARCreate("Area","de trabajo",areas))

      const b = document.querySelectorAll(".optionsRoles")

      
      b.forEach(e => {
        e.addEventListener("click",function j(){
          
          document.querySelector(".modalPadre").appendChild(modalARCreate("Roles en ",this.value,igs))
            const b = document.querySelectorAll(".optionsRoles")
            console.log(b)
          b.forEach(e => {
            e.addEventListener("click",function activar(){
                if (this.name==="inactive") {
                  this.style.backgroundColor="#6171FF"
                  this.style.color="#fff"
                  this.name="active"
                }else{ 
                  this.style.backgroundColor="#D4D9FF"
                  this.style.color="#4267C7"
                  this.name="inactive"
                      
                }
                



               
                
              
            }) 



          }); 

        }) 

      }); 
     
    }


    const parent=document.createElement('div')
    parent.className="parentInterest"
    parent.appendChild(title1)
    parent.appendChild(spanArea)
    parent.appendChild(btnAdd)
    return parent
}




