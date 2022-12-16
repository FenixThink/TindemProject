import { modalUpload } from "../modalUploadPhotoCompany/modalUploadCompany.js"
export function miFunction() {

    const modalUploadImage = modalUpload()
    const divFatherUpload = document.createElement('div')
    divFatherUpload.appendChild(modalUploadImage)

    return divFatherUpload;


}

