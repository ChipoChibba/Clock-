//adding functionality to our function
const hourEl = document.querySelector(".hour");
const minuitEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");//getting the elements

function updateClock(){
    const currDate= new Date();
    const hour =currDate.getHours();
    const minute =currDate.getMinutes();
    const second =currDate.getSeconds();
    console.log(hour, minute, second);
    const hourDeg = (hour / 12) * 360;
    console.log(hourDeg);
    hourEl.style.transform =`rotate (${hourDeg}deg)`;
    const minuitDeg = ( minute / 60) * 360;
    minuitEl.style.transform =`rotate (${minuitDeg}deg)`;
    const secondDeg = (second / 60) * 360;
    secondEl.style.transform =`rotate (${secondDeg}deg)`;
    secondEl.style.color = 'red';
}
setInterval(updateClock,1000)
