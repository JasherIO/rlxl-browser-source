var caster = {
  "left": '',
  "right": ''
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

var socket = io();

socket.on('scoreboard', function(data){
  scoreboard['blue']['name'] = data['blue']['name'];
  scoreboard['blue']['score'] = data['blue']['score'];

  scoreboard['orange']['name'] = data['orange']['name'];
  scoreboard['orange']['score'] = data['orange']['score'];

  scoreboard['bestOf'] = data['bestOf'];
  scoreboard['region'] = data['region'];

  console.log(scoreboard);

  $('#blue .name').val(scoreboard['blue']['name']);
  $('#blue .score').val(scoreboard['blue']['score']);

  $('#orange .name').val(scoreboard['orange']['name']);
  $('#orange .score').val(scoreboard['orange']['score']);

  $('#bestOf').val(scoreboard['bestOf']);
});

$('#blue .name').on('change', function() {
  scoreboard['blue']['name'] = $('#blue .name').val();
  socket.emit('scoreboard', scoreboard);
  console.log(scoreboard);
});

$('#blue .score').on('change', function() {
  scoreboard['blue']['score'] = $('#blue .score').val();
  socket.emit('scoreboard', scoreboard);
  console.log(scoreboard);
});

$('#orange .name').on('change', function() {
  scoreboard['orange']['name'] = $('#orange .name').val();
  socket.emit('scoreboard', scoreboard);
  console.log(scoreboard);
});

$('#orange .score').on('change', function() {
  scoreboard['orange']['score'] = $('#orange .score').val();
  socket.emit('scoreboard', scoreboard);
  console.log(scoreboard);
});

$('#bestOf').on('change', function(){
  scoreboard['bestOf'] = $('#bestOf').val();
  socket.emit('scoreboard', scoreboard);
  console.log(scoreboard);
});

$('#region').on('change', function(){
  scoreboard['region'] = $('#region').val();
  socket.emit('scoreboard', scoreboard);
  console.log(scoreboard);
});


socket.on('caster', function(data) {
  caster['left'] = data['left'];
  caster['right'] = data['right'];

  $('#left').val(caster['left']);
  $('#right').val(caster['right']);
});

$('#left').on('change', function() {
  caster['left'] = $('#left').val();
  socket.emit('caster', caster);
  console.log(caster);
});

$('#right').on('change', function() {
  caster['right'] = $('#right').val();
  socket.emit('caster', caster);
  console.log(caster);
});

socket.on('spotlight', function(data) {
  spotlight['organization'] = data['organization'];

  $('#organization').val(spotlight['organization']);
});

$('#organization').on('change', function() {
  spotlight['organization'] = $('#organization').val();
  socket.emit('spotlight', spotlight);
  console.log(spotlight);
});
