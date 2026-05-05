const participantes = [
    "Juan",
    "Pedro",
    "María",
    "Luis",
    "Ana",
    "Carlos"
];

const lista = document.getElementById("listaParticipantes");

// 🔹 Duplicamos lista para efecto infinito
const listaExtendida = [...participantes, ...participantes, ...participantes];

listaExtendida.forEach(nombre => {
    const div = document.createElement("div");
    div.classList.add("participante");
    div.textContent = nombre;
    lista.appendChild(div);
});

function girar() {
    const ganadorIndex = Math.floor(Math.random() * participantes.length);

    const alturaItem = 150; // igual al CSS
    const vueltas = participantes.length * 2;

    const posicionFinal = (vueltas + ganadorIndex) * alturaItem;

    lista.style.transition = "transform 4s cubic-bezier(0.2, 0.8, 0.2, 1)";
    lista.style.transform = `translateY(-${posicionFinal}px)`;

    setTimeout(() => {
        alert("Ganador: " + participantes[ganadorIndex]);
    }, 4000);
}