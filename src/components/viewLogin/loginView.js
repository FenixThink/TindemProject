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
    return contpadre
}