import { principalFunction } from "../register-company/totalSection.js";
import { totalSectionB } from '../section-locationDescription-bussines/totalSection.js'
import {contentDad} from '..//tellUsAboutYourself/contentDad.js'


const parentCreator = ()=>{

    const top = principalFunction()
    const midBot = totalSectionB()
    const interest = contentDad()

    const parent = document.createElement('div')
    parent.className = "Padre"
    parent.appendChild(top)
    parent.appendChild(midBot)
    parent.appendChild(interest)

    return parent


}

export const parent = parentCreator()