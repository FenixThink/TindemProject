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

app.appendChild(await parentCreator("https://i.ibb.co/5BTC7Tn/UserLogo.png", "Nombre de la empresa", "Nit", "Fecha y lugar de surgimiento", "Descripcion de la empresa", "Perfiles profesionales deseados", City, Countrys, "company"))

//Validación de campos en el formulario
const formCompany = document.getElementById('formCompany')

const inputs = document.querySelectorAll('#formCompany input')
//Expresiones implementadas para verificar la validez de los campos en el formulario
const expresiones = {
    username: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð0-9_-]{8,35}$/,
    password: /^(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,15}$/,
    email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    date: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
    nit: /^([0-9]){8,11}$/,
    interest: /^$/,
    img: /^$/
}

//Parametros para validar el formulario
const parametros = {
    name: false,
    nitOrLastname: false,
    email: false,
    password: false
}
//Función para validar el formulario
const validarFormulario = (e) => {
    console.log("validando Formulario");
    switch (e.target.name) {
        case "name":
            if (expresiones.username.test(e.target.value)) {
                document.getElementById('inputNameID').classList.remove("registerCompanyForm-incorrect")
                document.getElementById('inputNameID').classList.add("registerCompanyForm-correct");
                document.querySelector('#inputErrorID').hidden = true;
                document.querySelector('#inputErrorID').classList.remove("inputErrorActivo");
                parametros[e.target.name] = true;
            } else {
                document.getElementById('inputNameID').classList.remove("registerCompanyForm-correct");
                document.getElementById('inputNameID').classList.add("registerCompanyForm-incorrect");
                document.querySelector('#inputErrorID').hidden = false;
                document.querySelector('#inputErrorID').classList.add("inputErrorActivo");
                parametros[e.target.name] = false;
            }
            break;
        case "nitOrLastname":
            if (expresiones.nit.test(e.target.value)) {
                document.getElementById('inputNitID').classList.remove("registerCompanyForm-incorrect");
                document.getElementById('inputNitID').classList.add("registerCompanyForm-correct");
                document.querySelector('#nitErrorID').hidden = true;
                document.querySelector('#nitErrorID').classList.remove("inputErrorActivo");
                parametros[e.target.name] = true;
            } else {
                document.getElementById('inputNitID').classList.remove("registerCompanyForm-correct");
                document.getElementById('inputNitID').classList.add("registerCompanyForm-incorrect");
                document.querySelector('#nitErrorID').hidden = false;
                document.querySelector('#nitErrorID').classList.add("inputErrorActivo");
                parametros[e.target.name] = false;
            }
            break;
        case "email":
            if (expresiones.email.test(e.target.value)) {
                document.getElementById('inputMailID').classList.remove("registerCompanyForm-incorrect");
                document.getElementById('inputMailID').classList.add("registerCompanyForm-correct");
                document.querySelector('#emailErrorID').hidden = true;
                document.querySelector('#emailErrorID').classList.remove("inputErrorActivo");
                parametros[e.target.name] = true;
            } else {
                document.getElementById('inputMailID').classList.remove("registerCompanyForm-correct");
                document.getElementById('inputMailID').classList.add("registerCompanyForm-incorrect");
                document.querySelector('#emailErrorID').hidden = false;
                document.querySelector('#emailErrorID').classList.add("inputErrorActivo");
                parametros[e.target.name] = false;
            }
            break;
        case "password":
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('inputContraseñaID').classList.remove("registerCompanyForm-incorrect");
                document.getElementById('inputContraseñaID').classList.add("registerCompanyForm-correct");
                document.querySelector('#passwordErrorID').hidden = true;
                document.querySelector('#passwordErrorID').classList.remove("inputErrorActivo");
                parametros[e.target.name] = true;
            } else {
                document.getElementById('inputContraseñaID').classList.remove("registerCompanyForm-correct");
                document.getElementById('inputContraseñaID').classList.add("registerCompanyForm-incorrect");
                document.querySelector('#passwordErrorID').hidden = false;
                document.querySelector('#passwordErrorID').classList.add("inputErrorActivo");
                parametros[e.target.name] = false;
            }
            break;
    }
}
//Gran Hermano, que escucha cada tecla y click en los inputs.
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

const send = document.querySelector('.submitButton')


formCompany.addEventListener('submit', async (e) => {

    const archivoInput = document.getElementById('archivoInput')
    const choosedFile = archivoInput.files[0];
    const exist = (parametros.name && parametros.password && parametros.nitOrLastname && parametros.email)
    console.log("Estado Exist?", exist);
    console.log("Parametros", parametros);
    console.log("Estado IMG", choosedFile);

    if (exist == true && choosedFile) {
        console.log("Pasando");
        const aviso = {
            message: "userCreate"
        }
        localStorage.setItem('aviso', JSON.stringify(aviso));

        const spec = [...prueba]
        const body = {
            specialization: spec
        }
        const dataSpecialization = JSON.stringify(body)

        let timerInterval
        Swal.fire({
            title: 'Bienvenid@ a Tindem!',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                fetch('/profileSpecialization/create', {
                    method: 'post',
                    headers: {
                        "content-type": 'application/json'
                    },
                    body: dataSpecialization
                })
            }

        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Completa todos los campos!'
        })
        e.preventDefault()
        console.log("No se ingresarón todos los campos!");
    }
})

/*
formCompany.onsubmit =
send.addEventListener('click', async (e) => {
    const archivoInput = document.getElementById('archivoInput')
    const choosedFile = archivoInput.files[0];
    const exist = (parametros.name && parametros.password && parametros.nitOrLastname && parametros.email)
    console.log("Estado Exist?", exist);

    if (choosedFile) {
        console.log("TRU'");
        if (exist == true) {
            console.log("Pasando");
            const aviso = {
                message: "userCreate"
            }
            localStorage.setItem('aviso', JSON.stringify(aviso));
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
        } else {
    alert("Infinite")
}
    } else {
    alert("La IMAGEN!")
}
})
*/