class Game {
    constructor() {
        this.canvas = undefined; //initiated in init()
        this.ctx = undefined; //initiated in init()
        this.backgroundImg = new Image();
        this.player = new Player(this, 400, 550, 90, 120, 20); //creates new instance of player
        this.monsters = []; //contains monsters' details on canvas 
        this.marsh = []; //contains marshmallows' details on canvas 
        this.gingerbHouse = new House(this, 0, 0, 280, 300); //creates new instance of house
        this.x = 0;
        this.y = 0;
        // flags end game
        this.gameOver = false;
        this.gameWin = false;
        this.width = 1250; //width of canvas
        this.height = 810; //height of canvas
    }
  
    init() { // initiate canvas 
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.animate(); //calls animation function
    }


    animate () { //animation function
        console.log("animation on")
        this.drawBackground();
        this.drawPlayer();
        this.drawHouse();
        this.drawMonster();
        this.drawMarsh();
        
         var animation = setInterval(() => {
            
            this.clear();
            this.drawBackground();
            this.drawHouse();
            this.drawPlayer();
            this.player.move();
            this.addCharacters (this.monsters); //draw/move monsters
            this.addCharacters (this.marsh); //draw/move marsh
            this.monsterCollisionCheck ();
            this.marshHouseCollisionCheck ();
            this.checkGameIsOver();

            if (this.gameOver) clearInterval(animation) 
    
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
          }, 2000);
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
        this.gingerbHouse.drawComponent("imges/GingerBreadHouse1.png");
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
  
   checkCollision(char1, char2) {
  
    const char1Right = char1.x + char1.width;
    const char1Left = char1.x;
    const char1Top = char1.y;
    const char1Bottom = char1.y + char1.height;

    const char2Right = char2.x + char2.width; 
    const char2Left = char2.x;
    const char2Top = char2.y;
    const char2Bottom = char2.y + char2.height;


    const crossLeft = char2Left <= char1Right && char2Left >= char1Left;
    const crossRight = char2Right >= char1Left && char2Right <= char1Right;
    const crossTop = char2Top <= char1Bottom && char2Top >= char1Top;
    const crossBottom = char2Bottom >= char1Top && char2Bottom <= char1Bottom;
        
        if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
			return true; 
        }
        return false;
    }
    


    monsterCollisionCheck (){ // checks if monsters collides with player (disappear) or marshmallow (game over)
        
        if (this.monsters.length !== 0){

        for (let i = 0; i < this.monsters.length; i++) {
          
            // 1. monster - player collision => monster disappears
            if (this.checkCollision(this.monsters[i], this.player)){
                console.log("killed monster");
                return this.monsters.splice(i, 1);

                 
            //2. if no collision happens removes monster from canvas
            } else if (this.monsters[i].x < 0) {
                 console.log("monster dissappears");
                 return this.monsters.splice(i, 1);


            // 3. monster - marsh collision => game over
            } else if (this.marsh.length !== 0){ //if there are marshmallows on the canvas
                
                for (let j = 0; j < this.marsh.length; j++){ // check monster - marsh collision for each of them
                
                    if (this.checkCollision(this.marsh[j], this.monsters[i])){
                        console.log("killed marsh");
                        this.marsh.splice(j, 1);
                        return this.gameOver = true;
                    } return false
                }
            }
        } 
        }
    
    }

    marshHouseCollisionCheck (){ //checks if the marshmallow collides with the house
        
        if (this.marsh.length !== 0){
            for (let i = 0; i < this.marsh.length; i++) {
            
                //marsh - gingerbread house collision ==> win game
                if (this.checkCollision(this.gingerbHouse, this.marsh[i])){
                    console.log("marsh safe");
                    this.marsh.splice(i, 1);
                    return this.gameWin = true;
                }
            return false
        }
    }
    }



// END GAME functions <===============================================================

    checkGameIsOver() {
        if (this.gameOver){ //if monsters collides with marsh the game ends
        console.log("game over");
            return gameOver();
        }
        else if (this.gameWin){ // if marshmallows collides with the house you win
            
            return console.log("you win") //callWinScreen() ; 
        }
    }

    gameOver(){

        this.onGameOverCallback();
        //sounds
    }

    passGameOverCallback = (gameOver) => {
        this.onGameOverCallback = gameOver;
      };

    GameWin(){
        //flags
        //sounds
    }
}

  
