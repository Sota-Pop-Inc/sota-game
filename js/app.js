'use strict';

let GameContents = {
  grid: [],
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
    width: 32,
    height: 32,
    bottomRight: {}
  },
  walls: [],
  junctions: []
};

console.log('wowee imma boutta load the level');
loadLevel();
renderPage();
