
var songs = ["Sunflower by Rex Orange County","American Teen by Khalid","LOVE AGAIN by Daniel Caesar", "Beautiful People by Ed Sheeran and Khalid", "Better by SG Lewis and Clairo", "Talk by Khalid", "xanny by Billie Eilish", "Green Light by Lorde", "Best Friend by Rex Orange County", "Pretty Girl by Clairo", "Party in the USA by Miley Cyrus", "Vertigo by Khalid", "Classic by MKTO", "I Want It That Way by The Backstreet Boys", "Location by Khalid", "Young Dumb and Broke by Khalid", "Style by Taylor Swift", "Lost in Japan by Shawn Mendes", ""];
console.log(songs)

var button = $('button');

button.on('click', newSong);

function newSong () {
  var randomNumber = Math.floor (Math.random() * songs.length);
  var artists= songs[randomNumber];
  var music = $('p');
  music.text(artists);
}

// for (var i = 0; i < songs.length; i++) {
//   console.log (`${songs[i]}!`);
