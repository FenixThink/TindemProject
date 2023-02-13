import { generateBody } from "./components/selectRolViewComponents/generateBody/generateBody.js"
import { generateBackground } from "./components/selectRolViewComponents/generateBackground/generateBackground.js"

const modal = generateBody()
const Background = generateBackground()
const app = document.querySelector("#app")


app.appendChild(Background)

app.appendChild(modal)
