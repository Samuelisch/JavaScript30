const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const time = document.querySelector('.time');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    const date = now.getDate();
    console.log(`${date}, ${hours}, ${minutes}, ${seconds}`)
}

setInterval(setDate, 1000);