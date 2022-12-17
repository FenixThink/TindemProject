import { principalFunction } from "../register-company/totalSection.js";
import { totalSectionB } from '../section-locationDescription-bussines/totalSection.js'


const parentCreator = ()=>{

    const top = principalFunction()
    const midBot = totalSectionB()

    const parent = document.createElement('div')
    parent.className = "Padre"
    parent.appendChild(top)
    parent.appendChild(midBot)

    return parent


}

export const parent = parentCreator()