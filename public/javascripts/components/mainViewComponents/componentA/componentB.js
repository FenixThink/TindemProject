export function interests(interestItems) {
    //parrafo
    const text = document.createElement('p')
    text.textContent = "Titulos Profesionales: "
    text.className = "parrafo"



    //container div parrafo
    const containerP = document.createElement('div')
    containerP.className = "containerP"
    containerP.appendChild(text);



    //container div botones
    const containerbutton = document.createElement('div')
    containerbutton.className = "containerbutton"

    interestItems.forEach(e => {
        //botones

        const boton = document.createElement('button')
        boton.className = "interestButtons"
        boton.textContent = e
        containerbutton.appendChild(boton)
    });
    

    //container
    const containerTotal = document.createElement('div')
    containerTotal.className = "divContainer"
    containerTotal.appendChild(containerP)
    containerTotal.appendChild(containerbutton)

    return containerTotal

}