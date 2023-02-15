import { dataBussines } from "./section-data-bussines.js"
import { descriptionBussines } from "./section-description-bussines.js"

export const totalSectionB = (date, textLabelDescription) => {

    const datosEmpresa = dataBussines(date);
    const descripcionEmpresa = descriptionBussines(textLabelDescription);

    const divFather = document.createElement('div');
    divFather.className = "seccionB"
    divFather.appendChild(datosEmpresa);
    divFather.appendChild(descripcionEmpresa);
    return divFather;
}
