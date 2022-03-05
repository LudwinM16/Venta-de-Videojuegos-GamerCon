let boton = document.getElementById("boton");
boton.addEventListener("click", obtenerDatos);

function obtenerDatos () {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;

    let parrafo = document.getElementById("contenido");

    parrafo.innerHTML = nombre + " " + correo;
}
   