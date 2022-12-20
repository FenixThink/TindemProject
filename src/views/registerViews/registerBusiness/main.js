import { parent } from "../../../components/registerCompanyView/parent.js"

const app = document.querySelector('#app')
app.appendChild(parent)

const botonesheader = document.querySelectorAll('.header')
botonesheader.forEach(element => {
    element.addEventListener('click',()=>{
        const inputCompanyName = document.querySelectorAll('.inputEmpresa')
        const description = document.querySelector('.description').value
        console.log(description);
        let data = []
        data.push(description)
        inputCompanyName.forEach((e)=>{
        
            data.push(e.value,)


        })
        
        let bandera =0 
        

        data.forEach((e)=>{

            if(e==''){
                if(bandera==0){
                    alert ('porfavor llena los espacios vacios  ')
                    bandera=1
                }
            }else {
                if(bandera==0){
                    alert('sus datos han sido rellenados correctamente')
                    bandera=1

                }
                
            }
        })

        const fileInput = document.querySelector('.fileInput')
       

    
        
        
    
    
    })
    
});
