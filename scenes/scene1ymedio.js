class scene1ymedio extends Phaser.Scene {
  constructor() {
    super('creditos');
  }
  create(){
    sfxboton = this.sound.add("sonidobotones", {volume: 0.3})

    this.add.image(640, 360, 'fondoC');
    this.add.image(640, 360, "creditoss").setScale(0.26);
    var backbutton= this.add.image(300,81, "botonback").setScale(0.75)
    backbutton.setInteractive()
    backbutton.on('pointerdown', () => this.scene.start('inicio') && sfxboton.play());

   } 
}