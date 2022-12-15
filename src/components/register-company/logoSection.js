export function imageContainer() {
    /*Etiqueta "img" para insertar el svg respectivo*/
    const image = document.createElement('img');
    image.className = "LogoRegister";
    image.src = "https://i.ibb.co/5BTC7Tn/UserLogo.png";
    image.alt = "LogoEmpresa";

    /*etiqueta "a" para redirigir a la vista de edición del logo*/
    const textEdit = document.createElement('a');
    textEdit.textContent = "editar foto";
    textEdit.className = "textEdit";
    textEdit.href = "#";
    /*contenedor del texto editar logo*/
    const contText = document.createElement('div');
    contText.className = "contEdit";
    contText.appendChild(textEdit);
    /*contenedor del logo*/
    const contLogo = document.createElement('div');
    contLogo.className = "contLogo";
    contLogo.appendChild(image);
    /*ContenedorPadre de la seccion izquierda*/
    const sectionLogo = document.createElement('div');
    sectionLogo.className = "seccionLogo";
    sectionLogo.appendChild(contLogo);
    sectionLogo.appendChild(contText);

    return sectionLogo;
}