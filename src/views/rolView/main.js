import { generateBody } from "../../components/selectRolComponent/generateBody/generateBody.js"
import { generateBackground } from "../../components/selectRolComponent/generateBackground/generateBackground.js"

const modal = generateBody()
const Background = generateBackground()
const app = document.querySelector("#app")


app.appendChild(Background)

app.appendChild(modal)
