var spotlight = {
  "agtv": {
    "logo": "/assets/img/Organizations/agtv.png",
    "command": "!agtv",
    "twitter": "AussieGamingTV",
    "twitch": "AussieGamingTV"
  },
  "bl1": {
    "logo": "/assets/img/Organizations/bl1.png",
    "command": "!bl",
    "twitter": "BoostLegacy",
    "twitch": "BoostLegacy"
  },
  "cca": {
    "logo": "/assets/img/Organizations/cca.png",
    "command": "!cca",
    "twitter": "CollegeCarball",
    "twitch": "CollegeCarball"
  },
  "mg": {
    "logo": "/assets/img/Organizations/mg.png",
    "command": "!mg",
    "twitter": "",
    "twitch": ""
  },
  "mld": {
    "logo": "/assets/img/Organizations/mld.png",
    "command": "!mld",
    "twitter": "MLDoubles",
    "twitch": "MLDoubles"
  },
  "myth1": {
    "logo": "/assets/img/Organizations/myth1.png",
    "command": "!myth",
    "twitter": "Mythical_Es",
    "twitch": "MythicalEsports"
  },
  "nexus": {
    "logo": "/assets/img/Organizations/nexus.png",
    "command": "!nexus",
    "twitter": "NexusGamingRL",
    "twitch": "NexusGamingRL"
  },
  "orsa": {
    "logo": "/assets/img/Organizations/orsa.png",
    "command": "!orsa",
    "twitter": "ERocketSports",
    "twitch": "ERocketSports"
  },
  "ppl": {
    "logo": "/assets/img/Organizations/ppl2.png",
    "command": "!ppl",
    "twitter": "PulsarPremier",
    "twitch": "PulsarPremierLeague"
  },
  "prl": {
    "logo": "/assets/img/Organizations/prl.png",
    "command": "!prl",
    "twitter": "ProRivalry",
    "twitch": "ProRivalry"
  },
  "rd": {
    "logo": "/assets/img/Organizations/rd.png",
    "command": "!rd",
    "twitter": "Rocket_Dailies",
    "twitch": "Rocket_Dailies"
  },
  "rg": {
    "logo": "/assets/img/Organizations/rg.png",
    "command": "!rd",
    "twitter": "Rocket_Dailies",
    "twitch": "Rocket_Dailies"
  },
  "rhl": {
    "logo": "/assets/img/Organizations/rhl.png",
    "command": "!rhl",
    "twitter": "RHLHockeyLeague",
    "twitch": "RocketHockeyLeague"
  },
  "rla": {
    "logo": "/assets/img/Organizations/rla.png",
    "command": "!rla",
    "twitter": "RLeagueAsia",
    "twitch": "RocketLeagueAsia"
  },
  "rlc": {
    "logo": "/assets/img/Organizations/rlc.png",
    "command": "!rlc",
    "twitter": "RocketLGCentral",
    "twitch": "RocketLeagueCentral"
  },
  "rlg": {
    "logo": "/assets/img/Organizations/rlg.png",
    "command": "!rlg",
    "twitter": "RLGarage",
    "twitch": ""
  },
  "rlo": {
    "logo": "/assets/img/Organizations/rlo.png",
    "command": "!rlo",
    "twitter": "RLOceania",
    "twitch": "RocketLeagueOceania"
  },
  "rlw": {
    "logo": "/assets/img/Organizations/rlw.png",
    "command": "!rlw",
    "twitter": "RLWCommunity",
    "twitch": "RocketLeagueWorld"
  },
  "rs": {
    "logo": "/assets/img/Organizations/rs.png",
    "command": "!rs",
    "twitter": "RocketStreet",
    "twitch": "RocketStreetLive"
  },
  "spl": {
    "logo": "/assets/img/Organizations/spl.png",
    "command": "!spl",
    "twitter": "ShiftProLeague",
    "twitch": "ShiftProLeague"
  },
  "svs": {
    "logo": "/assets/img/Organizations/SvS.png",
    "command": "!svs",
    "twitter": "StateVsState",
    "twitch": "StateVsState"
  },
  "txrl": {
    "logo": "/assets/img/Organizations/txrl.png",
    "command": "!txrl",
    "twitter": "TexasRL",
    "twitch": "TexasRL"
  },
  "vvv": {
    "logo": "/assets/img/Organizations/vvv.png",
    "command": "!vvv",
    "twitter": "vVvGaming",
    "twitch": "LivevVvGaming"
  },
  "organization": "agtv"
}

var socket = io();

socket.on('spotlight', function(data){
  spotlight['organization'] = data['organization'];

  var key = spotlight['organization'];
  var command = spotlight[key]['command'];
  var twitter = spotlight[key]['twitter'] ? '<i class="fa fa-twitter" aria-hidden="true"></i>' + spotlight[key]['twitter'] : '';
  var twitch = spotlight[key]['twitch'] ? '<i class="fa fa-twitch" aria-hidden="true"></i>' + spotlight[key]['twitch'] : '';
  
  $('#logo').attr('src', spotlight[key]['logo']);
  $('#command').text(command);
  $('#twitter').html(twitter);
  $('#twitch').html(twitch);

  console.log(spotlight);
});
