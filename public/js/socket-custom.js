var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar información
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Shepo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor: ', mensaje);
});