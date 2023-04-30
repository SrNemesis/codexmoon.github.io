// Obtener el botón de descarga y agregar un evento de clic
const downloadBtn = document.querySelector('.download-btn');
downloadBtn.addEventListener('click', () => {
  // Abrir una nueva ventana para descargar el archivo del plugin
  window.open('https://mi-sitio-web.com/plugin-de-minecraft.zip', '_blank');
});

// Obtener el botón de contacto y agregar un evento de clic
const contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click', () => {
  // Enviar un correo electrónico al equipo de soporte del plugin
  window.location.href = 'mailto:plugin@mi-sitio-web.com';
});
