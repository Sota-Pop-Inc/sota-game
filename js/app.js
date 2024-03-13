'use strict';

let GameContents = {
  grid: [],
  mainChar: {
    coordinates: {},
    width: 32,
    height: 32,
    bottomRight: {},
    health: 3,
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
    collected: false,
    coordinates: {},
    width: 32,
    height: 32,
    bottomRight: {}
  },
  slime: {
    dead: false,
    coordinates: {},
    width: 32,
    height: 32,
    bottomRight: {},
    health: 5
  },
  walls: [],
  junctions: []
};

initializeLevel();
renderPage();
