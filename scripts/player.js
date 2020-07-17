class Player extends Component {
    constructor(game, x, y, w, h, speed, totFrames, imgFrameNum, frameWidth, frameHeight, keys) {
      super(game, x, y, w, h, speed, totFrames, imgFrameNum, frameWidth, frameHeight, keys);
    }
    
    move() {
      document.onkeydown = (event) => {

        event.preventDefault() // stops the button scrolling the page

        if (!this.keys.includes(event.keyCode)) this.keys.push(event.keyCode); //adds button pressed into keyCode array

             
      if (event.keyCode == 40 && this.y <= 700 - this.height) { // down
       this.y += this.speed;
       if (this.imageFrameNumber <= 16 )this.imageFrameNumber = 16; 

      } else if (event.keyCode == 38 && this.y >= 170) { // up
        this.y -= this.speed;   
        if (this.imageFrameNumber <= 16 )this.imageFrameNumber = 16; 

      } else if (event.keyCode == 39 && this.x <= 1178 - this.width) { // right 
         this.x += this.speed;
         if (this.imageFrameNumber <= 3 )this.imageFrameNumber = 3; //update frame animation   

      } else if (event.keyCode == 37 && this.x >= 20) { // left
        this.x -= this.speed;  
        if (this.imageFrameNumber <= 8 )this.imageFrameNumber = 8; //update frame animation
       
      }

      document.onkeyup = (event) => {
        this.keys = [];
        if (this.imageFrameNumber != 0 )this.imageFrameNumber = 0; //update frame animation

      }

    }
  }
}   