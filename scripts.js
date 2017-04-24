var playButton = document.getElementsByClassName("controls")[0];
var pauseButton = document.getElementsByClassName("controls")[1];
var skipButton = document.getElementsByClassName("controls")[2];
var loadButton = document.getElementsByClassName("controls")[3];

playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);
skipButton.addEventListener("click", skip);
loadButton.addEventListener("click", load);

function Jukebox() {
	this.play = play;
	this.pause = pause;
	this.skip = skip;
}

function Song() {
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

function play() {

}

function pause() {

}

function skip() {

}
















