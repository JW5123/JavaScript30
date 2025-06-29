const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; // 90 degrees offset for CSS rotation
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minsDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hoursDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setDate();
setInterval(setDate, 1000);