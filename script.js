let image = document.getElementById("image");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let previous_song = document.getElementById("prev_song");
let current_song = document.getElementById("current_song");
let next_song = document.getElementById("next_song");

let timer;
let autoplay = 1;

let index_no = 0;
let playing_song = false;

let song = document.createElement("audio");

let allSongs = [
    {
        name: "FirstSong",
        path: "music/song1.mp3",
        img: "img/img1.jpg",
        artist: "Hiphop tamilza"
    },
    {
        name: "SecondSong",
        path: "music/song1.mp3",
        img: "img/img1.jpg",
        artist: "Anirudh"
    },
    {
        name: "ThirdSong",
        path: "music/song1.mp3",
        img: "img/img1.jpg",
        artist: "Sid Sriram"
    },

];


function playSong(index_no){
    song.src=allSongs[index_no].path;
    image=allSongs[index_no].img;
    title=allSongs[index_no].title;
    artist=allSongs[index_no].artist;
}