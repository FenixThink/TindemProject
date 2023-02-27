import { inputCreator } from '../../input/input.js'

export function credentialContainer(firstInput, secondInput) {
    /*Aquí EMPIEZA la creación de etiquetas de la sección SUPERIOR del CONTENEDOR de credenciales*/
    /*Creación de la etiqueta P referente al nombre de la empresa*/
    const textCompanyName = document.createElement('p');
    textCompanyName.className = "nombreEmpresa textoEmpresa";
    textCompanyName.textContent = firstInput;
    /*Creación de la etiqueta INPUT referente al nombre de la empresa*/
    const inputCompanyName = inputCreator();
    inputCompanyName.className = "inputNombreEmp inputEmpresa";
    /* inputCompanyName.placeholder = "Nombre"; */
    inputCompanyName.name = "name"
    inputCompanyName.id = "inputNameID"

    inputCompanyName.size = "25";
    inputCompanyName.required = true;

    /*Creación de la etiqueta P referente al texto de error del campo Nombre */
    const errorTextName = document.createElement('p');
    errorTextName.id = "inputErrorID"
    errorTextName.className = "inputError";
    errorTextName.textContent = "El nombre debe ser superior a 8 dígitos y solo puede contener letras, números y guión bajo."
    errorTextName.hidden = true

    /*Creación de la etiqueta P referente al nombre de usuario de la empresa*/
    const textCompanyNit = document.createElement('p');
    textCompanyNit.className = "nombreUsuario textoEmpresa";
    textCompanyNit.textContent = secondInput;
    /*Creación de la etiqueta INPUT referente al NIT de la empresa*/
    const inputCompanyNit = inputCreator();
    inputCompanyNit.className = "inputUsuarioEmp inputEmpresa";
    inputCompanyNit.name = "nitOrLastname";
    inputCompanyNit.id = "inputNitID"
    /* inputCompanyNit.placeholder = "NIT"; */
    inputCompanyNit.size = "25";
    inputCompanyNit.required = true;
    /*Creación de la etiqueta P referente al texto de error del campo NIT */
    const errorNitField = document.createElement('p');
    errorNitField.id = "nitErrorID"
    errorNitField.className = "inputNitError";
    errorNitField.textContent = "El nit debe ser superior a 8 y menor a 11 dígitos, asegurese de digitar SOLO números y el NIT de su empresa."
    errorNitField.hidden = true
    /*Aquí TERMINA la creación de etiquetas de la sección SUPERIOR del CONTENEDOR de credenciales*/


    /*Aquí EMPIEZA la creación de etiquetas de la sección INFERIOR del CONTENEDOR de credenciales*/
    /*Creación de la etiqueta P referente al correo electronico de la empresa*/
    const textCompanyEmail = document.createElement('p');
    textCompanyEmail.className = "correoEmpresa textoEmpresa";
    textCompanyEmail.textContent = "Correo Electrónico";
    /*Creación de la etiqueta INPUT referente al correo electronico de la empresa*/
    const inputCompanyEmail = inputCreator();
    inputCompanyEmail.className = "inputCorreoEmp inputEmpresa";
    inputCompanyEmail.name = "email"
    inputCompanyEmail.id = "inputMailID";
    /* inputCompanyEmail.placeholder = "Correo Electrónico"; */
    inputCompanyEmail.size = "25";
    inputCompanyEmail.required = true;
    /*Creación de la etiqueta P referente al texto de error del campo Email */
    const errorEmailField = document.createElement('p');
    errorEmailField.id = "emailErrorID"
    errorEmailField.className = "inputEmailError";
    errorEmailField.textContent = "Asegurese de digitar su E-mail correctamente!!"
    errorEmailField.hidden = true

    /*Creación de la etiqueta P referente a la contraseña de la empresa*/
    const textCompanyPassword = document.createElement('p');
    textCompanyPassword.className = "contraseñaEmpresa textoEmpresa";
    textCompanyPassword.textContent = "Contraseña";
    /*Creación de la etiqueta INPUT referente a la contraseña de la empresa*/
    const inputCompanyPassword = inputCreator();
    inputCompanyPassword.type = "password";
    inputCompanyPassword.className = "inputContraseñaEmp inputEmpresa";
    inputCompanyPassword.name = "password"
    inputCompanyPassword.id = "inputContraseñaID";
    /* inputCompanyPassword.placeholder = "Contraseña"; */
    inputCompanyPassword.size = "25";
    inputCompanyPassword.required = true;
    /*Creación de la etiqueta P referente al texto de error del campo Email */
    const errorPasswordField = document.createElement('p');
    errorPasswordField.id = "passwordErrorID"
    errorPasswordField.className = "inputPasswordError";
    errorPasswordField.textContent = "Su contraseña debe ser mayor a 8 dígitos y menor a 16 dígitos, contener una letra mayúscula, una letra minúscula, un número y un carácter especial"
    errorPasswordField.hidden = true

    /*Aquí TERMINA la creación de etiquetas de la sección INFERIOR del CONTENEDOR de credenciales*/


    /*Creación del contenedor nombre de la empresa*/
    const contCompanyName = document.createElement('div');
    contCompanyName.className = "contNombreEmp contGeneral";
    contCompanyName.appendChild(textCompanyName);
    contCompanyName.appendChild(inputCompanyName);
    contCompanyName.appendChild(errorTextName);

    /*Creación del contenedor nombre de usuario de la empresa*/
    const contCompanyNit = document.createElement('div');
    contCompanyNit.className = "contUsuarioEmp contGeneral";
    contCompanyNit.appendChild(textCompanyNit);
    contCompanyNit.appendChild(inputCompanyNit);
    contCompanyNit.appendChild(errorNitField);

    /*Creación  del contenedor correo electronico de la empresa*/
    const contCompanyMail = document.createElement('div');
    contCompanyMail.className = "contCorreoEmp contGeneral";
    contCompanyMail.appendChild(textCompanyEmail);
    contCompanyMail.appendChild(inputCompanyEmail);
    contCompanyMail.appendChild(errorEmailField);

    /*Creación  del contenedor contraseña de la empresa*/
    const contCompanyPassword = document.createElement('div');
    contCompanyPassword.className = "contContraseñaEmp contGeneral";
    contCompanyPassword.appendChild(textCompanyPassword);
    contCompanyPassword.appendChild(inputCompanyPassword);
    contCompanyPassword.appendChild(errorPasswordField);
    /*Creación de la subsecciónSuperior*/
    const upperSubSection = document.createElement('div');
    upperSubSection.className = "subSecSup";
    upperSubSection.appendChild(contCompanyName);
    upperSubSection.appendChild(contCompanyNit);

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