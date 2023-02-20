import { background, log } from "./components/loginViewComponents/loginView.js"

document.querySelector('#app').appendChild(background())
document.querySelector('#app').appendChild(log())

const btn = document.querySelector('#sendBtn')

//  Validacion de que lo ingresado en el input email si sea un email
document.querySelector("#email").addEventListener("focusout", (e) => {
    let email = document.getElementById('email');
    let bandera = 0;
    if (bandera == 0) {

        let regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(e.target.value);

        if (!regExpEmail) {
            email.style.border = "solid 3px red";
            bandera = 1
        }else{
            email.style.border = "solid 3px green";
        }
    }
});
//Condicional para evaluar si los inputs estan vacios o no
btn.addEventListener('click', async (e) => {

    const email = document.querySelector('#email').value
    const psw = document.querySelector('#psw').value

    const cuerpo = {
        email: email,
        password: psw
    }
        const response = await fetch('/api/login/',{
            method:'post',
            headers:{
                "Content-type":'application/json'
            },
            body: JSON.stringify(cuerpo)
        })
        const data = await response.json();

        if(data.message==false){
            Swal.fire({
                title: 'Error!',
                text: 'Credenciales invalidas',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
        
        if (data.message == "user atutenticado") {
            localStorage.setItem("token",  (data.token))
            window.location = '/home'
        }

}


)
