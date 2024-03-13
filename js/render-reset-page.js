'use strict';

function renderPage() {
  const mainCharHTML = document.getElementById('mainChar');
  const doorHTML = document.getElementById('door');

  mainCharHTML.style.left = GameContents.mainChar.coordinates.x + 'px';
  mainCharHTML.style.top = GameContents.mainChar.coordinates.y + 'px';
  doorHTML.style.left = GameContents.door.coordinates.x + 'px';
  doorHTML.style.top = GameContents.door.coordinates.y + 'px';

  if (GameContents.mainChar.inventory.includes('key') === false) {
    const keyHTML = document.getElementById('key');

    keyHTML.style.left = GameContents.key.coordinates.x + 'px';
    keyHTML.style.top = GameContents.key.coordinates.y + 'px';
  }

  for (let i = 0; i < GameContents.walls.length; i++) {
    const newWallHTML = document.getElementById('wall-' + i);

    newWallHTML.style.left = GameContents.walls[i].coordinates.x + 'px';
    newWallHTML.style.top = GameContents.walls[i].coordinates.y + 'px';
  }

  for (let i = 0; i < GameContents.junctions.length; i++) {
    const newJunctionHTML = document.getElementById('junction-' + i);

    newJunctionHTML.style.left = GameContents.junctions[i].coordinates.x + 'px';
    newJunctionHTML.style.top = GameContents.junctions[i].coordinates.y + 'px';
  }

  console.log('rendered');
}

function resetPage() {
  const mainCharHTML = document.getElementById('mainChar');
  const doorHTML = document.getElementById('door');

  mainCharHTML.remove();
  doorHTML.remove();

  for (let i = 0; i < GameContents.walls.length; i++) {
    const newWallHTML = document.getElementById('wall-' + i);

    newWallHTML.remove();
  }
  GameContents.walls = [];
  GameContents.mainChar.inventory.splice(GameContents.mainChar.inventory.indexOf('key'), 1);

  console.log('reset');
}
