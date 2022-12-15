export function inputFecha() {
    /*Titulo general*/
    const titleGenerally = document.createElement("h2")
    titleGenerally.textContent = "Fecha y lugar de nacimiento"

    /*titulos input*/
    const labelDate = document.createElement("label")
    labelDate.textContent = "Fecha de nacimiento"
    const labelCountry = document.createElement("label")
    labelCountry.textContent = "Pais"
    const labelCity = document.createElement("label")
    labelCity.textContent = "Ciudad"

    /* icons*/

    /* Parte inputs */
    const inputDate = document.createElement("input")
    inputDate.className = "inputsRegisterAspirante"
    inputDate.placeholder = "Select Date"

    const inputCountry = document.createElement("input")
    inputCountry.className = "inputsRegisterAspirante"
    inputCountry.placeholder = "Ingrese Pais"

    const inputCity = document.createElement("input")
    inputCity.className = "inputsRegisterAspirante"
    inputCity.placeholder = "Ingrese Ciudad"

    /*Parte Div padre */
    const divFatherInputs = document.createElement("div")
    divFatherInputs.className = "divFatherInputs"
    
    divFatherInputs.appendChild(inputDate)
    divFatherInputs.appendChild(inputCountry)
    divFatherInputs.appendChild(inputCity)
   

    /* Parte guardar label*/
    const divFatherLabels = document.createElement("div")
    divFatherLabels.className = "divFatherLabels"
    divFatherLabels.appendChild(labelDate)
    divFatherLabels.appendChild(labelCountry)
    divFatherLabels.appendChild(labelCity)

    /* Parte Container*/
    const divContainer = document.createElement("div")
    divContainer.className = "divContainer"
    divContainer.appendChild(titleGenerally)
    divContainer.appendChild(divFatherLabels)
    divContainer.appendChild(divFatherInputs)

    return divContainer
    
};