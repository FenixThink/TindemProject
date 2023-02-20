//let nameImg

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
    image.src = '../../../../public/img/Vector.png'
    /* seccion input*/
    const inputUpload = document.createElement('input')
    inputUpload.type = 'file'
    inputUpload.className = 'fileInput'
    //Clase del input tipo File.
    inputUpload.name = 'img'
    inputUpload.setAttribute('id', 'archivoInput')
    inputUpload.addEventListener('change', () => {
        /*funcion -----------------------*/
        const inputFile = document.getElementById('archivoInput')
        const img = document.querySelector('.LogoRegister');
        const choosedFile = inputFile.files[0];
        //nameImg = inputFile.files[0].name;
        if (choosedFile) {
            const reader = new FileReader();
            modalContent.style.display = 'none'
            reader.addEventListener('load', function () {
                img.setAttribute('src', reader.result);
            });
            reader.readAsDataURL(choosedFile);
        }
    })
    /*----------------------------------*/

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
    /*elementos que van denton de hijo 2*/
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
    modalContent.style.display = 'none'

    return modalContent
}

// export function loadImage() {
//     return nameImg
// }