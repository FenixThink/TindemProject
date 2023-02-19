export function boxMessage(color,cargo,content,hour){

    // Creación del p que contiene el mensaje
    const p = document.createElement("p")
    p.className="message"
    const message = document.createTextNode(content);
    p.appendChild(message)

    //Creación del p que contiene la hora
    const p1 = document.createElement("p")
    p1.className="hour"
    const hourText = document.createTextNode(hour);
    p1.appendChild(hourText)

    //Creación del p que contiene el double check
    const p2 = document.createElement("p")
    p2.className="icon-check"
    const image = document.createElement('i')
    image.id = "icon-doubleCheck"
    image.className="bx bx-check-double bx-sm"
    p2.appendChild(image)

    // Creación del div del mensaje
    const div = document.createElement('div')
    div.classList.add("box-message-"+color);
    div.appendChild(p)
    div.appendChild(p2)

    // Creción del div padre
    const parent = document.createElement('div')
    parent.className = "boxM parentMessage-"+cargo
    parent.appendChild(div)
    parent.appendChild(p1)

    return parent
}