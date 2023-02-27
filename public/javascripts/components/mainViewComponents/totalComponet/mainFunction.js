import { upperComponents } from "../componentA/componentA.js";
import { interests } from "../componentA/componentB.js";
import { Description } from "../descriptionComponent/descriptionComponent.js";
import { renderButtons } from "../likeDislikeComponent/likeDislikeComponent.js";
//Importe de los datos de usuario 
import { applicant } from "../../userDataCard/userDataCard.js";
export const rightCreator = (img,dataArea,emails,dataUser) => {
    if (img === null){
        const mainContainer = document.createElement('div');
        mainContainer.className = "mainContainer";
        mainContainer.className += " textCenter";
        let h1 = document.createElement("h1")
        h1.textContent = "Por el momento no tenemos usuarios que mostrarte"
        let p = document.createElement("p")
        p.textContent = "Lamentamos los inconvenientes, Estamos trabajando para mejorar nuestro servicio"
        mainContainer.appendChild(h1)
        mainContainer.appendChild(p)
        return mainContainer
    }
    setTimeout(() => { reloadData(emails,dataUser,dataArea) }, 100);
    const [data, interestArea] = dataArea
    const array = []
    
    for (const x in interestArea) {
        array.push(x)
    }
    
    //Array para traer los intereses de un perfil
    const areas = Object.values(interestArea);
    const interestOfArea = []

    areas.forEach(area => {
        area.forEach(interest => {
            interestOfArea.push(interest)
        })       
    });

    const componentAInformation = upperComponents(img, data.name, data);
    const componentBDescription = interests(interestOfArea);
    const componentDescription = Description(data.description);
    const componentCOptions = renderButtons();
    const mainContainerSon = document.createElement('div');
    mainContainerSon.className = "mainContainerSon";
    const subcontainer = document.createElement('div');
    subcontainer.className = "subcontainer";
    const footerContainer = document.createElement('div');
    footerContainer.className = "footerContainer";
    const mainContainer = document.createElement('div');
    mainContainer.className = "mainContainer";
    
    subcontainer.appendChild(componentDescription);
    subcontainer.appendChild(componentBDescription);

    componentAInformation.appendChild(footerContainer);

    footerContainer.appendChild(componentCOptions);

    mainContainerSon.appendChild(componentAInformation);
    mainContainerSon.appendChild(subcontainer);

    mainContainer.appendChild(mainContainerSon)
    return mainContainer;
}
export const reloadData = (emails,dataUser,dataArea) => {

    const large = emails.length
    const aleatory = Math.floor(Math.random() * large);
    const token = localStorage.getItem('token')

    const mainContainer = document.querySelector('.mainContainer');
    const vectorLike = document.querySelector("#likeVector");
    const vectorDislike = document.querySelector("#imgUnlike");
    vectorLike.addEventListener('click', async () => {

        const emailsAll = []
        if (dataUser[0].type === 'applicant') {
            const  dataSaveAction = {
                action:'like',
                action_author:dataUser[0].type,
                action_match:0,
                id_applicant:dataUser[0].ID,
                id_company:dataArea[0].ID
            }
            await fetch('/ActionsCreate',{
                method:'post',
                headers:{
                    "Content-type":'application/json'
                },
                body: JSON.stringify(dataSaveAction)
            })
            const validate = await fetch(`/api/updateActionMatch/${dataUser[0].ID}/${dataArea[0].ID}`,{
                method:'get',
                headers:{
                    "Content-type":'application/json'
                }
            });
            const hola = await fetch(`/api/validateMatch/${dataUser[0].ID}/${dataArea[0].ID}`,{
                method:'get',
                headers:{
                    "Content-type":'application/json'
                }
            })
            const response = await hola.json()
            if (response.message[0].action_match.data[0] != 0){
                Swal.fire({
                    title: 'MATCH!',
                    text: `Haz hecho match exitoso con ${dataArea[0].name}`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                })
                let button
                setInterval(() => {
                    button = Swal.isVisible()
                    console.log(button)
                    if (button == false) {
                        location = "/home"
                    }
                }, 100);

            }
            const emailsApplicant = await fetch(`/api/getAllEmailCompanies/${dataUser[0].ID}`, {
                method: 'get',
                headers: {
                    'autorization': token
                }
            });
            const infoemails = await emailsApplicant.json();
            for (let  i = 0; i < Object.values(infoemails.message).length; i++){
                const emailsInfo = await fetch(`/Interes/company/${infoemails.message[i].email}`,{
                    method: 'get',
                    headers: {
                        'autorization': token
                    }
                });
                const UsersData = await emailsInfo.json();
                emailsAll.push(UsersData)
            }
        }

        if (dataUser[0].type === 'company') {
            const  dataSaveAction = {
                action:'like',
                action_author:dataUser[0].type,
                action_match:0,
                id_applicant:dataArea[0].ID,
                id_company:dataUser[0].ID
            }
            await fetch('/ActionsCreate',{
                method:'post',
                headers:{
                    "Content-type":'application/json'
                },
                body: JSON.stringify(dataSaveAction)
            })
            await fetch(`/api/updateActionMatch/${dataArea[0].ID}/${dataUser[0].ID}`,{
                method:'get',
                headers:{
                    "Content-type":'application/json'
                }
            });
            const validate = await fetch(`/api/validateMatch/${dataArea[0].ID}/${dataUser[0].ID}`,{
                method:'get',
                headers:{
                    "Content-type":'application/json'
                }
            })
            const response = await validate.json()
            if (response.message[0].action_match.data[0] != 0){
                Swal.fire({
                    title: `MATCH EXITOSO CON ${dataArea[0].name}!`,
                    text: `Se recargará la pagina para que todo funcione correctamente`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                })
                let button
                setInterval(() => {
                    button = Swal.isVisible()
                    console.log(button)
                    if (button == false) {
                        location = "/home"
                    }
                }, 100);
            }
            const emailsCompany = await fetch(`/api/getAllEmailApplicant/${dataUser[0].ID}`, {
                method: 'get',
                headers: {
                    'autorization': token
                }
            });
            let infoemails = await emailsCompany.json();
            for (let  i = 0; i < Object.values(infoemails.message).length; i++){

                const emailsInfo = await fetch(`/Interes/applicant/${infoemails.message[i].email}`,{
                    method: 'get',
                    headers: {
                        'autorization': token
                    }
                });
                const UsersData = await emailsInfo.json();
                emailsAll.push(UsersData)
            }
        }

        mainContainer.remove()
        const right = document.querySelector('.right')
        if (emailsAll == undefined || dataArea == undefined || dataUser == undefined || emailsAll[aleatory] == undefined){
            right.appendChild(rightCreator(null))
            return
        }
        right.appendChild(rightCreator(`../../../../img/${emailsAll[aleatory][0].img}`, emailsAll[aleatory],emailsAll,dataUser,dataArea))
    },);
    vectorDislike.addEventListener('click', async () => {
        let SaveAction
        (dataUser[0].type === 'applicant') ?  SaveAction = {
            action:'dislike',
            action_author:dataUser[0].type,
            action_match:0,
            id_applicant:dataUser[0].ID,
            id_company:dataArea[0].ID
        } :  SaveAction = {
            action:'dislike',
            action_author:dataUser[0].type,
            action_match:0,
            id_applicant:dataArea[0].ID,
            id_company:dataUser[0].ID
        }

        await fetch('/ActionsCreate',{
            method:'post',
            headers:{
                "Content-type":'application/json'
            },
            body: JSON.stringify(SaveAction)
        })
        const validate = await fetch(`/api/updateActionMatch/${dataUser[0].ID}/${dataArea[0].ID}`,{
            method:'get',
            headers:{
                "Content-type":'application/json'
            }
        });
        await fetch(`/api/validateMatch/${dataUser[0].ID}/${dataArea[0].ID}`,{
            method:'get',
            headers:{
                "Content-type":'application/json'
            }
        })

        let emailsAll = []
        if (dataUser[0].type === 'applicant') {
            const emailsApplicant = await fetch(`/api/getAllEmailCompanies/${dataUser[0].ID}`, {
                method: 'get',
                headers: {
                    'autorization': token
                }
            });
            const infoemails = await emailsApplicant.json();
            for (let  i = 0; i < Object.values(infoemails.message).length; i++){
                const emailsInfo = await fetch(`/Interes/company/${infoemails.message[i].email}`,{
                    method: 'get',
                    headers: {
                        'autorization': token
                    }
                });
                const UsersData = await emailsInfo.json();
                emailsAll.push(UsersData)
            }
        }

        if (dataUser[0].type === 'company') {
            const emailsCompany = await fetch(`/api/getAllEmailApplicant/${dataUser[0].ID}`, {
                method: 'get',
                headers: {
                    'autorization': token
                }
            });
            let infoemails = await emailsCompany.json();
            for (let  i = 0; i < Object.values(infoemails.message).length; i++){

                const emailsInfo = await fetch(`/Interes/applicant/${infoemails.message[i].email}`,{
                    method: 'get',
                    headers: {
                        'autorization': token
                    }
                });
                const UsersData = await emailsInfo.json();
                emailsAll.push(UsersData)
            }
        }

        mainContainer.remove()
        const right = document.querySelector('.right')
        if (emailsAll == undefined || dataArea == undefined || dataUser == undefined || emailsAll[aleatory] == undefined){
            right.appendChild(rightCreator(null))
            return
        }
        right.appendChild(rightCreator(`../../../../img/${emailsAll[aleatory][0].img}`,emailsAll[aleatory],emailsAll,dataUser,dataArea))
    },);
}
