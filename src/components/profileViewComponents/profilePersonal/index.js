

export const obj = {
    id:1,
    img:'https://as01.epimg.net/meristation/imagenes/2022/05/19/noticias/1652944408_523527_1652944740_noticia_normal_recorte1.jpg',
    name: 'Jose Miguel',
    lastName: 'Orejarena Correa',
    age:'1997-07-25',
    country: 'Spain',
estudio:'ingenieria de sistemas',
    city:'madrid',
    description:'League of Legends (también conocido por sus siglas LoL), es un videojuego multijugador de arena de batalla en línea desarrollado y',
    email:'miguel@gmail.com',
    otros:['ingles','frances','programacion','chino','japones']

}

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()+1
    const day = date.getDate()
    const how =[year,  day,month]
   

    const yearUser = obj.age
    let caja =yearUser.split('-')
    
let edadReal
   
       if(caja[1]<=month){
        if(caja[2]<=day){
            edadReal=year-caja[0]
         }else{
            edadReal=((year-caja[0])-1)
         }
     }else{
        edadReal=year-caja[0]-1
     }
obj.age=edadReal





export function createProfileSup(body) {

const padre = document.createElement('div');
padre.className='profile';


const years = document.createElement('div');
years.className='years';
years.textContent = `${body.age}`;

const photo = document.createElement('div');
photo.className='photo';

const img = document.createElement('img');

img.className='img';
img.src = body.img;

photo.appendChild(years);
photo.appendChild(img);



const textName = document.createElement('div')
const date = document.createElement('div');
date.appendChild(textName);

const name = document.createElement('h1');
const lastName = document.createElement('h3');
const from = document.createElement('p');

lastName.textContent=body.lastName;
from.textContent=`${body.city} - ${body.country}`;
name.textContent = body.name

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



export function createProfileInf(body){

    const padre2 = document.createElement('div');
    padre2.className='profileInf';



    const otros = document.createElement('div')
    otros.className='otros';
const textOtros= document.createElement('h3')
textOtros.textContent='expesializaxion'
    otros.appendChild(textOtros)

   const otrosEstudios= body.otros
   otrosEstudios.forEach(element => {
    
        const li = document.createElement('li');
        li.textContent=element
        otros.appendChild(li);
        
        
    });
    console.log()
 
    const titleDescription=document.createElement('h3');
    titleDescription.className='titleDescription';
    titleDescription.textContent='descripcion del Usuario'

    const descriptionPadre = document.createElement('div');
    descriptionPadre.className='descriptionPerfil';
    const textDescription = document.createElement('p');
    textDescription.className='textDescription';
    textDescription.textContent=body.description
    
    
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
    estudio.textContent=body.estudio
    estudios.appendChild(estudio);
   
    
    eParents.appendChild(estudios);
    eParents.appendChild(otros)
    
    padre2.appendChild(eParents);
    padre2.appendChild(description);




    return padre2;
}




