const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const playButton = player.querySelector('.player__button');
const sliders = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');
const progress = player.querySelector('.player__controls .progress');
const progressFilled = player.querySelector('.player__controls .progress__filled');

function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  playButton.textContent = icon;
};

function adjustSlider() {
  video[this.name] = this.value;
};

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
};

function adjustProgress(e) {
  let width = (e.layerX/640)*100;
  progressFilled.style.flexBasis = `${width}%`;
  video.currentTime = video.duration*(width/100);
};

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
playButton.addEventListener('click', togglePlay);
sliders.forEach(slider => slider.addEventListener('change', adjustSlider));
sliders.forEach(slider => slider.addEventListener('mousemove', adjustSlider));
skipButtons.forEach(button => button.addEventListener('click', skip));
progress.addEventListener('click', adjustProgress);