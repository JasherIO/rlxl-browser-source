var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/brb', function(req, res){
  res.sendFile(__dirname + '/brb.html');
});

app.get('/caster', function(req, res){
  res.sendFile(__dirname + '/caster.html');
});

app.get('/scoreboard', function(req, res){
  res.sendFile(__dirname + '/scoreboard.html');
});

app.get('/spotlight', function(req, res){
  res.sendFile(__dirname + '/spotlight.html');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/admin.html');
});


var caster = {
  'left': '',
  'right': ''
}

var scoreboard = {
  'blue': {
    'name': '',
    'score': '0'
  },
  'orange': {
    'name': '',
    'score': '0'
  },
  'bestOf': '3',
  'region': 'Asia'
}

var spotlight = { 
  'organization': 'agtv'
}

io.on('connection', function(socket){
  io.emit('caster', caster);
  io.emit('scoreboard', scoreboard);
  io.emit('spotlight', spotlight);

  socket.on('caster', function(data) {
    caster['left'] = data['left'];
    caster['right'] = data['right'];

    io.emit('caster', caster);
  });

  socket.on('scoreboard', function(data){
    scoreboard['blue']['name'] = data['blue']['name'];
    scoreboard['blue']['score'] = data['blue']['score'];

    scoreboard['orange']['name'] = data['orange']['name'];
    scoreboard['orange']['score'] = data['orange']['score'];

    scoreboard['bestOf'] = data['bestOf'];
    scoreboard['region'] = data['region'];

    console.log(scoreboard);
    io.emit('scoreboard', scoreboard);
  });

  socket.on('spotlight', function(data) {
    spotlight['organization'] = data['organization'];

    io.emit('spotlight', spotlight);
  });
});

var port = process.env.PORT || 3000;
http.listen(port, function(){
  console.log('https://localhost:' + port + '/');
});
