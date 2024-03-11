'use strict';

function Wall(orientation, row, column) {
  if (orientation === 'vert') {
    this.coordinates = {
      x: 40 * column,
      y: 40 * row + 8
    };
    this.width = 8;
    this.height = 32;
  } else if (orientation === 'hori') {
    this.coordinates = {
      x: 40 * column + 8,
      y: 40 * row
    };
    this.width = 32;
    this.height = 8;
  }

  this.bottomRight = {
    x: this.coordinates.x + this.width,
    y: this.coordinates.y + this.height
  };

  let wall = document.createElement('img');
  let fileType = orientation.toUpperCase();

  wall.id = 'wall-' + GameContents.walls.length;
  wall.className = 'wall';
  wall.src = `assets/props/wall${fileType}.png`;
  wall.alt = 'Wall';

  let mainElement = document.getElementById('main');
  mainElement.appendChild(wall);

  GameContents.walls.push(this);
}

function generateWalls(seed) {
  for (let i = 0; i < 480; i++) {
    if (seed[i] === '1') {
      let orientation;
      let row = Math.floor((i + 1) / 15);
      let column = i % 15;
      if (i < 240) {
        orientation = 'vert';
        row = Math.floor((i + 1) / 15);
        column = i % 15;
      } else {
        orientation = 'hori';
        row = Math.floor((i + 1) / 15) - 16;
        column = i % 15;
      }
      new Wall(orientation, row, column);
    }
  }
}
