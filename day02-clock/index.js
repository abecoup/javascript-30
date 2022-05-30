const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const time = document.querySelector('.time');

function setRotation() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function displayTime() {
    const now = new Date();

    const hours = (now.getHours() % 12) || 12;
    const min = now.getMinutes();
    const sec = now.getSeconds() >= 10 ? now.getSeconds() : '0' + now.getSeconds();
    let AmOrPm = hours >= 12 ? 'PM' : 'AM';

    const currTime = hours + ":" + min + ":" + sec + " " + AmOrPm;
    document.getElementById("time").innerHTML = currTime;
}

setInterval(setRotation, 10);
setRotation();
setInterval(displayTime, 10);
displayTime();