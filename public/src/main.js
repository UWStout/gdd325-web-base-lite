/* global GameScene, StartScene */

// Core phaser configuration object
let config = {
  type: Phaser.WEBGL,
  title: 'GDD 325 Web Base Lite TUTORIAL',
  backgroundColor: '#7f7f7f',
  scale: {
    parent: 'content',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTAL,
    width: window.CONFIG.DEFAULT_WIDTH,
    height: window.CONFIG.DEFAULT_HEIGHT
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: window.CONFIG.DEFAULT_GRAVITY }
    }
  }
}

// Start Phaser by making a Phaser.Game object and passing in the
// config object from above.  We attach this to 'window' so it will
// be globally accessible.
window.game = new Phaser.Game(config)

// Tell it how to make a GameScene object and let it automatically start
window.game.scene.add('main', GameScene)
window.game.scene.add('start', StartScene)
window.game.scene.start('start')
