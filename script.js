let actual = 1;

const total = 13;


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

    if (e.target.closest("#iniciar")) {
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

/* =========================================
   GALERIA DE FOTOS
========================================= */

const fotosGaleria = document.querySelectorAll(".foto-galeria");

let fotoAmpliada = null;
let temporizadorFoto = null;

fotosGaleria.forEach(foto => {

    foto.addEventListener("pointerup", function(e) {

        // Evita que el toque pase a la pantalla siguiente
        e.stopPropagation();

        // Si se toca la misma foto que ya está ampliada
        if (fotoAmpliada === foto) {
            return;
        }

        // Si había otra foto ampliada, volverla a su tamaño normal
        if (fotoAmpliada) {
            fotoAmpliada.classList.remove("ampliada");
        }

        // Cancelar el temporizador anterior
        if (temporizadorFoto) {
            clearTimeout(temporizadorFoto);
        }

        // Ampliar la nueva foto
        foto.classList.add("ampliada");

        // Guardar cuál es la foto actualmente ampliada
        fotoAmpliada = foto;

        // Después de 7 segundos, volver a tamaño normal
        temporizadorFoto = setTimeout(() => {

            foto.classList.remove("ampliada");
            fotoAmpliada = null;
            temporizadorFoto = null;

        }, 7000);

    });

});


/* =========================================
   MUSICA AL INICIAR
========================================= */

const iniciar = document.getElementById("iniciar");
const musica = document.getElementById("musica");

iniciar.addEventListener("pointerup", function(e) {

    e.stopPropagation();

    musica.volume = 0.7;
    musica.play();

    avanzar();

});