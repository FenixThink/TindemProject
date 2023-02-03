import { containerText } from "../loginViewComponents/indexTextContainerOne/containerOne.js"
import { loginCard } from "../loginViewComponents/loginCard/loginCard.js"


export function background(){
    const padre = document.createElement("div")
    padre.className = "padre"
    return padre
}
export function log(){
    const contpadre = document.createElement("div")
    contpadre.className = "contpadre"
    const container = document.createElement("div")
    container.className = "cont"
    contpadre.appendChild(container)
    container.appendChild(containerText)
    // const subCont = document.createElement("div")

    container.appendChild(loginCard())
    return contpadre
}