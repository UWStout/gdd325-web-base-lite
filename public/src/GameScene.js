// Import global constants
import CONFIG from './config.js'

class GameScene extends Phaser.Scene {
  // Queue up assets to load from our local assets directory
  // Note: these are loaded asyncronously after preload() completes
  // and before 'create()' is run.
  preload () {}

  // Build the scene by adding GameObjects and configuring specific
  // entities (runs after all queued assets are loaded)
  create () {
    let worldWidth = CONFIG.DEFAULT_WIDTH * 1.5
    let worldHeight = CONFIG.DEFAULT_HEIGHT

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

    // Make the particle emitter follow the logo
    emitter.startFollow(logo)

    // Respond to any keyboard keyup events
    this.input.keyboard.on('keyup', this.keyReleased, this)

    // Make sound and music instances
    this.hitSound = this.sound.add('hitSFX', { volume: 1.0 })
    this.music = this.sound.add('mainMusic', { volume: 0.2, loop: true })
    this.music.play()

    // A custom event emitter that will talk to the overlaid HUD scene
    this.infoSceneEmitter = new Phaser.Events.EventEmitter()

    // Setup a world bounds callback
    this.physics.world.on('worldbounds', () => {
      // Emit our custom event to the info scene and play the hit sound
      this.infoSceneEmitter.emit(CONFIG.HIT_EVENT)
      this.hitSound.play()
    }, this)
    this.physics.world.setBounds(0, 0, worldWidth, worldHeight)

    // Setup the camera
    this.cameras.main.startFollow(logo)
    this.cameras.main.setBounds(0, 0, worldWidth, worldHeight)
    this.cameras.main.setDeadzone(CONFIG.DEFAULT_WIDTH * 0.4)
    this.cameras.main.setLerp(0.1, 0.1)

    // Start the info overlay scene and pass it our custom event emitter
    this.scene.run('info', { events: this.infoSceneEmitter })
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

export default GameScene
