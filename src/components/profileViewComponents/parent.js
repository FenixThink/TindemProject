import { principalFunction } from "./credentialsRegister/totalSection.js";
import { totalSectionB } from './locationDescripionRegister/totalSection.js'
import { contentDad } from './tellUsAboutYourselfRegister/contentDad.js'
import {createProfileSup,createProfileInf,obj} from './profilePersonal/index.js'


export const parentCreator = (img, firstInput, secondInput, name, userName, email, psw, textTarea, textLabelDescription, interestSpan) => {

    const top = principalFunction(img, firstInput, secondInput, name, userName, email, psw, textTarea)
    const midBot = totalSectionB(textLabelDescription,textTarea)
    const interest = contentDad(interestSpan)

    const exit = document.createElement('span')
    exit.className='x'
    exit.textContent='X'

    const child = document.createElement('div')
    child.className = "padre"
    child.appendChild(createProfileSup(obj))
    child.appendChild(createProfileInf(obj))

    

    return child


}
