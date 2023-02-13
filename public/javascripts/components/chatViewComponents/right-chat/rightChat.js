export function right(name,img,description) {

    //Contact info
    const info = document.createElement("div");
    info.textContent = "Contact info";
    info.className = "info";

    //Imagen de perfil
    const image = document.createElement('img');
    image.className = "ellipse";
    image.src = img;
    image.alt = "ellipse";

    const imageCont = document.createElement('div')
    imageCont.className='elipCont'
    imageCont.appendChild(image)

    //Nombre de perfil
    const nameProf = document.createElement("div");
    nameProf.textContent = name;
    nameProf.className = "nameProf";

    //About
    const about = document.createElement("div");
    about.textContent = "About";
    about.className = "about";

    //Descripción del perfil
    const descriptionDiv = document.createElement("div");
    descriptionDiv.textContent = description;
    descriptionDiv.className = "description";

    //Contenedor
    const cont2 = document.createElement("div");
    cont2.className = "cont2"
    cont2.appendChild(info)
    cont2.appendChild(imageCont)
    cont2.appendChild(nameProf)
    cont2.appendChild(about)
    cont2.appendChild(descriptionDiv)

    return cont2;

}