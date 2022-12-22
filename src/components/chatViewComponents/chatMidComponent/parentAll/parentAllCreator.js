import { headerChatCreator } from "../headerChatMid/headerChatMid.js";

import { centerCreator } from "../parentCenter/parentCenter.js"

export const parentParentCreator = ()=>{


const center = centerCreator()
const top = headerChatCreator("Zilan","https://i.ibb.co/TrZ38Cv/Ellipse-18.png")

const parent = document.createElement('div')
parent.className = "parentParentMid"
parent.appendChild(top)
parent.appendChild(center)

return parent

}