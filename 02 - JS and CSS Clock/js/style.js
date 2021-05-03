const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const time = document.querySelector('.time');

function setDate() {
    const now = new Date();

    const zero = (x) => {
        if (x < 10) {
            return `0${x}`;
        }
        return x;
    }

    const seconds = zero(now.getSeconds());
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const mins = zero(now.getMinutes());
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`

    const hour = zero(now.getHours());
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    time.textContent = `${hour} : ${mins} : ${seconds}`;
}

setInterval(setDate, 1000);

//understand transition all, and how to disable then enable it.