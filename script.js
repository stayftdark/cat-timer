document.addEventListener("DOMContentLoaded", function() {
    // Variables
    let timer;
    let isRunning = false;
    let intervals = [60 * 60, 15 * 60]; // Initial intervals in seconds (60 minutes, 15 minutes)
    let currentIntervalIndex = 0;

    // Set initial image source
    document.getElementById('sailor-cat').src = './images/grey.png';

    // Display initial time
    updateTimeDisplay();

    // Start button click event
    document.getElementById('start').addEventListener('click', function() {
        if (!isRunning) {
            startTimer();
        }
    });

    // Pause button click event
    document.getElementById('pause').addEventListener('click', function() {
        if (isRunning) {
            pauseTimer();
        }
    });

    // Function to start the timer
    function startTimer() {
        isRunning = true;
        timer = setInterval(function() {
            document.getElementById('status').innerText = 'Start!';
            if (intervals[currentIntervalIndex] > 0) {
                intervals[currentIntervalIndex]--;
                updateTimeDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                switchInterval();
                changeImage(); // Call the function to change the image
                startTimer();
            }
        }, 1000); // Update every second
    }

    // Function to pause the timer
    function pauseTimer() {
        isRunning = false;
        clearInterval(timer);
        document.getElementById('sailor-cat').src = './images/sailor.png'; // Change the image source 
        document.getElementById('status').innerText = '...';
    }

    // Function to update the time display
    function updateTimeDisplay() {
        const minutes = Math.floor(intervals[currentIntervalIndex] / 60);
        const seconds = intervals[currentIntervalIndex] % 60;
        const formattedTime = `${padZero(minutes)}:${padZero(seconds)}`;
        document.getElementById('timer').innerText = formattedTime;

        // Change the image source only if the timer is running
        if (isRunning) {
            document.getElementById('sailor-cat').src = './images/kiki.png';
        }
    }

    // Function to switch to the next interval
    function switchInterval() {
        currentIntervalIndex = (currentIntervalIndex + 1) % intervals.length;
    }

    // Function to pad zero for single-digit numbers
    function padZero(num) {
        return num < 10 ? `0${num}` : num;
    }
});
