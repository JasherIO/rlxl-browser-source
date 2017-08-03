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

var socket = io();

socket.on('scoreboard', function(data){
  scoreboard['blue']['name'] = data['blue']['name'];
  scoreboard['blue']['score'] = data['blue']['score'];

  scoreboard['orange']['name'] = data['orange']['name'];
  scoreboard['orange']['score'] = data['orange']['score'];

  scoreboard['bestOf'] = data['bestOf'];
  scoreboard['region'] = data['region'];

  $('#blueName').text(scoreboard['blue']['name']);
  $('#orangeName').text(scoreboard['orange']['name']);

  $('#blueScore').text(scoreboard['blue']['score']);
  $('#orangeScore').text(scoreboard['orange']['score']);

  $('#bestOf').text(scoreboard['bestOf']);

  var src = '/assets/img/Scoreboard/' + data['region'] + '.png';
  $('.overlay').attr('src', src);

  console.log(scoreboard);
});
