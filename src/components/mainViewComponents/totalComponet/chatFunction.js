//Parte de la izquierda que tiene que ver con los componentes de chat
import { partLeft } from "../../chatViewComponents/partLeftChat/unionPartsLeft.js";
export const chatFunctionView = () => {
    const divFather = document.createElement('div');
    divFather.className = "containerFather"
    const left = partLeft('Pepsi', 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
    divFather.appendChild(left);
    return divFather;
}