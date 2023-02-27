import { principalFunction } from "./credentialsRegister/totalSection.js";
import { totalSectionB } from './locationDescripionRegister/totalSection.js'
import { contentDad } from './tellUsAboutYourselfRegister/contentDad.js'
import { createProfileSup, createProfileInf } from './profilePersonal/index.js'


export const parentCreator = (dataUser) => {
<<<<<<< HEAD
    
=======
>>>>>>> 16a4e2c868fff81646cf9157af4221f2c9a8c019

    /* const exit = document.createElement('span')
    exit.className='x'
    exit.textContent='X' */

    const child = document.createElement('div')
    child.className = "padre"
    /* child.appendChild(exit) */
    child.appendChild(createProfileSup(dataUser))
    child.appendChild(createProfileInf(dataUser))



    return child


}
