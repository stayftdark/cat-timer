const timer = document.querySelector('#timer')
const title = document.querySelector('.#title')
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const restartBtn = document.querySelector('#resume')
const resetBtn = document.querySelector("#resetBtn")

const WORK_TIME = 1 * 60;
const BREAK_TIME = 0.5 * 60;
let timerID = null;
let oneRoundCompleted = false; //work+break

//update title
const updateTitle = (msg) => {
    title.textContent = msg;
}
//function for countdown
const countDown = (time) => {
    return () => {
        timer.textContent = time;
        time--;
        if(time < 0){
            stopTimer();
            if(!oneRoundCompleted == false){
                timerID = startTimer(BREAK_TIME);
                oneRoundCompleted = true;
                updateTitle("Go!")
            }
        }
    }

}
const startTimer = (startTime) => {
    if(timerID !== null){
        stopTimer();
    }
    return setInterval(countDown(startTime), 1000);
    
}
//function to stop timer
const stopTimer = () => {
    clearInterval(timerID)
    timerID = null;
}
//start button event listener
startBtn.addEventListener('click', ()=>{
    timerID = startTimer(WORK_TIME);
    updateTitle("Go!");
});
