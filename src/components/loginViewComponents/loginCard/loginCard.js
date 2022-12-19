import { registerTextLogin }  from "./register.js";
import { credentials } from "./credentials.js";
import { tittleLogin } from "./tittle.js";
import { buttonLogin } from "./button.js";


export const loginCard = () => {

    const totalCard = document.createElement('div')
    totalCard.classList.add("total-card");

    totalCard.appendChild(tittleLogin());
    totalCard.appendChild(credentials());
    totalCard.appendChild(registerTextLogin());
    totalCard.appendChild(buttonLogin());    

    return totalCard
}