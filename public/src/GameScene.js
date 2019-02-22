
class GameScene extends Phaser.Scene {
  // Queue up assets to load from our local assets directory
  // Note: these are loaded asyncronously after preload() completes
  // and before 'create()' is run.
  preload () {}

  // Build the scene by adding GameObjects and configuring specific
  // entities (runs after all queued assets are loaded)
  create () {
    let worldWidth = window.CONFIG.DEFAULT_WIDTH * 1.5
    let worldHeight = window.CONFIG.DEFAULT_HEIGHT

    // The background sky
    let background = this.add.tileSprite(0, 0, worldWidth, worldHeight, 'sky')
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
    logo.body.onWorldBounds = true

    // Make the emitter follow the logo
    emitter.startFollow(logo)

    this.input.keyboard.on('keyup', this.keyReleased, this)

    // Make sound and music instances
    this.hitSound = this.sound.add('hitSFX', { volume: 1.0 })
    this.music = this.sound.add('mainMusic', { volume: 0.2, loop: true })
    this.music.play()

    // Setup a world bounds callback
    this.physics.world.on('worldbounds', () => { this.hitSound.play() }, this)
    this.physics.world.setBounds(0, 0, worldWidth, worldHeight)

    this.cameras.main.startFollow(logo)
    this.cameras.main.setBounds(0, 0, worldWidth, worldHeight)
    this.cameras.main.setDeadzone(window.CONFIG.DEFAULT_WIDTH * 0.4)
    this.cameras.main.setLerp(0.1, 0.1)

    this.scene.run('info')
  }

  update () {
    console.log('Main scene is running')
  }
  
  keyReleased () {
    console.log('switching scenes')
    this.scene.stop('info')
    this.scene.start('start')
    this.music.stop()
  }
}
