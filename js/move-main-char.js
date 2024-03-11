'use strict';

let speed = 10;

function moveChar(direction) {
  switch(direction) {
  case 'ArrowLeft':
    GameContents.mainChar.coordinates.x -= speed;
    GameContents.mainChar.bottomRight.x -= speed;
    collectKey();
    useDoor();
    break;
  case 'ArrowRight':
    GameContents.mainChar.coordinates.x += speed;
    GameContents.mainChar.bottomRight.x += speed;
    collectKey();
    useDoor();
    break;
  case 'ArrowUp':
    GameContents.mainChar.coordinates.y -= speed;
    GameContents.mainChar.bottomRight.y -= speed;
    collectKey();
    useDoor();
    break;
  case 'ArrowDown':
    GameContents.mainChar.coordinates.y += speed;
    GameContents.mainChar.bottomRight.y += speed;
    collectKey();
    useDoor();
  }
  console.log('Character coordinates updated : ' + GameContents.mainChar.coordinates.x + ',' + GameContents.mainChar.coordinates.y);
}

document.addEventListener('keydown', function(event) {
  console.log('Movement triggered');
  moveChar(event.key);
  renderPage();
});
