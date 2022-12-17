export const buttonLogin = () =>{

    const button = document.createElement('button')
    button.textContent="Iniciar Sesión"

    const div = document.createElement('div')
    div.classList.add("button-div");
    div.appendChild(button)

    return div
}