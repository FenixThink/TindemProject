import { buttonCreator } from '../../button/button.js'
import { area } from './spanArea.js'
import { title } from './tellUsAboutYourself.js'
// creacion del contenedor padre con los otros archovos exportados 
export const contentDad=(interestSpan)=>{
    const title1=title()
    const spanArea=area()
    const btnAdd=buttonCreator()
    btnAdd.textContent = interestSpan
    btnAdd.className = "interestBtn"

    const parent=document.createElement('div')
    parent.className="parentInterest"
    parent.appendChild(title1)
    parent.appendChild(spanArea)
    parent.appendChild(btnAdd)
    return parent
}