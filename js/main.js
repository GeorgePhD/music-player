
//bringing stuff in
const musicContainer = document.querySelector('.music-container');
const playButton = document.querySelector('#play');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
//const img = '../img';
//song titles
const songs = ['2Pac-101-Keep-Ya-Head-Up' , '2Pac-102-2-Of-Amerikaz-Most-Wanted' , '2Pac-103-Temptations', '2Pac-104-God-Bless-The-Dead', '2Pac-105-Hail-Mary', '2Pac-106-Me-Against-The-World' , '2Pac-107-How-Do-U-Want-It' , '2Pac-108-So-Many-Tears' , '2Pac-109-Unconditional-Love' , '2Pac-110-Trapped' , '2Pac-111-Life-Goes-On' , '2Pac-112-Hit-Em-Up' , '2Pac-201-Troublesome-96' , '2Pac-202-Brendas-Got-A-Baby' , '2Pac-203-I-Aint-Mad-At-Cha' , '2Pac-204-I-Get-Around' , '2Pac-205-Changes' , '2Pac-206-Califonia-Love' , '2Pac-207-Picture-Me-Rollin' , '2Pac-208-How-Long-Will-They-Mourn-Me' , '2Pac-209-Toss-It-Up' , '2Pac-210-Dear-Mama' , '2Pac-211-All-About-U' , '2Pac-212-To-Live-And-Die-In-L.A.' , '2Pac-213-Heartz-Of-Men'];

/* const songs = ['2Pac-101-Keep-Ya-Head-Up' , '2Pac-102-2-Of-Amerikaz-Most-Wanted' , '2Pac-103-Temptations', '2Pac-104-God-Bless-The-Dead', '2Pac-105-Hail-Mary', '2Pac-106-Me-Against-The-World' , '2Pac-107-How-Do-U-Want-It' , '2Pac-108-So-Many-Tears' , '2Pac-109-Unconditional-Love' , '2Pac-110-Trapped' , '2Pac-111-Life-Goes-On' , '2Pac-112-Hit-Em-Up' , '2Pac-201-Troublesome-96' , '2Pac-202-Brendas-Got-A-Baby' , '2Pac-203-I-Aint-Mad-At-Cha' , '2Pac-204-I-Get-Around' , '2Pac-205-Changes' , '2Pac-206-Califonia-Love' , '2Pac-207-Picture-Me-Rollin' , '2Pac-208-How-Long-Will-They-Mourn-Me' , '2Pac-209-Toss-It-Up' , '2Pac-210-Dear-Mama' , '2Pac-211-All-About-U' , '2Pac-212-To-Live-And-Die-In-L.A.' , '2Pac-213-Heartz-Of-Men']; */


// keep track of songs
let songIndex = 0;

//initially load song info DOM
loadSong(songs[songIndex]);

//update song details
function loadSong(song) {

    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `img/${song}.jpg`;

};
function playSong() {

    musicContainer.classList.add('play');
    playButton.querySelector('i.fas').classList.remove('fa-play');
    playButton.querySelector('i.fas').classList.add('fa-pause');

    audio.play();

};
function pauseSong() {

    musicContainer.classList.remove('play');
    playButton.querySelector('i.fas').classList.add('fa-play');
    playButton.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();


};

function prevSong(){

    songIndex-- ;

    if(songIndex < 0) {

        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();

};

function nextSong(){

    songIndex++;

    if(songIndex > songs.length - 1) {

        songIndex = 0;
        
    }

    loadSong(songs[songIndex]);
    playSong();

};

function updateProgress(e) {

    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

};

function setProgress(e) {

    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}


//event listeners

playButton.addEventListener('click', () => {

    const isPlaying = musicContainer.classList.contains('play');

        if(isPlaying) {

            pauseSong();

        } else {

            playSong();
        }
});

//change songs

prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);





