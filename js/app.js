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
      pickaxe: {
        pickedUp: function() {
          console.log('picked up Pick');
          this.present = true;
          this.uses += 5;
          console.log(this.uses);
          console.log(this.present);
        },
        present: false,
        uses: 0,
        breakWall: function() {
          let inv = GameContents.mainChar.inventory;
          if (inv.pickaxe.present) {
            const wallHTML = document.getElementById('wall-' + lastWallTouched);
            wallHTML.style.display = 'none';
            inv.pickaxe.uses--;
            GameContents.walls[lastWallTouched].coordinates.x = 0;
            GameContents.walls[lastWallTouched].coordinates.y = 0;
            GameContents.walls[lastWallTouched].bottomRight.x = 0;
            GameContents.walls[lastWallTouched].bottomRight.y = 0;
          }
        }
      }
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
  walls: [],
  junctions: []
};

console.log('wowee imma boutta load the level');
initializeLevel();
renderPage();
