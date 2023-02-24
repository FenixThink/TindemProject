import {
    TotalFunctionView
} from "./components/mainViewComponents/totalComponet/totalComponent.js";
import {
    allView
} from "./components/chatViewComponents/allView/totalsection.js";
import {
    boxMessage
} from "./components/chatViewComponents/boxMessage/boxMessage.js";
import {
    parentCreator
} from "./components/profileViewComponents/parent.js"

const app = document.querySelector('#app');
const containerFather = document.querySelector('.containerFather');
const carga = document.createElement('div');
carga.className = 'carga';
const p = document.createElement('p');
carga.appendChild(p);
p.textContent = "cargando...";
app.appendChild(carga);

export async function fetchQuerys() {
    const data = []
    const emails = []
    let infoemails = {}
    let allmessages, infoMessage, dataUser;
    const token = localStorage.getItem('token')
    const tokenPropio = {
        'token': token
    }
    //Devolver el token desencriptado
    const tokenData = await fetch('/api/decode/',{
        method:'post',
        headers:{
            "Content-type":'application/json'
        },
        body: JSON.stringify(tokenPropio)
    })
    const infoUser = await tokenData.json();

    if (infoUser.message.rol === 'applicant') {

        //Fetch para obtener todas la compañias a mostrar para un aplicante
        const emailsApplicant = await fetch(`/api/getAllEmailCompanies`, {
            method: 'get',
            headers: {
                'autorization': token
            }
        });

        infoemails = await emailsApplicant.json();
        
        //Fetch para obtener toda la informacion de un aplicante
        const response = await fetch(`/Interes/applicant/${infoUser.message.email}`,{
            method: 'get',
            headers: {
                'autorization': token
            }
        });
        dataUser = await response.json();

        //Fetch para traer la info de los mensajes hora etc..
        const idApplicant = await fetch(`obtenerChatIDApplicant/${dataUser[0].ID}`, {
            method: 'get',
        })
        allmessages = await idApplicant.json();

        //Fetch para buscar los match de acuerdo a su id
        const idFetch = await fetch(`allAction/applicant/${dataUser[0].ID}`, {
            method: 'get',
            headers: {
                'autorization': token
            }
        });
        infoMessage = await idFetch.json();


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



    }
    if (infoUser.message.rol === 'company') {

        //Fetch para obtener todas los applicantes a mostrar para una compañia
        const emailsCompany = await fetch(`/api/getAllEmailApplicant`, {
            method: 'get',
            headers: {
                'autorization': token
            }
        });
        infoemails = await emailsCompany.json();
        
        //Fetch para obtener toda la informacion de una compañia
        const response = await fetch(`/Interes/company/${infoUser.message.email}`,{
            method: 'get',
            headers: {
                'autorization': token
            }
        });
        dataUser = await response.json();
        console.log(dataUser)

        //Fetch para traer la info de los mensajes hora etc..
        const idCompany = await fetch(`obtenerChatIDCompany/${dataUser[0].ID}`, {
            method: 'get',
        })
        allmessages = await idCompany.json();

        //Fetch para buscar los match de acuerdo a su id
        const idFetch = await fetch(`allAction/company/${dataUser[0].ID}`, {
            method: 'get',
            headers: {
                'autorization': token
            }
        });
        infoMessage = await idFetch.json();

        for (let  i = 0; i < Object.values(infoemails.message).length; i++){

            const emailsInfo = await fetch(`/Interes/applicant/${infoemails.message[i].email}`,{
                method: 'get',
                headers: {
                    'autorization': token
                }
            });
            const UsersData = await emailsInfo.json();
            emails.push(UsersData)
        }

    }

    if (dataUser.message === "Access Denied" || dataUser.message === "access denied, token expired or incorrect ") {
        window.location = '/'
    }

    data.push(infoUser);
    data.push(dataUser);
    data.push(infoMessage);
    data.push(allmessages);
    data.push(emails)

    return data;
}

fetchQuerys().then(async (data) => {
    const [infoUser, dataUser, infoMessage, allmessagesAplicant, emails] = data
    app.appendChild(await TotalFunctionView(emails[0], emails,dataUser,data));
    const father = document.querySelector('.right');

    father.appendChild(parentCreator(dataUser));
    father.appendChild(await allView('','',"","",dataUser[0].ID,data));


    //Creacion de la animacion del buscador

    const search = document.querySelector('.searchContac')
    const lupa = document.querySelector('.lupa')
    const sercCont = document.querySelector('.searc')

    //Cuando tiene el mouse encima
    lupa.addEventListener('click', (e) => {

        search.style.width = '100%'
        lupa.style.transition = 'transform 1s ease-in-out'
        lupa.style.transform = 'translate(-250%,0)'


    })

    search.addEventListener('focus', (e) => {

        search.style.width = '100%'
        lupa.style.transition = 'transform 1s ease-in-out'
        lupa.style.transform = 'translate(-250%,0)'


    })  
    //Cuando quita el mouse de encima
    search.addEventListener('blur', (e) => {

        search.removeAttribute('style')
        lupa.style.transition = 'transform 1s ease-in-out'
        lupa.style.transform = 'translate(0,0)'

    })


    document.querySelector('.leftProfile').addEventListener('click', () => {

        //Animacion en si
        const main = document.querySelector('.mainContainer')
        const profile = document.querySelector('.padre')
        const chat = document.querySelector('.principal')


        chat.style.transition = 'transform .25s ease-in-out'
        chat.style.transform = 'translate(0,-200%)'

        main.style.transition = 'transform .25s ease-in-out'
        main.style.transform = 'translate(0,-200%)'

        setTimeout(() => {
            profile.style.display = 'grid'
            main.style.display = 'none'
            chat.style.display = 'none'
            setTimeout(() => {

                profile.style.transition = 'transform .25s ease-in-out'
                profile.style.transform = 'translate(0,0)'

            }, 10)
        }, 250)

        document.querySelectorAll('.x').forEach(e => {
            e.addEventListener('click', () => {

                const main = document.querySelector('.mainContainer')
                const profile = document.querySelector('.padre')
                const chat = document.querySelector('.principal')

                profile.style.transform = 'translate(200%,0)'
                chat.style.transform = 'translate(0,-200%)'

                setTimeout(() => {
                    main.style.display = 'flex'
                    setTimeout(() => {

                        main.style.transition = 'transform .25s ease-in-out'
                        main.style.transform = 'translate(0,0)'

                    }, 10)
                }, 250)
            })
        })

    })


    //Evento de las cajas de texto para que aparezca el chat cuando le de click a alguno

    
    const cajas =document.querySelectorAll('.messageBox')
    
    cajas.forEach(async  (e,i)=>{
    let indice=cajas.length-1
        
        e.addEventListener('click', async (ev) => {
        let userId, userName, profileData, dataChat;
            if(infoUser.message.rol === 'applicant'){

                userId = infoMessage.consulta[i].id_company 
                userName = infoMessage.consulta[i].name_company      
                const profile = await fetch(`/company/${infoMessage.consulta[indice-i].id_company}`,{
                    method:'get'
                });
                
                profileData = await profile.json()
                console.log(profileData,'jejejej')

                const allMessage = await fetch(`/getChatscompanyapplicant/${dataUser[0].ID}/${userId}`,{
                    method: 'get'
                })
        
                dataChat = await allMessage.json()

            }else{
                
                userId = infoMessage.consulta[i].id_applicant
                userName = infoMessage.consulta[i].name_applicant
                const profile = await fetch(`/aspirant/${infoMessage.consulta[i].id_applicant}`,{
                    method:'get'
                });

                profileData = await profile.json()

                const allMessage = await fetch(`/getChatscompanyapplicant/${userId}/${dataUser[0].ID}`,{
                    method: 'get'
                })
        
                dataChat = await allMessage.json()
            }
            // const person = idFetch[i]
            father.removeChild(document.querySelector('.principal'))
            father.appendChild(await allView(profileData.id,profileData.name,profileData.img,profileData.description,infoUser.message.id,data))

        document.querySelectorAll('.boxM').forEach(e => {
            e.remove()
        })
        
        
        const messages = dataChat.Message

        //Configurando la actualizacion de los mensajes respecto al chat seleccionado
        const messageFather = document.querySelector('.padreMensajes')
        messages.forEach(e => {
            let color,cargo;
            if(infoUser.message.rol == 'applicant'){
                if(e.message[0].role == 'applicant'){
                    color = 'verde';
                    cargo = 'applicant-right'    
                }else{

                    color = 'gris'
                }

            }else{
                if(e.message[0].role == 'company'){
                    color = 'verde';
                    cargo = 'company-right'    
                }else{

                    color = 'gris'
                }
            }
            messageFather.appendChild(boxMessage(color, cargo, e.message[0].text, e.message[0].hour))
        })


            //Animacion en si
            const main = document.querySelector('.mainContainer')
            const profile = document.querySelector('.padre')
            const chat = document.querySelector('.principal')



            chat.style.display = 'block'
            //chat.style.width='800px'
            setTimeout(() => {

                main.style.display = 'none'
                profile.style.display = 'none'
                chat.style.transform = 'translate(0,0)'


            }, 100)


            //Evento de la x para volver a ver las tarjeticas
            document.querySelectorAll('.x').forEach(e => {
                e.addEventListener('click', () => {

                    const main = document.querySelector('.mainContainer')
                    const chat = document.querySelector('.principal')

                    chat.style.transform = 'translate(0,-200%)'

                    setTimeout(() => {
                        main.style.display = 'block'
                        setTimeout(() => {

                            main.style.transition = 'transform .25s ease-in-out'
                            main.style.transform = 'translate(0,0)'
                            chat.style.display = 'none'
                        }, 10)
                    }, 250)
                })
            })
        })
        
    })

    //Evento de los botones inferiores

    //Botón del home 
    document.querySelector('.home-icon').addEventListener('click', () => {

        const main = document.querySelector('.mainContainer')
        const profile = document.querySelector('.padre')
        const chat = document.querySelector('.principal')

        chat.style.transform = 'translate(0,-200%)'

        setTimeout(() => {
            main.style.display = 'block'
            setTimeout(() => {

                main.style.transition = 'transform .25s ease-in-out'
                main.style.transform = 'translate(0,0)'
                chat.style.display = 'none'
                profile.style.display = 'none'
            }, 10)
        }, 250)
    })

    //Botón del perfil
    document.querySelector('.profile-icon').addEventListener('click', () => {

        //Animacion en si
        const main = document.querySelector('.mainContainer')
        const profile = document.querySelector('.padre')
        const chat = document.querySelector('.principal')

        chat.style.transition = 'transform .25s ease-in-out'
        chat.style.transform = 'translate(0,-200%)'

        main.style.transition = 'transform .25s ease-in-out'
        main.style.transform = 'translate(0,-200%)'

        setTimeout(() => {
            profile.style.display = 'grid'
            main.style.display = 'none'
            chat.style.display = 'none'
            setTimeout(() => {

                profile.style.transition = 'transform .25s ease-in-out'
                profile.style.transform = 'translate(0,0)'

            }, 10)
        }, 250)
    })

    document.querySelectorAll('.x').forEach(e => {
        e.addEventListener('click', () => {

            const main = document.querySelector('.mainContainer')
            const profile = document.querySelector('.padre')
            const chat = document.querySelector('.principal')

            profile.style.transform = 'translate(200%,0)'
            chat.style.transform = 'translate(0,-200%)'

            setTimeout(() => {
                main.style.display = 'flex'
                setTimeout(() => {

                    main.style.transition = 'transform .25s ease-in-out'
                    main.style.transform = 'translate(0,0)'

                }, 10)
            }, 250)
        })
    })
    carga.style.display = 'none';
});