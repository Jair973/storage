
function mostrarNombre() {
    const nombre = localStorage.getItem("nombre");
    const ciudad = localStorage.getItem("ciudad");

    if (nombre === null || ciudad === null) {
        document.getElementById("saludo").textContent =
            "No hay nombre o ciudad guardados.";
    } else {
        document.getElementById("saludo").textContent =
            "Hola, " + nombre + ", de " + ciudad + ".";
    }
}

function borrar() {
    localStorage.removeItem("nombre");
    mostrarNombre();
}

function borrarTodo() {
    localStorage.clear();
    mostrarNombre();
}

document.addEventListener("DOMContentLoaded", function () {
    mostrarNombre();

    document.getElementById("btn-borrar").addEventListener("click", borrar);
    document.getElementById("btn-borrar-todo").addEventListener("click", borrarTodo);
});
