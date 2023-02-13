export const area=()=>{//creacion del span de area de intereses personales
    
    const titleSpan=document.createElement('span')
    titleSpan.textContent='Perfiles profesionales deseados'
    titleSpan.className = "tellAboutSpan"

    const rolesInProfiles=document.createElement("div")
    rolesInProfiles.className="rolesInProfiles"
    
    const profileRoles=document.createElement("div")
    profileRoles.className="profileRoles"
    profileRoles.appendChild(titleSpan)
    profileRoles.appendChild(rolesInProfiles)

    return profileRoles
}