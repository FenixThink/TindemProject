import { registerTextLogin }  from "../../components/login//register.js";
import { credentials } from "../../components/login/credentials.js";
import { tittleLogin } from "../../components/login/tittle.js";
import { buttonLogin } from "../../components/login/button.js";
const divApp = document.querySelector('#app')

divApp.appendChild(tittleLogin());
divApp.appendChild(credentials());
divApp.appendChild(registerTextLogin());
divApp.appendChild(buttonLogin());