'use strict';

function checkSpecCollision(object) {
  if (GameContents.mainChar.coordinates.x > object.bottomRight.x) {
    return false;
  } else if (GameContents.mainChar.bottomRight.x < object.coordinates.x) {
    return false;
  } else if (GameContents.mainChar.coordinates.y > object.bottomRight.y) {
    return false;
  } else if (GameContents.mainChar.bottomRight.y < object.coordinates.y) {
    return false;
  } else {
    return true;
  }
}

function collectKey() {
  if (checkSpecCollision(GameContents.key) && (GameContents.mainChar.inventory.key === false)) {
    GameContents.mainChar.inventory.key = true;
    console.log('we got da key yippee');
    const keyHTML = document.getElementById('key');
    keyHTML.remove();
  }
}

function useDoor() {
  if (checkSpecCollision(GameContents.door) && GameContents.mainChar.inventory.key) {
    console.log('yay u win :3');
    newFloor();
  }
}

function collectPowerup() {
  if (checkSpecCollision(GameContents.chest)) {
    let chosenIndex = Math.floor(Math.random() * powerups.length);
    GameContents.mainChar.inventory[powerups[chosenIndex]].pickedUp();
    const powerUpAudio = document.getElementById('power-up');
    powerUpAudio.play();
  }
}
