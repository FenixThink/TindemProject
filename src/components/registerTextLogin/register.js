export const registerTextLogin = () => {
    //Creación del input del span del texto
    const text = document.createElement('span')
    text.textContent="¿No tienes cuenta? "
    text.style.color = "gray"

    //Creación del link para registrarse
    const a = document.createElement('a');
    const linkText = document.createTextNode("Registrarse");
    a.appendChild(linkText);
    a.href = "#";
    a.style.color = "black";
    a.style.fontweight = "bolder";
    
    //Creación del div donde se encuentra el texto y el link
    const parent = document.createElement('div')
    parent.appendChild(text)
    parent.appendChild(a)
    return parent;
}

