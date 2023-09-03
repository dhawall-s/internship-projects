const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minuteHand, minutes);
    rotateClockHand(hourHand, hours);
}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTick, 1000);

const timeDisplay = document.getElementById('time-display');

function updateTimeDisplay() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;

    // Update the time display
    timeDisplay.querySelector('.current-time').textContent = currentTime;
}

setInterval(updateTimeDisplay, 1000);
