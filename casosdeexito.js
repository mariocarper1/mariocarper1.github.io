// script-casos.js

// 1. Animación de aparición escalonada para los elementos de la lista
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('ol li');
    listItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;

        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
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

// 3. Mostrar un mensaje emergente al hacer clic en las imágenes
images.forEach(image => {
    image.addEventListener('click', function() {
        alert(`Este es un caso de éxito real: ${this.alt}`);
    });
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
console.log('%c🏆 Casos de Éxito - TechGadgets Express', 'font-size: 20px; color: #007BFF; font-weight: bold;');
console.log('%c💼 Descubre cómo hemos ayudado a nuestros clientes a resolver sus problemas técnicos', 'font-size: 14px; color: #28A745;');
console.log('%c📞 ¡Contáctanos para más información!', 'font-size: 14px; color: #FF5733;');