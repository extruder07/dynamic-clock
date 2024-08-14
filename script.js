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