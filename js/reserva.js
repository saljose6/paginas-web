function actualizarPrecio() {
    const tipoHabitacion = document.getElementById('tipo-habitacion').value;
    const precioHabitacion = document.getElementById('precio-habitacion');

    const precios = {
        'suite-presidencial': 500,  // Precio por noche en USD
        'habitacion-deluxe': 150,
        'suite-familiar': 250
    };

    if (precios[tipoHabitacion]) {
        precioHabitacion.innerText = `$${precios[tipoHabitacion]} por noche`;
    } else {
        precioHabitacion.innerText = 'Selecciona un tipo de habitación';
    }

    calcularTotal(); // Llamamos a calcularTotal por si el usuario cambió el tipo de habitación
}

function calcularTotal() {
    const fechaEntrada = new Date(document.getElementById('fecha-entrada').value);
    const fechaSalida = new Date(document.getElementById('fecha-salida').value);
    const tipoHabitacion = document.getElementById('tipo-habitacion').value;
    const totalPagar = document.getElementById('total-pagar');

    if (!fechaEntrada || !fechaSalida || fechaSalida <= fechaEntrada) {
        totalPagar.innerText = 'Selecciona fechas válidas';
        return;
    }

    const tiempoEstancia = (fechaSalida - fechaEntrada) / (1000 * 60 * 60 * 24);
    const precios = {
        'suite-presidencial': 500,
        'habitacion-deluxe': 150,
        'suite-familiar': 250
    };

    if (precios[tipoHabitacion]) {
        const total = precios[tipoHabitacion] * tiempoEstancia;
        totalPagar.innerText = `$${total} por ${tiempoEstancia} noche(s)`;
    } else {
        totalPagar.innerText = 'Selecciona un tipo de habitación';
    }
}
