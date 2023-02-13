import { background, log } from "./components/loginViewComponents/loginView.js"


document.querySelector('#app').appendChild(background())
document.querySelector('#app').appendChild(log())

const btn = document.querySelector('#sendBtn')

//  Validacion de que lo ingresado en el input email si sea un email
document.querySelector("#email").addEventListener("focusout", (e) => {

    let bandera = 0;
    if (bandera == 0) {

        let regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(e.target.value);

        if (!regExpEmail) {
            alert("Email invalido");
            bandera = 1
        }
    }
});
//Condicional para evaluar si los inputs estan vacios o no
btn.addEventListener('click', async (e) => {
    
    const email = document.querySelector('#email').value
    const psw = document.querySelector('#psw').value

    const cuerpo = {
        email: email,
        userPassword: psw
    }

    const transactionJson = JSON.stringify(cuerpo)
    console.log(transactionJson)
    fetch('/',{
        method:'post',
        headers:{
            "Content-type":'application/json'
        },
        body: transactionJson
    })

    const applicants = await fetch('/allaspirant',{
        method: 'get',
        headers:{
            "Content-type":'application/json'
        }
    })
    const data = await applicants.json()
    console.log(data)

    
/* 
    if (!email || !psw) {
        alert("Email o contraseña incompletas")

    } else {
        
        if (psw !== "gatitoFudioso777") {
            alert("Digite su contraseña correctamente")
        } else {
            document.querySelector('#email').value = ""
            document.querySelector('#psw').value = ""
            window.location = "src/views/mainView/aspirante/index.html"
        }
    } */
}

)
