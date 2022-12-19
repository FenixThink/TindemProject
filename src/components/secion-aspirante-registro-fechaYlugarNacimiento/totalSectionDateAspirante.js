import {inputFecha} from "./sectionInputFecha.js"

function CallInputs() {
    
    const callInput = inputFecha()

    const divFather = document.createElement("div")
    divFather.appendChild(callInput)
    divFather.className = "container"

    return divFather

}

export const sectionCallInputs = CallInputs()