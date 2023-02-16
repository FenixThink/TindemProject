import { principalFunction } from "./credentialsRegister/totalSection.js";
import { totalSectionB } from './locationDescripionRegister/totalSection.js'
import { contentDad } from './tellUsAboutYourselfRegister/contentDad.js'
import {createProfileSup,createProfileInf} from './profilePersonal/index.js'


export const parentCreator = (dataUser) => {
    const obj1 = {
        Profile:{
            id:1,
            name:"Jose Miguel",
            lasname:" Orejarena Correa",
            descriprion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            city:"Bucaramanga",
            Country:"Colombia",
            type:"Applicant",
            day_of_birth:"1999/10/12"
        },
        "Estudios":[
            {
                Area:"Ingenieria de sistemas",
                Especializaciones:[
                    {
                        id:1,
                        name:"Tecnico aocñweofbowe"
                    },
                    {
                        id:2,
                        name:"Programador qdpoiqnñowdnoñqen"
                    },
                    {
                        id:3,
                        name:"Jugador de lol wqñkldmnqpwoindown"
                    },
                    {
                        id:4,
                        name:"Jugador de lol ijdiqwj´jkd"
                    },
                    {
                        id:5,
                        name:"Jugador de lol wqdjqpwiond"
                    }
                ]
            },
            {
                Area:"Medicina",
                Especializaciones:[
                    {
                        id:3,
                        name:"Enfermer@"
                    },
                    {
                        id:4,
                        name:"Cirujano"
                    }
                ]
            },
            {
                Area:"Derecho",
                Especializaciones:[
                    {
                        id:5,
                        name:"Jurado"
                    }
                ]
            }
        ]
    }
    
console.log(dataUser,)

    const exit = document.createElement('span')
    exit.className='x'
    exit.textContent='X'

    const child = document.createElement('div')
    child.className = "padre"
    child.appendChild(exit)
    child.appendChild(createProfileSup(dataUser))
    child.appendChild(createProfileInf(dataUser))

    

    return child


}
