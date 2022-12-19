import { upperComponents } from "../../../components/mainViewComponents/componentA/componentA.js"

const app = document.querySelector('#app')

app.appendChild(upperComponents("Nombre de empresa"," nit: ","Descripcion de empresa: "))