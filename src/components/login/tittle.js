export const tittleLogin = () =>{
    const t = document.createElement('h1')
    t.textContent="T"
    t.className="blue-text"

    const inn = document.createElement('h1')
    inn.textContent="in"  
    inn.className="red-text"  
    
    const dem = document.createElement('h1')
    dem.textContent="dem"
    dem.className="blue-text"

    const title = document.createElement('div')
    title.classList.add("title-login-card")
    title.appendChild(t)
    title.appendChild(inn)
    title.appendChild(dem)

    return title
}