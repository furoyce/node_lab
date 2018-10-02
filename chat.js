var net = require('net'); 

var sockets = [];

var server = net.Server(function(socket) {
    sockets.push(socket);
    
    socket.write('hello\n');
    //socket.end('world\n');
    
    socket.on('data', function(d) {
        for (var i = 0; i < sockets.length; i++) {
            if (sockets[i] == socket) continue;
            sockets[i].write(d);
        }
    });
    
    socket.on('end', function() {
        var i = sockets.indexOf(socket);
        delete(sockets[i]);
    });
});

server.listen(8000);
