import { upperComponents } from "../../../components/mainViewComponents/componentA/componentA.js"
import { interests } from "../../../components/mainViewComponents/componentA/componentB.js"

const app = document.querySelector('#app')

app.appendChild(upperComponents("Nombre de empresa"," nit: ","Descripcion de empresa: "))
app.appendChild(interests())