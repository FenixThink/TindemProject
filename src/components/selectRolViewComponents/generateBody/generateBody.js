import { generateCard } from "../generateCard/generateCard.js"
export const generateBody = ()=>{
    const modal = document.createElement("div")
    modal.id = "modal"
    modal.classList = "appModal"
    
    const appModalContentmodal = document.createElement("div")
    appModalContentmodal.classList = "appModalContent-modal"

    const cardAspirante = generateCard("/svg/aspirante.svg","imgAspirante","Como Aspirante","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium laboriosam vero repellendus ad nam incidunt natus optio eligendi","Continuar","../registerViews/registerAplicants/index.html")

    const cardEmpresa = generateCard("/svg/empresa.svg","imgEmpresa","Como Empresa","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium laboriosam vero repellendus ad nam incidunt natus optio eligendi","Continuar","../registerViews/registerBusiness/index.html")
    modal.appendChild(appModalContentmodal)
    appModalContentmodal.appendChild(cardAspirante)
    appModalContentmodal.appendChild(cardEmpresa)
    return modal
}