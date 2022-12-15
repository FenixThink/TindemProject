
//La funcion tendra como parametro el texto que ira dentro del boton
export const buttonCreator=(textContent,className)=>{

    //Creacion de un boton

    const btn = document.createElement('button')
    btn.textContent = textContent
    btn.className = className
 

    return btn

}
