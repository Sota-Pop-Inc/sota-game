'use strict';

function loadChar () {
  let char = document.createElement('img');

  char.id = 'mainChar';
  char.src = './character/mainChar.png';
  char.alt = 'Main Character';

  let mainElement = document.getElementById('main');
  mainElement.appendChild(char);

  GameContents.mainChar.coordinates.x = 0;
  GameContents.mainChar.coordinates.y = 0;
}

function loadDoor () {
  let door = document.createElement('img');

  door.id = 'door';
  door.src = 'door.jpg';
  door.alt = 'Door';

  let mainElement = document.getElementById('main');
  mainElement.appendChild(door);

  GameContents.door.coordinates.x = 0;
  GameContents.door.coordinates.y = 0;
}

function loadKey () {
  let key = document.createElement('img');

  key.id = 'key';
  key.src = 'key.jpg';
  key.alt = 'Key';

  let mainElement = document.getElementById('main');
  mainElement.appendChild(key);

  GameContents.key.coordinates.x = 0;
  GameContents.key.coordinates.y = 0;
}

function loadLevel() {
  loadChar();
  loadDoor();
  loadKey();
}
