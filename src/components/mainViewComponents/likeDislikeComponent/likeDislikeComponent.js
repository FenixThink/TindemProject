 export const renderButtons = ()=>{
    /* Elemento Padre */
    const divPadre = document.createElement("div")
    /* Elemento Interior */
    const divInterior = document.createElement("div")
    divInterior.classList = "appDivPadre"

    /* Span Unlike */

    const span1 = document.createElement("span")
    span1.classList = "appDivPadreSpan"
    span1.id = "unlikeVector"
    const img = document.createElement("img")
    img.src = "/public/svg/VectorUnlike.svg"
    img.id = "imgUnlike"
    img.alt = "Unlike svg"
    img.className = "buttons"
    const p = document.createElement("p")
    p.classList = "appDivPadreSpanImgP"
    p.textContent = "No me gusta"

    /* Span Like */

    const span2 = document.createElement("span")
    span2.classList = "appDivPadreSpan"
    span2.id = "likeVector"
    const img2 = document.createElement("img")
    img2.src = "/public/svg/VectorLike.svg"
    img2.id = "imglike"
    img2.alt = "like svg"
    img2.className = "buttons"
    const p2 = document.createElement("p")
    p2.classList = "appDivPadreSpanImgP"
    p2.textContent = "Me gusta"

    /* Inyeccion de los elementos creados */

    divPadre.appendChild(divInterior)
    divInterior.appendChild(span1)
    span1.appendChild(img)
    span1.appendChild(p)
    divInterior.appendChild(span2)
    span2.appendChild(img2)
    span2.appendChild(p2)

    /* return el elemento padre con todo ya incrustado */

    return divPadre
}

// document.querySelector("#app").appendChild(renderButtons())
// /* declarando variables para traer los elementos */
// const unlikeVector = document.querySelector("#unlikeVector")
// const likeVector = document.querySelector("#likeVector")
// /* Asignando eventos de escucha, al ingresar cambia el svg al que esta con hover y al salir lo deja como estaba */
// likeVector.addEventListener("mouseenter",()=>{
//     document.querySelector("#imglike").src = "/public/svg/VectorLikeHover.svg"
// })

// likeVector.addEventListener("mouseleave",()=>{
//     document.querySelector("#imglike").src = "/public/svg/VectorLike.svg"
// })

// unlikeVector.addEventListener("mouseenter",()=>{
//     document.querySelector("#imgUnlike").src = "/public/svg/VectorUnlikeHover.svg"
// })

// unlikeVector.addEventListener("mouseleave",()=>{
//     document.querySelector("#imgUnlike").src = "/public/svg/VectorUnlike.svg"
// })

