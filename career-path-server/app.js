var express = require('express'),
    http = require('http'),
    request = require('request')
    path = require('path'),
    bodyParser = require('body-parser'),
    _ = require('lodash'),
    path = require('path');
http.globalAgent.maxSockets = 100000;
var app = express();
app.set('port', 3000);

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json({
    limit: '50mb'
}))
app.use(express.static(path.join(__dirname, '.')));

app.post("/career-path", (req, res) => {
    console.log(req.body)
    var httpOptions = {
        url: 'http://localhost:7474/db/data/cypher',
        headers: { authorization: "Basic bmVvNGo6cGFzc3dvcmQ="},
        method: 'POST',
        body: req.body,
        json: true
      }
      request(httpOptions, function (err, httpResponse, body) {
        if (err) {
            return res.status(400).send({message: 'Error'});          
        } else {
            return res.status(200).send(body);
        }
      })    
});

var server = http.createServer(app).listen(app.get('port'), () => {
    console.log('Listening to port: ' + app.get('port'))
});
server.timeout = 0;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';