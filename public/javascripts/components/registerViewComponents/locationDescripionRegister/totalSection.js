import { dataBussines } from "./section-data-bussines.js"
import { descriptionBussines } from "./section-description-bussines.js"

export const totalSectionB = async (date, textLabelDescription,city,country) => {

    const datosEmpresa = await dataBussines(city,country);
    const descripcionEmpresa = descriptionBussines(textLabelDescription);

    const divFather = document.createElement('div');
    divFather.className = "seccionB"
    divFather.appendChild(datosEmpresa);
    divFather.appendChild(descripcionEmpresa);
    return divFather;
}

