'use strict';

let speed = 8;
let movementInterval = null;
let keyPressed = {};

function moveChar(XorY, signFirst, signSecond) {
  GameContents.mainChar.coordinates[XorY] += speed * signFirst;
  GameContents.mainChar.bottomRight[XorY] += speed * signFirst;
  for (let i = 0; i < GameContents.walls.length; i++) {
    if (checkSpecCollision(GameContents.walls[i]) || (i < GameContents.junctions.length && checkSpecCollision(GameContents.junctions[i]))) {
      GameContents.mainChar.coordinates[XorY] += speed * signSecond;
      GameContents.mainChar.bottomRight[XorY] += speed * signSecond;
    }
  }
  collectKey();
  useDoor();
  renderPage();
}

function startMovement() {
  clearInterval(movementInterval);
  movementInterval = setInterval(function() {
    if (keyPressed['ArrowLeft']) moveChar('x', -1, 1);
    if (keyPressed['ArrowRight']) moveChar('x', 1, -1);
    if (keyPressed['ArrowUp']) moveChar('y', -1, 1);
    if (keyPressed['ArrowDown']) moveChar('y', 1, -1);
  }, 16);
}

function stopMovement() {
  clearInterval(movementInterval);
}

document.addEventListener('keydown', function(event) {
  console.log('Movement triggered');
  if (!keyPressed[event.key]) {
    keyPressed[event.key] = true;
    startMovement();
  }
});

document.addEventListener('keyup', function(event) {
  console.log('Movement stopped');
  keyPressed[event.key] = false;
  if (!Object.values(keyPressed).includes(true)) {
    stopMovement();
  }
});
