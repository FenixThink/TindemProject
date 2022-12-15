export function buttonsGender() {

    
    const labelBtn = document.createElement("label")
    labelBtn.className = "titleGender"
    labelBtn.textContent = "Identificación de género"

    const btn = document.createElement("div")
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

   const ContentFatherButtonsGender = document.createElement("div")
   ContentFatherButtonsGender.appendChild(labelBtn)
   ContentFatherButtonsGender.appendChild(btn)
  
    return ContentFatherButtonsGender
       

}