
// Lista de colaboradores con su fecha de ingreso
const colaboradores = [
    { nombre: "VELAZQUEZ OSUNA LILIA ARMIDA", ingreso: "2025-12-30" }, // No elegible
    { nombre: "RODRIGUEZ CAMARILLO ELISEO", ingreso: "2005-09-26" }, // Elegible
    { nombre: "RIVERA RODRIGUEZ J. GUADALUPE", ingreso: "2026-05-02" },// No elegible
    { nombre: "RODRIGUEZ GUTIERREZ MONICA", ingreso: "2006-07-16" }, // Elegible
    { nombre: "HERNANDEZ MORALES FRANCISCO EDUARDO", ingreso: "2026-04-01" }, // No elegible
    { nombre: "VALTIERRA VILLAFAÑA SILVIA LUZ", ingreso: "2009-09-16" }, // Elegible
];

// ==========================
// VALIDACIÓN DE ANTIGÜEDAD
// ==========================
function tieneUnAnio(fechaIngreso) {
    const hoy = new Date();
    const ingreso = new Date(fechaIngreso);

    let anios = hoy.getFullYear() - ingreso.getFullYear();
    const m = hoy.getMonth() - ingreso.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < ingreso.getDate())) {
        anios--;
    }

    return anios >= 1;
}

// ==========================
// ESTADOS
// ==========================
const elegibles = colaboradores.filter(c => tieneUnAnio(c.ingreso));
let ganadores = [];

const lista = document.getElementById("listaColaboradores");

// ==========================
// RENDER (TODOS)
// ==========================
function renderLista() {
    lista.innerHTML = "";

    // extendida para efecto scroll
    const listaExtendida = [...colaboradores, ...colaboradores, ...colaboradores];

    listaExtendida.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("participante");

        // marcar si ya ganó
        if (ganadores.includes(p.nombre)) {
            div.classList.add("ya-ganador");
        }

        div.textContent = p.nombre;
        lista.appendChild(div);
    });

    lista.style.transition = "none";
    lista.style.transform = "translateY(0)";
}

// inicial
renderLista();

// ==========================
// GIRAR
// ==========================
function girar() {

    // elegibles que no han ganado
    const disponibles = elegibles.filter(p => !ganadores.includes(p.nombre));

    if (disponibles.length === 0) {
        alert("Todos los elegibles ya ganaron.");
        return;
    }

    // ganador lógico
    const ganadorIndex = Math.floor(Math.random() * disponibles.length);
    const ganador = disponibles[ganadorIndex];

    // 🔥 buscar su posición en la lista COMPLETA
    const indexEnLista = colaboradores.findIndex(c => c.nombre === ganador.nombre);

    const alturaItem = 225;
    const vueltas = colaboradores.length * 2;

    const posicionFinal = (vueltas + indexEnLista) * alturaItem;

    lista.style.transition = "transform 4s cubic-bezier(0.2, 0.8, 0.2, 1)";
    lista.style.transform = `translateY(-${posicionFinal}px)`;

    // sonido
    new Audio("assets/sounds/spin.mp3").play().catch(()=>{});

    setTimeout(() => {

        ganadores.push(ganador.nombre);

        // mostrar ganador oficial
        document.getElementById("ganador").innerText =
            `🎉 Ganador: ${ganador.nombre} 🎉`;

        // highlight visual
        const items = document.querySelectorAll(".participante");
        items.forEach(el => el.classList.remove("ganador"));

        const ganadorVisualIndex = vueltas + indexEnLista;

        if (items[ganadorVisualIndex]) {
            items[ganadorVisualIndex].classList.add("ganador");
        }

        // sonido final
        new Audio("assets/sounds/win.mp3").play().catch(()=>{});

        // refrescar visual (solo para marcar "ya ganó")
        setTimeout(() => {
            renderLista();
        }, 1500);

    }, 4000);
}