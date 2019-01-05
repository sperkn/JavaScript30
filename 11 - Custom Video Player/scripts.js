const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const playButton = player.querySelector('.player__button');
const sliders = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullButton = player.querySelector('.player__full');
const progress = player.querySelector('.player__controls .progress');
const progressBar = player.querySelector('.player__controls .progress__filled');
let mousedown = false;

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

function handleProgress() {
  const percent = (video.currentTime/video.duration)*100;
  progressBar.style.flexBasis = `${percent}%`;
};

function adjustProgress(e) {
  const time = (e.offsetX/progress.offsetWidth) * video.duration;
  video.currentTime = time;
};

function fullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    fullButton.textContent = 'Full';
  } else {
    player.requestFullscreen();
    fullButton.textContent = 'Esc';
  }
};

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
playButton.addEventListener('click', togglePlay);
sliders.forEach(slider => slider.addEventListener('change', adjustSlider));
sliders.forEach(slider => slider.addEventListener('mousemove', adjustSlider));
skipButtons.forEach(button => button.addEventListener('click', skip));
progress.addEventListener('click', adjustProgress);
progress.addEventListener('mousemove', (e) => mousedown && adjustProgress(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
fullButton.addEventListener('click', fullScreen);