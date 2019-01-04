const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');
const volumeSlider = document.querySelector('.player__controls input[name=volume]');
const speedSlider = document.querySelector('.player__controls input[name=playbackRate]');

function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

function adjustVolume() {
  video.volume = this.value;
};

function adjustSpeed() {
  video.playbackRate = this.value;
};

playButton.addEventListener('click', togglePlay);
volumeSlider.addEventListener('change', adjustVolume);
speedSlider.addEventListener('change', adjustSpeed);
