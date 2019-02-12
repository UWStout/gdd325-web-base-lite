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

// Start Phaser by making a Phaser.Game object and passing in the
// config object from above.  We attach this to 'window' so it will
// be globally accessible.
window.game = new Phaser.Game(config)

// Tell it how to make a GameScene object and let it automatically start
window.game.scene.add('main', GameScene, true)
