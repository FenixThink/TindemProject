import { buttonsGender } from './sectionButtonsGender.js'
import { descriptionProfiles } from './descriptionProfile.js'




function sectionGenderyDes() {

    const sectionButtonsGender = buttonsGender()
    const descriptionProfile = descriptionProfiles()

    const divFather= document.createElement('div')
    divFather.appendChild(sectionButtonsGender)
    divFather.appendChild(descriptionProfile)
    divFather.className="padre"

   
    return divFather
    
}

export const sectionGenderDes = sectionGenderyDes()

