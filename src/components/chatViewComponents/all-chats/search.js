import { people } from "../partLeftChat/unionPartsLeft"
export function divSearch(){

    const searchContac=document.createElement('input') //creando el input de busqueda
        searchContac.className="searchContac"// añadiendole la clase al input de busqueda
        searchContac.placeholder="Search chat"

    //Configurando el input para realizar la busqueda de algun chat
    searchContac.addEventListener('keyup',(e)=>{
        for (let i = 1; i <= Object.keys(people).length; i++) {
            if(searchContac.value!=''){
                let name = people[i].name.toLowerCase()
                let searchName = searchContac.value.toLowerCase()
                if(!name.startsWith(searchName)){
                    document.getElementById(Object.keys(people)[i-1]).style.display='none'
                }
            }else{
                document.getElementById(Object.keys(people)[i-1]).style.display='flex'

            }
        }
    })


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
