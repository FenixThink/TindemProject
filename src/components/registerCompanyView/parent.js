import { principalFunction } from "../credentialsRegister/totalSection.js";
import { totalSectionB } from '../locationDescripionRegister/totalSection.js'
import {contentDad} from '../tellUsAboutYourselfRegister/contentDad.js'
import { createButtons } from '../header/createButtonsHeader.js'


export const parentCreator = (img)=>{

    const top = principalFunction(img)
    const midBot = totalSectionB()
    const interest = contentDad()
    const header = createButtons
    
    const child = document.createElement('div')
    child.className = "Padre"
    child.appendChild(top)
    child.appendChild(midBot)
    child.appendChild(interest)

    const parent = document.createElement('div')
    parent .appendChild(header)
    parent.appendChild(child)

    return parent


}
