import { parentCreator } from "./components/registerViewComponents/parent.js"
import { prueba } from "./components/modalOneCreateComponet/modalCratorTwo.js"

const app = document.querySelector('#app')

const query = async () => {

    const Countrys = await fetch(`/country/get`, {
        method: 'get',
        headers: {
            "Content-type": "application/json"
        }
    });

    const City = await fetch(`/city/get`, {
        method: 'get',
        headers: {
            "Content-type": "application/json"
        }
    });

    return [City, Countrys]
}

const data = await query()
const City = await data[0].json()
const Countrys = await data[1].json()

app.appendChild(await parentCreator("https://i.ibb.co/0tYZSpb/image.png", "Nombres", "Apellidos", "Fecha y lugar de nacimiento", "Descripcion del perfil", "área de interés laboral", City, Countrys, "applicant"))

//Validación de campos en el formulario
const formCompany = document.getElementById('formCompany')
const send = document.querySelector('.submitButton')



send.addEventListener('click', async () => {
    const spec = [...prueba]
    const body = {
        specialization: spec
    }

    const dataSpecialization = JSON.stringify(body)

    fetch('/profileSpecialization/create', {
        method: 'post',
        headers: {
            "content-type": 'application/json'
        },
        body: dataSpecialization
    })
})


send.addEventListener('submit', async (e) => {

    const inputCompanyName = document.querySelectorAll('.inputEmpresa')
    let description = document.querySelector('.description')
    let data = []

    inputCompanyName.forEach((e) => {
        if (e.value == 'Seleccione pais' || e.value == 'Seleccione ciudad') {
            data.push('')
            return
        }
        data.push(e.value)
    })
    data.push(description.value)

    //Condicional para definir si los campos estan vacios
    let emptyInputsBool = data.some(e => e === "")

    if (emptyInputsBool == true) {
        alert('Por favor llenar todos los datos requeridos')
    } else {

        // Validacion de que la contraseña cumpla con ciertos parametros (Minimo 8 letras, minimo una letra, minimo un digito)
        let p = document.querySelector('#inputContraseñaID').value;
        let errors = [];

        if (p.length < 8) {
            errors.push("Tu contraseña debe contener al menos ocho caracteres");
        } else if (p.search(/[a-z]/i) < 0) {
            errors.push("Tu contraseña debe contener al menos un carácter");
        }

        if (p.search(/[0-9]/) < 0) {
            errors.push("Tu contraseña debe contener al menos un número.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return
        }

        inputCompanyName.forEach((e, i) => {
            if (i == 5) {
                e.value = 'Seleccione pais'
                return
            } else if (i == 6) {
                e.value = 'Seleccione ciudad'
                return
            }
            e.value = ''
        })

        description.value = ''
    }
})

//Validacion de que el valor ingresado al input de email si sea un email

const inputMail = document.querySelector('#inputMailID')

inputMail.addEventListener('focusout', (e) => {
    let bandera = 0;
    if (bandera == 0) {
        let regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(e.target.value);
        if (!regExpEmail) {
            alert("Email invalido");
        }
        bandera = 1
    }
});