'use strict';

function loadPowerUps() {
  function loadPickaxe() {
    console.log('its LOADED');
    GameContents.mainChar.inventory.pickaxe.pickedUp = function() {
      console.log('picked up Pick');
      this.present = true;
      this.uses += 5;
      console.log(this.uses);
      console.log(this.present);
    };

    GameContents.mainChar.inventory.pickaxe.present = false;
    GameContents.mainChar.inventory.pickaxe.uses = 0;
    GameContents.mainChar.inventory.pickaxe.breakWall = function() {
      if (GameContents.mainChar.inventory.pickaxe.present && GameContents.walls[lastWallTouched].border === false) {
        const wallHTML = document.getElementById('wall-' + lastWallTouched);

        wallHTML.style.display = 'none';

        GameContents.mainChar.inventory.pickaxe.uses--;
        if (GameContents.mainChar.inventory.pickaxe.uses === 0) {
          GameContents.mainChar.inventory.pickaxe.present = false;
        }

        GameContents.walls[lastWallTouched].coordinates.x = 0;
        GameContents.walls[lastWallTouched].coordinates.y = 0;
        GameContents.walls[lastWallTouched].bottomRight.x = 0;
        GameContents.walls[lastWallTouched].bottomRight.y = 0;
      }
    };
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'z') {
      GameContents.mainChar.inventory.pickaxe.breakWall();
    }
  });

  loadPickaxe();
}
