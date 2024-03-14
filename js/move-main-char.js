'use strict';

let speed = 2;
let movementInterval = null;
let keyPressed = {};
let lastWallTouched;

function moveChar(XorY, signFirst, signSecond) {
  GameContents.mainChar.coordinates[XorY] += speed * signFirst;
  GameContents.mainChar.bottomRight[XorY] += speed * signFirst;
  for (let i = 0; i < GameContents.walls.length; i++) {
    if (checkSpecCollision('mainChar', GameContents.walls[i]) || (i < GameContents.junctions.length && checkSpecCollision('mainChar', GameContents.junctions[i]))) {
      if (checkSpecCollision('mainChar', GameContents.walls[i])) {
        lastWallTouched = i;
      }
      GameContents.mainChar.coordinates[XorY] += speed * signSecond;
      GameContents.mainChar.bottomRight[XorY] += speed * signSecond;
      return;
    }
  }
  collectPowerup();
  collectKey();
  useDoor();
  renderPage();
}

function startMovement() {
  clearInterval(movementInterval);
  movementInterval = setInterval(function() {
    const mainCharHTML = document.getElementById('mainChar');
    if (keyPressed['ArrowLeft']) {
      moveChar('x', -1, 1);
      mainCharHTML.src = 'assets/character/BubblesLeft.png';
    }
    if (keyPressed['ArrowRight']) {
      moveChar('x', 1, -1);
      mainCharHTML.src = 'assets/character/BubblesRight.png';
    }
    if (keyPressed['ArrowUp']) moveChar('y', -1, 1);
    if (keyPressed['ArrowDown']) moveChar('y', 1, -1);
  }, 16);
}

function stopMovement() {
  clearInterval(movementInterval);
}

document.addEventListener('keydown', function(event) {
  if (keyPressed['ArrowUp'] || keyPressed['ArrowRight'] || keyPressed['ArrowDown'] || keyPressed['ArrowLeft']) {
    const stepsAudio = document.getElementById('steps');
    stepsAudio.play();
  }
  if (!keyPressed[event.key]) {
    keyPressed[event.key] = true;
    startMovement();
  }
});

document.addEventListener('keyup', function(event) {
  keyPressed[event.key] = false;
  if (!keyPressed['ArrowUp'] && !keyPressed['ArrowRight'] && !keyPressed['ArrowDown'] && !keyPressed['ArrowLeft']) {
    const stepsAudio = document.getElementById('steps');
    stepsAudio.pause();
  }
  if (!Object.values(keyPressed).includes(true)) {
    stopMovement();
  }
});
