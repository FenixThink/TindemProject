import { principalFunction } from "./credentialsRegister/totalSection.js";
import { totalSectionB } from './locationDescripionRegister/totalSection.js'
import { contentDad } from './tellUsAboutYourselfRegister/contentDad.js'
import { buttonCreator } from "../button/button.js";


export const parentCreator = (img, firstInput, secondInput, date, textLabelDescription, interestSpan) => {

    const top = principalFunction(img, firstInput, secondInput)
    const midBot = totalSectionB(date, textLabelDescription)
    const interest = contentDad(interestSpan)
    const button = buttonCreator()
    button.className = 'submitButton'
    button.textContent = 'Enviar'
    button.type = 'submit'

    const child = document.createElement('div')
    child.className = "Padre"
    child.appendChild(top)
    child.appendChild(midBot)
    child.appendChild(interest)
    child.appendChild(button)

    const parent = document.createElement('div')
    parent.className="PadrePadre"
    parent.appendChild(child)

    return parent


}
