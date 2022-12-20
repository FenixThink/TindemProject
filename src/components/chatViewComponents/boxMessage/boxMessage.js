export function boxMessage(color){

    // Creación del p que contiene el mensaje
    const p = document.createElement("p")
    p.className="message"
    const message = document.createTextNode("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore magni eaque dolore reiciendis iusto asperiores fugiat vitae sed. Nesciunt eligendi repudiandae sit temporibus deleniti a est, id molestias ipsam ipsa doloribus quo ad labore, velit vel quaerat voluptates dolores ut tempore odit? Explicabo, ipsa? Voluptatum ducimus harum distinctio. Voluptatibus, nobis.");
    p.appendChild(message)

    //Creación del p que contiene la hora
    const p1 = document.createElement("p")
    p1.className="hour"
    const hour = document.createTextNode("12:20 PM");
    p1.appendChild(hour)

    //Creación del p que contiene el double check
    const p2 = document.createElement("p")
    p2.className="icon-check"
    const image = document.createElement('img')
    image.src = "../../../public/svg/double-check.svg"
    image.className="double-check-"+color
    p2.appendChild(image)

    // Creación del div del mensaje
    const div = document.createElement('div')
    div.classList.add("box-message-"+color);
    div.appendChild(p)
    div.appendChild(p2)

    // Creción del div padre
    const parent = document.createElement('div')
    parent.appendChild(div)
    parent.appendChild(p1)

    return parent
}