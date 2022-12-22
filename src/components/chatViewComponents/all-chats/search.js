export function divSearch(){
    const searchContac=document.createElement('input') //creando el input de busqueda
        searchContac.className="searchContac"// añadiendole la clase al input de busqueda
        searchContac.placeholder="Search or start new chat"

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
