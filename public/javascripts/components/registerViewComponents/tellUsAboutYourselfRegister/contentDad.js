import { area } from './spanArea.js'
import { title } from './tellUsAboutYourself.js'

// creacion del contenedor padre con los otros archovos exportados 
export const contentDad = () => {

  const title1 = title()

  const spanArea = area()
  const btnAdd = document.createElement('input');
  btnAdd.type = 'button'
  btnAdd.value = 'Agrega tu interés laboral:'
  btnAdd.className = "interestBtn"


  btnAdd.onclick = function () {
    document.querySelector(".modalPadre").style.display = "grid"
  }

  const parent = document.createElement('div')
  parent.className = "parentInterest"
  parent.appendChild(title1)
  parent.appendChild(spanArea)
  parent.appendChild(btnAdd)


  return parent

}


export function enviar(e) {
  const padre = document.createElement('div');
  document.querySelector(".rolesInProfiles").appendChild(padre)

  e.forEach(i => {
    console.log(i,'este es el console ')
    const botones = document.createElement('input');
    botones.type = 'button';
    botones.className = 'optionsRoles'
    botones.value = i
    padre.appendChild(botones)
  });


}
