class scenenivsup extends Phaser.Scene {
    constructor() {
      super('nivelsup');
    }
    create(){
      musicasup = this.sound.add("misioncumplida", {volume: 0.5, loop: true});
      musicasup.play();
      sfxboton = this.sound.add("sonidobotones", {volume: 0.3});

      this.add.image(640, 360, 'nivsup');
      var btnsigniv= this.add.image(640,560, "btnsup").setScale(0.75)
      btnsigniv.setInteractive()
      btnsigniv.on('pointerdown', () => this.scene.start('nivel2') && sfxboton.play());
     } 
  }