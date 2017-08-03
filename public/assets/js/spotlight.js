var spotlight = {
  "agtv": {
    "logo": "/assets/img/Organizations/agtv.png",
    "description": "Oceania's Premier Talent Agency for Esports Personalities, AGTV was created at the start of 2016 to provide agency services to casters, cosplayers and other esports talent in the region. Working with organisations such as ESL and CyberGamer to provide top-quality commentary and event administration, AGTV is a staple in the professional esports scene Down Under."
  },
  "bl1": {
    "logo": "/assets/img/Organizations/bl1.png",
    "description": "blah"
  },
  "cca": {
    "logo": "/assets/img/Organizations/cca.png",
    "description": "The CCA is a place where university students can come together to establish their university team, hang out and practice with other collegiate players, and engage in intercollegiate exhibitions. We currently have 29 registered chapters, over 30 developing chapters, and over 400 members!"
  },
  "mg": {
    "logo": "/assets/img/Organizations/mg.png",
    "description": "blah"
  },
  "mld": {
    "logo": "/assets/img/Organizations/mld.png",
    "description": "A toxicity-free league modelled after North American sports leagues, for players below Diamond rank. Top-notch graphics design and Twitch productions for weekly broadcasts from Thursday to Sunday."
  },
  "myth1": {
    "logo": "/assets/img/Organizations/myth1.png",
    "description": "Mythical Esports prides itself on providing the platform and opportunity for anyone to work and learn in a fun, but professional, esports organization. We host 2 community friendly tournaments every week that are welcome to pro and amateur players alike. We strive to prepare generations of skilled professionals, to fuel the future of e-sports."
  },
  "nexus": {
    "logo": "/assets/img/Organizations/nexus.png",
    "description": "Nexus provides tournaments, 3 times a week, for high level Rocket League players to test their skill against some of the best in the scene. We stream and commentate every tournament, always looking to provide an entertaining experience. Come join The Competitive Community!"
  },
  "orsa": {
    "logo": "/assets/img/Organizations/orsa.png",
    "description": "blah"
  },
  "ppl": {
    "logo": "/assets/img/Organizations/ppl.png",
    "description": "The Pulsar Premier League is a way to bring viewers the best matches, all the time. Our streams consist of the top 8-10 teams in a region playing against each other, and nothing less. Previous seasons have featured nearly all of the current RLCS casters and we pride ourselves with having the best matches, and the best casting."
  },
  "prl": {
    "logo": "/assets/img/Organizations/prl.png",
    "description": "Weekly NA and EU tournaments with second-to-none production quality and streams."
  },
  "rd": {
    "logo": "/assets/img/Organizations/rd.png",
    "description": "blah"
  },
  "rg": {
    "logo": "/assets/img/Organizations/rg.png",
    "description": "Rewind Gaming began in September simply as a group of friends looking to play with other people. It grew steadily from there, later focussing on holding Rocket League tournaments for people both in the server and outside it. We host 3v3 (and now 1v1) events every single week, with all levels and nationalities welcome!"
  },
  "rhl": {
    "logo": "/assets/img/Organizations/rhl.png",
    "description": "blah"
  },
  "rla": {
    "logo": "/assets/img/Organizations/rla.png",
    "description": "Biggest RL Organization in Asia. Players from all over the continent gather and duke it out to make a name for themselves and shoot to mark the region on the map Rocket League universe. Multiple Nationalities, one banner: Asia."
  },
  "rlc": {
    "logo": "/assets/img/Organizations/rlc.png",
    "description": "Founded in May of 2015, RLC serves as a neutral hub with the goal of promoting esports, news, updates, and more for the Rocket League community. Previous events include Rocket Royale & the RLC Pro League."
  },
  "rlg": {
    "logo": "/assets/img/Organizations/rlg.png",
    "description": "RLG is the world's first and largest Rocket League fan site, offering a platform for trading, sharing training codes, getting the latest RL news, and more."
  },
  "rlo": {
    "logo": "/assets/img/Organizations/rlo.png",
    "description": "Rocket League Oceania moderates and maintains itself as the centre for Rocket League within the Oceanic region. Running tournaments through multiple divisions, RLO caters to all skill levels. Additionally RLO works a lot with the community, driving community support for events and healthy community structure."
  },
  "rlw": {
    "logo": "/assets/img/Organizations/rlw.png",
    "description": "blah"
  },
  "rs": {
    "logo": "/assets/img/Organizations/rs.png",
    "description": "Rocket Street is an organization that takes care of the South American scene, hosting weekly tournaments as well as supporting amateur tournament organizers within the community."
  },
  "spl": {
    "logo": "/assets/img/Organizations/spl.png",
    "description": "ShiftProLeague is a high octane community with the toppest of tournaments. Join today to become apart of one of the fastest growing communities in the Rocket League scene!"
  },
  "svs": {
    "logo": "/assets/img/Organizations/svs.png",
    "description": "blah"
  },
  "txrl": {
    "logo": "/assets/img/Organizations/txrl.png",
    "description": "TexasRL is a community  of players, casters and TOs throughout Texas dedicated to building our local communities. We host online monthly tournaments, local offline tournaments, RLCS viewing parties and state-wide LANs as well as assist other organizations in event management and production (SXSW, DreamHack, ComicPalooza, PAX)."
  },
  "vvv": {
    "logo": "/assets/img/Organizations/vvv.png",
    "description": "In everything we do, we believe that all gamers with an obsession for competition need an engaging outlet to share and express their passions. Competitive gamers thrive in a diverse environment that is social, empowering, supportive and informative, and all gamers, regardless of skill, have a place in competitive gaming. Competitive gaming should entertain, be educational and make you feel a sense of domination, whether you’re the top player or simply a fan. The way we do this is called vVv Gaming, and we just happen to be the best competitive gaming community in the world. Wanna join?"
  },
  "organization": "agtv"
}

var socket = io();

socket.on('spotlight', function(data){
  spotlight['organization'] = data['organization'];

  // $('.overlay').attr('src', src);

  console.log(spotlight);
});
