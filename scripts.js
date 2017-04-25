var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var skipButton = document.getElementById("skipButton");
var loadButton = document.getElementById("loadButton");
var audio = document.getElementById("player");

playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);
skipButton.addEventListener("click", skip);
// loadButton.addEventListener("click", load);

function Jukebox() {
	this.play = play;
	this.pause = pause;
	this.skip = skip;
	this.songs = [];
	this.currentSong = 0;
}

function Song(band, album, song, fileName, artFile) {
	this.band = band;
	this.album = album;
	this.song = song;
	this.fileName = fileName;
	this.artFile = artFile;
}

function songList() {
	for(var i=0; i < playlist.length; i++) {
		console.log(playlist[i].song)
	}
}

// ----------Jukebox Functionality-------------

var jukebox = new Jukebox();

function play() {
	audio.src = songs[currentSong].fileName;
	jukebox.play()
}

function pause() {
	jukebox.pause()
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

// -------Song Object Instances-------

var ego = new Song ("Ego Likeness", "Dragonfly", "Drown Like You", "assets/audio/drown_like_you.mp3", "assets/images/egolikeness.jpg");
var horrors = new Song ("The Horrors", "Skying", "Still Life", "assets/audio/still_life.mp3", "assets/images/horrors.jpg");
var dreamside = new Song ("The Dreamside", "Spin Moon Magic", "Into a Frenzy", "assets/audio/into_a_frenzy.mp3", "assets/images/dreamside.jpg");
















