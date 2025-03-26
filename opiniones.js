// script-opiniones.js

// 1. Animación de aparición escalonada con efecto de "fade-in" y movimiento
document.addEventListener('DOMContentLoaded', function() {
    const opinions = document.querySelectorAll('.text-div');
    opinions.forEach((opinion, index) => {
        opinion.style.opacity = '0';
        opinion.style.transform = 'translateY(50px)';
        opinion.style.transition = `opacity 0.8s ease ${index * 0.3}s, transform 0.8s ease ${index * 0.3}s`;

        setTimeout(() => {
            opinion.style.opacity = '1';
            opinion.style.transform = 'translateY(0)';
        }, 500 + index * 300); // Retraso escalonado para cada opinión
    });
});

// 2. Efecto de "flip card" en las imágenes de los clientes al hacer clic
const clientImages = document.querySelectorAll('.img-box img');
clientImages.forEach(image => {
    image.addEventListener('click', function() {
        // Crear un efecto de giro (flip)
        image.style.transform = 'rotateY(180deg)';
        image.style.transition = 'transform 0.6s ease';

        // Volver a la posición original después de 1 segundo
        setTimeout(() => {
            image.style.transform = 'rotateY(0deg)';
        }, 1000);
    });
});

// 3. Efecto de "resaltado" en las opiniones al pasar el ratón
const opinionTexts = document.querySelectorAll('.text-div p');
opinionTexts.forEach(text => {
    text.addEventListener('mouseenter', () => {
        text.style.backgroundColor = '#f0f0f0';
        text.style.padding = '10px';
        text.style.borderRadius = '5px';
        text.style.transition = 'background-color 0.3s ease, padding 0.3s ease';
    });

    text.addEventListener('mouseleave', () => {
        text.style.backgroundColor = '';
        text.style.padding = '';
    });
});

// 4. Efecto de "latido" en el título principal cada 3 segundos
const mainTitle = document.querySelector('h2');
setInterval(() => {
    mainTitle.style.transform = 'scale(1.1)';
    mainTitle.style.transition = 'transform 0.5s ease';

    setTimeout(() => {
        mainTitle.style.transform = 'scale(1)';
    }, 500);
}, 3000);

// 5. Mostrar un mensaje emergente al hacer clic en los botones de enlace
const buttons = document.querySelectorAll('a.button');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert(`Serás redirigido a: ${this.innerText}`);
        window.location.href = this.getAttribute('href'); // Redirige después del mensaje
    });
});

// 6. Efecto de "parpadeo" en las imágenes de los clientes cada 5 segundos
setInterval(() => {
    clientImages.forEach(image => {
        image.style.opacity = '0.5';
        setTimeout(() => {
            image.style.opacity = '1';
        }, 500);
    });
}, 5000);

// 7. Mostrar un mensaje en la consola con estilo
console.log('%c🌟 Opiniones de Clientes - TechGadgets Express', 'font-size: 20px; color: #007BFF; font-weight: bold;');
console.log('%c💬 Descubre lo que nuestros clientes dicen sobre nosotros.', 'font-size: 14px; color: #28A745;');
console.log('%c📞 ¡Contáctanos para compartir tu experiencia!', 'font-size: 14px; color: #FF5733;');