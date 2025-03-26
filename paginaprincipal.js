document.addEventListener("DOMContentLoaded", function () {
    // Efecto máquina de escribir en el título
    const title = document.querySelector("h1");
    const text = title.textContent;
    title.textContent = "";
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // Modo oscuro
    const darkModeBtn = document.createElement("button");
    darkModeBtn.textContent = "Modo Oscuro";
    darkModeBtn.classList.add("dark-mode-btn");
    document.body.appendChild(darkModeBtn);
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Pop-ups informativos en secciones
    document.querySelectorAll(".text-div").forEach(div => {
        div.addEventListener("mouseenter", function () {
            const popup = document.createElement("div");
            popup.classList.add("popup");
            popup.textContent = "Descubre más aquí!";
            div.appendChild(popup);
            setTimeout(() => popup.remove(), 1500);
        });
    });
});
