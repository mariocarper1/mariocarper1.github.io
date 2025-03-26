// script-servicios.js

// 1. Animación de aparición escalonada para los elementos de la tabla
document.addEventListener('DOMContentLoaded', function() {
    const tableRows = document.querySelectorAll('table tr');
    tableRows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateX(-50px)';
        row.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;

        setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateX(0)';
        }, 500 + index * 200); // Retraso escalonado para cada fila
    });
});

// 2. Efecto de zoom y rotación en las imágenes de la tabla al hacer clic
const tableImages = document.querySelectorAll('table img');
tableImages.forEach(image => {
    image.addEventListener('click', () => {
        image.style.transform = 'scale(1.2) rotate(5deg)';
        image.style.transition = 'transform 0.3s ease';

        setTimeout(() => {
            image.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    });
});

// 3. Cambio de color de fondo al pasar el ratón sobre las celdas de la tabla
const tableCells = document.querySelectorAll('table td');
tableCells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = '#f0f0f0';
        cell.style.transition = 'background-color 0.3s ease';
    });

    cell.addEventListener('mouseleave', () => {
        cell.style.backgroundColor = '';
    });
});

// 4. Efecto de "parpadeo" en los títulos principales cada 5 segundos
const titles = document.querySelectorAll('h1, h2');
setInterval(() => {
    titles.forEach(title => {
        title.style.color = '#007BFF'; // Cambia el color a azul
        setTimeout(() => {
            title.style.color = '#000000'; // Vuelve al color original
        }, 500);
    });
}, 5000);

// 5. Mostrar un mensaje emergente al hacer clic en los botones de enlace
const buttons = document.querySelectorAll('a.button');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert(`Serás redirigido a: ${this.innerText}`);
        window.location.href = this.getAttribute('href'); // Redirige después del mensaje
    });
});

// 6. Efecto de sombra dinámica en las imágenes de la tabla al mover el ratón
tableImages.forEach(image => {
    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posición X del ratón dentro de la imagen
        const y = e.clientY - rect.top; // Posición Y del ratón dentro de la imagen

        // Calcula la sombra basada en la posición del ratón
        const shadowX = (x - rect.width / 2) / 10;
        const shadowY = (y - rect.height / 2) / 10;
        image.style.boxShadow = `${shadowX}px ${shadowY}px 15px rgba(0, 0, 0, 0.3)`;
    });

    image.addEventListener('mouseleave', () => {
        image.style.boxShadow = 'none'; // Elimina la sombra al salir
    });
});

// 7. Mostrar un mensaje en la consola con estilo
console.log('%c🚀 TechGadgets Express', 'font-size: 20px; color: #007BFF; font-weight: bold;');
console.log('%c💻 Expertos en reparación de dispositivos electrónicos', 'font-size: 14px; color: #28A745;');
console.log('%c📞 ¡Contáctanos para más información!', 'font-size: 14px; color: #FF5733;');