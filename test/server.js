const http = require('http');

http.createServer(function (req, res){
    res.end()
}).listen(3000, function() {
    console.log('Listen for request on Port 3000')
})