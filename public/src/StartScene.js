
class StartScene extends Phaser.Scene {
  init () {
    // Show message that things are loading
    this.loadingText = this.add.text(
      window.CONFIG.DEFAULT_WIDTH / 2,
      window.CONFIG.DEFAULT_HEIGHT / 2,
      'loading', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    this.loadingText.setOrigin(0.5, 0.5)
  }

  // Queue up assets to load from our local assets directory
  // Note: these are loaded asyncronously after preload() completes
  // and before 'create()' is run.
  preload () {
    this.load.image('background', 'assets/StartScreen.png')

    this.load.image('sky', 'assets/skies/space3.png')
    this.load.image('logo', 'assets/sprites/phaser3-logo.png')
    this.load.image('red', 'assets/particles/red.png')

    for (let i = 0; i < 30; i++) {
      this.load.image(`background${i}`, 'assets/StartScreen.png')
    }
  }

  // Build the scene by adding GameObjects and configuring specific
  // entities (runs after all queued assets are loaded)
  create () {
    this.loadingText.destroy()

    // The background message
    let background = this.add.image(
      window.CONFIG.DEFAULT_WIDTH / 2,
      window.CONFIG.DEFAULT_HEIGHT / 2,
      'background')
    let scaleFactor = window.CONFIG.DEFAULT_WIDTH / background.width
    background.setScale(scaleFactor)
    background.setOrigin(0.5, 0.5)

    this.input.keyboard.on('keyup', this.keyReleased, this)
  }

  update () {
    console.log('Start scene is running')
  }

  keyReleased () {
    console.log('switching scenes')
    this.scene.start('main')
  }
}
