var http = require('http');
var dotenv = require('dotenv');
dotenv.config();
let serverport = process.env.PORT;
const app = require('../route')

var server = http.createServer(app);

server.listen(serverport, function () {
  var host = server.address().address
  var port = server.address().port
  console.log(`Server running at http://localhost:${port}`);
})


