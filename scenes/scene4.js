class scene4 extends Phaser.Scene {
    constructor() {
      super('nivel2');
    }
    
    
    

    create ()
    {
     
       
      //  fondo
      background=this.add.image(0, 0, 'sky2').setScale(0.2,0.25);
      background.setOrigin(0,0);
      background.setScrollFactor(1);



       //grupo de plataformas
        platforms = this.physics.add.staticGroup();
        piso=this.physics.add.staticGroup();

       
        piso.create(640, 700, 'piso').refreshBody();

        //  plataformas
        platforms.create(600, 450, "plataforma1");
        platforms.create(200, 530, "plataforma1");
        platforms.create(400, 530, 'plataforma1.1');
        platforms.create(750, 400, 'plataforma1');
        platforms.create(950, 430, 'plataforma1.1');
        platforms.create(1200, 425, 'plataforma1');
        platforms.create(1290, 460, 'plataforma1.1');
        platforms.create(1425, 530, "plataforma1");
        platforms.create(1090, 260, 'plataforma1.1');
        platforms.create(980, 260, 'plataforma1');
        platforms.create(1120, 200, 'plataforma1.1');
        platforms.create(1290, 260, 'plataforma1');
        platforms.create(900, 360, 'plataforma1.1');
        platforms.create(1300, 150, 'plataforma1');
        platforms.create(600, 190, 'plataforma1');
        platforms.create(800, 160, 'plataforma1');
        platforms.create(1450,400, 'plataforma1.1');
        platforms.create(1550,300, 'plataforma1');
        platforms.create(1600,150, 'plataforma1');
        platforms.create(1700,300, 'plataforma1.1');
        platforms.create(1750,250, 'plataforma1.1');
        platforms.create(1650,450, 'plataforma1');
        platforms.create(1882,225, 'plataforma1');
        platforms.create(1850,400, 'plataforma1.1');
        platforms.create(2025,450, 'plataforma1');
        platforms.create(2050,225, 'plataforma1');
        platforms.create(2200,530, 'plataforma1');
        platforms.create(2285,275, 'plataforma1.1');
        platforms.create(2170,370, 'plataforma1.1');
        platforms.create(2330,415, 'plataforma1');

       //medallas


       medallas= this.physics.add.group({
            key: "medallas",
            repeat: Phaser.Math.Between(1,8), 
            setXY: { x: Phaser.Math.Between(200,2400), y: 6, stepX:Phaser.Math.Between(300,1400)}

       })
       medallas.children.iterate(function (child) {
            var x= Phaser.Math.Between(0,800)
            var y= Phaser.Math.Between(0,600)
      
       
           child.setCollideWorldBounds(true)
            child.setBounce(0.1)
            child.allowGravity= true;
        
        
            child.setScale(0.1,0.1)

        });

        //informacion
        
        informacion=this.physics.add.group({
            
            key:"info",
            repeat:v-1,
            setXY:{x:Phaser.Math.Between(200,2500),y:6,stepX:Phaser.Math.Between(300,1400)}
            
        })
        informacion.children.iterate(function (child) {
        
           child.setCollideWorldBounds(true)
            child.setBounce(0.1)
            child.allowGravity= true;
        
        
            child.setScale(0.1,0.1)

        });

        
      
        
        //misiles
        misiles=this.physics.add.group();
       

        // config personaje
        player = this.physics.add.sprite(100, 450, 'pj').setScale(1.7,1.7);

        //  fisicas del player
        player.setBounce(0.2);
        player.setCollideWorldBounds(false);

        //enemigos
        enemigos = this.physics.add.group({
            key: 'enemigo',
            repeat: 10,
            setXY: { x: 500, y: 0, stepX:Phaser.Math.Between(230,260)}
          });
  
          enemigos.children.iterate(function (child) {
            child.setBounce(0.2);
            child.setCollideWorldBounds(false);
            child.allowGravity = true;
            child.setScale(1.7,1.7);
        });
        
   

            


    
        //  eventos
        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
            spaceBar= this.input.keyboard.addKey("Space");
        }
            
        
        // cámara
        this.cameras.main.setBounds(12,0,2520,background.displayHeight);
        this.cameras.main.startFollow(player);

        // walls
        WorldWalls= this.physics.add.staticGroup();
        WorldWalls.create(-18,490,"wall");
        WorldWalls.create(-18,460,"wall");
        WorldWalls.create(-18,430,"wall");
        WorldWalls.create(-18,400,"wall");
        WorldWalls.create(2560,490,"wall");
        WorldWalls.create(2560,460,"wall");
        WorldWalls.create(2560,430,"wall");
        WorldWalls.create(2560,400,"wall");
   
   
  
        //colisiones con muros
        this.physics.add.collider(player,WorldWalls);
        this.physics.add.collider(enemigos,WorldWalls);
        this.physics.add.collider(misiles,WorldWalls);
    
        //agarrar medallas  e informacion
        this.physics.add.overlap(player, medallas, this.juntarmedallas, null, this);
        this.physics.add.overlap(player, informacion, this.juntarinfo, null, this);
       
     
    
        vidavalor=3;
        //textos
        infotext=this.add.text(600, 5, 'Informacion: 0'+ "/" + v, { fontFamily: 'MinimalFont5x7',fontSize: '30px', fill: '#EBED24' });
        infotext.scrollFactorX = 0;
        scoreText = this.add.text(300, 5, 'Puntaje: 0', { fontFamily: 'MinimalFont5x7',fontSize: '30px', fill: '#EBED24' });
        scoreText.scrollFactorX = 0;
        vidastext= this.add.text(900, 5, 'Vidas: ' + vidavalor + "/3", { fontFamily: 'MinimalFont5x7',fontSize: '30px', fill: '#EBED24' });
        vidastext.scrollFactorX = 0;
  
  
  
        //balas derecha player
        Bala = new Phaser.Class({

            Extends: Phaser.Physics.Arcade.Sprite,
            initialize:
      
            function Bala (scene)
            {
      
              Phaser.Physics.Arcade.Sprite.call(this, scene, 0, 0, 'disparo');
              scene.add.existing(this);
              scene.physics.add.existing(this);
      
            },
      
            disparo: function (x, y)
            {
      
              this.setPosition(x + 50, y);
              this.setVelocityX(player.body.velocity.x + 800);
              this.setVelocityY(player.body.velocity.y - 25)
              this.setActive(true);
              this.setVisible(true);
              this.setCollideWorldBounds(false);
      
            },
      
          });
      
          //conjunto de balas
          balas = this.add.group({
      
            classType: Bala,
            runChildUpdate: true
      
          });

        //creación balas izquierda player
        Bala2 = new Phaser.Class({

            Extends: Phaser.Physics.Arcade.Sprite,
            initialize:
      
            function Bala2 (scene)
            {
      
              Phaser.Physics.Arcade.Sprite.call(this, scene, 0, 0, 'disparo2');
              scene.add.existing(this);
              scene.physics.add.existing(this);
      
            },
      
            disparo: function (x, y)
            {
              this.setPosition(x - 50, y);
              this.setVelocityX(player.body.velocity.x - 800);
              this.setVelocityY(player.body.velocity.y - 25)
              this.setActive(true);
              this.setVisible(true);
              this.setCollideWorldBounds(false);
      
            },
      
          });
      
          //conjunto de balas
          balas2 = this.add.group({
      
            classType: Bala2,
            runChildUpdate: true
      
        });

        //creacion balas enemigo
        Bala3 = new Phaser.Class({

            Extends: Phaser.Physics.Arcade.Sprite,
            initialize:
      
            function Bala3 (scene)
            {
      
              Phaser.Physics.Arcade.Sprite.call(this, scene, 0, 0, 'disparoenemy');
              scene.add.existing(this);
              scene.physics.add.existing(this);
      
            },
      
            disparo: function (x, y)
            {
              this.setPosition(x - 35, y);
              this.setVelocityX(player.body.velocity.x - 500);
              this.setVelocityY(player.body.velocity.y - 25)
              this.setActive(true);
              this.setVisible(true);
              this.setCollideWorldBounds(false);
      
            },
      
        });
      
        //conjunto de balas
        balas3 = this.add.group({
      
            classType: Bala3,
            runChildUpdate: true
      
        });
    
        //colisiones
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(enemigos,platforms);
        this.physics.add.collider(medallas,platforms);
        this.physics.add.collider(informacion,platforms);
        this.physics.add.collider(platforms,misiles,this.destruccionmisil,this.plataformarota,null,this);
    
        this.physics.add.collider(piso,misiles,this.destruccionmisil,null,this);
        this.physics.add.collider(player, piso);
        this.physics.add.collider(enemigos,piso);
        this.physics.add.collider(medallas,piso);
        this.physics.add.collider(informacion,piso);

        //bala desaparece al tocar plataformas o piso
        this.physics.add.collider(balas, platforms, this.destruirBala, null, this);
        this.physics.add.collider(balas2, platforms, this.destruirBala2, null, this);
        this.physics.add.collider(balas, piso, this.destruirbalapiso, null, this);
        this.physics.add.collider(balas2, piso, this.destruirbala2piso, null, this);
        this.physics.add.collider(balas3, platforms, this.destruirBala3, null, this);
        this.physics.add.collider(balas3, piso, this.destruirbala3piso, null, this);
        //misil mata pj
        this.physics.add.collider(player, misiles, this.hitmisil, null, this);
        //enemigo muere
        this.physics.add.collider(enemigos, balas, this.matarenemigo, null, this);
        this.physics.add.collider(enemigos, balas2, this.matarenemigo, null, this);
     

       
        score= 0;
        infovalor=0;
        gameOver=false;
        gameWin=false
        this.respawn=0;
        this.respawn1=0;
        

 

 }

 update (time, delta)
 {

     if (cursors.left.isDown)
     {
         player.setVelocityX(-160);

         player.anims.play('left', true);
     }
     else if (cursors.right.isDown)
     {
         player.setVelocityX(160);

         player.anims.play('right', true);
     }
     else
     {
         player.setVelocityX(0);

         player.anims.play('turn');
     }

     if (cursors.up.isDown && player.body.touching.down){
         player.setVelocityY(-330);
     }

     if (cursors.right.isDown || cursors.right.isUp && cursors.left.isUp)
        {
         if (spaceBar.isDown && time > lastFired)
         {
     
           var bullet = balas.get();
     
           if (bullet)
            {
             bullet.disparo(player.x, player.y - 4);
             lastFired = time + 300;
            }
         }
        }
     
     if (cursors.left.isDown && cursors.right.isUp)
        {
         if (spaceBar.isDown && time > lastFired2)
         {
           var bullet2 = balas2.get();
     
           if (bullet2)
           {
             bullet2.disparo(player.x, player.y - 4);
             lastFired2 = time + 300;
           }
         
         }
        }

        //IA enemigos
        enemigos.children.iterate(function (child) {
            var dist = Phaser.Math.Distance.BetweenPoints(player, child)
            if (dist <= 200)
            {
            if (time > lastFired2)
                var bullet3 = balas3.get();
    
                if (bullet3)
                { 
                    bullet3.disparo(child.x, child.y - 10);
                    lastFired2 = time + 500;
                }
                
            }
        });

     if (time > this.respawn) {
        this.nuevomisil();
        this.respawn += 1800000000;
    }

    if(infovalor==v) {
        this.gameWin()
    }

    if(vidavalor==0){
        this.gameOver()
    }
    
 }
 


    juntarmedallas (player, medallas) {
        medallas.disableBody(true, true);

        //  puntaje
        score += 5;
        scoreText.setText('Puntaje: ' + score);
        scoreText.scrollFactorX= 0;  
    
    }

    juntarinfo (player, informacion) {
        informacion.disableBody(true, true);

        //  puntaje
        infovalor += 1;
        infotext.setText('Informacion: ' + infovalor + "/" + v);
        infotext.scrollFactorX= 0;  
    
    }

    nuevomisil(){
        var x= Phaser.Math.Between(200,2500);
        var misil = misiles.create(x, 16, 'misil');
            misil.setBounce(1);
            misil.setCollideWorldBounds(true);
            misil.setVelocity(Phaser.Math.Between(-200, 200), 20);
            misil.allowGravity = false;
            misil.setScale(0.6)

    }
  
  
    hitmisil(player,misil){
        misil.disableBody(true, true);
        vidavalor-=1
        vidastext.setText('Vidas: ' + vidavalor + "/3");
        vidastext.scrollFactorX= 0;
        //this.gameOver()
        
    }

    destruccionmisil(platforms,misiles){
        misiles.disableBody(true,true);
    };
    plataformarota(platforms,misiles){
        platforms.disableBody(true,true);
    }

    destruirBala(bala, platforms)
    {
        bala.destroy();
    }

    destruirBala2(bala2, platforms)
    {
        bala2.destroy();
    }

    destruirBala3(bala3, platforms)
    {
        bala3.destroy();
    }

    destruirbalapiso(bala, piso)
    {
        bala.destroy();
    }

    destruirbala2piso(bala2, piso)
    {
        bala2.destroy();
    }

    destruirbala3piso(bala3, piso)
    {
        bala3.destroy();
    }


    matarenemigo(bala,enemigos){
        enemigos.disableBody(true,true);
        enemigos.destroy();
        bala.destroy();
    }

    generarinfo(){
        var x= setPosition(enemigo)
        var info= informacion.create(x,"informacion")
        info.setBounce(0.2);
        info.setCollideWorldBounds(true);
        info.allowGravity = true;

    }



    gameWin(){
        gameWin=true
        this.physics.pause()
        this.scene.start("juegocompleto")
    }




    gameOver() {        
        gameOver = true;
        this.physics.pause();
        game.scene.stop("nivel2")
        
        this.scene.start('nivelperd')
      
    }
}