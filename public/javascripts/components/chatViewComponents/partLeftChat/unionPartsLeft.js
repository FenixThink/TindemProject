
import { allChats } from '../all-chats/allChats.js'
import { divSearch } from '../all-chats/search.js'
import {allView} from "../allView/totalsection.js";
import {boxMessage} from "../boxMessage/boxMessage.js";

export const people = [
    {
        id:1,
        name: 'Zilan',
        profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        description:'Hi, my name is Zilan',
        messages:[
            {
                message:'Hi there, How are you?',
                hour:'12:35 PM',
                role:'receiver'
            },
            {
                message:'Waiting for you reply.As I have to go back soon. I have to travel long distance.',
                hour:'12:35 PM',
                role:'receiver'
            
            },
            {
                message:'Hi, I am coming there in few minutes. Please wait!! I am in taxi right now.',
                hour:'12:37 PM',
                role:'transmitter'
            },
            {
                message:'Thank you very much, I am waiting here at StarBuck cafe.',
                hour:'12:38 PM',
                role:'receiver'
            }
        ]
    },
    {
        id:2,
        name: 'Shehnaz',
        profileImage: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description:'Hi, my name is Shehnaz',
        messages:[
            {
                message:'Call ended.',
                hour:'12:35 PM',
                role:'receiver'
            }
        ]
    },
    {
        id:3,
        name: 'Client',
        profileImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        description:'Hi, my name is Client',
        messages:[
            {
                message:'What time are we there?.',
                hour:'12:35 PM',
                role:'receiver'
            }
        ]
    },
    {
        id:4,
        name: 'Mueez',
        profileImage: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
        description:'Hi, my name is Mueez',
        messages:[
            {
                message:'I will send you the work file',
                hour:'12:35 PM',
                role:'transmitter'
            }
        ]
    },
    {
        id:5,
        name: 'Hasnain',
        profileImage: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        description:'Hi, my name is Hasnain',
        messages:[
            {
                message:'I will send you the work file',
                hour:'12:35 PM',
                role:'transmitter'
            }
        ]
    },
    {
        id:6,
        name: 'Saleem',
        profileImage: 'https://images.unsplash.com/photo-1579538506280-84e461ad0077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        description:'Hi, my name is Saleem',
        messages:[
            {
                message:'I will send you the work file',
                hour:'12:35 PM',
                role:'transmitter'
            }
        ]
    }
]



export const partLeft =(topName,topProfileImg) =>{
    
    //Creacion de la imagen
    const img = document.createElement('img')
    img.className='profileImg'
    img.src=topProfileImg
    
    //Creacion del contenedor de la imagen
    const imgCont = document.createElement('div')
    imgCont.className = 'profileImgCont'
    imgCont.appendChild(img)

    //Creacion del span del nombre
    const name = document.createElement('div')
    name.className='profileName'
    name.textContent = topName

    //Creacion del contenedor que tendra la imagen y el nombre de perfil
    const imgName = document.createElement('div')
    imgName.className = 'leftProfile'
    imgName.appendChild(imgCont)
    imgName.appendChild(name)
    
    //Creaion del search de los chat
    const search = divSearch()

    //Creacion del contenedor que tendra la imagen de perfil el nombre y el buscador
    const profile = document.createElement('div')
    profile.className = 'profileCont'
    profile.appendChild(imgName)
    profile.appendChild(search)

    const chats = allChats()

    const totalpartLeft = document.createElement('div')
    totalpartLeft.className = 'totalpartLeft'
    totalpartLeft.appendChild(profile)
    totalpartLeft.appendChild(chats)
    

    return totalpartLeft;
}

setTimeout(function() {
    const father = document.querySelector('.containerFather')
    document.querySelectorAll('.messageBox').forEach((e,i)=>{

        e.addEventListener('click',(ev)=>{

            const person = people[i]

            father.removeChild( document.querySelector('.principal'))
            father.appendChild(allView(person.id,person.name,person.profileImage,person.description))

            document.querySelectorAll('.boxM').forEach(e=>{e.remove()})
            //Configurando la actualizacion de los mensajes respecto al chat seleccionado
            const messageFather = document.querySelector('.padreMensajes')
            person.messages.forEach(e=>{
                let color = ''
                e.role=='transmitter' ? color = 'verde' : color = 'gris'
                messageFather.appendChild(boxMessage(color,e.role,e.message,e.hour))
            })

            //Animacion en si
            const main = document.querySelector('.mainContainer')
            const profile = document.querySelector('.padre')
            const chat = document.querySelector('.principal')

            main.style.transition = 'transform .25s ease-in-out'
            main.style.transform = 'translate(0,200%)'

            profile.style.transition = 'transform .25s ease-in-out'
            profile.style.transform = 'translate(200%,0)'

            chat.style.display='flex'
            chat.style.transition = 'transform .25s ease-in-out'

            setTimeout(()=>{

                main.style.display='none'
                profile.style.display='none'
                chat.style.transform = 'translate(0,0)'


            },100)


            //Evento de la x para volver a ver las tarjeticas
            document.querySelectorAll('.x').forEach(e=>{
                e.addEventListener('click',()=>{

                    const main = document.querySelector('.mainContainer')
                    const chat = document.querySelector('.principal')

                    chat.style.transform = 'translate(0,-200%)'

                    setTimeout(()=>{
                        main.style.display='flex'
                        setTimeout(()=>{

                            main.style.transition = 'transform .25s ease-in-out'
                            main.style.transform = 'translate(0,0)'

                        },10)
                    },250)
                })
            })
        })
    })
}, 3000);

