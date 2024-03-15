'use strict';

function checkSpecCollision(object1string, object2) {
  if (GameContents[object1string].coordinates.x > object2.bottomRight.x) {
    return false;
  } else if (GameContents[object1string].bottomRight.x < object2.coordinates.x) {
    return false;
  } else if (GameContents[object1string].coordinates.y > object2.bottomRight.y) {
    return false;
  } else if (GameContents[object1string].bottomRight.y < object2.coordinates.y) {
    return false;
  } else {
    return true;
  }
}

function collectKey() {
  if (checkSpecCollision('mainChar', GameContents.key) && (GameContents.mainChar.inventory.key === false)) {
    GameContents.mainChar.inventory.key = true;
    console.log('we got da key yippee');
    const keyHTML = document.getElementById('key');
    keyHTML.remove();

    const itemsHTML = document.getElementById('items');
    const keyITEM = document.createElement('img');
    keyITEM.id = 'keyITEM';
    keyITEM.src = './assets/props/Key32x32.png';
    keyITEM.alt = 'Key';
    itemsHTML.appendChild(keyITEM);
  }
}

function useDoor() {
  if (checkSpecCollision('mainChar', GameContents.door) && GameContents.mainChar.inventory.key) {
    console.log('yay u win :3');
    newFloor();
  }
}

function collectPowerup() {
  if (checkSpecCollision('mainChar', GameContents.chest) && GameContents.chest.collected === false) {
    let powerups = ['pickaxe'];
    GameContents.mainChar.inventory['pickaxe'].pickedUp();
    const powerUpAudio = document.getElementById('power-up');
    powerUpAudio.play();
    const chestHTML = document.getElementById('chest');
    chestHTML.remove();
    GameContents.chest.collected = true;
  }
}
