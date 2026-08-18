const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const mainCard = document.getElementById("mainCard");
const successCard = document.getElementById("successCard");

// =====================================
// EL NO JAMÁS FUNCIONA 😈
// =====================================

function escapeNo(event) {

    if (event) {
        event.preventDefault();
    }

    const margin = 15;

    // Medidas actuales del botón
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Espacio disponible
    const maxX = window.innerWidth - buttonWidth - margin;
    const maxY = window.innerHeight - buttonHeight - margin;

    // Nueva posición aleatoria
    const x =
        margin +
        Math.random() * Math.max(0, maxX - margin);

    const y =
        margin +
        Math.random() * Math.max(0, maxY - margin);

    // Lo sacamos del flujo de la tarjeta
    noButton.style.position = "fixed";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
    noButton.style.zIndex = "9999";

    // Evita que se seleccione
    noButton.style.userSelect = "none";
}


// =====================================
// PC 🖥️
// =====================================

noButton.addEventListener("pointerenter", escapeNo);


// =====================================
// CELULAR 📱
// =====================================

noButton.addEventListener("pointerdown", escapeNo);


// =====================================
// POR SI DE ALGUNA MANERA LOGRA TOCARLO 😂
// =====================================

noButton.addEventListener("click", escapeNo);


// =====================================
// EVITAR ARRASTRAR / SELECCIONAR
// =====================================

noButton.addEventListener("dragstart", (event) => {
    event.preventDefault();
});


// =====================================
// EL SÍ ES LA ÚNICA OPCIÓN 💗
// =====================================

yesButton.addEventListener("click", () => {

    mainCard.classList.add("hidden");

    successCard.classList.remove("hidden");

    lanzarCorazones();

});


// =====================================
// CORAZONES AL DECIR SÍ 💕
// =====================================

function lanzarCorazones() {

    for (let i = 0; i < 50; i++) {

        const heart = document.createElement("div");

        heart.textContent = "💗";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top = "-40px";

        heart.style.fontSize =
            Math.random() * 25 + 15 + "px";

        heart.style.zIndex = "10000";

        heart.style.pointerEvents = "none";

        heart.style.animation =
            `caer ${Math.random() * 2 + 2}s linear forwards`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4500);
    }
}


// =====================================
// SI CAMBIA EL TAMAÑO DE LA PANTALLA
// =====================================

window.addEventListener("resize", () => {

    if (noButton.style.position === "fixed") {

        const rect = noButton.getBoundingClientRect();

        const maxX = window.innerWidth - rect.width - 15;
        const maxY = window.innerHeight - rect.height - 15;

        const newX = Math.min(rect.left, Math.max(15, maxX));
        const newY = Math.min(rect.top, Math.max(15, maxY));

        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    }

});
