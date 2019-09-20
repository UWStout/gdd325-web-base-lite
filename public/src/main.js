// Import global constants
import CONFIG from './config.js'

// Import all used scenes
import GameScene from './GameScene.js'
import StartScene from './StartScene.js'
import HUDScene from './HUDScene.js'

// Core phaser configuration object
let config = {
  type: Phaser.WEBGL,
  title: 'GDD 325 Web Base Lite TUTORIAL',
  backgroundColor: '#7f7f7f',
  scale: {
    parent: 'content',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTAL,
    width: CONFIG.DEFAULT_WIDTH,
    height: CONFIG.DEFAULT_HEIGHT
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: CONFIG.DEFAULT_GRAVITY }
    }
  }
}

// Start Phaser by making a Phaser.Game object and passing in the
// config object from above.  We attach this to 'window' so it will
// be globally accessible.
let game = new Phaser.Game(config)

// Tell it how to make a GameScene object and let it automatically start
game.scene.add('main', GameScene)
game.scene.add('info', HUDScene)
game.scene.add('start', StartScene)
game.scene.start('start')
