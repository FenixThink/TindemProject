import { TotalFunctionView } from "../../../components/mainViewComponents/totalComponet/totalComponent.js";
const app = document.querySelector('#app');

app.appendChild(TotalFunctionView('https://imgs.search.brave.com/dsW9LkRAbRF77S-lGAP2ISxt9mE5vAeWOQd4gSb5bq4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kY2g4/MWttOHI1dG93LmNs/b3VkZnJvbnQubmV0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzEwLzk3ODg4NTcy/Mzc0MDQuSU4wNy5q/cGc', 'Nombre completo', 'Edad : ', '*Numero de dos digitos*', 'Descripion de Perfil','Titulos profesionales:'));

//Configuracion de las rutas del header
const rutas = ["../../mainView/empresa/index.html","../../chatView/index.html","../../profileView/profileCompany/index.html"]

const buttonsHeader = document.querySelectorAll(".header")

buttonsHeader.forEach((e,i)=>{

    e.href = rutas[i]

})