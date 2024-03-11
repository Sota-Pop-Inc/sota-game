'use strict';

function loadChar () {
  let char = document.createElement('img');

  char.id = 'mainChar';
  char.src = 'mainChar.jpg';
  char.alt = 'Main Character';

  let mainElement = document.querySelector('main');
  mainElement.appendChild(char);
}

function loadDoor () {
  let door = document.createElement('img');

  door.id = 'door';
  door.src = 'door.jpg';
  door.alt = 'Door';

  let mainElement = document.querySelector('main');
  mainElement.appendChild(door);
}

function loadKey () {
  let key = document.createElement('img');

  key.id = 'key';
  key.src = 'key.jpg';
  key.alt = 'Key';

  let mainElement = document.querySelector('main');
  mainElement.appendChild(key);
}

function loadLevel() {
  loadChar();
  loadDoor();
  loadKey();
}
