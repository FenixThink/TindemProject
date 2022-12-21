export function right() {

    //Contact info
    const info = document.createElement("div");
    info.textContent = "Contact info";
    info.className = "info";

    //Imagen de perfil
    const image = document.createElement('img');
    image.className = "ellipse";
    image.src = 'https://i.ibb.co/4FRrXkw/Ellipse-18.png';
    image.alt = "ellipse";

    //Nombre de perfil
    const nameProf = document.createElement("div");
    nameProf.textContent = "Zilan";
    nameProf.className = "nameProf";

    //About
    const about = document.createElement("div");
    about.textContent = "about";
    about.className = "about";

    //Descripción del perfil
    const description = document.createElement("div");
    description.textContent = "Hello my name is Zilan";
    description.className = "description";

    //Contenedor
    const cont = document.createElement("div");
    cont.className = "cont"
    cont.appendChild(info)
    cont.appendChild(image)
    cont.appendChild(nameProf)
    cont.appendChild(about)
    cont.appendChild(description)

    return cont;

}