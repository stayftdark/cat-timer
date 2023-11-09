//variables
let workTitle = document.getElementById('start');
let breakTitle = document.getElementById('pause');

let workTime = 60;
let breakTime = 15;

let seconds = "00"

//display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitle.classList.add('active');
}

//start timer
function start(){
    //changing time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    //countdown
    let timerFunction = () => {
    //show on display
    document.getElementById('minutes').innerHTML = workMinutes;
    document.getElementById('seconds').innerHTML = seconds;

    seconds = seconds - 1;
    }
}
//start count down
setInterval(timerFunction, 1000); //AKA 1second
