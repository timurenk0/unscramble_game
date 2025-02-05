const timeLeftTextEl = document.getElementById("time-left");
const userInputEl = document.getElementById("user-input");

let timeLeft = 30;
let isTimeOut = false;
timeLeftTextEl.textContent = timeLeft;

function updateTimer() {
    let handleTimer = setInterval(() => {
        timeLeft--;
        timeLeftTextEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(handleTimer);
            isTimeOut = true;
        }
    }, 500)
}

export { updateTimer, isTimeOut };