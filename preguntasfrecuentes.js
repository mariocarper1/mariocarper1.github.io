document.addEventListener("DOMContentLoaded", function () {
    // Convertir preguntas en elementos interactivos
    document.querySelectorAll(".text-div strong").forEach(question => {
        question.style.cursor = "pointer";
        question.addEventListener("click", function () {
            let answer = this.nextElementSibling;
            if (answer.style.display === "none" || !answer.style.display) {
                answer.style.display = "block";
                answer.style.opacity = 0;
                let opacity = 0;
                let fadeIn = setInterval(() => {
                    if (opacity < 1) {
                        opacity += 0.1;
                        answer.style.opacity = opacity;
                    } else {
                        clearInterval(fadeIn);
                    }
                }, 50);
            } else {
                answer.style.display = "none";
            }
        });
    });

    // Botón de modo oscuro
    if (!document.querySelector(".dark-mode-btn")) {
        const darkModeBtn = document.createElement("button");
        darkModeBtn.textContent = "Modo Oscuro";
        darkModeBtn.classList.add("dark-mode-btn");
        document.body.appendChild(darkModeBtn);
        darkModeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Función de lectura en voz alta
    document.querySelectorAll(".text-div strong").forEach(question => {
        question.addEventListener("dblclick", function () {
            let speech = new SpeechSynthesisUtterance(this.textContent + ", " + this.nextElementSibling.textContent);
            speech.lang = "es-ES";
            speechSynthesis.speak(speech);
        });
    });
});
