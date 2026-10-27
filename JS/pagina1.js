
function guardar() {
    let nombre = document.getElementById("nombre").value.trim();
    let ciudad = document.getElementById("ciudad").value.trim();

    if (nombre === "" || ciudad === "") {
        alert("Escribe tu nombre y tu ciudad.");
        return;
    }

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("ciudad", ciudad);

    window.location.href = "pagina2.html";
}

document.getElementById("btn-guardar").addEventListener("click", guardar);
