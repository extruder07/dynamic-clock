setInterval(() => {
    let time = new Date;
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

let time = new Date;
let seconds = time.getSeconds();
let minutes = time.getMinutes();
let hours = time.getHours();

// let hourAngle = (360 / 12) * hours + minutes * (787)