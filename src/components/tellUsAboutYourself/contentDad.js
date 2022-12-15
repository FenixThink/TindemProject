import { buttonCreator } from '../button/button.js'
import { area } from './spanArea.js'
import { title } from './tellUsAboutYourself.js'

export const contentDad=()=>{
    const title1=title()
    const spanArea=area()
    const btnAdd=buttonCreator()
    btnAdd.textContent = 'Continuar'

    const parent=document.createElement('div')
    parent.appendChild(title1)
    parent.appendChild(spanArea)
    parent.appendChild(btnAdd)
    return parent
}