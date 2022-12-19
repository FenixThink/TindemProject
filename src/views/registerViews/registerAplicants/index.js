export function register() {
    const divPadre = document.createElement("div")
    divPadre.className = "container"   
    const left = document.createElement("div")
    left.className = "left"   
    divPadre.appendChild(left)
    const rigth = document.createElement("div")
    rigth.className = "rigth"
    divPadre.appendChild(rigth) 

   

    //imagen
    const divImg = document.createElement("div")
    left.appendChild(divImg) 
    divImg.textContent="Imagen-perfil"
    divImg.className = "img"

   

    //formulario
    const form = document.createElement("form") 
    rigth.appendChild(form)
    form.className = "form"
    const labelNom = document.createElement("label")
    labelNom.textContent = "Nombre Completo "
    labelNom.className ="nom"
    form.appendChild(labelNom)
    const inputNom = document.createElement("input")
    form.appendChild(inputNom)

   
    

    //cumpleaños
    const pBirth = document.createElement("label")
    form.appendChild(pBirth)
    pBirth.className = "birth"
    pBirth.textContent = "Fecha De Nacimiento"
    const birth = document.createElement("input")
    form.appendChild(birth)
    birth.type ="date"

    //usuario
    const labelUser = document.createElement("label")
    form.appendChild(labelUser)
    labelUser.textContent = "Usuario"
    const inputUser = document.createElement("input")
    form.appendChild(inputUser)

    //contraseña
    const labelPassword = document.createElement("label")
    form.appendChild(labelPassword)
    labelPassword.textContent = "Contraseña"
    const inputPassword = document.createElement("input")
    form.appendChild(inputPassword) 
    inputPassword.type ="password"

    // aca empieza la parte de pao 

     //botones
    const labelBtn = document.createElement("label")
    labelBtn.className = "titleGender"
    left.appendChild(labelBtn)
    labelBtn.textContent = "Identificación de género"

    const btn = document.createElement("div")
    left.appendChild(btn)
    btn.className ="btns"
   //Hombre 


   const contentMen = document.createElement("div")
    btn.appendChild(contentMen)
    contentMen.className = "contentMen"

    const  btnMen = document.createElement("button")
    contentMen.appendChild(btnMen)
    btnMen.className ="btnGender"

    const textMen = document.createElement("label")
    textMen.textContent = "Masculino"
    contentMen.appendChild(textMen)
    textMen.className = "labelGender"

    

    //Mujer

    const contentWoman = document.createElement("div")
    btn.appendChild(contentWoman)
    contentWoman.className = "contentWoman"

    const  btnWoman = document.createElement("button")
    contentWoman.appendChild(btnWoman)
    btnWoman.className ="btnGender"

    const textWoman = document.createElement("label")
    textWoman.textContent = "Femenino"
    contentWoman.appendChild(textWoman)
    textWoman.className = "labelGender"

    

    //otro 
    
    const contentOtro = document.createElement("div")
    btn.appendChild(contentOtro)
    contentOtro.className = "contentOtro"

    const btnOtro = document.createElement("button")
    contentOtro.appendChild(btnOtro)
    btnOtro.className = "btnGender"

    const textOtro = document.createElement("label")
    textOtro.textContent = "Otro"
    contentOtro.appendChild(textOtro)
    textOtro.className = "labelGender"
   

     //Perfil
     const perfil = document.createElement("div")
     perfil.className = "conPerfil"
     left.appendChild(perfil)

     /*const contentHijosPerfil = document.createElement("div")
     contentHijosPerfil.className = "contentHijosPerfil"
     perfil.appendChild(contentHijosPerfil)*/

     const textTitleDes = document.createElement("label")
     textTitleDes.textContent = "Descripcion Perfil"
     textTitleDes.className = "textTitleDes"
     perfil.appendChild(textTitleDes)

     const pPerfil = document.createElement("div")
     pPerfil.className = "pPerfil"
     perfil.appendChild(pPerfil)

     const placeHolder = document.createElement("label")
     placeHolder.textContent = "Placeholder"
     placeHolder.className = "placeHolder"
     pPerfil.appendChild(placeHolder)
     
     

    //intereses
    const divInteres =  document.createElement("div")
    rigth.appendChild(divInteres)
    const aInteres = document.createElement("a")
    aInteres.addEventListener("click", ()=>{
        const modal = document.querySelector("#modal")
        modal.classList.toggle("modal")
        modal.classList.toggle("block")
    })
    divInteres.appendChild(aInteres)
    divInteres.className = "interes"
    aInteres.textContent="SECCION DE INTERESES LABORALES"
    return divPadre
}

