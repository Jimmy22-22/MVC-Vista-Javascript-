let encabezado = document.getElementById('encabezado');
let parrafo = document.getElementById('parrafo');
let boton = document.getElementById('boton');

boton.onclick = function() {
    parrafo.textContent = 'Gracias por presionarme :)';
};

encabezado.onmouseover = function() {
    encabezado.style.color = 'blue';
};

encabezado.onmouseout = function() {
    encabezado.style.color = 'black';
};
