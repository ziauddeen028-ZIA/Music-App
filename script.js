let image = document.getElementById("image");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let previous_song = document.getElementById("prev_song");
let current_song = document.getElementById("current_song");
let next_song = document.getElementById("next_song");
let slider = document.getElementById("slider");
let currentsecond = document.getElementById("current-time");
let songduration = document.getElementById("song-duration");

let timer;
let autoplay = 1;

let index_no = 0;
let playing_song = false;

let song = document.createElement("audio");

let allSongs = [
    {
        name: "Oru Nalil",
        path: "songs/song1Orunalil.mp3",
        img: "OruNaallimg.jpg",
        artist: "Yuvan"
    },


    {
        name: "The Life of Ram",
        path: "songs/Song4 96.mp3",
        img: "96img.jpg",
        artist: "Pradeep Kumar"
    },

    {
        name: "Poradalam",
        path: "songs/Song5poradalam.mp3",
        img: "poradalamimg.jpg",
        artist: "MS Dhoni"
    },

    {
        name: "VengaiMavan",
        path: "songs/Song2Hiphop.mp3",
        img: "hiphopimg.jpg",
        artist: "Hiphop tamilza"
    },

    {
        name: "Dandelions",
        path: "songs/Song3Dandelions.mp3",
        img: "dandelionsimg.jpg",
        artist: "Ruth B"
    },

    {
        name: "Night Changes",
        path: "songs/Song6nightchanges.mp3",
        img: "changesimg.jpg",
        artist: "One Direction"
    },

];


function startSong(index_no) {

    resetSlider();

    song.src = allSongs[index_no].path;
    image.src = allSongs[index_no].img;
    title.innerHTML = allSongs[index_no].name;
    artist.innerHTML = allSongs[index_no].artist;

    song.currentTime = 0;

}

startSong(index_no);

function currentSong() {
    if (playing_song == false) {
        playSong();
    } else {
        pauseSong();
    }
}

function resetSlider() {
    slider.value = 0;
    slider.style.background = `linear-gradient(to right, #ff74a4 0%, #ccc 0%)`;
}

// When user moves the slider, update background color
slider.addEventListener("input", function () {
    let value = this.value;
    let percent = (value / this.max) * 100;

    // Fill left side green, right side gray
    this.style.background = `linear-gradient(to right, #ff74a4 ${percent}%, #ccc ${percent}%)`;
});

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) secs = "0" + secs;
    return minutes + ":" + secs;
}

formatTime();

function playSong() {
    song.play();
    playing_song = true;
    current_song.innerHTML = '<i class="fa-sharp-duotone fa-solid fa-pause"></i>'
}


function pauseSong() {
    song.pause();
    playing_song = false;
    current_song.innerHTML = '<i class="fa-sharp-duotone fa-solid fa-play"></i>'
}

function nextSong() {
    playing_song = true;
    index_no += 1;
    startSong(index_no);
    song.play();
    current_song.innerHTML = '<i class="fa-sharp-duotone fa-solid fa-pause"></i>'
}

function backSong() {
    playing_song = true;
    index_no -= 1;
    startSong(index_no);
    song.play();
    current_song.innerHTML = '<i class="fa-sharp-duotone fa-solid fa-pause"></i>'
}

function changeDuration() {
    slider_position = song.duration * (slider.value / 100);
    song.currentTime = slider_position;
}


song.addEventListener("timeupdate", function () {
    currentsecond.innerHTML = formatTime(song.currentTime);
});


song.addEventListener("loadedmetadata", function () {
    songduration.innerHTML = formatTime(song.duration);
});