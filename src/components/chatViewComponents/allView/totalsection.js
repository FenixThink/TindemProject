import { sectionChat } from "../../chatViewComponents/right-chat/totalSection.js"
import { Description } from "../../mainViewComponents/descriptionComponent/descriptionComponent.js"
import { parentParentCreator } from "../chatMidComponent/parentAll/parentAllCreator.js"


export const allView = (id, profileName, photo, description) => {

    const mainChat = sectionChat(profileName, photo, description)
    const midPart = parentParentCreator(id, profileName, photo)

    const mainContainer = document.createElement('div')

    const childContent = document.createElement('div')
    childContent.appendChild(midPart)
    childContent.appendChild(mainChat)
    childContent.className = 'childContent'

    mainContainer.appendChild(childContent)
    mainContainer.className = 'principal'


    return mainContainer

}