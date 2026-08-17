const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const mainCard = document.getElementById("mainCard");
const successCard = document.getElementById("successCard");


// =====================================
// EL NO JAMÁS FUNCIONA 😈
// =====================================

function escapeNo() {

    const margin = 20;

    const maxX =
        window.innerWidth -
        noButton.offsetWidth -
        margin;

    const maxY =
        window.innerHeight -
        noButton.offsetHeight -
        margin;


    const x =
        Math.max(
            margin,
            Math.random() * maxX
        );

    const y =
        Math.max(
            margin,
            Math.random() * maxY
        );


    noButton.style.position = "fixed";

    noButton.style.left = `${x}px`;

    noButton.style.top = `${y}px`;

    noButton.style.zIndex = "999";
}


// Computadora
noButton.addEventListener(
    "mouseenter",
    escapeNo
);


// Celular
noButton.addEventListener(
    "touchstart",
    (event) => {

        event.preventDefault();

        escapeNo();

    }
);


// Por si consigue hacer click de alguna manera
noButton.addEventListener(
    "click",
    (event) => {

        event.preventDefault();

        escapeNo();

    }
);


// =====================================
// EL SÍ ES LA ÚNICA OPCIÓN 💗
// =====================================

yesButton.addEventListener(
    "click",
    () => {

        mainCard.classList.add("hidden");

        successCard.classList.remove("hidden");

        lanzarCorazones();

    }
);


// =====================================
// CORAZONES AL DECIR SÍ
// =====================================

function lanzarCorazones() {

    for (let i = 0; i < 50; i++) {

        const heart =
            document.createElement("div");

        heart.textContent = "💗";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top = "-40px";

        heart.style.fontSize =
            Math.random() * 25 + 15 + "px";

        heart.style.zIndex = "1000";

        heart.style.pointerEvents = "none";

        heart.style.animation =
            `caer ${Math.random() * 2 + 2}s linear forwards`;

        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 4500);

    }

}