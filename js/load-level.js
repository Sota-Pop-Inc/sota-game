'use strict';

function loadChar () {
  let char = document.createElement('img');

  char.id = 'mainChar';
  char.src = 'assets/character/Hero32x32.png';
  char.alt = 'Main Character';

  let mainElement = document.getElementById('main');
  mainElement.appendChild(char);

  let chosenCell = GameContents.grid[Math.floor(Math.random() * 16)][Math.floor(Math.random() * 16)];
  GameContents.mainChar.coordinates.x = chosenCell.x;
  GameContents.mainChar.coordinates.y = chosenCell.y;
  GameContents.mainChar.bottomRight.x = chosenCell.x + GameContents.mainChar.width - 1;
  GameContents.mainChar.bottomRight.y = chosenCell.y + GameContents.mainChar.height - 1;
}

function loadDoor () {
  let door = document.createElement('img');

  door.id = 'door';
  door.src = 'assets/props/door_locked.png';
  door.alt = 'Door';

  let mainElement = document.getElementById('main');
  mainElement.appendChild(door);

  let chosenCell = GameContents.grid[Math.floor(Math.random() * 16)][Math.floor(Math.random() * 16)];
  GameContents.door.coordinates.x = chosenCell.x;
  GameContents.door.coordinates.y = chosenCell.y;
  GameContents.door.bottomRight.x = chosenCell.x + GameContents.door.width - 1;
  GameContents.door.bottomRight.y = chosenCell.y + GameContents.door.height - 1;
}

function loadKey () {
  let key = document.createElement('img');

  key.id = 'key';
  key.src = 'assets/props/Key32x32.png';
  key.alt = 'Key';

  let mainElement = document.getElementById('main');
  mainElement.appendChild(key);

  let chosenCell = GameContents.grid[Math.floor(Math.random() * 16)][Math.floor(Math.random() * 16)];
  GameContents.key.coordinates.x = chosenCell.x;
  GameContents.key.coordinates.y = chosenCell.y;
  GameContents.key.bottomRight.x = chosenCell.x + GameContents.key.width - 1;
  GameContents.key.bottomRight.y = chosenCell.y + GameContents.key.height - 1;
}

function loadLevel() {
  loadCells();
  loadChar();
  loadDoor();
  loadKey();
  generateMazeDFS();
}
