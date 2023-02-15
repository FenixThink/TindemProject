
import { AreasRolesTwo } from "./modalCratorTwo.js";




let abc= [["Inteligencia artificial y algoritmia","Sistemas digitales","Product manager","Backend","Diseño en redes ","Arquitectura de Sorftware"],
["a","b"],
["comucacion","social"],
["sinanzas","negocios","internacionales"],
["mercadeo","publicidad"],
["seguridad"],
["servicios","generales"],
["mediciina"]
]

export function AreasRoles(btnAreasOrRoles) {
    
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
 */    btnAreasOrRoles.forEach((e,i) => {
        rolesName.appendChild(createButton(e,i))
        
        
        
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
    
    
    
    
    
    const b=document.querySelectorAll(".optionsRoles")
    


    return padreRolesOrAreas
}
/* creacion de botones por parametros*/
function createButton(name,i){
    let btn = document.createElement("input");
    btn.className="optionsAreas"
    btn.value=name
    btn.id=i
/*     llamamos al segundo modal y escondemos el padre
 */     btn.onclick= function (params) {

        document.querySelector(".Padre").appendChild(AreasRolesTwo(abc[i]))
        document.querySelector(".modalPadre").style.display="none"
        
     }
   
    return btn

}

/* cambio de url */
 

// document.querySelector("#app").appendChild(modalARCreate("Area","de trabajo",j))




