
 export const modalARCreate =function AreasRoles(text,areaRoleGet,btnAreasOrRoles) {


    const rol = document.createElement("span");
    rol.className="rolOn"
    rol.textContent=text+" "

    const area = document.createElement("span")
    area.className="area"
    area.textContent=areaRoleGet


    const rolesName = document.createElement("div")
    rolesName.className="rolesname"


    const add=document.createElement("input")
    add.type="button"
    add.className="agregarCambios"
    add.value="Aplicar Cambios"
    
    add.onclick=function (params) {
      const caja = document.getElementsByName("active")
      
        console.log(caja.forEach(element => {
            console.log(element)
          
                document.querySelector(".profileRoles").appendChild(createButton(element.value))
                const clear =document.querySelector(".modalPadre").style.display="none  "
               
               
           
        }))
    }

/*  para dar un clasname diferente */   
    btnAreasOrRoles.forEach(e => {
        rolesName.appendChild(createButton(e))
       
    });

    const headerRoles = document.createElement("div")
    headerRoles.className="header"
    headerRoles.appendChild(rol)  
    headerRoles.appendChild(area)


    const footerRoles=document.createElement("div")
    footerRoles.appendChild(add)
    
    const container = document.createElement("div")
    container.className="containerRolesAndAreas"
    container.appendChild(headerRoles)
    container.appendChild(rolesName)
    container.appendChild(footerRoles)
    
    const padreRolesOrAreas=document.createElement("div")
    padreRolesOrAreas.className="modalPadre"
    padreRolesOrAreas.name=areaRoleGet
    padreRolesOrAreas.appendChild(container)

    return padreRolesOrAreas
}
/* creacion de botones por parametros*/
function createButton(name){
    let btn = document.createElement("button");
    btn.className="optionsRoles"
    btn.textContent=name
    btn.value=name
    btn.name="inactive"

    return btn
}

/* cambio de url */
 

// document.querySelector("#app").appendChild(modalARCreate("Area","de trabajo",j))




