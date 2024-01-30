document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del DOM
    const contadorNumeroElemento = document.getElementById('contadorNumero');
    const incrementarBtn = document.getElementById('incrementarBtn');
    const resetearBtn = document.getElementById('resetearBtn');

    // Inicializar contador
    let contador = 0;

    // Función para actualizar el contador en el DOM
    function actualizarContador() {
        contadorNumeroElemento.textContent = contador;
    }

    // Manejadores de eventos
    incrementarBtn.addEventListener('click', function () {
        contador++;
        actualizarContador();
    });

    resetearBtn.addEventListener('click', function () {
        contador = 0;
        actualizarContador();
    });

});