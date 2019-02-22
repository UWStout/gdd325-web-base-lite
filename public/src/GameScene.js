
class GameScene extends Phaser.Scene {
  // Queue up assets to load from our local assets directory
  // Note: these are loaded asyncronously after preload() completes
  // and before 'create()' is run.
  preload () {}

  // Build the scene by adding GameObjects and configuring specific
  // entities (runs after all queued assets are loaded)
  create () {
    // The background sky
    let background = this.add.image(0, 0, 'sky')
    background.setScale(
      window.CONFIG.DEFAULT_WIDTH / background.width,
      window.CONFIG.DEFAULT_HEIGHT / background.height
    )

    background.setOrigin(0, 0)

    // A sprite to use as a particle
    let particles = this.add.particles('red')

    // A particle emitter
    let emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    })

    // The Phaser 3 logo (which sill bounce around the screen)
    let logo = this.physics.add.image(400, 100, 'logo')

    // Make the logo move
    logo.setVelocity(100, 200)
    logo.setBounce(1, 1)
    logo.setCollideWorldBounds(true)

    // Make the emitter follow the logo
    emitter.startFollow(logo)

    this.input.keyboard.on('keyup', this.keyReleased, this)
  }

  update () {
    console.log('Main scene is running')
  }

  keyReleased () {
    console.log('switching scenes')
    this.scene.start('start')
  }
}
