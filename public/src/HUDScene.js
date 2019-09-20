
class HUDScene extends Phaser.Scene {
  // Runs when this class is initially created (a lot like a constructor).
  // Will be passed an object if one was supplied to the start()/run() methods.
  // Called BEFORE preload() and create() (no scene specific assets are loaded yet).
  init (initObj) {
    // Did we receive an initialization object
    if (initObj && initObj.events) {
      // Listen for and respond to the hit event
      initObj.events.on(window.CONFIG.HIT_EVENT, this.updateHits, this)
    }

    // Initialize hits counter to zero
    this._hits = 0
  }

  // Build the scene by adding GameObjects and configuring specific
  // entities (runs after all queued assets are loaded)
  create () {
    this.infoText = this.add.text(10, 10,
      'Information', { font: '24px Arial', fill: '#FFFFFF', align: 'center' })
    this.infoText.setOrigin(0, 0)

    this.hitsText = this.add.text(window.CONFIG.DEFAULT_WIDTH - 10, 10,
      'Bounces:    0', { font: '24px Courier', fill: '#FFFFFF', align: 'center' })
    this.hitsText.setOrigin(1, 0)
  }

  // When a hit event occurs, increment hits and update text
  updateHits () {
    this._hits++
    this.hitsText.setText(`Bounces: ${this._hits.toString().padStart(4, ' ')}`)
  }
}
