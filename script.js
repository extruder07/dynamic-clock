setInterval(() => {
    const time = new Date;
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();
    let secondElement = document.getElementById('second');
    let minuteElement = document.getElementById('minute');
    let hourElement = document.getElementById('hour');
    let ampmElement = document.getElementById('ampm');
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    secondElement.innerText = seconds;
    minuteElement.innerText = minutes;
    hourElement.innerText = hours;
    ampmElement.innerText = ampm;
}, 1000);

setInterval(() => {
    
const time = new Date();
let seconds = time.getSeconds();
let minutes = time.getMinutes();
let hours = time.getHours();

let secondHand = document.getElementById('second-hand');
let minuteHand = document.getElementById('minute-hand');
let hourHand = document.getElementById('hour-hand');

let secondAngle = (360 / 60) * seconds - 90;
let minuteAngle = (360 / 60) * minutes + (6 / 60) * seconds - 90;
let hourAngle = (360 / 12) * (hours % 12) + (30 / 60) * minutes - 90;

secondHand.style.transform = `translateY(-50%) rotate(${secondAngle}deg)`;
minuteHand.style.transform = `translateY(-50%) rotate(${minuteAngle}deg)`;
hourHand.style.transform = `translateY(-50%) rotate(${hourAngle}deg)`;
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const alarmInput = document.getElementById('alarm-input');
    const timerHoursInput = document.getElementById('timer-hours');
    const timerMinutesInput = document.getElementById('timer-minutes');
    const timerSecondsInput = document.getElementById('timer-seconds');
    const remainingTimeDiv = document.getElementById('remaining-time');

    const alarmSound = new Audio('alarm.m4a');
    const timerSound = new Audio('timer.m4a');

    alarmSound.loop = true;
    timerSound.loop = true;

    let alarmTimeout;
    let timerTimeout;
    let timerInterval;

    // Set Alarm
    document.getElementById('set-alarm-button').addEventListener('click', () => {
        const alarmTime = new Date();
        const [hours, minutes] = alarmInput.value.split(':').map(Number);
        alarmTime.setHours(hours, minutes, 0, 0);

        const timeToAlarm = alarmTime.getTime() - Date.now();

        if (timeToAlarm > 0) {
            alarmTimeout = setTimeout(() => {
                alarmSound.play();
                alert('Alarm is ringing!');
            }, timeToAlarm);
            alert('Alarm is set!');
        } else {
            alert('Please select a future time for the alarm.');
        }
    });

    // Cancel Alarm
    document.getElementById('cancel-alarm-button').addEventListener('click', () => {
        clearTimeout(alarmTimeout);
        if (!alarmSound.paused) {
            alarmSound.pause();
            alarmSound.currentTime = 0;
        }
        if (confirm('Do you want to stop the alarm?')) {
            alarmSound.pause();
            alarmSound.currentTime = 0;
            alert('Alarm is canceled.');
        }
    });

    // Set Timer
    document.getElementById('set-timer-button').addEventListener('click', () => {
        const hours = parseInt(timerHoursInput.value, 10) || 0;
        const minutes = parseInt(timerMinutesInput.value, 10) || 0;
        const seconds = parseInt(timerSecondsInput.value, 10) || 0;

        const totalSeconds = hours * 3600 + minutes * 60 + seconds;

        if (totalSeconds > 0) {
            const timerEndTime = Date.now() + totalSeconds * 1000;

            timerInterval = setInterval(() => {
                const remainingTime = timerEndTime - Date.now();
                if (remainingTime <= 0) {
                    clearInterval(timerInterval);
                    remainingTimeDiv.textContent = 'Time is up!';
                    timerSound.play();
                    alert('Timer is done!');
                } else {
                    const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
                    const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
                    const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
                    remainingTimeDiv.textContent =
                        `Remaining Time: ${String(remainingHours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
                }
            }, 1000);

            timerTimeout = setTimeout(() => {
                timerSound.play();
                alert('Timer is done!');
            }, totalSeconds * 1000);

            alert('Timer is set!');
        } else {
            alert('Please select a valid time for the timer.');
        }
    });

    // Cancel Timer
    document.getElementById('cancel-timer-button').addEventListener('click', () => {
        clearTimeout(timerTimeout);
        clearInterval(timerInterval);
        if (!timerSound.paused) {
            timerSound.pause();
            timerSound.currentTime = 0;
        }
        if (confirm('Do you want to stop the timer?')) {
            timerSound.pause();
            timerSound.currentTime = 0;
            remainingTimeDiv.textContent = 'Remaining Time: 00:00:00';
            alert('Timer is canceled.');
        }
    });
});
