import { TotalFunctionView } from "./components/mainViewComponents/totalComponet/totalComponent.js";
import { allView } from "./components/chatViewComponents/allView/totalsection.js";
import { people } from "./components/chatViewComponents/partLeftChat/unionPartsLeft.js";
import { boxMessage } from "./components/chatViewComponents/boxMessage/boxMessage.js";
import { parentCreator } from "./components/profileViewComponents/parent.js"

const app = document.querySelector('#app');

export async function fetchQuerys() {
    const data = []
    const emails = []
    let infoemails = {}
    const token = localStorage.getItem('token')
    const tokenPropio = {'token':token}
    //Devolver el token desencriptado
    const tokenData = await fetch('http://localhost:3000/api/decode/',{
        method:'post',
        headers:{
            "Content-type":'application/json'
        },
        body: JSON.stringify(tokenPropio)
    })
    const infoUser = await tokenData.json();

    if (infoUser.message.rol === 'applicant'){
        const emailsApplicant = await fetch(`/api/getAllEmailCompanies`,{
            method: 'get',
            headers: {
                'autorization': token
            }
        });
    infoemails = await emailsApplicant.json();
    }
    if (infoUser.message.rol === 'company'){
        const emailsCompany = await fetch(`/api/getAllEmailApplicant`,{
            method: 'get',
            headers: {
                'autorization': token
            }
        });
        infoemails = await emailsCompany.json();
    }
    const id = infoUser.message.id

    console.log(infoemails.message[1].email)
    
    for (let  i = 0; i < Object.values(infoemails.message).length; i++){

    }
    const response1 = await fetch(`/Area/Interes/${infoUser.message.email}`,{
        method: 'get',
        headers: {
            'autorization': token
        }
    });
    const dataUser = await response1.json();

    if (dataUser.message === "Access Denied" || dataUser.message ==="access denied, token expired or incorrect"){
        window.location = '/'
    }
    data.push(infoUser);
    data.push(dataUser);
    
    //Fetch para buscar los match de acuerdo a su id
    const idFetch = await fetch(`allAction/applicant/${id}`,{
        method: 'get',
        headers: {
            'autorization': token
        }
    });
    const infoMessage = await idFetch.json();

    data.push(infoMessage)

    //Fetch para traer la info de los mensajes hora etc..

    const idApplicant = await fetch (`obtenerChatIDApplicant/${id}`,{
        method: 'get',
        
    })

    const allmessagesAplicant = await idApplicant.json()

    data.push(allmessagesAplicant)

    return data;
}

fetchQuerys().then(async(data) => {
    const [infoUser, dataUser] = data;

    app.appendChild(await TotalFunctionView(dataUser));
    const father = document.querySelector('.containerFather');

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



});

