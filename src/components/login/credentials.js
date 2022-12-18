import { inputCreator } from '../../components/input/input.js'

export const credentials = () => {

    //Creación del label del correo electrónico
    const emailLabel = document.createElement('label')
    emailLabel.textContent="Correo Electronico"
    emailLabel.className = "emailLabel"

    //Creación del input del correo electrónico
    const emailInput = inputCreator()
    emailInput.placeholder="Correo Electrónico"
    emailInput.className = "input"

    //Creación del label de la contraseña
    const passwordLabel = document.createElement('label')
    passwordLabel.textContent="Contraseña"
    passwordLabel.className = "passwordLabel"
    
    //Creación del input del correo electrónico
    const passwordInput = inputCreator()
    passwordInput.placeholder="Contraseña"
    passwordInput.className = "input"

    //Creacion del div donde se encuentrar el input de email y de contraseña 
    const credentialsLogin = document.createElement('div')
    credentialsLogin.appendChild(emailLabel)
    credentialsLogin.appendChild(emailInput)
    credentialsLogin.appendChild(passwordLabel)
    credentialsLogin.appendChild(passwordInput)
    credentialsLogin.className='credentials-login'

    return credentialsLogin
}