// script-blog.js

// 1. Animación de aparición escalonada para los elementos de la lista
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('ol li');
    listItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;

        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 500 + index * 200); // Retraso escalonado para cada elemento
    });
});

// 2. Efecto de resaltado al pasar el ratón sobre los elementos de la lista
listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#f0f0f0';
        item.style.transition = 'background-color 0.3s ease';
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '';
    });
});

// 3. Animación de los enlaces de vídeo al hacer hover
const videoLinks = document.querySelectorAll('ol li a');
videoLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#007BFF';
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'color 0.3s ease, transform 0.3s ease';
    });

    link.addEventListener('mouseleave', () => {
        link.style.color = '';
        link.style.transform = 'scale(1)';
    });
});

// 4. Mostrar un mensaje emergente al hacer clic en los enlaces de vídeo
videoLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert(`Serás redirigido a un vídeo sobre: ${this.parentElement.parentElement.querySelector('strong').innerText}`);
        window.open(this.href, '_blank'); // Abre el enlace en una nueva pestaña
    });
});

// 5. Efecto de sombra dinámica en los botones al mover el ratón
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

// 6. Mostrar un mensaje en la consola con estilo
console.log('%c📚 Blog de TechGadgets Express', 'font-size: 20px; color: #007BFF; font-weight: bold;');
console.log('%c💡 Aprende a cuidar tus dispositivos con nuestros consejos expertos', 'font-size: 14px; color: #28A745;');
console.log('%c📞 ¡Contáctanos para más información!', 'font-size: 14px; color: #FF5733;');