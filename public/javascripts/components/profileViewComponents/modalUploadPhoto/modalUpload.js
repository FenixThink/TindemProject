export function modalUpload() {
    /*seccion para cerrar modal */
    const span = document.createElement('span')
    span.textContent = 'X'
    span.className = 'close'
    span.addEventListener('click', () => {
        modalContent.style.display = 'none'
        // body.style.position = 'inherit'
        // body.style.height = '100%'
        // body.style.overflow = 'hidden'
    })
    /*creacion de contenedor de imagen */
    const image = document.createElement('img');
    image.className = "imageUpload";
    image.src = "https://cdn-icons-png.flaticon.com/128/2250/2250093.png"
    /* seccion input*/
    const inputUpload = document.createElement('input')
    inputUpload.type = 'file'
    inputUpload.className = 'fileInput'
    inputUpload.setAttribute('id', 'archivoInput')
    inputUpload.addEventListener('change', () => {
        /*funcion -----------------------*/
        const archivoInput = document.getElementById('archivoInput')
        const archivoRuta = archivoInput.value;
        const extPermitidas = /(.png|.jpg|.PNG|.JPG)$/i;
        if (!extPermitidas.exec(archivoRuta)) {
            alert('eso no se puede subir compañero.')
            archivoInput.value = '';
            return false;
        } else {
            if (archivoInput.files && archivoInput.files[0]) {
                let visor = new FileReader();
                visor.onload = function (e) {
                    document.getElementById('divProfilePhoto').innerHTML =
                        '<img src="' + e.target.result + '" class="profileImage" />';
                    modalContent.style.display = 'none'
                }
                visor.readAsDataURL(archivoInput.files[0]);
            } else {
                modalContent.style.display = 'none'
            }
        }
        /*----------------------------------*/
    })
    /* seccion de contenedor donde va la imagen*/
    const labelUpload = document.createElement('label')
    labelUpload.appendChild(image)
    labelUpload.appendChild(inputUpload)
    labelUpload.className = 'labelUpload'
    /*seccion de contenedor de imagen y input */
    const imageUpload = document.createElement('div')
    imageUpload.className = 'imageUpload'
    imageUpload.appendChild(labelUpload)
    /*seccion hijo1 */
    const uploadImage = document.createElement('div')
    uploadImage.className = 'uploadImage'
    uploadImage.appendChild(imageUpload)
    /*elementos que van dentro de hijo 2*/
    const text1 = document.createElement('p')
    text1.textContent = 'Dale click o arrastra el archivo para subir'
    text1.className = 'textosUpload'
    const text2 = document.createElement('p')
    text2.className = 'textosUpload'
    text2.textContent = 'JPG,PNG'
    /*hijo 2*/
    const divText = document.createElement('div')
    divText.className = "divTextUpload"
    divText.appendChild(text1)
    divText.appendChild(text2)
    const modalContent = document.createElement('div')
    modalContent.className = 'modalContent'
    modalContent.appendChild(span)
    modalContent.appendChild(uploadImage)
    modalContent.appendChild(divText)
    return modalContent
}