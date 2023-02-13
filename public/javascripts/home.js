import { TotalFunctionView } from "./components/mainViewComponents/totalComponet/totalComponent.js";
import { allView } from "./components/chatViewComponents/allView/totalsection.js";
import { people } from "./components/chatViewComponents/partLeftChat/unionPartsLeft.js";
import { boxMessage } from "./components/chatViewComponents/boxMessage/boxMessage.js";
import { parentCreator } from "./components/profileViewComponents/parent.js"

const app = document.querySelector('#app');

app.appendChild(TotalFunctionView('https://imgs.search.brave.com/c121K9dZq414t-DILTMGbg5yBrSAkWD0kox7IqifPOQ/rs:fit:1080:1200:1/g:ce/aHR0cHM6Ly9pLmli/Yi5jby9idmZzU3Bm/L0FuYS1kZS1Bcm1h/cy1XYWxscGFwZXJz/LUluc3RhLUZpdC1C/aW8tMS5qcGc', 'Nombre completo', 'Edad : ', '*Numero de dos digitos*', 'Descripion de Perfil','Titulos profesionales:'));
const father = document.querySelector('.containerFather')

father.appendChild(allView('',''))
father.appendChild(parentCreator("https://i.ibb.co/0tYZSpb/image.png","Nombres","Apellidos","Jose Miguel","Orejarena Correa","jmoc951@gmail.com","Allweneedilove123", "Yo no se mañana, si estaremos juntos, si se acaba el mundo, yo no se si soy para ti, si seras para mi", "Descripcion del perfil","Agrega tu interes laboral"))


//Creacion de la animacion del buscador

const search = document.querySelector('.searchContac')
const lupa = document.querySelector('.lupa')
const sercCont = document.querySelector('.searc')

//Cuando tiene el mouse encima
sercCont.addEventListener('mouseover',(e)=>{

    search.style.width = '100%'
    lupa.style.transition = 'transform 1s ease-in-out'
    lupa.style.transform = 'translate(-200%,0)'
    

})

//Cuando quita el mouse de encima
sercCont.addEventListener('mouseout',(e)=>{

    search.removeAttribute('style')
    
    lupa.style.transition = 'transform 1s ease-in-out'
    lupa.style.transform = 'translate(0,0)'

})


document.querySelector('.leftProfile').addEventListener('click',()=>{

    //Animacion en si
    const main = document.querySelector('.mainContainer')
    const profile = document.querySelector('.padre')
    const chat = document.querySelector('.principal')
    
    
    chat.style.transition = 'transform .25s ease-in-out'
    chat.style.transform = 'translate(0,-200%)'
            
    main.style.transition = 'transform .25s ease-in-out'
    main.style.transform = 'translate(0,-200%)'

    setTimeout(()=>{
        profile.style.display='grid'
        main.style.display='none'
        chat.style.display='none'
        setTimeout(()=>{
        
            profile.style.transition = 'transform .25s ease-in-out'
            profile.style.transform = 'translate(0,0)'
    
        },10)
    },250)

    document.querySelectorAll('.x').forEach(e=>{
        e.addEventListener('click',()=>{

            const main = document.querySelector('.mainContainer')
            const profile = document.querySelector('.padre')
            const chat = document.querySelector('.principal')

            profile.style.transform = 'translate(200%,0)'
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
//Evento de las cajas de texto para que aparezca el chat cuando le de click a alguno

document.querySelectorAll('.messageBox').forEach((e,i)=>{

    e.addEventListener('click',(ev)=>{

        const person = Object.values(people)[i]

        father.removeChild( document.querySelector('.principal'))
        father.appendChild(allView(Object.keys(people)[i],person.name,person.profileImage,person.description))
        
        document.querySelectorAll('.boxM').forEach(e=>{e.remove()})
        //Configurando la actualizacion de los mensajes respecto al chat seleccionado
        const messageFather = document.querySelector('.padreMensajes')
        Object.values(person.messages).forEach(e=>{
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


