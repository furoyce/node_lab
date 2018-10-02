var http = require('http');

var s = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'}); 
    res.write("hello\n");
    
    setTimeout(function() {
        res.end("world\n");
    }, 2000);
})

s.listen(3000);

//apache benchmark testing
//ab -n 100 -c 100 http://localhost:3000/