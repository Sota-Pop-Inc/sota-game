'use strict';

let startTime;
let timerInterval;

function readTimer() {
  const readTime = new Date();
  const elapsedTime = readTime - startTime;
  const timerHTML = document.getElementById('timer');
  timerHTML.textContent = 'Time: ' + Math.floor(elapsedTime / 1000);
}

function timer(StartOrStopBoolean) {
  if (StartOrStopBoolean) {
    startTime = new Date();
    timerInterval = setInterval(readTimer, 1000);
  } else {
    clearInterval(timerInterval);
    const endTime = new Date();
    const elapsedTime = endTime - startTime;
    console.log(`Time taken: ${elapsedTime / 1000} seconds`);
    score += 100;
    score += 1000 - (10 * elapsedTime / 1000);
  }
}
