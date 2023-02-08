export function interests(textTitle) {
    //parrafo
    const text = document.createElement('p')
    text.textContent = "Titulos Profesionales: "
    text.className = "parrafo"

    //botones
    const boton1 = document.createElement('button')
    boton1.className = "interestButtons"


    //container div parrafo
    const containerP = document.createElement('div')
    containerP.className = "containerP"
    containerP.appendChild(text);

    //container div botones
    const containerbutton = document.createElement('div')
    containerbutton.className = "containerbutton"
    containerbutton.appendChild(boton1)

    //container
    const containerTotal = document.createElement('div')
    containerTotal.className = "divContainer"
    containerTotal.appendChild(containerP)
    containerTotal.appendChild(containerbutton)

    return containerTotal

}