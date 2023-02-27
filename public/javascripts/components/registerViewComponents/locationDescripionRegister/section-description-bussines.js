export function descriptionBussines(textLabelDescription) {

    //Creacion label description
    const descLabel = document.createElement('label');
    descLabel.textContent = textLabelDescription

    // creacion del textarea para descripcion de empresa
    const description = document.createElement('textarea');
    description.row = "10"
    description.col = "50"
    description.placeholder = "Descripción Breve"
    description.className = "description"
    description.id = "descriptionID"
    description.name = "description"
    description.maxLength = "255"
    description.required = true;
    /*Creación de la etiqueta P referente al texto de error del campo Descrición */
    const errorDescriptionField = document.createElement('p');
    errorDescriptionField.id = "descriptionErrorID";
    errorDescriptionField.className = "inputDescriptionError";
    errorDescriptionField.textContent = "Puede digitar hasta 255 caracteres como máximo";
    errorDescriptionField.hidden = true;
    //contenedor de fecha y ubicación
    const contDescription = document.createElement('div');
    contDescription.className = "container-description"
    contDescription.appendChild(descLabel);
    contDescription.appendChild(description);
    contDescription.appendChild(errorDescriptionField);
    return contDescription;

}