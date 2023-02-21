export const dataBussines = async(citys,countrys) => {
    
    const emails = []
    let allCountrys = {}

    // Texto Principal
    const infoTitle = document.createElement('div');
    infoTitle.textContent = "Fecha y lugar de nacimiento"
    infoTitle.className = "info"

    //creacion labels de fecha y ubicación
    const birthLabel = document.createElement('label');

    birthLabel.textContent = "Fecha de nacimiento"
    const countryLabel = document.createElement('label');
    countryLabel.textContent = "Pais"
    const cityLabel = document.createElement('label');
    cityLabel.textContent = "Ciudad"

    //creacion input y selects
    const birth = document.createElement('input');
    birth.className = "inputCorreoEmp inputEmpresa"
    birth.type = 'date'
    birth.name = 'date'
    birth.placeholder = "Select date"
    const option1 = document.createElement('option')
    option1.textContent = "Seleccione pais"
    option1.defaultSelected

    const country = document.createElement('select');
    country.className = "inputCorreoEmp inputEmpresa"
    country.className = "inputCorreoEmp inputEmpresa"
    country.appendChild(option1)

    countrys.respuesta.forEach(e => {
        const option = document.createElement('option')
        option.textContent=e.name
        country.appendChild(option)
    });


    const option2 = document.createElement('option')
    option2.textContent = "Seleccione ciudad"
    option2.defaultSelected
     
    const city = document.createElement('select');
    city.className = "inputCorreoEmp inputEmpresa"
    city.name = 'city';
    city.appendChild(option2)
    
    citys.respuesta.forEach(e => {
        const option = document.createElement('option')
        option.textContent=e.name
        city.appendChild(option)
    });

    //creacion del div Birth
    const divBirth = document.createElement('div');
    divBirth.className = "div-info"
    divBirth.appendChild(birthLabel);
    divBirth.appendChild(birth);

    //creacion del div Country
    const divCountry = document.createElement('div');
    divCountry.className = "div-info";
    divCountry.appendChild(countryLabel);
    divCountry.appendChild(country);

    //creacion del div City
    const divCity = document.createElement('div');
    divCity.className = "div-info";
    divCity.appendChild(cityLabel);
    divCity.appendChild(city);

    //contenedor de los div Birth, Country y City
    const contData = document.createElement('div')
    contData.className = "info-location"
    contData.appendChild(divBirth);
    contData.appendChild(divCountry);
    contData.appendChild(divCity);

    //contenedor de fecha y ubicación
    const contLocation = document.createElement('div');
    contLocation.className = "container-location"
    contLocation.appendChild(infoTitle);
    contLocation.appendChild(contData);



    //contenedor de fecha y ubicación
    // const container = document.createElement('div');
    // container.className = "container"
    // container.appendChild(contLocation);
    // container.appendChild(contDescription);

    return contLocation;

};
