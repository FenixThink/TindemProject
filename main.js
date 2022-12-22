

import { background, log } from "./src/components/loginViewComponents/loginView.js"


document.querySelector('#app').appendChild(background())
document.querySelector('#app').appendChild(log())
 
const btn = document.querySelector('#sendBtn')

//  Validacion de que lo ingresado en el input email si sea un email
document.querySelector("#email").addEventListener("focusout", (e) => {

    let bandera = 0;
    if(bandera==0){

        let regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(e.target.value);
        
        if (!regExpEmail) {
            alert("Email invalido");
            bandera = 1
        }
    }

  });

  
  
//Condicional para evaluar si los inputs estan vacios o no
btn.addEventListener('click',(e)=>{
    
    e.preventDefault()
    const email  = document.querySelector('#email').value
    const psw  = document.querySelector('#psw').value

    if(!email||!psw){
        alert("Email or psw empty")

    }else{
        
        // Validacion de que la contraseña cumpla con ciertos parametros (Minimo 8 letras, minimo una letra, minimo un digito)
        let p = document.querySelector('#psw').value,
        
        errors = [];
    if (p.length < 8){
        errors.push("Your password must be at least 8 characters"); 
    }else 
    if (p.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit."); 
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));

    }else{
        document.querySelector('#email').value = ""
        document.querySelector('#psw').value = ""
        window.location="src/views/mainView/Aspirante/index.html"
    }
}

})