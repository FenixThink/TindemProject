import { generateCard } from "../generateCard/generateCard.js"
export const generateBody = ()=>{
    const modal = document.createElement("div")
    modal.id = "modal"
    modal.classList = "appModal"
    
    const appModalContentmodal = document.createElement("div")
    appModalContentmodal.classList = "appModalContent-modal"

    const cardAspirante = generateCard("https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=","imgAspirante","Como Aspirante","Iniciaras con el registro de tu perfil profecional para aplicar a empleos con empresas reconocidas de la ciudad ","Continuar","/register/applicant")

    const cardEmpresa = generateCard("https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueXxlbnwwfHwwfHw%3D&w=1000&q=80","imgEmpresa","Como Empresa","Iniciaras con el registro de Empresa para encontar colaboradores con experiencia en cada  rol selecionado","Continuar","/register/company")
    modal.appendChild(appModalContentmodal)
    appModalContentmodal.appendChild(cardAspirante)
    appModalContentmodal.appendChild(cardEmpresa)
    return modal
}