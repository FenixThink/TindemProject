export function options() {
    //contenedor padre
    const padre = document.createElement("div")
    padre.className = "cont"
    //spans que contiene el div
    const span1 = document.createElement("span")
    const span2 = document.createElement("span")
    const span3 = document.createElement("span")

    //añadir span al div
    padre.appendChild(span1)
    padre.appendChild(span2)
    padre.appendChild(span3)
    
   

    //clase para los spans
    span1.className = "spas"
    span2.className = "spas"
    span3.className = "spas"
    //añadir texto al span
    span1.textContent = "Block User"
    span2.textContent = "Report User"
    span3.textContent = "Delete Chat"
    return padre
}
