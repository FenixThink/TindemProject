import { allView } from "../../components/chatViewComponents/allView/totalsection.js"


const app = document.querySelector('#app')

app.appendChild(allView())

//Configuracion de las rutas del header
const rutas = ["../mainView/empresa/index.html","../chatView/index.html","../profileView/profileCompany/index.html"]

const buttonsHeader = document.querySelectorAll(".header")

buttonsHeader.forEach((e,i)=>{

    e.href = rutas[i]

})