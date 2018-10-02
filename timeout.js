
setTimeout(function(){
    console.log("world");
}, 2000)

console.log("hello");

var fs = require('fs');

fs.readFile('/etc/passwd',function (err, data){
    if (err) throw err;
    console.log(data.toString());
});
