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

    /* Parte de placeHolder */
    const placeholderDate = document.createElement("label")
    placeholderDate.textContent = "Select Date"
    const placeholderCountry = document.createElement("label")
    placeholderCountry.textContent = "ingrese Pais"
    const placeholderCity = document.createElement("label")
    placeholderCity.textContent = "Ingrese Ciudad" 

    /*Parte icons */

    /*Parte div placeholder y icons*/
    const divFatherPlaceholder = document.createElement("div")
    divFatherPlaceholder.className = "divFatherPlaceholder"
    divFatherPlaceholder.appendChild(placeholderDate)
    divFatherPlaceholder.appendChild(placeholderCountry)
    divFatherPlaceholder.appendChild(placeholderCity) 

    /* Parte inputs */
    const inputDate = document.createElement("input")
    inputDate.className = "inputsRegisterAspirante"
    inputDate.appendChild(divFatherPlaceholder)

    const inputCountry = document.createElement("input")
    inputCountry.className = "inputsRegisterAspirante"


    const inputCity = document.createElement("input")
    inputCity.className = "inputsRegisterAspirante"


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

export function descriptionProfiles () {
    //contenedor hijo de descripcion 
    const profile = document.createElement("div")
    profile.className = "conprofile"
    

    const textTitleDes = document.createElement("label")
    textTitleDes.textContent = "Descripcion Perfil"
    textTitleDes.className = "textTitleDes"
    profile.appendChild(textTitleDes)

    const pProfile = document.createElement("div")
    pProfile.className = "pPerfil"
    profile.appendChild(pProfile)

    const placeHolder = document.createElement("label")
    placeHolder.textContent = "Placeholder"
    placeHolder.className = "placeHolder"
    pProfile.appendChild(placeHolder)

    const parentDescription = document.createElement("div")
    parentDescription.appendChild(profile)


    return parentDescription

}