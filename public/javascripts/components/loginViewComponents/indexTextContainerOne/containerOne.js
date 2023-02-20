

const contOneCreator = () =>{



const titleIndex = document.createElement('h1');
titleIndex.className = "titleContainerOne";
titleIndex.textContent="Mensaje clave";

const subTitleIndex =document.createElement('span');
subTitleIndex.className = "subTitleContainerOne";
subTitleIndex.textContent = "listo para conectar con tu potencial?"

const desIndexContainer = document.createElement('p')
desIndexContainer.className="descContainerOne"
desIndexContainer.textContent = "Sistema web creado con el fin de establecer un enlace directo entre personas en busca de empleo y vacantes laborales "



const subContainer = document.createElement('div');
subContainer.className="subContainer"
subContainer.appendChild(titleIndex);
subContainer.appendChild(subTitleIndex);
subContainer.appendChild(desIndexContainer)



return subContainer 

}


export const containerText = contOneCreator()




