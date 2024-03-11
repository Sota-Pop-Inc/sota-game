'use strict';

function loadChar () {
  let char = document.createElement('img');

  char.id = 'mainChar';
  char.src = 'assets/character/mainChar.png';
  char.alt = 'Main Character';

  let mainElement = document.getElementById('main');
  mainElement.appendChild(char);

  GameContents.mainChar.coordinates.x = 0;
  GameContents.mainChar.coordinates.y = 0;
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

  GameContents.door.coordinates.x = 1200;
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

function loadLevel() {
  loadChar();
  loadDoor();
  loadKey();
}
