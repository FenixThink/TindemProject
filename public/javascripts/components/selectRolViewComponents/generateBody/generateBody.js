import { generateCard } from "../generateCard/generateCard.js"
export const generateBody = ()=>{
    const modal = document.createElement("div")
    modal.id = "modal"
    modal.classList = "appModal"
    
    const appModalContentmodal = document.createElement("div")
    appModalContentmodal.classList = "appModalContent-modal"

    const cardAspirante = generateCard("https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc=","imgAspirante","Como Aspirante","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium laboriosam vero repellendus ad nam incidunt natus optio eligendi","Continuar","/register/applicant")

    const cardEmpresa = generateCard("https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueXxlbnwwfHwwfHw%3D&w=1000&q=80","imgEmpresa","Como Empresa","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium laboriosam vero repellendus ad nam incidunt natus optio eligendi","Continuar","/register/company")
    modal.appendChild(appModalContentmodal)
    appModalContentmodal.appendChild(cardAspirante)
    appModalContentmodal.appendChild(cardEmpresa)
    return modal
}