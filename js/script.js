function mostrarDetalles(tipoHabitacion, event) {
    event.preventDefault();

    const detallesHabitaciones = {
        'suite-presidencial': {
            titulo: 'Suite Presidencial',
            descripcion: 'Nuestra Suite Presidencial ofrece el máximo lujo con vistas panorámicas, jacuzzi privado y servicio de mayordomo las 24 horas.',
        },
        'habitacion-deluxe': {
            titulo: 'Habitación Deluxe',
            descripcion: 'Disfruta de una habitación espaciosa con todas las comodidades modernas y un toque de elegancia andina.',
        },
        'suite-familiar': {
            titulo: 'Suite Familiar',
            descripcion: 'Perfecta para familias, esta suite ofrece habitaciones conectadas y espacios amplios para todos.',
        }
    };

    const habitacion = detallesHabitaciones[tipoHabitacion];
    document.getElementById('modal-titulo').innerText = habitacion.titulo;
    document.getElementById('modal-descripcion').innerText = habitacion.descripcion;

    const modal = document.getElementById('modal-detalles');
    modal.style.display = 'flex';

    // Desactivar scroll en la página cuando el modal está abierto
    document.body.classList.add('modal-open');
}

function cerrarDetalles() {
    const modal = document.getElementById('modal-detalles');
    modal.style.display = 'none';

    // Reactivar scroll en la página cuando el modal se cierra
    document.body.classList.remove('modal-open');
}
