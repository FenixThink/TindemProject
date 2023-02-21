export const centerCreator = ()=>{

    //Creacion del padre donde se ubicara lo de los mensajes y el input
    const div1 = document.createElement('div')
    div1.className = 'padreMensajes'

    //Creacion del padre donde se ubicaran los mensajes
    const div2 = document.createElement('div')
    div2.className = "padreCenter"
        

        div2.appendChild(div1)

    return div2

}