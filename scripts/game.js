class Game {
    constructor() {
        this.canvas = undefined; //initiated in init()
        this.ctx = undefined; //initiated in init()
        this.backgroundImg = new Image();
        this.player = new Player(this, 400, 550, 90, 120); //creates new instance of player
        this.monsters = []; //contains monsters' details on canvas 
        this.marsh = []; //contains marshmallows' details on canvas 
        this.gingerbHouse = new House(this, 0, 0, 300, 300); //creates new instance of house
        this.x = 0;
        this.y = 0;
        this.width = 1250; //width of canvas
        this.height = 810; //height of canvas
    }
  
    init() { // initiate canvas 
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.animate(); //calls animation function
    }

    animate () { //animation function
        this.drawBackground();
        this.drawPlayer();
        this.drawHouse();
        this.drawMonster();
        this.drawMarsh();
        this.monsterCollisionCheck ();
        this.marshCollisionCheck ();

        
        setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawHouse();
            this.drawPlayer();
            this.player.move();
            this.monsterCollisionCheck ();
            this.marshCollisionCheck ();


           // this.checkGameIsOver();
            this.checkGameIsWon();
    
           }, 1000 / 60);
    }

// DRAWING functions <===============================================================

    drawMonster(){
        if (Math.floor(Math.random() * 10) % 2 === 0) { //creates random monsters
            this.monsters.push(new Monster(this));
          }
          setTimeout(() => { 
            this.drawMonster();
          }, 1500);
    }


    drawMarsh (){ //text commented to create 1 marshmallow only for testing purposes 
        // if (Math.floor(Math.random() * 10) % 2 === 0) { //creates random marshmallows
            this.marsh.push(new Marsh (this)); //push marshmallow in the array
        //   }
        //   setTimeout(() => {
        //     this.drawMarsh();
        //   }, 1500);
    }


    drawHouse (){ //draws the house 
        this.gingerbHouse.drawComponent("imges/GingerBreadHouse.jpg");
    }

    drawBackground() { //draws background
        this.backgroundImg.src = "imges/backgroundGrass.jpg";
        this.ctx.drawImage(this.backgroundImg, this.x, this.y, this.width, this.height);
    }
    
    drawPlayer() { // draws Croc
        this.player.drawComponent("imges/frame-1.png");
      }
  
    clear() { //clears the canvas
        this.ctx.clearRect(this.x, this.y, this.width, this.height); 
    }


// COLLISION functions <===============================================================


    monsterCollisionCheck (){ // checks if monsters collides with player (disappear) or marshmallow (game over)
        for (let i = 0; i < this.monsters.length; i++) {
            this.monsters[i].draw();
            this.monsters[i].move();
            
            //monster - player collision => monster disappears
            if (this.player.crashCollision(this.monsters[i])){
                return this.monsters.splice(i, 1);
            }

           // monster - marsh collision
            // if (this.monsters[i].crashCollision(this.marsh[i])){
            //     this.marsh.splice(i, 1)
            //     return true;
            // }

            //removes monster from canvas
            if (this.monsters[i].x < 0) {
                return this.monsters.splice(i, 1);
            }
        }   
    }

    marshCollisionCheck (){ //checks if the marshmallow collides with the house
        
        for (let i = 0; i < this.marsh.length; i++) {
            this.marsh[i].draw();
            this.marsh[i].move();
            
            //removes marsh from canvas 
            if (this.gingerbHouse.crashCollision(this.marsh[i])){
                //this.marsh.splice(i, 1)
                return true;
            }
        }
    }



// END GAME functions <===============================================================

    checkGameIsOver() {
        if (this.monsterCollisionCheck ()){ //if monsters collides with marsh the game ends
            return this.GameOver()
        }
    }

    checkGameIsWon() { 
        if (this.marshCollisionCheck ()) {
            return this.Winner() ; // if marshmallows collides with the house you win
        } 
    }

    GameOver () {
        return callGameOverScreen() //calls the Game OVer Screen from Main
      }

    Winner() {
        return callWinScreen(); //calls the Game OVer Screen from Main
    }


}

  
