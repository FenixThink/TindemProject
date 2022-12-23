// creación del titulo del cuéntanos sobre tí
export const title=()=>{
    const texTitle=document.createElement('span');
    texTitle.className = "tellAboutTitle";
    texTitle.textContent='Cuéntanos sobre tí';
    return texTitle
}