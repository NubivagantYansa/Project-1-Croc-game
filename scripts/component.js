class Component {
    constructor(game, x, y, w, h, speed, totFrames, imgFrameNum, frameWidth, frameHeight, keys) {
      this.game = game;
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      this.speed = speed;
      this.img = new Image();
      this.keys = keys;

      //sprites
      this.totalNumberOfFrames = totFrames; // twenty images in the spritesheet
      this.imageFrameNumber = Math.floor(imgFrameNum) // This is changed to make the sprite animate  
      this.widthOfImage = frameWidth; // find the width of the image
      this.heightOfImage = frameHeight; // find the height of the image
      this.widthOfSingleImage = this.widthOfImage / this.totalNumberOfFrames; // The width of each image in the spirite
    }


    update (){ //sprite image update

      setInterval(() => {

    //idle sprite animation
    if (!this.keys.includes(37) 
    && !this.keys.includes(39)){

        this.imageFrameNumber++;   
        let maxFrame = 4;
        //restarts the loop
        if (this.imageFrameNumber >= maxFrame) this.imageFrameNumber = 0;
        this.imageFrameNumber = this.imageFrameNumber % this.totalNumberOfFrames; // Change this from 0 to 1 to 2 ... upto end of sprite tile and back to 0 again, then 1...
    }

      //move left sprite animation
      if(this.keys.includes(37)){
        
        this.imageFrameNumber++;   
        let maxFrame = 13;
        if (this.imageFrameNumber >= maxFrame) this.imageFrameNumber = 9; 
        this.imageFrameNumber = this.imageFrameNumber % this.totalNumberOfFrames; 
      }

      //move right sprite animation
      if(this.keys.includes(39)){
        
        this.imageFrameNumber++;
        let maxFrame = 7;
        if (this.imageFrameNumber >= maxFrame) this.imageFrameNumber = 3;
        this.imageFrameNumber = this.imageFrameNumber % this.totalNumberOfFrames; 
      }

      //move left sprite animation
      if(this.keys.includes(40) || this.keys.includes(38)){
        
        this.imageFrameNumber++;
        let maxFrame = 19;
        if (this.imageFrameNumber >= maxFrame) this.imageFrameNumber = 16; 
        this.imageFrameNumber = this.imageFrameNumber % this.totalNumberOfFrames; 
      }

    }, 160);
    }


    drawComponent(imgSource) {
      const gameCtx = this.game.ctx;
      this.img.src = imgSource;
      gameCtx.drawImage(  
      this.img, 
      this.imageFrameNumber * this.widthOfSingleImage, 0, // x and y - where in the sprite
      this.widthOfSingleImage, this.heightOfImage, // width and height
      this.x,
      this.y, // x and y - where on the screen
      this.width,
      this.height // width and height
      )
        
    }
}