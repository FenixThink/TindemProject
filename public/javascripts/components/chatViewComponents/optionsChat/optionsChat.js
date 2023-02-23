export async function options (id){
    const idA = id



    //contenedor padre
    const padre = document.createElement("div")
    padre.className = "cont"
    //spans que contiene el div

    //------------- SPAN 1 -----------------------------------
    const span1 = document.createElement("span")
    let alreadyBlocked = false;

    setTimeout(() => {
        const inputMessage = document.getElementById('inputMessage');
    }, 1000);
    
  
    // const Rblock = await fetch (`/allAction/RenderizadoBlock/${id_applicant}/${id_company}`,{
    //     method: 'get'
    // });

/*     const [rows] = await connection.execute('SELECT * FROM usuarios');
    console.log(rows); */


    span1.addEventListener('click', () => {
        if (!alreadyBlocked) {
            Swal.fire({
                title: '¿Estás seguro de querer bloquearlo?',
                text: "¡Luego no podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, bloquear!',
            }).then( async(result) => {
                if (result.isConfirmed) {
                    //----------------------
                    const id_applicant = idA;
                    const id_company = document.querySelector('.nameTopChat').id;             
                   

                    const DBblock = await fetch(`/allAction/block/${id_applicant}/${id_company}`, {
                         method: 'get'
                    });
                    

                   
                    inputMessage.style.display = 'none';

                    span1.setAttribute('disabled', true);
                    alreadyBlocked = true;
                    Swal.fire(
                        'Bloqueado!',
                        '', 
                        'success',
                        span1.textContent = "desblock User",
    
    
                    )   
                }
            });
        }
    });


    span1.addEventListener('click', () => {
        if (alreadyBlocked) {
            Swal.fire({
                title: '¿Estás seguro de querer desbloquearlo?',
                text: "¡Luego no podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, quiero desbloquearlo!',
                
            }).then( async(result) => {
                if (result.isConfirmed) {
                    const id_applicant = idA;
                    const id_company = document.querySelector('.nameTopChat').id;
                    console.log(id_company , id_applicant, id) 

                    const DBdesblock = await fetch(`/allAction/desblock/${id_applicant}/${id_company}`, {
                        method: 'get'
                   });

                    inputMessage.style.display = 'block';
                    // span1.setAttribute('disabled', true);
                    alreadyBlocked = false;
                    Swal.fire(
                        'Bloqueado!',
                        '', 
                        'success',
                        span1.textContent = "Block User",
                    )   
                }
            });
        }
    });
    //--------------------------------------------------------------------
    const span2 = document.createElement("span")

    //---------------------SPAN 3 ----------------------------------------
    const span3 = document.createElement("span")

    span3.addEventListener('click', () => {
        Swal.fire({
            title: '¿Estás seguro de querer eliminar los mensajes?',
            text: "¡Luego no podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!',
                
        }).then((result) => {
            if (result.isConfirmed) {
                span1.setAttribute('disabled', true);
                alreadyBlocked = true;
                Swal.fire(
                    'eliminado!',
                    '', 
                    'success',
                )   
            }
        });
        
    })

    //añadir span al div
    padre.appendChild(span1)
    padre.appendChild(span2)
    padre.appendChild(span3)
    
   

    //clase para los spans
    span1.className = "spas"
    //id para los spans
    span1.id = "blockUser"
    span3.className = "spas"
    span3.id = "deleteUser"
    //añadir texto al span
    span1.textContent = "Block User"
    // span2.textContent = "Report User"
    span3.textContent = "Delete Chat"
    return padre
}
