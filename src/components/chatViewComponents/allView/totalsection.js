import { sectionChat } from "../../chatViewComponents/right-chat/totalSection.js"

export const allView = () =>{
    const mainChat = sectionChat('textLabelDescription')

    const mainContainer = document.createElement('div')
    mainContainer.appendChild(mainChat)
    mainContainer.className ='principal'


    return mainContainer
    
}