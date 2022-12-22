import { principalFunction } from "./credentialsRegister/totalSection.js";
import { totalSectionB } from './locationDescripionRegister/totalSection.js'
import { contentDad } from './tellUsAboutYourselfRegister/contentDad.js'
import { createHeader } from '../header/createButtonsHeader.js'


export const parentCreator = (img, firstInput, secondInput, name, userName, email, psw, textTarea, textLabelDescription, interestSpan) => {

    const top = principalFunction(img, firstInput, secondInput, name, userName, email, psw, textTarea)
    const midBot = totalSectionB(textLabelDescription,textTarea)
    const interest = contentDad(interestSpan)
    const header = createHeader()

    const child = document.createElement('div')
    child.className = "Padre"
    child.appendChild(top)
    child.appendChild(midBot)
    child.appendChild(interest)

    const parent = document.createElement('div')
    parent.appendChild(header)
    parent.appendChild(child)

    return parent


}
