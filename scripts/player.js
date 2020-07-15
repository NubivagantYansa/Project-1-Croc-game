class Player extends Component {
    constructor(game, x, y, w, h, speed, totFrames, imgFrameNum, frameWidth, frameHeight) {
      super(game, x, y, w, h, speed, totFrames, imgFrameNum, frameWidth, frameHeight);
    }
    
    move() {
      document.onkeydown = (event) => {
        event.preventDefault() // stops the button scrolling the page
      if (event.keyCode == 40 && this.y <= 700 - this.height) { // down
         this.y += this.speed;
         

      } else if (event.keyCode == 38 && this.y >= 10) { // up
        this.y -= this.speed;   

      } else if(event.keyCode == 39 && this.x <= 1200 - this.width) { // right 
         this.x += this.speed;   

      } else if(event.keyCode == 37 && this.x >= 10) { // left
        this.x -= this.speed;       
      }

    }
  }
}   