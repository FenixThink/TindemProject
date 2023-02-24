import {
    enviar
} from '../registerViewComponents/tellUsAboutYourselfRegister/contentDad.js'
export const rolesPerson = []
let prueba = new Set

export async  function AreasRolesTwo(id) {
    const roles = await fetch(`/specificInterestOfArea/${id}`,{method:'get'})
    const dataRoles = await roles.json()
    console.log(dataRoles)

    
    const rol = document.createElement("span");
    rol.className = "rolOn"
    rol.textContent = "Rol de  "

    const area = document.createElement("span")
    area.className = "area"
    area.textContent = "Trabajo"


    const rolesName = document.createElement("div")
    rolesName.className = "rolesname"


    const add = document.createElement("input")
    add.type = "button"
    add.id = "agregarCambios"
    add.className = "agregarCambios"
    add.value = "Aplicar Cambios"
    /* con este evento capturamos los botones seleccionados y los enviamos a la caja necesarioa 
     */

    add.onclick = function (e) {
        const devuelta = document.getElementsByName('active')
        let Array1 = [...devuelta];
        // console.log(devuelta)
        let array1Content = []
        Array1.forEach(i => {
            array1Content.push(i.textContent)
            //console.log(i.textContent,'item');
        })
        //nuevo.add(array2Content)
        array1Content.forEach(element => {
            prueba.add(element)
        });
        const reset = document.querySelector(".rolesInProfiles")
        while (reset.firstChild) {
            reset.removeChild(reset.firstChild)
        }
        enviar(prueba)
        /*         
        con este codigo remuevo el hijo que se crea cada que llamamos una area 
         */
        document.querySelector(".modalHijo").remove()
    }
    /*  para dar un clasname diferente */
    dataRoles.forEach(e => {
        rolesName.appendChild(createButton(e.name))
    });
    const headerRoles = document.createElement("div")
    headerRoles.className = "header"
    headerRoles.appendChild(rol)
    headerRoles.appendChild(area)

    const footerRoles = document.createElement("div")
    footerRoles.appendChild(add)

    const container = document.createElement("div")
    container.className = "containerRolesAndAreas"

    container.appendChild(headerRoles)
    container.appendChild(rolesName)
    container.appendChild(footerRoles)

    const padreRolesOrAreas = document.createElement("div")
    padreRolesOrAreas.className = "modalHijo"
    padreRolesOrAreas.style.display = "grid"
    padreRolesOrAreas.name = "Area"
    padreRolesOrAreas.appendChild(container)

    return padreRolesOrAreas
}

export { prueba };
/* creacion de botones por parametros*/
function createButton(name) {
    let btn = document.createElement("button");
    btn.className = "optionsRoles"
    btn.textContent = name
    btn.type = "button"
    btn.value = name
    btn.name = "inactive"
    /*     
    para cambiar estilos y atributos para selecionarlos
     */
    btn.onclick = function (params) {
        if (btn.name == "inactive") {
            this.style.background = "#6171FF"
            this.style.color = "#fff"
            this.name = "active"
        } else {
            this.style.background = "#D4D9FF"
            this.style.color = "#4267C7"
            this.name = "inactive"
        }

    }

    return btn
}

