
export const createHeader = ()=>{

    /*     creacion de el primeer boton main
     */
    
    const main=
    document.createElement("a")
    main.textContent="Main"
    main.className="header";
    main.style.cursor = "pointer"
    
    const profile=
    document.createElement("a")
    profile.textContent="Profile"
    profile.className="header";
    profile.style.cursor = "pointer"
    
    const chat=
    document.createElement("a")
    chat.textContent="Chat"
    chat.className="header";
    chat.style.cursor = "pointer"
    
    const contHeader=document.createElement("div");
    contHeader.className="contHeader";
    
    contHeader.appendChild(main)
    contHeader.appendChild(chat)
    contHeader.appendChild(profile)
    return contHeader
    
    
};

    
