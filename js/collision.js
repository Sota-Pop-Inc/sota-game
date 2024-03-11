'use strict';

function checkSpecCollision(object) {
  if (GameContents.mainChar.coordinates.x > GameContents[object].bottomRight.x) {
    console.log('uh oh tripped 1');
    return false;
  } else if (GameContents.mainChar.bottomRight.x < GameContents[object].coordinates.x) {
    console.log('uh oh tripped 2');
    return false;
  } else if (GameContents.mainChar.coordinates.y > GameContents[object].bottomRight.y) {
    console.log('uh oh tripped 3');
    return false;
  } else if (GameContents.mainChar.bottomRight.y < GameContents[object].coordinates.y) {
    console.log('uh oh tripped 4');
    return false;
  } else {
    return true;
  }
}

function collectKey() {
  console.log('checking for key');
  if (checkSpecCollision('key')) {
    GameContents.mainChar.inventory.push('key');
    console.log('we got da key yippee');
  } else {console.log('no key');}
}

function useDoor() {
  if (checkSpecCollision('door') && GameContents.mainChar.inventory.includes('key')) {
    console.log('yay u win :3');
  }
}
