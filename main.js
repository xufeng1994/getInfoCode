var express = require('express');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World\n');
// }).listen(3000, "127.0.0.1");



var app = express();
var port =3000;
var ip = "127.0.0.1";
app.listen(port,ip);
app.get('/',function(req,res){
    res.send("hello world\n")
})
console.log('Server running at http://127.0.0.1:3000/');