// script.js

// Función para animar los títulos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('h1, h2');
    titles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(-20px)';
        title.style.transition = 'opacity 1s ease, transform 1s ease';
    });

    setTimeout(() => {
        titles.forEach(title => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        });
    }, 500);
});

// Función para animar las imágenes al hacer hover
const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// Función para agregar un efecto de desplazamiento suave a los enlaces
document.querySelectorAll('a.button').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Función para mostrar un mensaje de bienvenida en la consola
console.log('%c¡Bienvenido a TechGadgets Express!', 'font-size: 18px; color: #007BFF; font-weight: bold;');
console.log('%cEstamos aquí para ofrecerte el mejor servicio en reparación de dispositivos electrónicos.', 'font-size: 14px; color: #28A745;');

// Función para agregar un efecto de carga a las imágenes
window.addEventListener('load', function() {
    const imageContainers = document.querySelectorAll('.text-div img');
    imageContainers.forEach(container => {
        container.style.opacity = '0';
        container.style.transition = 'opacity 1s ease';
    });

    setTimeout(() => {
        imageContainers.forEach(container => {
            container.style.opacity = '1';
        });
    }, 500);
});

// Función para agregar un efecto de sombra a los botones al hacer hover
const buttons = document.querySelectorAll('a.button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        button.style.transition = 'box-shadow 0.3s ease';
    });

    button.addEventListener('mouseleave', () => {
        button.style.boxShadow = 'none';
    });
});

// Función para agregar un efecto de rotación a las imágenes al hacer clic
images.forEach(image => {
    image.addEventListener('click', () => {
        image.style.transform = 'rotate(360deg)';
        image.style.transition = 'transform 1s ease';
        setTimeout(() => {
            image.style.transform = 'rotate(0deg)';
        }, 1000);
    });
});

// Función para agregar un efecto de parpadeo a los títulos cada 5 segundos
setInterval(() => {
    const titles = document.querySelectorAll('h1, h2');
    titles.forEach(title => {
        title.style.color = '#FF0000';
        setTimeout(() => {
            title.style.color = '#000000';
        }, 500);
    });
}, 5000);