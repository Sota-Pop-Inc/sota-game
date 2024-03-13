'use strict';

let startTime;

function startTimer() {
  startTime = new Date();
}

function stopTimer() {
  const endTime = new Date();
  const elapsedTime = endTime - startTime;
  console.log(`Time taken: ${elapsedTime / 1000} seconds`);
}
