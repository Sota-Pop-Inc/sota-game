// Function that opens a menu pop-up when user presses "p" button on the keyboard. Menu provides clickable buttons for sound control and level restart.


let isGamePaused = false;
let pauseStartTime;
let totalPausedTime = 0;

function pauseTimer() {
  if (!isGamePaused) {
    pauseStartTime = new Date();
    isGamePaused = true;
    console.log('Game and timer paused');
  }
}

function resumeTimer() {
  if (isGamePaused) {
    const pauseEndTime = new Date();
    totalPausedTime += pauseEndTime - pauseStartTime;
    isGamePaused = false;
    console.log('Game and timer resumed');
  }
}

function getElapsedTime() {
  const now = new Date();
  const elapsedTime = isGamePaused ? pauseStartTime - startTime - totalPausedTime : now - startTime - totalPausedTime;
  console.log(`Elapsed Time: ${elapsedTime / 1000} seconds`);
}

// Function to resume the game
function resumeGame() {
}

function toggleSound() {
  // Implement sound toggle logic here.
  console.log('Sound toggled');
}

// Function to restart the game level
function restartLevel() {
  console.log('Level restarted');
}

document.addEventListener('keydown', function(event) {
  // Check if the 'P' key is pressed
  if (event.key === 'p' || event.key === 'P') {
    const pauseMenu = document.getElementById('pauseMenu');
    if (pauseMenu.style.display === "none") {
      pauseMenu.style.display = "block"; // Show the pause menu
      pauseGame(); // Pause the game
    } else {
      pauseMenu.style.display = "none"; // Hide the pause menu
      resumeGame(); // Resume the game
    }
  }
});

document.getElementById('toggleSound').addEventListener('click', toggleSound);
document.getElementById('restartLevel').addEventListener('click', restartLevel);