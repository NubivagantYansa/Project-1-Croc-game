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
        this.clear();
        this.drawBackground();
        this.drawPlayer();
        this.drawHouse();
        this.drawMonster();
        this.drawMarsh();
        this.addCharacters (this.monsters); //draw-move monsters
        this.addCharacters (this.marsh); //draw-move marsh
        this.monsterCollisionCheck ();
        this.marshCollisionCheck ();
        this.checkGameIsOver();

        
        setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawHouse();
            this.drawPlayer();
            this.player.move();
            this.monsterCollisionCheck ();
            this.marshCollisionCheck ();
            this.addCharacters (this.monsters); //draw/move monsters
            this.addCharacters (this.marsh); //draw/move marsh

            this.checkGameIsOver();

    
           }, 1000 / 60);
    }

// DRAWING functions <===============================================================

    drawPlayer() { // draws Croc
        this.player.drawComponent("imges/frame-1.png");
    }

    drawMonster(){
        if (Math.floor(Math.random() * 10) % 2 === 0) { //creates random monsters
            this.monsters.push(new Monster(this));
          }
          setTimeout(() => { 
            this.drawMonster();
          }, 1500);
    }


    drawMarsh (){ 
        if (Math.floor(Math.random() * 10) % 2 === 0) { //creates random marshmallows
            this.marsh.push(new Marsh (this)); //push marshmallow in the array
          }
          setTimeout(() => {
            this.drawMarsh();
          }, 2000);
    }


    drawHouse (){ //draws the house 
        this.gingerbHouse.drawComponent("imges/GingerBreadHouse.jpg");
    }

    drawBackground() { //draws background
        this.backgroundImg.src = "imges/backgroundGrass.jpg";
        this.ctx.drawImage(this.backgroundImg, this.x, this.y, this.width, this.height);
    }
  
    clear() { //clears the canvas
        this.ctx.clearRect(this.x, this.y, this.width, this.height); 
    }


// COLLISION functions <===============================================================

    addCharacters (group){
        for (let i = 0; i < group.length; i++) {
            group[i].draw();
            group[i].move();
        }
    }
  
   crashCollision(char1, char2) {
    
    //if any of those conditions are true there is no collision
    if (
        char1.y + char1.height  > char2.y + char2.height +10 //char1 below char2
        || char1.x + char1.width +10   < char2.x //char 1 on the left side of char 2
        || char1.y + char1.height  < char2.y + 10 //char 1 above char 2
        || char1.x > char2.x + char2.width + 10  ){ // char 1 on the right side of char 2
      return false;
    }
    return true;
  }


    monsterCollisionCheck (){ // checks if monsters collides with player (disappear) or marshmallow (game over)
        
        if (this.monsters.length > 0){

        for (let i = 0; i < this.monsters.length; i++) {
            
            // 1. monster - player collision => monster disappears
            if (this.crashCollision(this.monsters[i], this.player)){
                 this.monsters.splice(i, 1);

            // 2. monster - marsh collision => game over
            } else if (this.marsh.length > 0){ //if there are marshmallows on the canvas
                
                for (let j = 0; j < this.marsh.length; j++){ // check monster - marsh collision for each of them
                
                    if (this.crashCollision(this.monsters[i],this.marsh[j])){
                    this.marsh.splice(j, 1)
                    return true;
                    }
                }
            }

            //3. if no collision happens removes monster from canvas
            else if (this.monsters[i].x < 0) {
                 this.monsters.splice(i, 1);
            }

            else {
                return false;
            }
        }   
        }
    }

    marshCollisionCheck (){ //checks if the marshmallow collides with the house
        
        for (let i = 0; i < this.marsh.length; i++) {
            
            // marsh - gingerbread house collision ==> win game
            if (this.crashCollision(this.gingerbHouse, this.marsh[i])){
                this.marsh.splice(i, 1)
                return true;
            }
        }
    }



// END GAME functions <===============================================================

    checkGameIsOver() {
        if (this.monsterCollisionCheck ()){ //if monsters collides with marsh the game ends
            return console.log("game over") //callGameOverScreen();
        }
        else if (this.marshCollisionCheck ()){ // if marshmallows collides with the house you win
            return console.log("you win") //callWinScreen() ; 
        }
    }
}

  
