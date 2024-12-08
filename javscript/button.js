// Welcome message
function ButtonWelcomeMessage() {
    alert("Welcome to Dan Dan Noodles!");
  }

  // Pageload trigger
  window.onload = ButtonWelcomeMessage;





  // Countdown Timer
const timerElement = document.getElementById('timer');

// Timer
let countdownTime = 300; // 1 minute

function startTimer() {
    const interval = setInterval(() => {
        // Calculate time
        const minutes = Math.floor(countdownTime / 60);
        const seconds = countdownTime % 60;

        // Leading 0s
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      
        countdownTime--;

        // Stop timer
        if (countdownTime < 0) {
            clearInterval(interval);
            timerElement.textContent = "Time's up!";
        }
    }, 1000); 
}

// Timer start
startTimer();
  