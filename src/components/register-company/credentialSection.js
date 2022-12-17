import { inputCreator } from '../../components/input/input.js'

export function credentialContainer() {
    /*Aquí EMPIEZA la creación de etiquetas de la sección SUPERIOR del CONTENEDOR de credenciales*/
    /*Creación de la etiqueta P referente al nombre de la empresa*/
    const textCompanyName = document.createElement('p');
    textCompanyName.className = "nombreEmpresa textoEmpresa";
    textCompanyName.textContent = "Nombre de la Empresa";
    /*Creación de la etiqueta INPUT referente al nombre de la empresa*/
    const inputCompanyName = inputCreator();
    inputCompanyName.className = "inputNombreEmp inputEmpresa";
    inputCompanyName.placeholder = "Placeholder_input";
    inputCompanyName.size = "25";

    /*Creación de la etiqueta P referente al nombre de usuario de la empresa*/
    const textCompanyUsername = document.createElement('p');
    textCompanyUsername.className = "nombreUsuario textoEmpresa";
    textCompanyUsername.textContent = "Nombre de usuario";
    /*Creación de la etiqueta INPUT referente al nombre de usuario de la empresa*/
    const inputCompanyUsername = inputCreator();
    inputCompanyUsername.className = "inputUsuarioEmp inputEmpresa";
    inputCompanyUsername.placeholder = "Placeholder_input";
    inputCompanyUsername.size = "25";
    /*Aquí TERMINA la creación de etiquetas de la sección SUPERIOR del CONTENEDOR de credenciales*/


    /*Aquí EMPIEZA la creación de etiquetas de la sección INFERIOR del CONTENEDOR de credenciales*/
    /*Creación de la etiqueta P referente al correo electronico de la empresa*/
    const textCompanyEmail = document.createElement('p');
    textCompanyEmail.className = "correoEmpresa textoEmpresa";
    textCompanyEmail.textContent = "Correo Electrónico";
    /*Creación de la etiqueta INPUT referente al correo electronico de la empresa*/
    const inputCompanyEmail = inputCreator();
    inputCompanyEmail.className = "inputCorreoEmp inputEmpresa";
    inputCompanyEmail.placeholder = "Placeholder_input";
    inputCompanyEmail.size = "25";

    /*Creación de la etiqueta P referente a la contraseña de la empresa*/
    const textCompanyPassword = document.createElement('p');
    textCompanyPassword.className = "contraseñaEmpresa textoEmpresa";
    textCompanyPassword.textContent = "Contraseña";
    /*Creación de la etiqueta INPUT referente a la contraseña de la empresa*/
    const inputCompanyPassword = document.createElement('input');
    inputCompanyPassword.type = "password";
    inputCompanyPassword.className = "inputContraseñaEmp inputEmpresa";
    inputCompanyPassword.placeholder = "Placeholder_input";
    inputCompanyPassword.size = "25";
    /*Aquí TERMINA la creación de etiquetas de la sección INFERIOR del CONTENEDOR de credenciales*/


    /*Creación del contenedor nombre de la empresa*/
    const contCompanyName = document.createElement('div');
    contCompanyName.className = "contNombreEmp contGeneral";
    contCompanyName.appendChild(textCompanyName);
    contCompanyName.appendChild(inputCompanyName);
    /*Creación del contenedor nombre de usuario de la empresa*/
    const contCompanyUsername = document.createElement('div');
    contCompanyUsername.className = "contUsuarioEmp contGeneral";
    contCompanyUsername.appendChild(textCompanyUsername);
    contCompanyUsername.appendChild(inputCompanyUsername);

    /*Creación  del contenedor correo electronico de la empresa*/
    const contCompanyMail = document.createElement('div');
    contCompanyMail.className = "contCorreoEmp contGeneral";
    contCompanyMail.appendChild(textCompanyEmail);
    contCompanyMail.appendChild(inputCompanyEmail);

    /*Creación  del contenedor contraseña de la empresa*/
    const contCompanyPassword = document.createElement('div');
    contCompanyPassword.className = "contContraseñaEmp contGeneral";
    contCompanyPassword.appendChild(textCompanyPassword);
    contCompanyPassword.appendChild(inputCompanyPassword);

    /*Creación de la subsecciónSuperior*/
    const upperSubSection = document.createElement('div');
    upperSubSection.className = "subSecSup";
    upperSubSection.appendChild(contCompanyName);
    upperSubSection.appendChild(contCompanyUsername);

    /*Creación de la subsecciónInferior*/
    const lowerSubSection = document.createElement('div');
    lowerSubSection.className = "subSecInf";
    lowerSubSection.appendChild(contCompanyMail);
    lowerSubSection.appendChild(contCompanyPassword);

    /* Contenedor padre de la sección de Credenciales!! */
    const credentialSection = document.createElement('div');
    credentialSection.className = "seccionCredenciales";
    credentialSection.appendChild(upperSubSection);
    credentialSection.appendChild(lowerSubSection);

    return credentialSection;
}