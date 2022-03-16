const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');
const musiclist = document.querySelectorAll('.music-list-1 p');



// song list
const songList = [
    {
        path: "./mp3/周杰倫-說好不哭.mp3",
        songName: "周杰倫-說好不哭",
    },
    {
        path: "./mp3/周杰倫 -簡單愛.mp3",
        songName: "周杰倫-簡單愛",
    },

    {
        path: "./mp3/周杰倫 -告白氣球.mp3",
        songName: "周杰倫 -告白氣球",
    },
];

let songPlaying = false;

//播放音樂
const playSong = () => {
    songPlaying = true;
    audio.play();
    playPause.classList.add('active');
    playPause.innerHTML = '<span class="material-icons">pause</span>';
}

//暫定音樂
const pauseSong = () => {
    songPlaying = false;
    audio.pause();
    playPause.classList.remove('active');
    playPause.innerHTML = ' <span class="material-icons">play_arrow</span>';

}
//play/pause song
playPause.addEventListener("click", () => (songPlaying ? pauseSong() : playSong()));

//load song
const loadSong = (songList) => {
    title.textContent = songList.songName;
    audio.src = songList.path;
}
let i = 0;
loadSong(songList[i]);

//previous song
const prevSong = () => {
    i--;
    if (i < 0) {
        i = songList.length - 1;
    }
    loadSong(songList[i]);
    playSong();
}

prev.addEventListener("click", prevSong);

//next song
const nextSong = () => {
    i++;
    if (i > (songList.length - 1)) {
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}

next.addEventListener("click", nextSong);



//播放列表
musiclist[0].onclick = function () {
    i = 0;
    loadSong(songList[i]);
    playSong();
    next.addEventListener("click", nextSong);
    prev.addEventListener("click", prevSong);
}
musiclist[2].onclick = function () {
    i = 1
    loadSong(songList[i]);
    playSong();
    next.addEventListener("click", nextSong);
    prev.addEventListener("click", prevSong);
}
musiclist[4].onclick = function () {
    i = 2;
    loadSong(songList[i]);
    playSong();
    next.addEventListener("click", nextSong);
    prev.addEventListener("click", prevSong);
}
