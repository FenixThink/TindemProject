import { principalFunction } from "./credentialsRegister/totalSection.js";
import { totalSectionB } from './locationDescripionRegister/totalSection.js'
import { contentDad } from './tellUsAboutYourselfRegister/contentDad.js'
import { buttonCreator } from "../button/button.js";


import { AreasRoles } from "../modalOneCreateComponet/modalCreator.js";


let areas = ["Ingenieria de sistemas", "Administracion de empresas", "Comunicacion  social", "Finanzas y negocios internacionales", "Mercadeo y publicidad", "Seguridad", "Servcios generales", "Medicina"]

export const parentCreator = async (img, firstInput, secondInput, date, textLabelDescription, interestSpan, city, country, role) => {

    const top = principalFunction(img, firstInput, secondInput)
    const midBot = await totalSectionB(date, textLabelDescription, city, country)
    const interest = contentDad(interestSpan)
    const button = buttonCreator()
    button.className = 'submitButton'
    button.textContent = 'Enviar'
    button.type = 'submit'

    const child = document.createElement('form')
    child.className = "Padre"
    child.name = "Padre"
    child.id = "formCompany"
    child.autocomplete = "off"
    //En Revisión
    child.action = `/${role}/create`
    child.enctype = 'multipart/form-data'
    /* child.setAttribute('onsubmit', 'return validarFormulario()') */
    child.method = 'post'
    child.appendChild(top)
    child.appendChild(midBot)
    child.appendChild(interest)
    child.appendChild(await AreasRoles(areas))
    child.appendChild(button)

    const parent = document.createElement('div')
    parent.className = "PadrePadre"
    parent.appendChild(child)

    return parent


}
