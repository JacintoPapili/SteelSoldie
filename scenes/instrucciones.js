class instrucciones extends Phaser.Scene {
    constructor() {
      super('instrucciones');
    }
    create(){
      sfxboton = this.sound.add("sonidobotones", {volume: 0.3})
  
      this.add.image(640, 360, "imginstrucciones");
      var comenbutton= this.add.image(1070,640, "btncomen").setScale(0.50)
      comenbutton.setInteractive()
      comenbutton.on('pointerdown', () => this.scene.start('juego') && sfxboton.play());
  
     } 
  }