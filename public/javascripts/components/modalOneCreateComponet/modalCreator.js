
import { AreasRolesTwo } from "./modalCratorTwo.js";






export async function  AreasRoles(btnAreasOrRoles) {

    const areas  = await fetch('/Area', {method:'get'})
    const dataAreas = await areas.json()

    const rol = document.createElement("span");
    rol.className="rolOn"
    rol.textContent="Area de  "

    const area = document.createElement("span")
    area.className="area"
    area.textContent="Trabajo"


    const rolesName = document.createElement("div")
    rolesName.className="rolesname"



/*  para dar un clasname diferente */   
/* creacion de botones de areas con sus debidos indices
 */    dataAreas.forEach((e) => {
        rolesName.appendChild(createButton(e.name,e.id))
        
        
        
    });
   
  



    const headerRoles = document.createElement("div")
    headerRoles.className="header"
    headerRoles.appendChild(rol)  
    headerRoles.appendChild(area)


   /*  const footerRoles=document.createElement("div")
    footerRoles.appendChild(add) */
    
    const container = document.createElement("div")
    container.className="containerRolesAndAreas"
    
    container.appendChild(headerRoles)
    container.appendChild(rolesName)
    /* container.appendChild(footerRoles) */
    
    const padreRolesOrAreas=document.createElement("div")
    padreRolesOrAreas.className="modalPadre"
    padreRolesOrAreas.style.display="none"
    padreRolesOrAreas.name="Area"
    padreRolesOrAreas.appendChild(container)
    
    
    
    
    

    


    return padreRolesOrAreas
}
/* creacion de botones por parametros*/
  function createButton(name,i){
    let btn = document.createElement("input");
    btn.type='button'
    btn.className="optionsAreas"
    btn.value=name
    btn.id=i
/*     llamamos al segundo modal y escondemos el padre
 */     btn.onclick= async function (e) {


        


        document.querySelector(".Padre").appendChild( await AreasRolesTwo(e.target.id))
        document.querySelector(".modalPadre").style.display="none"
        
     }
   
    return btn

}

/* cambio de url */
 

// document.querySelector("#app").appendChild(modalARCreate("Area","de trabajo",j))




