let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = null;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    timeDisplay.textContent = `${m} : ${s} : ${ms}`;
}

function startTimer() {
    if (interval !== null) return;

    interval = setInterval(() => {
        milliseconds++;

        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        updateDisplay();
    }, 10);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
