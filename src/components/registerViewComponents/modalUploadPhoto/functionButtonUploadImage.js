import { modalUpload } from "./modalUpload.js"
export function miFunction() {
    const modalUploadImage = modalUpload()
    const divFatherUpload = document.createElement('div')

   // const viewModal = () =>{
        divFatherUpload.className='divFatherUpload'
        divFatherUpload.style.display="hidden"
        divFatherUpload.appendChild(modalUploadImage)
   // }

    //window.addEventListener('load',viewModal)

    return divFatherUpload;


}