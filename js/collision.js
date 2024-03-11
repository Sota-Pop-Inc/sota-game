'use strict';

function checkSpecCollision(object) {
  if (GameContents.mainChar.coordinates.x > GameContents[object].bottomRight.x) {
    return false;
  } else if (GameContents.mainChar.bottomRight.x < GameContents[object].coordinates.x) {
    return false;
  } else if (GameContents.mainChar.coordinates.y > GameContents[object].bottomRight.y) {
    return false;
  } else if (GameContents.mainChar.bottomRight.y < GameContents[object].coordinates.y) {
    return false;
  } else {
    return true;
  }
}

function collectKey() {
  if (checkSpecCollision('key')) {
    GameContents.mainChar.inventory.push('key');
    console.log('we got da key yippee');
  }
}

function useDoor() {
  if (checkSpecCollision('door') && GameContents.mainChar.inventory.includes('key')) {
    console.log('yay u win :3');
  }
}
