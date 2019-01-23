let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endDisplay = document.querySelector('.display__end-time');
const timeButtons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if timer interval should be stopped
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display the time left
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const hours = Math.floor(seconds / 3600);
  const remainderMinutes = Math.floor((seconds % 3600) / 60);
  const remainderSeconds = seconds % 60;
  const timeLeft = `${hours}:${remainderMinutes}:${remainderSeconds < 10 ? '0' + remainderSeconds : remainderSeconds}`;
  document.title = timeLeft;
  timerDisplay.textContent = timeLeft;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const endHour = end.getHours();
  const endMinute = end.getMinutes();
  const adjustedHour = endHour > 12 ? endHour - 12 : endHour;
  const adjustedMinute = endMinute < 10 ? '0' + endMinute : endMinute;
  endDisplay.textContent = `Be Back At ${adjustedHour}:${adjustedMinute}`;
}

function setTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

timeButtons.forEach(button => button.addEventListener('click', setTimer));
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const seconds = this.minutes.value * 60;
  timer(seconds);
  this.reset();
})

