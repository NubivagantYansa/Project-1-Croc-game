class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.backgroundImg = new Image();
        this.player = new Player(this, 400, 550, 90, 120);
        this.monsters = [];
        this.marsh = [];
        this.gingerbHouse = [];
        this.x = 0;
        this.y = 0;
        this.width = 1250;
        this.height = 810;
    }
  
    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.animate();
        this.drawCharacters();
    }

    animate () {
        this.drawBackground();
        this.drawPlayer();
        
        setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawPlayer();
            this.player.move();

            
            //monsters - player 
            for (let i = 0; i < this.monsters.length; i++) {
                this.monsters[i].move();
                this.monsters[i].draw();
                //if player - monster collision => monster disappears
                if (this.player.crashCollision(this.monsters[i])){
                    return this.monsters.splice(i, 1);
                } 
                //removes monster from canvas
                if (this.monsters[i].x < 0) {
                    this.monsters.splice(i, 1);
                    }

              }

            for (let i = 0; i < this.marsh.length; i++) {
                this.marsh[i].move();
                this.marsh[i].draw();
            
                //removes marsh from canvas
                if (this.marsh[i].y < 0) {
                    this.marsh.splice(i, 1);
                    }
    
              }
           }, 1000 / 60);
    }

    drawCharacters() { 
        if (Math.floor(Math.random() * 10) % 2 === 0) { //creates random monsters
          this.monsters.push(new Monster(this));
        }
        if (Math.floor(Math.random() * 10) % 2 === 0) { //creates random marshmallows
            this.marsh.push(new Marsh (this));
          }
    
        setTimeout(() => {
          this.drawCharacters();
        }, 2000);
    }


    drawBackground() {
        this.backgroundImg.src = "imges/backgroundGrass.jpg";
        this.ctx.drawImage(this.backgroundImg, this.x, this.y, this.width, this.height);
    }
    
    drawPlayer() {
        this.player.drawComponent("imges/frame-1.png");
      }
  
    clear() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }
  }

  
