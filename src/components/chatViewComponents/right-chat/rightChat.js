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
    about.textContent = "About";
    about.className = "about";

    //Descripción del perfil
    const description = document.createElement("div");
    description.textContent = "Hello my name is Zilan";
    description.className = "description";

    //Contenedor
    const cont2 = document.createElement("div");
    cont2.className = "cont2"
    cont2.appendChild(info)
    cont2.appendChild(image)
    cont2.appendChild(nameProf)
    cont2.appendChild(about)
    cont2.appendChild(description)

    return cont2;

}