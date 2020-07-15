class Component {
    constructor(game, x, y, w, h, speed, totFrames, imgFrameNum, frameWidth, frameHeight) {
      this.game = game;
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      this.speed = speed;
      this.img = new Image();

      this.totalNumberOfFrames = totFrames; // twenty images in the spritesheet
      this.imageFrameNumber = Math.floor(imgFrameNum) // This is changed to make the sprite animate  
      this.widthOfImage = frameWidth; // find the width of the image
      this.heightOfImage = frameHeight; // find the height of the image
      this.widthOfSingleImage = this.widthOfImage / this.totalNumberOfFrames; // The width of each image in the spirite
    }


    update (){
      setInterval(() => {
        
    // Changes the sprite we look at    
    this.imageFrameNumber++; 

    // Make the frames loop
    let maxFrame = 2;
    if (this.imageFrameNumber >= maxFrame){
      this.imageFrameNumber = 0; 
      }
    // Change this from 0 to 1 to 2 ... upto end of sprite tile and back to 0 again, then 1...
    this.imageFrameNumber = this.imageFrameNumber % this.totalNumberOfFrames; 
    }, 260);
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