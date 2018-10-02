var net = require('net'); 

var server = net.Server(function(socket) {
    socket.write('hello\n');
    //socket.end('world\n');
    
    socket.on('data', function(data) {
        socket.write(data);
    });
});

server.listen(8000);
