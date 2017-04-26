var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var skipButton = document.getElementById("skipButton");
var loadButton = document.getElementById("loadButton");
var audio = document.getElementById("player");

// -------Song Object Instances-------

var ego = new Song ("Ego Likeness", "Dragonfly", "Drown Like You", "assets/audio/drown_like_you.mp3", "assets/images/egolikeness.jpg");
var horrors = new Song ("The Horrors", "Skying", "Still Life", "assets/audio/still_life.mp3", "assets/images/horrors.jpg");
var dreamside = new Song ("The Dreamside", "Spin Moon Magic", "Into a Frenzy", "assets/audio/into_a_frenzy.mp3", "assets/images/dreamside.jpg");

var songs = [ego, horrors, dreamside];
var currentSong = 0;

window.onload = function() {
	audio.src = songs[currentSong].fileName;
};

// -------Object Constructors-------

function Jukebox() {
	this.play = play;
	this.pause = pause;
	this.skip = skip;
}

function Song(band, album, song, fileName, artFile) {
	this.band = band;
	this.album = album;
	this.song = song;
	this.fileName = fileName;
	this.artFile = artFile;
}

// ----------Jukebox Functionality-------------

var jukebox = new Jukebox();

playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);
skipButton.addEventListener("click", skip);
// loadButton.addEventListener("click", load);

var displayText = document.getElementsByClassName("display-text");
var albumArt = document.getElementsByClassName("albumArt")[0];

function display(songs) {
	albumArt.src = songs[currentSong].artFile;
	displayText[0].innerHTML = songs[currentSong].song;
	displayText[1].innerHTML = songs[currentSong].band;
	displayText[2].innerHTML = songs[currentSong].album;
}

function play() {
	audio.src = songs[currentSong].fileName;
	audio.play()
	display(songs)
}

function pause() {
	audio.pause()
}

function skip() {
	if (currentSong === songs.length -1) {
		currentSong = 0;
		jukebox.play()
	}
	else {
		currentSong += 1
		jukebox.play()
	}
}

var song = document.getElementById("song").value; 
var band = document.getElementById("band").value;
var album = document.getElementById("album").value;
var songFile = document.getElementById("file-name").value;
var artFile = document.getElementById("art-file").value;
var loadButton = document.getElementById("load-song");

// loadButton.addEventListener("click", load);

// function load() {
// 	var newSong = new Song(band, album, song, songFile, artFile);

// 	songs.push(newSong);
// 	console.log(songs);
// }

var playlistItem = document.getElementsByClassName("playlist-item")[0];

function songList(playlist) {
	for(var i=0; i < playlist.length; i++) {
		playlistItem.innerHTML += "<p>" + playlist[i].band + " : " + playlist[i].song + "</p>";
	}
}

songList(songs);













