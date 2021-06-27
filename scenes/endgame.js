class endgame extends Phaser.Scene {
    constructor() {
      super('juegocompleto');
    }
    create(){
      musicasup = this.sound.add("misioncumplida", {volume: 0.5, loop: true});
      musicasup.play();
      sfxboton = this.sound.add("sonidobotones", {volume: 0.3});

      this.add.image(640, 360, 'juegocomp');
      var btnsigniv= this.add.image(640,660, "btnmenu").setScale(0.75)
      btnsigniv.setInteractive()
      btnsigniv.on('pointerdown', () => this.scene.start('inicio') && sfxboton.play());
     } 
  }