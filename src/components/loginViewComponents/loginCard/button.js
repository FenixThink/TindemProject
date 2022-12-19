export const buttonLogin = () =>{

    const button = document.createElement('button')
    button.textContent="Iniciar Sesión"
    button.addEventListener('click',()=>{

        window.location="./src/views/rolView/index.html"

    })
    button.style.cursor="pointer"
    button.href="./src/views/rolView/index.html"
    button.classList.add("button")
    const div = document.createElement('div')
    div.classList.add("button-div");
    div.appendChild(button)

    return div
}