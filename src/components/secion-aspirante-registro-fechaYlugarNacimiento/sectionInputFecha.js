export function inputFecha() {
    /* Parte titulo */
    const titleGenerally = document.createElement('h3')
    titleGenerally.textContent = "Fecha y lugar de nacimiento"
    titleGenerally.className = "title"

    /* Opciones*/
    const optionhover1 = document.createElement("option")
    optionhover1.disabled = "Selecciona una opcion"
    optionhover1.selected = "Selecciona una opcion"
    optionhover1.textContent = "Selecciona una opcion"

    const option1 = document.createElement ("option")
    option1.textContent = "Colombia"
    const option2 = document.createElement ("option")
    option2.textContent = "Argentina"
    const option3 = document.createElement ("option")
    option3.textContent = "Canada"


    const optionhover2 = document.createElement("option")
    optionhover2.disabled = "Selecciona una opcion"
    optionhover2.selected = "Selecciona una opcion"
    optionhover2.textContent = "Selecciona una opcion"

    const option4 = document.createElement ("option")
    option4.textContent = "Bucaramanga"
    const option5 = document.createElement ("option")
    option5.textContent = "Buenos aires"
    const option6 = document.createElement ("option")
    option6.textContent = "Quebec"

    /* inputs */
    const inputBirth = document.createElement('input')
    inputBirth.type = "date"
    inputBirth.className = "inputsDate"

    const inputCountry = document.createElement('select')
    inputCountry.className = "inputsDate"

    const inputCity = document.createElement('select')
    inputCity.className = "inputsDate"

    /* labels */
    const labelBirth = document.createElement('label')
    labelBirth.textContent = "Fecha de nacimiento"
    const labelCountry = document.createElement('label')
    labelCountry.textContent = "Pais"
    const labelCity = document.createElement('label')
    labelCity.textContent = "Ciudad"

    /* img */
   /*const iconCalendar = document.createElement('img')
    iconCalendar.className = "icons"
    iconCalendar.src = "https://i.ibb.co/RbqzDbs/icon-wrapper.png"
    iconCalendar.alt = "calendar"

    const iconCountry = document.createElement('img')
    iconCountry.className = "abajo1"
    iconCountry.src = "https://i.ibb.co/fF2NC76/Colapsos.png"
    iconCountry.alt = "down icon"

    const iconCity = document.createElement('img')
    iconCity.className = "abajo2"
    iconCity.src = "https://i.ibb.co/fF2NC76/Colapsos.png"
    iconCity.alt = "down icon"*/

    /* Selects y sus options*/
    inputCity.appendChild(optionhover1)
    inputCity.appendChild(option4)
    inputCity.appendChild(option5)
    inputCity.appendChild(option6)

    inputCountry.appendChild(optionhover2)
    inputCountry.appendChild(option1)
    inputCountry.appendChild(option2)
    inputCountry.appendChild(option3)

    /* div title */
    const title = document.createElement('div')
    title.className = "title"
    title.appendChild(titleGenerally)
    
    /*div Input icon*/
    const inputIcon = document.createElement('div')
    inputIcon.className = "inputIcon"
    inputIcon.appendChild(inputBirth)
    //inputIcon.appendChild(iconCalendar)

    const inputIcon2 = document.createElement('div')
    inputIcon2.className = "inputIcon"
    inputIcon2.appendChild(inputCountry)
    //inputIcon2.appendChild(iconCountry)

    const inputIcon3 = document.createElement('div')
    inputIcon3.className = "inputIcon"
    inputIcon3.appendChild(inputCity)
    //inputIcon3.appendChild(iconCity)

    /*div dateBirth */
    const dateBirth = document.createElement('div')
    dateBirth.className = "dateBirth"
    dateBirth.appendChild(labelBirth)
    dateBirth.appendChild(inputIcon)

    const Country = document.createElement('div')
    Country.className = "Country"
    Country.appendChild(labelCountry)
    Country.appendChild(inputIcon2)

    const City = document.createElement('div')
    City.className = "city"
    City.appendChild(labelCity)
    City.appendChild(inputIcon3)

    /* contenedor de inputs*/
    const contenedorInputs = document.createElement('div')
    contenedorInputs.className = "contenedorInputs"
    contenedorInputs.appendChild(dateBirth)
    contenedorInputs.appendChild(Country)
    contenedorInputs.appendChild(City)

    /*container*/
    const container = document.createElement('div')
    container.className = "container"
    container.appendChild(title)
    container.appendChild(contenedorInputs)

    return container

};