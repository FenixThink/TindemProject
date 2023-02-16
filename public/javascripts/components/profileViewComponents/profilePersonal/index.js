
    let positionStudy=0

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()+1
    const day = date.getDate()
    const how =[year,  day,month]



    export function createProfileSup(dataUser) {

     const yearUser = dataUser[0].day_of_birth
     let caja =yearUser.split('-')
     
    
    
        let edadReal
   
       if(caja[1]<=month){
        if(caja[0]<=day){
            edadReal=year-caja[2]
         }else{
            edadReal=((year-caja[2])-1)
         }
     }else{
        edadReal=year-caja[2]-1
     }


const padre = document.createElement('div');
padre.className='profile';


const years = document.createElement('div');
years.className='years';
years.textContent = edadReal;//fecha de nacimiento

const photo = document.createElement('div');
photo.className='photo';

const img = document.createElement('img');

img.className='img';
img.src = 'https://as01.epimg.net/meristation/imagenes/2022/05/19/noticias/1652944408_523527_1652944740_noticia_normal_recorte1.jpg';

photo.appendChild(years);
photo.appendChild(img);



const textName = document.createElement('div')
const date = document.createElement('div');
date.appendChild(textName);

const name = document.createElement('h1');
const lastName = document.createElement('h3');
const from = document.createElement('p');
;
from.textContent=`${dataUser[0].city} - Colombia`;
name.textContent =dataUser[0].name
lastName.textContent =dataUser[0].lastname

date.className='date';
name.className='name';
textName.appendChild(name);
textName.appendChild(lastName);
textName.appendChild(from);



padre.appendChild(photo);
padre.appendChild(date);


return padre;
    
}


//segunda parte de la vista para no llenar una sola funcion de codigo



export function createProfileInf(dataUser){
    const array = []
    for (const x in dataUser[1]) {
        array.push(x)
    }

    const padre2 = document.createElement('div');
    padre2.className='profileInf';



    const otros = document.createElement('div')
    otros.className='otros';
const textOtros= document.createElement('h3')
textOtros.textContent='Especializacion'
    otros.appendChild(textOtros)

   const liDiv = document.createElement('div')
        liDiv.className='liDiv'

        dataUser[1][array[0]].forEach(element => {
   
            const li = document.createElement('li');
            li.className='li';
            li.textContent=element
            
            liDiv.appendChild(li);
            
            
    });
    otros.appendChild(liDiv);
 

   
 
    const titleDescription=document.createElement('h3');
    titleDescription.className='titleDescription';
    titleDescription.textContent='descripcion del Usuario'


    const descriptionPadre = document.createElement('div');
    descriptionPadre.className='descriptionPerfil';
    const textDescription = document.createElement('p');
    textDescription.className='textDescription';
    textDescription.textContent=dataUser[0].description
    
  
    
    const description = document.createElement('div');
    description.className='descriptionProfile';



description.appendChild(titleDescription);
description.appendChild(descriptionPadre);
descriptionPadre.appendChild(textDescription);
   

    
    const eParents =document.createElement('div');
    eParents.className='eParents';

    const estudios = document.createElement('div');
    estudios.className='estudios';
    const estudio = document.createElement('p')
    estudio.className='estudio';
    estudio.textContent= array[0]
   
    
    // botones que determinan el estudio 
    const nextDiv = document.createElement('div');
    nextDiv.className='next';
    const next = document.createElement('img');
    next.classList='nextImg'
    
    next.src='https://i.ibb.co/s6yngJd/928.png';

    if (array.length==1) {
        
        next.style.display = 'none';
    }
    next.onclick=function(){
       
       
        positionStudy++;
        before.style.display = 'flex';
        
        const clear =document.querySelectorAll('.li')
        liDiv.style.transition = 'transform .25s ease-in-out'
        liDiv.style.transform = 'translate(-200%,0)'

      
                    
        estudio.style.transition = 'transform .25s ease-in-out'
        estudio.style.transform = 'translate(-200%,0)'
            

                setTimeout(() => {
                    estudio.textContent=''
                    estudio.style.transition = 'transform.25s ease-in-out'
                    estudio.style.transform = 'translate(200%,0)' 
                
                }, 100);
                setTimeout(() => {
                    estudio.textContent=array;
                    
                    estudio.style.transition = 'transform.25s ease-in-out'
                            estudio.style.transform = 'translate(0,0)'
                }, 200);
                setTimeout(()=>{
            
                        clear.forEach(e => {e.remove()})

                           
                            liDiv.style.transition = 'transform .25s ease-in-out'
                            liDiv.style.transform = 'translate(0%,0)'
                           
                },100)
                dataUser[1][array].forEach(element => {

                const li = document.createElement('li');
                li.className='li';
                li.textContent=element
                li.style.transform = 'translate(200%,0)'
                
                liDiv.appendChild(li);
                setTimeout(()=>{

                    li.style.transition = 'transform .25s ease-in-out'
                    li.style.transform = 'translate(0,0)'
                  
                },200)
            
            
        });
       
        
        if ((dataUser[1]-1)==positionStudy) {
            next.style.display = 'none';
            
        }
    
    }
    const beforeDiv = document.createElement('div');
    beforeDiv.className='before';
    const before = document.createElement('img');
    before.className='beforeImg';
   
    before.src='https://i.ibb.co/4Vfybd5/left-arrow-regular-24.png';
    before.style.display = 'none';
    before.onclick=function(){
        positionStudy--;
        next.style.display = 'flex';
        
        const clear =document.querySelectorAll('.li')
        
        
        liDiv.style.transition = 'transform .25s ease-in-out'
        liDiv.style.transform = 'translate(200%,0)'
       
        estudio.style.transition = 'transform .25s ease-in-out'
        estudio.style.transform = 'translate(200%,0)'
            

                setTimeout(() => {
                    estudio.textContent=''
                    estudio.style.transition = 'transform.25s ease-in-out'
                    estudio.style.transform = 'translate(-200%,0)' 
                
                }, 100);
                setTimeout(() => {
                    estudio.textContent=array;
                    
                    estudio.style.transition = 'transform.25s ease-in-out'
                            estudio.style.transform = 'translate(0,0)'
                }, 200);

        setTimeout(()=>{
            
            clear.forEach(e => {
                

                e.remove()})
                
                liDiv.style.transition = 'transform .25s ease-in-out'
                 liDiv.style.transform = 'translate(0%,0)'
        },100)
        

        dataUser[1][array].forEach(element => {
    
            const li = document.createElement('li');
            li.className='li';
            li.textContent=element
            li.style.transform = 'translate(-200%,0)'
                liDiv.appendChild(li);
                setTimeout(()=>{

                    li.style.transition = 'transform .25s ease-in-out'
                    li.style.transform = 'translate(0,0)'
                },200)
           
            
            
        });
        if (positionStudy==0) {
           
            before.style.display = 'none';
            next.style.display = 'flex';
        }
        }

   
    beforeDiv.appendChild(before);
    estudios.appendChild(beforeDiv);
    estudios.appendChild(estudio);

    nextDiv.appendChild(next);

    estudios.appendChild(nextDiv);


    eParents.appendChild(estudios);
    eParents.appendChild(otros)
    
    padre2.appendChild(eParents);
    padre2.appendChild(description);




    return padre2;
}




