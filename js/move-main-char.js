'use strict'

let speed = 1;

function moveChar(direction) {
  switch(direction) {
      case 'ArrowLeft':
          mainChar.coordinates.x -= speed;
          break;
      case 'ArrowRight':
          mainChar.coordinates.x += speed;
          break;
      case 'ArrowUp':
          mainChar.coordinates.y -= speed;
          break;
      case 'ArrowDown':
          mainChar.coordinates.y += speed;
  }
}

document.addEventListener('keydown', function(event) {
  moveChar(event.key);
  renderPage();
});
