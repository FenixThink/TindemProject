import { parentCreator } from "../../../components/registerViewComponents/parent.js"

const app = document.querySelector('#app')

app.appendChild(parentCreator("https://i.ibb.co/5BTC7Tn/UserLogo.png", "Nombre de la empresa", "Nombre de usuario", "Descripcion de la empresa", "Perfiles profesionales deseados"))
const rutas = ["../../mainView/empresa/company.html", "../../chatView/index.html", "../../profileView/perfilAspirante.html"]
const botonesheader = document.querySelectorAll('.header')
botonesheader.forEach(element => {
    element.disabled = "disabled";
    element.addEventListener('click', () => {
        const inputCompanyName = document.querySelectorAll('.inputEmpresa')
        const description = document.querySelector('.description').value
        console.log(description);
        let data = []
        data.push(description)
        inputCompanyName.forEach((e) => {
            data.push(e.value)
        })
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
                    botonesheader.forEach((element, index) => {
                        element.style.backgroundColor = "#6171FF"
                        element.href = rutas[index];
                    })
                    bandera = 1
                }
            }

        })

    })

});

document.querySelector("#inputMailID").addEventListener("focusout", (e) => {
    let bandera = 0;
    if (bandera == 0) {
        let regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(e.target.value);
        if (!regExpEmail) {
            alert("Email invalido");
            bandera = 1
        }
    }
});

document.querySelector("#inputContraseñaID").addEventListener("focusout", (e) => {
    // Validacion de que la contraseña cumpla con ciertos parametros (Minimo 8 letras, minimo una letra, minimo un digito)
    let p = document.querySelector('#inputContraseñaID').value,
        errors = [];
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
        alert(errors.join("\n"));
    }
});