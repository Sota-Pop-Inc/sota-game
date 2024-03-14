'use strict';

function loadPowerUps() {
  function loadPickaxe() {
    console.log('its LOADED');
    GameContents.mainChar.inventory.pickaxe.pickedUp = function() {
      const itemsHTML = document.getElementById('items');
      const newItem = document.createElement('img');
      newItem.id = 'pickaxe';
      newItem.src = './assets/props/Pickaxe.png';
      newItem.alt = 'Pickaxe';
      itemsHTML.appendChild(newItem);

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
          const pickaxeHTML = document.getElementById('pickaxe');
          pickaxeHTML.remove();
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
