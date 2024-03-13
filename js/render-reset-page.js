'use strict';

function renderPage() {
  const mainCharHTML = document.getElementById('mainChar');
  const doorHTML = document.getElementById('door');

  mainCharHTML.style.left = GameContents.mainChar.coordinates.x + 'px';
  mainCharHTML.style.top = GameContents.mainChar.coordinates.y + 'px';
  doorHTML.style.left = GameContents.door.coordinates.x + 'px';
  doorHTML.style.top = GameContents.door.coordinates.y + 'px';

  if (GameContents.mainChar.inventory.key === false) {
    const keyHTML = document.getElementById('key');

    keyHTML.style.left = GameContents.key.coordinates.x + 'px';
    keyHTML.style.top = GameContents.key.coordinates.y + 'px';  
  }

  if (GameContents.chest.collected === false) {
    const chestHTML = document.getElementById('chest');

    chestHTML.style.left = GameContents.chest.coordinates.x + 'px';
    chestHTML.style.top = GameContents.chest.coordinates.y + 'px';
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

  console.log('chest about to be removed');
  if (GameContents.chest.collected === false) {
    console.log('chest should be removed');
    const chestHTML = document.getElementById('chest');
    chestHTML.remove();
  }

  for (let i = 0; i < GameContents.walls.length; i++) {
    const newWallHTML = document.getElementById('wall-' + i);

    newWallHTML.remove();
  }

  GameContents.walls = [];
  GameContents.mainChar.inventory.key = false;
  GameContents.chest.collected = false;

  console.log('reset');
}
