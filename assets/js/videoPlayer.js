const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScrnBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume");

const formDate = time => {
    const totalTime = parseInt(time);
    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor(totalTime % 3600 / 60);
    let seconds = Math.floor(totalTime % 60);
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${hours}:${minutes}:${seconds}`;
};

const handlePlayBtn = () => {
    if(videoPlayer.paused) {
        videoPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        videoPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
};

const handleVolumeClick = () => {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        volumeRange.
        videoPlayer.muted = true;
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
};

const exitFullScreen = () => {
    document.webkitExitFullscreen();
    fullScrnBtn.innerHTML = '<i class="fas fa-expand"></i>';
    fullScrnBtn.removeEventListener("click", exitFullScreen);
    fullScrnBtn.addEventListener("click", goFullScreen);
};


const goFullScreen = () => {
    videoContainer.webkitRequestFullscreen();
    fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>';
    fullScrnBtn.removeEventListener("click", goFullScreen);
    fullScrnBtn.addEventListener("click", exitFullScreen);
};

const getCurrentTime = () => {
    currentTime.innerHTML = formDate(videoPlayer.currentTime);
};

const setTotalTime = () => {
    totalTime.innerHTML = formDate(videoPlayer.duration);
    setInterval(getCurrentTime, 1000);
}

const handleEnded = () => {
    playBtn.innerHTML = '<i class="fas fa-redo"></i>';
}

const handleDrag = event => {
    const { target: { value } } = event;
    videoPlayer.volume = value;
    if (value >= 0.6) {
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else if (value >= 0.2) {
        volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
    } else {
        volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
    }
}

const init = () => {
    videoPlayer.volume = 0.5;
    playBtn.addEventListener("click", handlePlayBtn);
    volumeBtn.addEventListener("click", handleVolumeClick);
    fullScrnBtn.addEventListener("click", goFullScreen);
    videoPlayer.addEventListener("loadedmetadata", setTotalTime);
    videoPlayer.addEventListener("ended", handleEnded);
    volumeRange.addEventListener("input", handleDrag);
};

if(videoContainer) {
    init();
}