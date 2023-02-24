export  function divSearch(infoMessage){
    
    const searchContac=document.createElement('input') //creando el input de busqueda
        searchContac.className="searchContac"// añadiendole la clase al input de busqueda
        searchContac.placeholder="Search chat"

    //Configurando el input para realizar la busqueda de algun chat

    async function chat (infoMessage){
        
        searchContac.addEventListener('keyup',(e)=>{
            for (let i = 1; i <= infoMessage.length; i++) {
                let id = document.getElementById((infoMessage[i-1].id_company) || (infoMessage[i-1].id_applicant))
               if(searchContac.value!=''){
                let name = infoMessage[i-1].name_company ??= infoMessage[i-1].name_applicant;
                name = name.toLowerCase()
                   let searchName = searchContac.value.toLowerCase()
                   if(!name.startsWith(searchName)){
                       id.style.display='none'
                   }
               }else{
                   id.style.display='flex'
               }
           } 
       })
        
    }
    chat(infoMessage)

    const lupa=document.createElement('img')/*el boton para la lupa del buscador */
        lupa.className='lupa'
        lupa.src='https://cdn-icons-png.flaticon.com/512/2319/2319177.png'

    const search=document.createElement('div')/*este es el div que contiene el boton y el input y que tiene forma ovalar*/
        search.className='searc'
        search.appendChild(lupa)
        search.appendChild(searchContac)

    //creando el contenedor que va a tener al input, y que lo separa de la vistas allchat
    const dadCont=document.createElement('div')
        dadCont.className='dadCont'
        dadCont.appendChild(search)

    return dadCont

}
