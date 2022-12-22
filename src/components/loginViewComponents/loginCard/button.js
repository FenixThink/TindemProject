export const buttonLogin = () =>{

    const button = document.createElement('button')
    button.id = "sendBtn"
    button.textContent="Iniciar Sesión"
    button.addEventListener('click',()=>{

        window.location="./src/views/rolView/index.html"

    })
    button.href="./src/views/rolView/index.html"
    button.type = "submit"
    button.style.cursor = "pointer"
    button.classList.add("button")
    const div = document.createElement('div')
    div.classList.add("button-div");
    div.appendChild(button)

    return button
}