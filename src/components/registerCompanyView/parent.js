import { principalFunction } from "../register-company/totalSection.js";
import { totalSectionB } from '../section-locationDescription-bussines/totalSection.js'
import {contentDad} from '..//tellUsAboutYourself/contentDad.js'
import { createButtons } from '../headerCreate/createButtonsHeader.js'


const parentCreator = ()=>{

    const top = principalFunction()
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

export const parent = parentCreator()