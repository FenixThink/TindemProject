import { dataBussines } from "./section-data-bussines.js"
import { descriptionBussines } from "./section-description-bussines.js"

export const totalSectionB = (textLabelDescription,textTarea) => {

    const datosEmpresa = dataBussines();
    const descripcionEmpresa = descriptionBussines(textLabelDescription,textTarea);

    const divFather = document.createElement('div');
    divFather.className = "seccionB"
    divFather.appendChild(datosEmpresa);
    divFather.appendChild(descripcionEmpresa);
    return divFather;
}

