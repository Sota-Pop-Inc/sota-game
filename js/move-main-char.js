'use strict';

let speed = 1;

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
}

document.addEventListener('keydown', function(event) {
  moveChar(event.key);
  renderPage();
});
