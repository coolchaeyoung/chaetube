const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");

const handlePlayBtn = () => {
    if(videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
}
 
const init = () => {
    playBtn.addEventListener("click", handlePlayBtn);
}

if(videoContainer) {
    init();
}