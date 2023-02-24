import { sectionChat } from "../../chatViewComponents/right-chat/totalSection.js"
import { Description } from "../../mainViewComponents/descriptionComponent/descriptionComponent.js"
import { parentParentCreator } from "../chatMidComponent/parentAll/parentAllCreator.js"


export const allView = async(id, profileName, photo, description, idA,data) => {

    const mainChat = await sectionChat(profileName, photo, description, idA)
    const midPart = await parentParentCreator(id, profileName, photo,data)

    const mainContainer = document.createElement('div')

    const childContent = document.createElement('div')

    childContent.appendChild(midPart)
    childContent.appendChild(mainChat)

    childContent.className = 'childContent'

    mainContainer.appendChild(childContent)
    mainContainer.className = 'principal'


    return mainContainer

}