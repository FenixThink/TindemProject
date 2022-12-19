export function descriptionBussines() {

    //Creacion label description
    const descLabel = document.createElement('label');
    descLabel.textContent = "Descripcion del perfil"

    // creacion del textarea para descripcion de empresa
    const description = document.createElement('textarea');
    description.row ="10"
    description.col ="50"
    description.placeholder = "Placeholder"
    description.className = "description"

    //contenedor de fecha y ubicación
    const contDescription = document.createElement('div');
    contDescription.className = "container-description"
    contDescription.appendChild(descLabel);
    contDescription.appendChild(description);

    return contDescription;

}