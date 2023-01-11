import { parentCreator } from "../../../components/registerViewComponents/parent.js"

const app = document.querySelector('#app')
app.appendChild(parentCreator("https://i.ibb.co/5BTC7Tn/UserLogo.png", "Nombre de la empresa", "Nombre de usuario","Fecha y lugar de surgimiento", "Descripcion de la empresa", "Perfiles profesionales deseados"))

const send = document.querySelector('.submitButton')
//Foreach para la captura y manejo de inputs

    send.addEventListener('click', () => {

        const inputCompanyName = document.querySelectorAll('.inputEmpresa')
        let description = document.querySelector('.description')
        
        let data = []
        
        inputCompanyName.forEach((e) => {
            if(e.value=='Seleccione pais' || e.value=='Seleccione ciudad'){
                data.push('')
                return 
            }
            data.push(e.value)
        })
        data.push(description.value)

        //Condicional para definir si los campos estan vacios
        let emptyInputsBool = data.some(e=>e==="")

        console.log(emptyInputsBool)
        console.log(data.length)
        if(emptyInputsBool==true){
            alert('Por favor llenar todos los datos requeridos')
        }else{

            // Validacion de que la contraseña cumpla con ciertos parametros (Minimo 8 letras, minimo una letra, minimo un digito)
            let p = document.querySelector('#inputContraseñaID').value;
            let bandera = 0;
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

            window.location='../../mainView/aspirante/index.html'
            inputCompanyName.forEach((e,i)=>{
                if(i==5){
                    e.value='Seleccione pais'
                    return
                }else if(i==6){
                    e.value='Seleccione ciudad'
                    return
                }
                e.value = ''
            })
            console.log(description)
            
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



document.querySelector("#inputContraseñaID").addEventListener("focusout", () => {
    
});