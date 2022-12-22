import { createHeader } from "../../header/createButtonsHeader.js"
import { sectionChat } from "../../chatViewComponents/right-chat/totalSection.js"
import { partLeft } from "../partLeftChat/unionPartsLeft.js"
import { parentParentCreator } from "../chatMidComponent/parentAll/parentAllCreator.js"


export const allView = () =>{

    const mainChat = sectionChat('textLabelDescription')
    const fullLeftPart = partLeft() 
    const header = createHeader()
    const midPart = parentParentCreator()

    const mainContainer = document.createElement('div')
    
    const childContent = document.createElement('div')
    childContent.appendChild(fullLeftPart)
    childContent.appendChild(midPart)
    childContent.appendChild(mainChat)
    childContent.className = 'childContent'

    const Contentheader = document.createElement('div')
    Contentheader.appendChild(header)

    mainContainer.appendChild(header)
    mainContainer.appendChild(childContent)
    mainContainer.className ='principal'

    return mainContainer
    
}