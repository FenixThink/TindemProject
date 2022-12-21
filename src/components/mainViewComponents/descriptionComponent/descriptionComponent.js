export function Description (spanTitle, spanTextDescription ) {

    // Creación de span, contenedor y clase para e titulo
    const spanTitleH3 = document.createElement('span')
    spanTitleH3.textContent = spanTitle;
    spanTitleH3.className = "spanTitle";

    const spanPlaceHolder = document.createElement('span')
    spanPlaceHolder.textContent = spanTextDescription;
    spanPlaceHolder.className = "spanPlaceHolder";

    const divSonTitle = document.createElement('div');
    divSonTitle.className = "divSonTitle"

    divSonTitle.appendChild(spanTitleH3)

    const divSonDescription = document.createElement('div');
    divSonDescription.className = "divSonDescription"

    divSonDescription.appendChild(spanPlaceHolder)

    const divDescription = document.createElement('div');
    divDescription.className = "divDescription"
    
    divDescription.appendChild(divSonTitle)
    divDescription.appendChild(divSonDescription)

    return divDescription;
}                                                                     