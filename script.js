document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el formulario por su ID
    const form = document.getElementById('loginForm');

    // Agregamos un listener para el evento submit del formulario
    form.addEventListener('submit', function(event) {
        // Prevenimos el envío del formulario por defecto
        event.preventDefault();

        // Mostramos el mensaje de agradecimiento
        document.getElementById('agradecimiento').classList.remove('d-none');

        // Reseteamos los valores de los campos del formulario
        form.reset();
    });
});