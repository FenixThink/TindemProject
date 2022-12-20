export function interests(){
    //parrafo
    const text = document.createElement('p')
    text.textContent="área de interés laboral:"
    text.className = "parrafo"

    //botones
    const boton1 = document.createElement('button')
    boton1.textContent="FrontEnd"
    boton1.className = "botones"

    const boton2 = document.createElement('button')
    boton2.textContent="BackEnd"
    boton2.className = "botones"
    
    const boton3 = document.createElement('button')
    boton3.textContent="JavaScript"
    boton3.className = "botones"

    const boton4 = document.createElement('button')
    boton4.textContent="CSS"
    boton4.className = "botones"

    const boton5 = document.createElement('button')
    boton5.textContent="Vuejs"
    boton5.className = "botones"

    const boton6 = document.createElement('button')
    boton6.textContent="Nuxt"
    boton6.className = "botones"


    //container div botones
    const containerbutton = document.createElement('div')
    containerbutton.className = "containerbutton"
    containerbutton.appendChild(boton1)
    containerbutton.appendChild(boton2)
    containerbutton.appendChild(boton3)
    containerbutton.appendChild(boton4)
    containerbutton.appendChild(boton5)
    containerbutton.appendChild(boton6)
    
    //container
    const containerTotal = document.createElement('div')
    containerTotal.className = "divContainer"
    containerTotal.appendChild(text)
    containerTotal.appendChild(containerbutton)

    return containerTotal

}