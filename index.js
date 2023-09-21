let [seconds, minutes, hours] = [0, 0, 0];

const displayTime = document.getElementById("time");
const playPauseBtn = document.getElementById("play-pause");
let timer = null;

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const h = hours < 10 ? "0" + hours : hours;
  const m = minutes < 10 ? "0" + minutes : minutes;
  const s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h + ":" + m + ":" + s;
}

let currentStatus = "pause";

function runStopwatch() {
  if (currentStatus === "play") {
    currentStatus = "pause";
    playPauseBtn.innerHTML = "Play";

    clearInterval(timer);
  } else {
    currentStatus = "play";
    playPauseBtn.innerHTML = "Pause";

    if (timer !== null) {
      clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
  }
}

function stopStopwatch() {
  clearInterval(timer);
}

function resetStopwatch() {
  [seconds, minutes, hours] = [0, 0, 0];
  clearInterval(timer);
  displayTime.innerHTML = "00:00:00";
  playPauseBtn.innerHTML = "Play";
  currentStatus = "pause";
}
