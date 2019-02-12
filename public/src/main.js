/* global GameScene */

// Core phaser configuration object
let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  }
}

// Start Phaser by making a Phaer.Game object and passing in the
// config object from above.  We attach this to 'window' so it will
// be globally accessible.
window.game = new Phaser.Game(config)

window.game.scene.add('main', GameScene, true)
