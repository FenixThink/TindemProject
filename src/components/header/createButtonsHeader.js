
export const createHeader = ()=>{

    /*     creacion de el primeer boton main
     */
    
    const main=
    document.createElement("a")
    main.textContent="Main"
    main.href=""
    main.className="header";
    
    
    const profile=
    document.createElement("a")
    profile.href=""
    profile.textContent="Profile"
    profile.className="header";
    
    const chat=
    document.createElement("a")
    chat.href=""
    chat.textContent="Chat"
    chat.className="header";
    
    const contHeader=document.createElement("div");
    contHeader.className="contHeader";
    
    contHeader.appendChild(main)
    contHeader.appendChild(chat)
    contHeader.appendChild(profile)
    return contHeader
    
    
};

    
    export const createButtons =  createHeader()