/* llamar al div general */
import {
    parentCreator
} from "../../../components/registerViewComponents/parent.js"

const app = document.querySelector('#app')
app.appendChild(parentCreator("https://i.ibb.co/0tYZSpb/image.png", "Nombres", "Apellidos", "Fecha y lugar de nacimiento", "Descripcion del perfil", "área de interés laboral"))

const button = document.querySelector('.submitButton')
//Foreach para la captura y manejo de inputs

button.addEventListener('click', () => {

    const inputCompanyName = document.querySelectorAll('.inputEmpresa')
    const description = document.querySelector('.description').value

    let data = []

    inputCompanyName.forEach((e) => {
        data.push(e.value)
    })

    data.push(description)

    //Banderita para evitar que se repita 50 veces los alerts
    let bandera = 0
    data.forEach((e) => {
        if (e == '') {
            if (bandera == 0) {
                alert('porfavor llena los espacios vacios  ')
                bandera = 1
            }
        } else {
            if (bandera == 0) {
                alert('sus datos han sido rellenados correctamente')
                bandera = 1

                const cuerpo = {
                    name: data[0],
                    lastname: data[1],
                    email: data[2],
                    password: data[3],
                    day_of_birth: data[4],
                    country: data[5],
                    city:data[6],
                    description: data[7],
                }

                // console.log(cuerpo)
            
                const transactionJson = JSON.stringify(cuerpo)
            
                fetch('http://localhost:5173/test', {
                    method: 'Post',
                    headers: {
                        "Content-type": 'application/json'
                    },
                    body: transactionJson
                })
            }
        }
    })

    console.log(data);


})


//Validacion de que el valor ingresado al input de email si sea un email

const cont = document.querySelector("#inputContraseñaID")

cont.disabled = true

const inputMail = document.querySelector('#inputMailID')

inputMail.addEventListener('focusout', (e) => {
    let bandera = 0;
    if (bandera == 0) {
        let regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(e.target.value);
        if (!regExpEmail) {
            alert("Email invalido");

        } else if (regExpEmail) {
            cont.disabled = false

        }
        bandera = 1

    }
});


// Validacion de que la contraseña cumpla con ciertos parametros (Minimo 8 letras, minimo una letra, minimo un digito)
document.querySelector("#inputContraseñaID").addEventListener("focusout", (e) => {
    let p = document.querySelector('#inputContraseñaID').value;
    let bandera = 0;
    let errors = [];
    if (p.length < 8) {
        errors.push("Tu contraseña debe contener al menos ocho caracteres");
    } else
    if (p.search(/[a-z]/i) < 0) {
        errors.push("Tu contraseña debe contener al menos un carácter");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Tu contraseña debe contener al menos un número.");
    }
    if (errors.length > 0) {
        if (bandera == 0) {
            alert(errors.join("\n"));
        }
    }
});