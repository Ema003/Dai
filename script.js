let actual = 1;

const total = 12;


function avanzar() {

    if (actual < total) {

        document.getElementById("p" + actual)
            .classList.remove("activa");

        actual++;

        document.getElementById("p" + actual)
            .classList.add("activa");
    }
}


function reiniciar(e) {

    e.stopPropagation();

    document.getElementById("p" + actual)
        .classList.remove("activa");

    actual = 1;

    document.getElementById("p1")
        .classList.add("activa");
}


document.getElementById("reiniciar")
    .addEventListener("click", reiniciar);


document.addEventListener("pointerup", function(e) {

    if (e.target.closest("#reiniciar")) {
        return;
    }

    avanzar();

});


function crearCorazon() {

    const c = document.createElement("span");

    c.className = "corazon";

    c.textContent = "💗";

    c.style.left =
        Math.random() * 100 + "%";

    c.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.querySelector(".universo")
        .appendChild(c);

    setTimeout(() => c.remove(), 8000);
}


setInterval(crearCorazon, 700);