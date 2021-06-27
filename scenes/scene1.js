class scene1 extends Phaser.Scene {
  constructor() {
    super('inicio');
  }
  preload ()
  { 
    this.load.image("wall", "assets/Wall.png");
    this.load.image("fondomenu", "./assets/fondo.png");
    this.load.image("botonback", "assets/boton-1.png");
    this.load.image("nivsup", "assets/nivsuperado.png");
    this.load.image("btnsup", "assets/Btnsignivel.png");
    this.load.image("imginstrucciones","./assets/instrucciones.png");
    this.load.image("btncomen","./assets/btncomenzar.png");
    this.load.image("nivperd","./assets/nivfallido.png");
    this.load.image("juegocomp","./assets/juegosuperado.png");
    this.load.image("btnmenu","./assets/btnmenu.png");
    this.load.image("btnreset","./assets/BtnReiniciarlvl.png");
    this.load.image("fondoC", "./assets/fondomenosbrillo.png");
    this.load.image("creditoss", './assets/creditos.png');
    this.load.image('start', './assets/botonjugar.png');
    this.load.image("credboton", "./assets/botoncreditos.png");
    this.load.image('logo', './assets/logo.png');
    this.load.image('sky', './assets/sky.png');
    this.load.image('sky2', './assets/sky2.png');
    this.load.image('piso', 'assets/tierra.png');
    this.load.image("plataforma1", "assets/plataforma1.png");
    this.load.image("plataforma1.1", "assets/plataforma1.1.png");
    this.load.image("plataforma2", "assets/plataforma2.png");
    this.load.image("reloj","assets/reloj.png");
    this.load.image("medallas", "assets/medalla-1.png.png");
    this.load.image("enemigo", "assets/enemigos.png");
    this.load.image("misil", "assets/misil-1.png.png");
    this.load.image("disparo", "assets/baladcha.png");
    this.load.image("disparo2", "assets/balaizq.png");
    this.load.image("info", "assets/informacion-1.png.png");
    this.load.image("vida","assets/vida.png");
    this.load.image("disparoenemy", "assets/balaizqen.png");
    this.load.audio("sonidomedalla", "assets/Medalla.wav");
    this.load.audio("sonidoinformacion", "assets/Informacionn.wav");
    this.load.audio("sonidovidanueva", "assets/Vida.wav");
    this.load.audio("sonidodaño", "assets/Daño.wav");
    this.load.audio("sonidodisparo", "assets/Disparo.wav");
    this.load.audio("musican1", "assets/MusicaNivel1.wav");
    this.load.audio("musicamenu", "assets/MusicaMenuP.wav");
    this.load.audio("misioncumplida", "assets/MusicaMisionCumplida.wav");
    this.load.audio("misionfallida", "assets/Fallido.wav");
    this.load.audio("sonidobotones", "assets/Botones.wav");
    this.load.audio("sonidomuerteenemigo", "assets/MuerteEnemigo.wav");

    this.load.spritesheet('pj', 'assets/pj.png', { frameWidth: 32, frameHeight: 48 });
  }

  create() {


    
    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('pj', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'pj', frame: 4 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('pj', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    var fondo=this.add.image(640, 360,"fondomenu")
    var logo = this.add.image(650, 370, 'logo').setScale(0.3);

    var startbutton= this.add.image(605,457, "start").setScale(0.75)
    startbutton.setInteractive()
    startbutton.on('pointerdown', () => this.scene.start('instrucciones') && musicamen.stop());


    var creditosbutton= this.add.image(605,587, "credboton").setScale(0.75)
    creditosbutton.setInteractive()
    creditosbutton.on('pointerdown', () => this.scene.start('creditos') && musicamen.stop());

    musicamen = this.sound.add("musicamenu", {volume:0.5, loop:true});
    musicamen.play();

  }

}
