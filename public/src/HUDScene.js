
class HUDScene extends Phaser.Scene {
  // Build the scene by adding GameObjects and configuring specific
  // entities (runs after all queued assets are loaded)
  create () {
    this.infoText = this.add.text(10, 10,
      'Information', { font: '24px Arial', fill: '#FFFFFF', align: 'center' })
    this.infoText.setOrigin(0, 0)
  }
}
