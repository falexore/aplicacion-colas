//Comando para establecer la conexion


var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

socket.on('estadoActual', function(estadoActual) {
    label.text(estadoActual.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});

// //Enviando informacion
// socket.emit('enviarMensaje', {
//     usuario: 'Fredy',
//     mesaje: 'Hola Mundo'
// }, function(resp) {
//     console.log(resp);
// });

//Escuchar Mensaje

// socket.on('enviarMensaje', function(mensaje) {
//     console.log('Servidor: ', mensaje);
// });