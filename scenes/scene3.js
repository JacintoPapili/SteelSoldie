class scene3 extends Phaser.Scene {
    constructor() {
      super('nivelperd');
    }
    create(){
      perdido = this.sound.add("misionfallida", {volume: 0.3});
      perdido.play();
      sfxboton = this.sound.add("sonidobotones", {volume: 0.3});

      this.add.image(640, 360, 'nivperd');
      var btnreset= this.add.image(640,560, "btnreset").setScale(0.75)
      btnreset.setInteractive()
      btnreset.on('pointerdown', () => this.scene.start('juego') && sfxboton.play());
     } 
  }