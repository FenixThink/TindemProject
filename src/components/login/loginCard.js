import { registerTextLogin }  from "../../components/login//register.js";
import { credentials } from "../../components/login/credentials.js";
import { tittleLogin } from "../../components/login/tittle.js";
import { buttonLogin } from "../../components/login/button.js";


export const loginCard = () => {

    const totalCard = document.createElement('form')
    totalCard.action = ""
    totalCard.method = "POST" 
    totalCard.classList.add("total-card");

    totalCard.appendChild(tittleLogin());
    totalCard.appendChild(credentials());
    totalCard.appendChild(registerTextLogin());
    totalCard.appendChild(buttonLogin());    

    return totalCard
}