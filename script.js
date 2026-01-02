let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let lapBtn = document.getElementById("lap");
let lapList = document.getElementById("lapList");
let timer = null;
let running = false;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = `${h}:${m}:${s}`;
}

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

// Start Button
startBtn.addEventListener("click", function() {
    if (!running) {
        timer = setInterval(stopwatch, 1000);
        running = true;
    }
});

// Pause Button
pauseBtn.addEventListener("click", function() {
    if (running) {
        clearInterval(timer);
        running = false;
    }
});

// Reset Button
resetBtn.addEventListener("click", function() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
    running = false;
    lapList.innerHTML = "";
});

// Lap Button
lapBtn.addEventListener("click", function() {
    if (running) {
        let lapTime = display.textContent;
        let li = document.createElement("li");
        li.textContent = lapTime;
        lapList.appendChild(li);
    }
});

updateDisplay();