class Game {
    constructor() {
        this.canvas = undefined; //initiated in init()
        this.ctx = undefined; //initiated in init()
        this.backgroundImg = new Image();
        this.player = new Player(this, 400, 550, 90, 120, 30); //creates new instance of player
        this.monsters = []; //contains monsters' details on canvas 
        this.marsh = []; //contains marshmallows' details on canvas 
        this.gingerbHouse = new House(this, 0, 0, 280, 300); //creates new instance of house
        this.score = 0;
        this.x = 0;
        this.y = 0;

        // flags end game
        this.gameIsOver = false;
        this.gameIsWon = false;
        this.gameStop = false;

        this.width = 1250; //width of canvas
        this.height = 810; //height of canvas

        // audio
        this.monsterSound = new Audio ('sounds/squeeze.ogg');
        this.winSound = new Audio ('sounds/win-song.mp3');
        this.gameOverSound = new Audio ('sounds/pixie-go.mp3')
        this.themeSound = new Audio ('sounds/March Theme.mp3');

    }
  
    init() { // initiate canvas 
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.themeSound.volume=0.1;
        this.themeSound.play();
        this.animate(); //calls animation function   
    }


    animate () { //animation function
        //console.log()("animation on")
        this.drawBackground();
        this.drawPlayer();
        this.drawHouse();
        this.createMonster();
        this.createMarsh();

        
        

        const animation = setInterval(() => {
          
            this.clear();
            this.drawBackground();
            this.drawHouse();
            this.drawPlayer();
            this.player.move();
            this.addCharacters (this.monsters); //draw-move monsters
            this.addCharacters (this.marsh); //draw-move marsh

            this.checkAllCollisions(); //collision checks
            this.checkGameIsOver();  //check if the game is over

            // stops the game if you win or lose
            if (this.gameStop) {
                const delayInMilliseconds = 50; 
                    setTimeout(() => {
                        clearInterval(animation); 
                    }, delayInMilliseconds);
             }
            
        }, 1000 / 60);
}


// DRAWING functions <===============================================================

    drawPlayer() { // draws Player
        this.player.drawComponent("imges/frame-1.png");
    }

    createMonster(){
        if (!this.gameStop){

        if (Math.floor(Math.random() * 20) % 2 === 0) {
            this.monsters.push(new Monster(this));
            console.log(this.monsters)
        
          }
          setTimeout(() => { 
            this.createMonster();
          }, 500);
        }
    }

    createMarsh (){ 
        while (this.marsh.length < 1 ){
        if (Math.floor(Math.random() * 10) % 2 === 0) { //creates random marshmallows
            this.marsh.push(new Marsh (this)); //push marshmallow in the array
          }
         setTimeout(() => {
            this.createMarsh();
          }, 1000);
        }
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

    addCharacters (group){
        for (let i = 0; i < group.length; i++) {
            group[i].draw();
            group[i].move();
        }
    }
  
// COLLISION functions <===============================================================


   detectCollision(char1, char2) { //helper function to check if collision happens (bolean) between two characters
  
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

    checkAllCollisions(){
        //this.monsterInsideCanvasCheck(); 
        this.monsterMarshCollisionCheck();
        this.monsterPlayerCollisionCheck ();
        this.monsterMarshCollisionCheck();
        this.marshHouseCollisionCheck ();
    }

    monsterPlayerCollisionCheck (){ // checks if a monster collides with Player or a marshmallow 
        for (let i = 0; i < this.monsters.length; i++) {
            
            if (this.detectCollision(this.monsters[i], this.player)){
                this.score += 1;
                this.updateScore ();
                this.monsterSound.play();
                this.monsters.splice(i, 1);
                console.log(`after player coll ${this.monsters[i]}`)
            } else if (this.monsters[i].x < 0) {
                return this.monsters.splice(i, 1);
             
        }
        }
    }

    monsterMarshCollisionCheck(){
        for (let i = 0; i < this.monsters.length; i++) {
            if (this.marsh.length !== 0){ // if there are marshmallows in the canvas
                
            for (let j = 0; j < this.marsh.length; j++){ // check monster - marsh collision for each marsh in canvas
                    
                if (this.detectCollision(this.marsh[j], this.monsters[i])){
                    this.marsh.splice(j, 1);
                    return this.gameIsOver = true;
                } 
            }
        }
     }
    }

    // monsterInsideCanvasCheck() {
      
    //     for (let i = 0; i < this.monsters.length; i++) {

    //     if (this.monsters[i].x < 0) {
    //             this.monsters.splice(i, 1);
    //              return console.log(`monsters after canvas collision ${this.monsters}`)
    //     }
    //     }
    // }

    marshHouseCollisionCheck (){ // checks if the marshmallow collides with the house (bolean)
        
        if (this.marsh.length !== 0){
            for (let i = 0; i < this.marsh.length; i++) {
            
                // marsh - gingerbread house collision ==> win game
                if (this.detectCollision(this.gingerbHouse, this.marsh[i])){
                    this.marsh.splice(i, 1);
                    return this.gameIsWon = true;
                }
        }
    }
    }

    updateScore (){ // updates the score in the heading

        document.querySelector('.value').innerText = this.score;
    }


// END GAME functions <===============================================================

    checkGameIsOver() {
        if (this.gameIsOver){ // if monster collides with marsh the game ends
            return this.gameOver();
        }
        else if (this.gameIsWon){ // if marshmallows collides with the house you win
            return this.gameWin();
        }
    }

    gameOver(){
        this.gameStop = true;
        this.gameOverSound.play();
        return callGameOver();
       
    }


    gameWin(){
        this.gameStop = true;
        this.themeSound.pause();
        this.winSound.volume=0.1;
        this.winSound.play();
        callWonGame();
        return this.updateScore ();
    }
}