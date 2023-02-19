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
    let allmessages;
    let infoMessage;
    const token = localStorage.getItem('token')
    const tokenPropio = {'token':token}
    //Devolver el token desencriptado
    const tokenData = await fetch('/api/decode/',{
        method:'post',
        headers:{
            "Content-type":'application/json'
        },
        body: JSON.stringify(tokenPropio)
    })
    const infoUser = await tokenData.json();
    const id = infoUser.message.id

    if (infoUser.message.rol === 'applicant'){
        const emailsApplicant = await fetch(`/api/getAllEmailCompanies`,{
            method: 'get',
            headers: {
                'autorization': token
            }
        });

        infoemails = await emailsApplicant.json();

        //Fetch para traer la info de los mensajes hora etc..

        const idApplicant = await fetch (`obtenerChatIDApplicant/${id}`,{
            method: 'get',
        })

        allmessages = await idApplicant.json();


        //Fetch para buscar los match de acuerdo a su id
        const idFetch = await fetch(`allAction/applicant/${id}`,{
            method: 'get',
            headers: {
                'autorization': token
            }
        });
        infoMessage = await idFetch.json();


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
    
    const response1 = await fetch(`/Interes/applicant/${infoUser.message.email}`,{
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
    data.push(infoMessage);
    data.push(allmessages);

    for (let  i = 0; i < Object.values(infoemails.message).length; i++){

        const emailsInfo = await fetch(`/Interes/company/${infoemails.message[i].email}`,{
            method: 'get',
            headers: {
                'autorization': token
            }
        });
        const UsersData = await emailsInfo.json();
        emails.push(UsersData)
    }
    data.push(emails)

    return data;
}

fetchQuerys().then(async(data) => {
    const [infoUser, dataUser,infoMessage,allmessagesAplicant,emails] = data
    app.appendChild(await TotalFunctionView(emails[0],emails));
    const father = document.querySelector('.right');

    father.appendChild(parentCreator(dataUser));
    father.appendChild(await allView('',''));


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

    document.querySelectorAll('.messageBox').forEach(async  (e,i)=>{
        console.log('a')
            let userId, userName;
            if(infoUser.message.rol === 'applicant'){

                userId = infoMessage.consulta[i].id_company 
                userName = infoMessage.consulta[i].name_company      
                
            }else{
                
                userId = infoMessage.consulta[i].id_applicant
                userName = infoMessage.consulta[i].name_applicant
                
            }
            // const person = idFetch[i]
            const person = people[i]
            father.removeChild(document.querySelector('.principal'))
            father.appendChild(await allView(userId,userName,person.profileImage,person.description))

        document.querySelectorAll('.boxM').forEach(e=>{e.remove()})
        //Configurando la actualizacion de los mensajes respecto al chat seleccionado
        const messageFather = document.querySelector('.padreMensajes')
        person.messages.forEach(e=>{
            let color = ''
            e.role=='transmitter' ? color = 'verde' : color = 'gris'
            messageFather.appendChild(boxMessage(color,e.role,e.message,e.hour))
        })


        e.addEventListener('click',async (ev)=>{
            //Animacion en si
            const main = document.querySelector('.mainContainer')
            const profile = document.querySelector('.padre')
            const chat = document.querySelector('.principal')



            chat.style.display='block'
            //chat.style.width='800px'
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
                        main.style.display='block'
                        setTimeout(()=>{

                            main.style.transition = 'transform .25s ease-in-out'
                            main.style.transform = 'translate(0,0)'
                            chat.style.display = 'none'
                        },10)
                    },250)
                })
            })
        })
    })



});

