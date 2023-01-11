import { modalUpload } from "../modalUploadPhoto/modalUpload.js"

export function imageContainer(img) {
  /*Etiqueta "img" para insertar el svg respectivo*/
  const image = document.createElement('img');
  image.className = "LogoRegister";
  image.src = img;
  image.alt = "LogoEmpresa";

  //etiqueta "a" para redirigir a la vista de edición del logo*/
  const textEdit = document.createElement('span');
  textEdit.textContent = "editar foto";
  textEdit.className = "textEdit";
  /*contenedor del texto editar logo*/
  const contText = document.createElement('div');
  contText.className = "contEdit";
  contText.appendChild(textEdit);
  
  textEdit.addEventListener('click', () => {
    
    document.querySelector('.modalContent').style.display = 'block'
  
      
    })
    /*contenedor del logo*/
    const contLogo = document.createElement('div');
    contLogo.className = "contLogo";
    contLogo.appendChild(image);
    contLogo.appendChild(modalUpload())
  /* funcionamiento agregar img*/
  contLogo.setAttribute('id', 'divProfilePhoto')

  /*ContenedorPadre de la seccion izquierda*/
  const sectionLogo = document.createElement('div');
  sectionLogo.className = "seccionLogo";
  sectionLogo.appendChild(contLogo);
  sectionLogo.appendChild(contText);

  return sectionLogo;
}