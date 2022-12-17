
export const createHeader = ()=>{

    /*     creacion de el primeer boton main
     */
    
    const main=
    document.createElement("a")
    main.textContent="Main"
    main.href=""
    main.className="main";
    main.style.background="#6171FF"
    main.style.padding="8px 16px";
    main.style.border="none"
    main.style.borderRadius="10px"
    main.style.fontFamily="Work Sans"
    main.style.fontSize="16px"
    main.style.color="#ffffff"
    main.style.margin="10px 15px"
    main.style.textDecoration="none"
    
    
    const profile=
    document.createElement("a")
    profile.textContent="Profile"
    profile.className="profile";
    profile.style.background="#BEC5FF"
    profile.style.padding="8px 16px";
    profile.style.border="none"
    profile.style.borderRadius="10px"
    profile.style.fontFamily="Work Sans"
    profile.style.fontSize="16px"
    profile.style.color="#ffffff"
    profile.style.margin="10px 15px"
    profile.style.textDecoration="none"
    
    const chat=
    document.createElement("a")
    chat.textContent="Chat"
    chat.className="chat";
    chat.style.background="#BEC5FF"
    chat.style.padding="8px 16px";
    chat.style.border="none"
    chat.style.borderRadius="10px"
    chat.style.fontFamily="Work Sans"
    chat.style.fontSize="16px"
    chat.style.color="#ffffff"
    chat.style.margin="10px 15px"
    chat.style.textDecoration="none"
    
    
    
    
    const contHeader=document.createElement("div");
    contHeader.className="contHeader";
    
    contHeader.appendChild(main)
    contHeader.appendChild(profile)
    contHeader.appendChild(chat)
    return contHeader
    
    
    
    };
    
    export const createButtons = createHeader()