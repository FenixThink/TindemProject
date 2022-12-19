

const contOneCreator = () =>{



const titleIndex = document.createElement('h1');
titleIndex.className = "titleContainerOne";
titleIndex.textContent="Mensaje clave";

const subTitleIndex =document.createElement('span');
subTitleIndex.className = "subTitleContainerOne";
subTitleIndex.textContent = "Eslogan de la plataforma"

const desIndexContainer = document.createElement('p')
desIndexContainer.className="descContainerOne"
desIndexContainer.textContent = "Descripción de la plataforma,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "



const subContainer = document.createElement('div');
subContainer.className="subContainer"
subContainer.appendChild(titleIndex);
subContainer.appendChild(subTitleIndex);
subContainer.appendChild(desIndexContainer)



return subContainer 

}


export const containerText = contOneCreator()




