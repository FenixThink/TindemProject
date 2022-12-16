export function modalUpload(){

    /*seccion para cerrar modal */ 

    const span = document.createElement('span')
    span.textContent = 'X'
    span.className = 'close'

    /*creacion de contenedor de imagen */ 

    const image = document.createElement('img');
    image.className = "imageUpload";
    image.src='../../../../public/img/Vector.png'

     /* seccion input*/
    const inputUpload = document.createElement('input')
    inputUpload.type='file'
    inputUpload.className ='fileInput'
    

   /* seccion de contenedor donde va la imagen*/

    const labelUpload = document.createElement('label')
    labelUpload.appendChild(image)
    labelUpload.appendChild(inputUpload)
    

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
    const text2 = document.createElement('p')
    text2.textContent = 'JPG,PNG'

    /*hijo 2*/ 

    const divText = document.createElement('div')
    divText.appendChild(text1)
    divText.appendChild(text2)



    const modalContent = document.createElement('div')
    modalContent.className = 'modalContent'
    modalContent.appendChild(span)
    modalContent.appendChild(uploadImage)
    modalContent.appendChild(divText)


    return modalContent

    

}