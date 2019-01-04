const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');
const volumeSlider = document.querySelector('.player__controls input[name=volume]');
const speedSlider = document.querySelector('.player__controls input[name=playbackRate]');
const progress = document.querySelector('.player__controls .progress');
const progressFilled = document.querySelector('.player__controls .progress__filled');

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

function adjustProgress(e) {
  let width = (e.layerX/640)*100;
  progressFilled.style.flexBasis = `${width}%`;
  video.currentTime = video.duration*(width/100);
};

progress.addEventListener('click', adjustProgress);
playButton.addEventListener('click', togglePlay);
volumeSlider.addEventListener('change', adjustVolume);
speedSlider.addEventListener('change', adjustSpeed);