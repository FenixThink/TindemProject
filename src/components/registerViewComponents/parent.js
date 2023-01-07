import { principalFunction } from "./credentialsRegister/totalSection.js";
import { totalSectionB } from './locationDescripionRegister/totalSection.js'
import { contentDad } from './tellUsAboutYourselfRegister/contentDad.js'
import { createHeader } from '../header/createButtonsHeader.js'
import { AreasRoles } from "../modalOneCreateComponet/modalCreator.js";


let areas =["Ingenieria de sistemas","Administracion de empresas","Comunicacion  social","Finanzas y negocios internacionales","Mercadeo y publicidad","Seguridad","Servcios generales","Medicina"]

export const parentCreator = (img, firstInput, secondInput, date, textLabelDescription, interestSpan) => {

    const top = principalFunction(img, firstInput, secondInput)
    const midBot = totalSectionB(date, textLabelDescription)
    const interest = contentDad(interestSpan)
    const header = createHeader()

    const child = document.createElement('div')
    child.className = "Padre"
    child.appendChild(top)
    child.appendChild(midBot)
    child.appendChild(interest)
    child.appendChild(AreasRoles(areas))

    const parent = document.createElement('div')
    parent.className="PadrePadre"
    parent.appendChild(header)
    parent.appendChild(child)

    return parent


}
