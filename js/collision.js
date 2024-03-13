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
  if (checkSpecCollision(GameContents.key)) {
    GameContents.mainChar.inventory.push('key');
    console.log('we got da key yippee');
  }
}

function useDoor() {
  if (checkSpecCollision(GameContents.door) && GameContents.mainChar.inventory.includes('key')) {
    console.log('yay u win :3');
    resetPage();
    loadLevel();
    renderPage();
  }
}
