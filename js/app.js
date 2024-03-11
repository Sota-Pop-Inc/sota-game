'use strict';

let GameContents = {
  mainChar: {
    coordinates: {},
    width: 32,
    height: 32,
    bottomRight: {},
    inventory: []
  },
  door: {
    coordinates: {},
    width: 32,
    height: 32,
    bottomRight: {}
  },
  key: {
    coordinates: {},
    width: 16,
    height: 16,
    bottomRight: {}
  },
  wallVert: {
    coordinates: {},
    width: 8,
    height: 32,
    bottomRight: {}
  },
  wallHori: {
    coordinates: {},
    width: 32,
    height: 8,
    bottomRight: {}
  }
};

console.log('wowee imma boutta load the level');
loadLevel();
renderPage();
