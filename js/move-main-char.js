'use strict';

let speed = 10;

function moveChar(direction) {
  switch(direction) {
  case 'ArrowLeft':
    GameContents.mainChar.coordinates.x -= speed;
    break;
  case 'ArrowRight':
    GameContents.mainChar.coordinates.x += speed;
    break;
  case 'ArrowUp':
    GameContents.mainChar.coordinates.y -= speed;
    break;
  case 'ArrowDown':
    GameContents.mainChar.coordinates.y += speed;
  }
  console.log('Character coordinates updated : ' + GameContents.mainChar.coordinates.x + ',' + GameContents.mainChar.coordinates.y);
}

document.addEventListener('keydown', function(event) {
  console.log('Movement triggered');
  moveChar(event.key);
  renderPage();
});
