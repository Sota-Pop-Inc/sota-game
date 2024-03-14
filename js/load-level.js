'use strict';

function loadChar () {
  let char = document.createElement('img');

  char.id = 'mainChar';
  char.src = 'assets/character/BubblesRight.png';
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

function loadChest () {
  let chest = document.createElement('img');

  chest.id = 'chest';
  chest.src = 'assets/props/chest.png';
  chest.alt = 'Chest';

  let mainElement = document.getElementById('main');
  mainElement.appendChild(chest);

  let chosenCell = GameContents.grid[Math.floor(Math.random() * 16)][Math.floor(Math.random() * 16)];
  GameContents.chest.coordinates.x = chosenCell.x;
  GameContents.chest.coordinates.y = chosenCell.y;
  GameContents.chest.bottomRight.x = chosenCell.x + GameContents.chest.width - 1;
  GameContents.chest.bottomRight.y = chosenCell.y + GameContents.chest.height - 1;
}

function loadSlime () {
  let slime = document.createElement('img');

  slime.id = 'slime';
  slime.src = 'assets/props/Slime.png';
  slime.alt = 'Slime';

  let mainElement = document.getElementById('main');
  mainElement.appendChild(slime);

  let chosenCell = GameContents.grid[Math.floor(Math.random() * 16)][Math.floor(Math.random() * 16)];
  GameContents.slime.coordinates.x = chosenCell.x;
  GameContents.slime.coordinates.y = chosenCell.y;
  GameContents.slime.bottomRight.x = chosenCell.x + GameContents.slime.width - 1;
  GameContents.slime.bottomRight.y = chosenCell.y + GameContents.slime.height - 1;

  slimeAI();
}

function initializeLevel() {
  loadCells();
  loadChar();
  loadDoor();
  loadKey();
  loadChest();
  loadSlime();
  loadWalls();
  loadJunctions();
  loadPowerUps();
  timer(true);
  loadHealth();
  const scoreHTML = document.getElementById('score');
  scoreHTML.textContent = 'Score: 0';
  const timerHTML = document.getElementById('timer');
  timerHTML.textContent = 'Time: 0';
}

function loadLevel() {
  loadChar();
  loadDoor();
  loadKey();
  loadChest();
  loadSlime();
  loadWalls();
  timer(true);
}
