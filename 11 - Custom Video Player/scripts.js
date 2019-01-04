const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const playButton = player.querySelector('.player__button');
const sliders = player.querySelectorAll('.player__slider');
const progress = player.querySelector('.player__controls .progress');
const progressFilled = player.querySelector('.player__controls .progress__filled');

function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

function adjustSlider() {
  const inputName = this.name;
  
  if (inputName === 'volume') {
    video.volume = this.value;
  } else {
    video.playbackRate = this.value;
  }
}

function adjustProgress(e) {
  let width = (e.layerX/640)*100;
  progressFilled.style.flexBasis = `${width}%`;
  video.currentTime = video.duration*(width/100);
};

progress.addEventListener('click', adjustProgress);
playButton.addEventListener('click', togglePlay);
sliders.forEach(slider => slider.addEventListener('change', adjustSlider));