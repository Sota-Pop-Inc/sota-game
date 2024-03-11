'use strict';

function loadChar () {
  let char = document.createElement('img');

  char.id = 'mainChar';
  char.src = 'assets/character/Hero32x32.png';
  char.alt = 'Main Character';

  let mainElement = document.getElementById('main');
  mainElement.appendChild(char);

  GameContents.mainChar.coordinates.x = 8;
  GameContents.mainChar.coordinates.y = 8;
  GameContents.mainChar.bottomRight.x = GameContents.mainChar.width;
  GameContents.mainChar.bottomRight.y = GameContents.mainChar.height;
}

function loadDoor () {
  let door = document.createElement('img');

  door.id = 'door';
  door.src = 'assets/props/door_locked.png';
  door.alt = 'Door';

  let mainElement = document.getElementById('main');
  mainElement.appendChild(door);

  GameContents.door.coordinates.x = 300;
  GameContents.door.coordinates.y = 300;
  GameContents.door.bottomRight.x = GameContents.door.coordinates.x + GameContents.door.width;
  GameContents.door.bottomRight.y = GameContents.door.bottomRight.y + GameContents.door.height;
}

function loadKey () {
  let key = document.createElement('img');

  key.id = 'key';
  key.src = 'assets/props/key.png';
  key.alt = 'Key';

  let mainElement = document.getElementById('main');
  mainElement.appendChild(key);

  GameContents.key.coordinates.x = 200;
  GameContents.key.coordinates.y = 500;
  GameContents.key.bottomRight.x = GameContents.key.coordinates.x + GameContents.key.width;
  GameContents.key.bottomRight.y = GameContents.key.bottomRight.y + GameContents.key.height;
}

function loadWall() {
  let wall = document.createElement('img');

  wall.id = 'wall';
  wall.src = 'assets/props/wallVert.png';
  wall.alt = 'Wall';

  let mainElement = document.getElementById('main');
  mainElement.appendChild(wall);

  GameContents.wallVert.coordinates.x = 700;
  GameContents.wallVert.coordinates.y = 500;
  GameContents.wallVert.bottomRight.x = GameContents.wallVert.coordinates.x + GameContents.wallVert.width;
  GameContents.wallVert.bottomRight.y = GameContents.wallVert.coordinates.y + GameContents.wallVert.height;
}

function loadLevel() {
  loadChar();
  loadDoor();
  loadKey();
  // loadWall();
  generateWalls('001010000000100110110011011110010001001101001100001110000100101011101110100101000110101101001010110000100000010000000000011011100100010011000011100100010100011011001101110100110001010100111101100010111000101000111011000110001100000101011001110000101111101000010100011011110011010000010110101001111001110001001011101000100011110000011100110101110111101010011111010010001001100011010111001011110011001001111111100001011100100011100011111011100110100101000111110001010011010010000101');
}
