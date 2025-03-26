// script-formulario.js

// 1. Validación del formulario antes de enviar
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío automático del formulario

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validación de campos
        if (name === '' || email === '' || message === '') {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        }

        // Validación de correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }

        // Si todo está correcto, muestra un mensaje de éxito
        alert('¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.');
        form.reset(); // Limpia el formulario después del envío
    });
});

// 2. Efecto de resaltado en los campos del formulario al hacer focus
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.border = '2px solid #007BFF';
        input.style.transition = 'border 0.3s ease';
    });

    input.addEventListener('blur', () => {
        input.style.border = '';
    });
});

// 3. Animación de la imagen al cargar la página
const contactImage = document.querySelector('.img-box img');
contactImage.style.opacity = '0';
contactImage.style.transform = 'translateY(20px)';
contactImage.style.transition = 'opacity 1s ease, transform 1s ease';

setTimeout(() => {
    contactImage.style.opacity = '1';
    contactImage.style.transform = 'translateY(0)';
}, 500);

// 4. Efecto de sombra dinámica en los botones al mover el ratón
const buttons = document.querySelectorAll('a.button');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posición X del ratón dentro del botón
        const y = e.clientY - rect.top; // Posición Y del ratón dentro del botón

        // Calcula la sombra basada en la posición del ratón
        const shadowX = (x - rect.width / 2) / 10;
        const shadowY = (y - rect.height / 2) / 10;
        button.style.boxShadow = `${shadowX}px ${shadowY}px 15px rgba(0, 0, 0, 0.3)`;
    });

    button.addEventListener('mouseleave', () => {
        button.style.boxShadow = 'none'; // Elimina la sombra al salir
    });
});

// 5. Mostrar un mensaje en la consola con estilo
console.log('%c📞 Formulario de Contacto - TechGadgets Express', 'font-size: 20px; color: #007BFF; font-weight: bold;');
console.log('%c💬 ¡Estamos aquí para ayudarte! Completa el formulario y nos pondremos en contacto contigo.', 'font-size: 14px; color: #28A745;');