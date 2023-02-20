export function dataBussines() {

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
    const optionb = document.createElement('option')
    optionb.textContent = "Colombia"
    const country = document.createElement('select');
    country.className = "inputCorreoEmp inputEmpresa"
    country.appendChild(option1)
    country.appendChild(optionb)
    const option2 = document.createElement('option')
    option2.textContent = "Seleccione ciudad"
    option2.defaultSelected
    const optionC = document.createElement('option')
    optionC.textContent = "Armenia"
    const optionD = document.createElement('option')
    optionD.textContent = "Barranquilla"
    const optionE = document.createElement('option')
    optionE.textContent = "Bogotá D.C"
    const optionF = document.createElement('option')
    optionF.textContent = "Bucaramanga"
    const optionG = document.createElement('option')
    optionG.textContent = "Cali"
    const optionH = document.createElement('option')
    optionH.textContent = "Cartagena"
    const optionI = document.createElement('option')
    optionI.textContent = "Cúcuta"
    const optionJ = document.createElement('option')
    optionJ.textContent = "Ibagué"
    const optionK = document.createElement('option')
    optionK.textContent = "Manizales"
    const optionL = document.createElement('option')
    optionL.textContent = "Medellín"
    const optionM = document.createElement('option')
    optionM.textContent = "Pereira"
    const optionN = document.createElement('option')
    optionN.textContent = "Santa Marta"
    const optionO = document.createElement('option')
    optionO.textContent = "Villavicencio"
    const optionP = document.createElement('option')
    optionP.textContent = "Aguachica"
    const optionQ = document.createElement('option')
    optionQ.textContent = "Apartado"
    const optionR = document.createElement('option')
    optionR.textContent = "Arauca"
    const optionS = document.createElement('option')
    optionS.textContent = "Barrancabermeja"
    const optionT = document.createElement('option')
    optionT.textContent = "Bello"
    const optionW = document.createElement('option')
    optionW.textContent = "Buenaventura"
    const optionX = document.createElement('option')
    optionX.textContent = "Buga"
    const optionY = document.createElement('option')
    optionY.textContent = "Cartago"
    const optionZ = document.createElement('option')
    optionZ.textContent = "Caucasia"
    const option3 = document.createElement('option')
    option3.textContent = "Cereté"
    const option4 = document.createElement('option')
    option4.textContent = "Chia"
    const option5 = document.createElement('option')
    option5.textContent = "Cinéga"
    option5.id = 1
    const option6 = document.createElement('option')
    option6.textContent = "Floridablanca"
    const option7 = document.createElement('option')
    option7.textContent = "Florencia"
    const option8 = document.createElement('option')
    option8.textContent = "Girón"
    const option9 = document.createElement('option')
    option9.textContent = "Girardot"
    const option11 = document.createElement('option')
    option11.textContent = "Itagüí"
    const option13 = document.createElement('option')
    option13.textContent = "Montería"
    const option14 = document.createElement('option')
    option14.textContent = "Neiva"
    const option15 = document.createElement('option')
    option15.textContent = "Ocaña"
    const option16 = document.createElement('option')
    option16.textContent = "Pasto"
    const option17 = document.createElement('option')
    option17.textContent = "Valledupar"

    const city = document.createElement('select');
    city.className = "inputCorreoEmp inputEmpresa"
    city.name = 'city';
    city.appendChild(option2)
    city.appendChild(optionC)
    city.appendChild(optionP)
    city.appendChild(optionQ)
    city.appendChild(optionR)
    city.appendChild(optionD)
    city.appendChild(optionF)
    city.appendChild(optionS)
    city.appendChild(optionT)
    city.appendChild(optionW)
    city.appendChild(optionX)
    city.appendChild(optionE)
    city.appendChild(optionY)
    city.appendChild(optionZ)
    city.appendChild(option3)
    city.appendChild(option4)
    city.appendChild(option5)
    city.appendChild(optionG)
    city.appendChild(optionH)
    city.appendChild(optionI)
    city.appendChild(option6)
    city.appendChild(option7)
    city.appendChild(option8)
    city.appendChild(option9)
    city.appendChild(optionJ)
    city.appendChild(option11)
    city.appendChild(optionK)
    city.appendChild(option13)
    city.appendChild(optionL)
    city.appendChild(option14)
    city.appendChild(option15)
    city.appendChild(optionM)
    city.appendChild(option16)
    city.appendChild(optionN)
    city.appendChild(optionO)
    city.appendChild(option17)

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
