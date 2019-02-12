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
  },
  scene: {
    preload: preload,
    create: create
  }
}

// Start Phaser by making a Phaer.Game object and passing in the
// config object from above.  We attach this to 'window' so it will
// be globally accessible.
window.game = new Phaser.Game(config)

// Queue up assets to load from our local assets directory
// Note: these are loaded asyncronously after preload() completes
// and before 'create()' is run.
function preload () {
  this.load.image('sky', 'assets/skies/space3.png')
  this.load.image('logo', 'assets/sprites/phaser3-logo.png')
  this.load.image('red', 'assets/particles/red.png')
}

// Build the scene by adding GameObjects and configuring specific
// entities (runs after all queued assets are loaded)
function create () {
  // The background sky
  this.add.image(400, 300, 'sky')

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
}
