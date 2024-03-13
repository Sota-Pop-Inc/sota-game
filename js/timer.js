// Functions to start timer on initial movement button click, and end on door object collision


'use strict';

let timerStarted = false;
let startTime;


function useDoor() {
  if (checkSpecCollision(GameContents.door) && GameContents.mainChar.inventory.includes('key')) {
    if (timerStarted) {
      const endTime = new Date();
      const elapsedTime = endTime - startTime;
      console.log('yay u win :3');
      console.log(`Time taken: ${elapsedTime / 1000} seconds`);
      timerStarted = false; // Stop the timer
    }
  }
}

document.addEventListener('keydown', function(event) {
  console.log('Movement triggered');
  if (!timerStarted && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
    startTime = new Date();
    timerStarted = true;
  }
  switch (event.key) {
  case 'ArrowLeft':
    moveChar('x', -1, 1);
    break;
  case 'ArrowRight':
    moveChar('x', 1, -1);
    break;
  case 'ArrowUp':
    moveChar('y', -1, 1);
    break;
  case 'ArrowDown':
    moveChar('y', 1, -1);
  }
  console.log('Character coordinates updated : ' + GameContents.mainChar.coordinates.x + ',' + GameContents.mainChar.coordinates.y);
  renderPage();
});
