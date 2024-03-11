'use strict';

let speed = 8;

function moveChar(XorY, signFirst, signSecond) {
  GameContents.mainChar.coordinates[XorY] += speed * signFirst;
  GameContents.mainChar.bottomRight[XorY] += speed * signFirst;
  for (let i = 0; i < GameContents.walls.length; i++) {
    if (checkSpecCollision(GameContents.walls[i])) {
      GameContents.mainChar.coordinates[XorY] += speed * signSecond;
      GameContents.mainChar.bottomRight[XorY] += speed * signSecond;
    }
  }
  collectKey();
  useDoor();
}

document.addEventListener('keydown', function(event) {
  console.log('Movement triggered');
  switch(event.key) {
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
