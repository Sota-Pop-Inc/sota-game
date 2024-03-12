'use strict';

function Cell(column, row) {
  this.x = (column * 40) + 8;
  this.y = (row * 40) + 8;
  this.column = column;
  this.row = row;
}

function loadCells() {
  for (let i = 0; i < 16; i++) {
    GameContents.grid.push([]);
    for (let j = 0; j < 16; j++) {
      GameContents.grid[i].push(new Cell(i, j));
    }
  }
}

function Wall(orientation, column, row) {
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
    x: this.coordinates.x + this.width - 1,
    y: this.coordinates.y + this.height - 1
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

function generateMazeDFS() {
  let vertWalls = [];
  for (let i = 0; i < 17; i++) {
    vertWalls.push([]);
    for (let j = 0; j < 16; j++) {
      vertWalls[i].push(true);
    }
  }
  let horiWalls = [];
  for (let i = 0; i < 16; i++) {
    horiWalls.push([]);
    for (let j = 0; j < 17; j++) {
      horiWalls[i].push(true);
    }
  }

  let visited = Array.from({ length: 16 }, () => Array(16).fill(false));
  function dfs(x, y) {
    visited[x][y] = true;
    // Directions: right, left, down, up
    let neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    // Shuffle neighbors to ensure the maze's randomness
    for (let i = neighbors.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [neighbors[i], neighbors[j]] = [neighbors[j], neighbors[i]];
    }
    for (let [dx, dy] of neighbors) {
      let nx = x + dx, ny = y + dy;
      // Check bounds and if the neighbor is unvisited
      if (nx >= 0 && nx < 16 && ny >= 0 && ny < 16 && !visited[nx][ny]) {
        if (dx === 1) { // Check if the neighbor is on the right
          vertWalls[x + 1][y] = false; // Remove the vertical wall to the right
        } else if (dx === -1) { // Check if the neighbor is on the left
          vertWalls[x][y] = false; // Remove the vertical wall to the left
        } else if (dy === 1) { // Check if the neighbor is below
          horiWalls[x][y + 1] = false; // Remove the horizontal wall below
        } else if (dy === -1) { // Check if the neighbor is above
          horiWalls[x][y] = false; // Remove the horizontal wall above
        }
        dfs(nx, ny); // Continue DFS from this neighbor
      }
    }
  }
  dfs(8, 8);

  for (let i = 0; i < 17; i++) {
    for (let j = 0; j < 16; j++) {
      if (vertWalls[i][j]) {
        new Wall('vert', i, j);
      }
    }
  }
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 17; j++) {
      if (horiWalls[i][j]) {
        new Wall('hori', i, j);
      }
    }
  }
}
