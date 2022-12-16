import { registerTextLogin } from '../registerTextLogin/register.js';

export const registerTextLogin = () => {
    const text = document.createElement('span');
    const link = document.createElement('a');
    text.textContent = `¿No tienes cuenta?`;
    link.textContent = `Registrarse`;
    Text.className = "text";
    Text.className = "register";
    
    return text
    
}

  