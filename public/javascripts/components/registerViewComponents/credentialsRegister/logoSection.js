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

  /*Evento que despliega el modal*/
  textEdit.addEventListener('click', () => {
    document.querySelector('.modalContent').style.display = ""
    document.querySelector('.modalContent').style.visibility = "visible";
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