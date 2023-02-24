import { buttonCreator } from '../../button/button.js'

export function iconsButtons(){

  //Creación de botones
  const homeButton = buttonCreator();
  homeButton.className='home-icon icons-buttons'

  const profileButton = buttonCreator();
  profileButton.className='profile-icon icons-buttons'

  const chatButton = buttonCreator();
  chatButton.className='chat-icon icons-buttons'

  //Creación de íconos
  const iconHome = document.createElement('i');
  iconHome.className = 'fa fa-home';

  const iconProfile = document.createElement('i');
  iconProfile.className = 'fa fa-user';

  const iconChat = document.createElement('i');
  iconChat.className = 'fa fa-comment';

  //Agregar los íconos a los botones
  homeButton.appendChild(iconHome)
  profileButton.appendChild(iconProfile)/* 
  chatButton.appendChild(iconChat) */

  // Creción del div contenedor de los iconos
  const parent = document.createElement('div')
  parent.className = "parent-icons"
  parent.appendChild(homeButton)
  parent.appendChild(profileButton)

  return parent
}