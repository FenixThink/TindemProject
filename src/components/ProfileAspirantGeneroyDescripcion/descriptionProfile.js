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