'use strict';

let GameContents = {
  grid: [],
  mainChar: {
    coordinates: {},
    width: 32,
    height: 32,
    bottomRight: {},
    inventory: {
      key: false,
      pickaxe: {}
    }
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
  chest: {
    coordinates: {},
    width: 32,
    height: 32,
    bottomRight: {}
  },
  walls: [],
  junctions: []
};

initializeLevel();
renderPage();
