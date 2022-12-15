
//La funcion tendra como parametro el texto del boton, su clase y su color
export const buttonCreator=(textContent,className,color)=>{

    //Creacion de un boton

    const btn = document.createElement('button')
    btn.textContent = textContent
    btn.className = className
    btn.style.backgroundColor = color

    return btn

}
