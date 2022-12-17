import { dataBussines } from "./section-data-bussines.js"
import { descriptionBussines } from "./section-description-bussines.js"

const totalSectionB = () => {

    const datosEmpresa = dataBussines();
    const descripcionEmpresa = descriptionBussines();

    const divFather = document.createElement('div');
    divFather.className = "seccionB"
    divFather.appendChild(datosEmpresa);
    divFather.appendChild(descripcionEmpresa);
    return divFather;
}

export const functionMain = totalSectionB();
