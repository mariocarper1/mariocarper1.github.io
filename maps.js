// script-maps.js

// 1. Animación de aparición escalonada para los elementos de la página
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.text-div, .img-box');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;

        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 500 + index * 200); // Retraso escalonado para cada elemento
    });
});

// 2. Efecto de zoom en las imágenes al hacer hover
const images = document.querySelectorAll('.img-box img');
images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// 3. Mostrar un mensaje emergente al hacer clic en la imagen del mapa
const mapImage = document.querySelector('.img-box a img');
mapImage.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Serás redirigido a Google Maps para ver nuestra ubicación.');
    window.open('https://maps.app.goo.gl/xV4QKY4yM8RKJgRW7', '_blank'); // Abre el enlace en una nueva pestaña
});

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
console.log('%c📍 Localización - TechGadgets Express', 'font-size: 20px; color: #007BFF; font-weight: bold;');
console.log('%c🚗 ¡Encuéntranos en Segovia! Visítanos en C. Navacerrada, 12.', 'font-size: 14px; color: #28A745;');
console.log('%c📞 ¡Contáctanos para más información!', 'font-size: 14px; color: #FF5733;');