import { TotalFunctionView } from "../../../components/mainViewComponents/totalComponet/totalComponent.js";
const app = document.querySelector('#app');

app.appendChild(TotalFunctionView("https://imgs.search.brave.com/s9zUeNPtWTyNFZPnXKC0bP-0NzE8ylVVvpTmIwOnL2Y/rs:fit:695:697:1/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vYnVjaGFuYW5z/LWRlLWx1eGUtMTIt/YW5vcy1udWV2YS1l/bi1zdS1lc3R1Y2hl/LTMwLURfTlFfTlBf/NjA5MDI0LU1MVjI5/Mjk2MjMzNzk3XzAx/MjAxOS1GLmpwZw", 'Nombre de empresa', 'NIT : ', '000000', 'Descripion de la vacante','Areas de intereses laborales:'));

//Configuracion de las rutas
const rutas = ["../../mainView/empresa/index.html","../../chatView/index.html","../../profileView/index.html"]

const buttonsHeader = document.querySelectorAll(".header")

buttonsHeader.forEach((e,i)=>{

    e.href = rutas[i]

})