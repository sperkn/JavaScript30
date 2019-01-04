const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');
let videoPlay = false;

function togglePlay() {
  videoPlay = !videoPlay;

  if(videoPlay) {
    video.play();
  } else {
    video.pause();
  }
};

playButton.addEventListener('click', togglePlay);