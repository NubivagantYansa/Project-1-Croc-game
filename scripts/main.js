window.onload = () => {

  // HELPERS for DOM manipulation // =====================

  createContainer = () => { //create a div container for the elemens of the screen
    let parent = document.getElementById('game-board');
    let divContainer = document.createElement('div');
    parent.appendChild(divContainer);
    divContainer.setAttribute('id', 'style-container'); //use for styling
    return divContainer
  }

  addElement = (el) => {

    //create child and append it to the div
    let newChild = document.createElement(el);
    let styleCont = document.getElementById('style-container');
    styleCont.appendChild(newChild);
    return styleCont.lastElementChild //the function returns the new element created
  };

  setAttributes = (el, attrs) =>{
      for(let key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }
  
  buildScoreBoard = (htmlString) => {
      let div = document.createElement('div');
      div.innerHTML = htmlString;
      return div.children[0];
    };

  removeScreen = () => {
    let screen = document.getElementById('style-container');
    return   screen.parentNode.removeChild(screen);
    
    };


  
  // SCREENS // ========================================================


  drawSplashScreen = () => {

    createContainer();

    //heading
    addElement('h1').innerText = 'Croc';

    //description
    addElement('p').innerHTML = 'Help the marshmallows reach the gingerbread house! <br> Move Croc with the arrow keys and eat the jelly monsters. You get extra points for collecting white candies!';        

    // Croc image + attributes
    let crocImg = addElement('img');
    setAttributes (crocImg, {'src': 'imges/frame-1.png', 'alt': 'croc-logo', 'class': 'logo-img'})
    
    //button
    let startbtn = addElement('button');

    startbtn.setAttribute('id', 'start-button');
    startbtn.innerText = 'Start Game';

    document.getElementById('start-button').onclick = () => {
        startGame();
    };


  };

  drawGameScreen = () => { 

    createContainer();

    //creates scoreboard
    let scoreBoard = buildScoreBoard(`
      <header>
      <div class="score">
        <span class="label">Safe Marsh:</span>
        <span class="value marsh">10</span>
        <span class="label">Jelly Monsters Eaten:</span>
        <span class="value monster">0</span>
        <span class="label">Countdown:</span>
        <span class="value time">00</span>
      </div>
    </header>
  `);
    
    let styleCont = document.getElementById('style-container');
    styleCont.appendChild(scoreBoard);

  
    // creates canvas
    let canvas = addElement('canvas');
    // sets attributes
    setAttributes (canvas, {'id': 'canvas', 'width': '1200px', 'height': '720px'});
    }

  drawGameOverScreen = () => {

      createContainer();

      // creates scoreboard
      let scoreBoard = buildScoreBoard(`
      <header>
      <div class="score">
        <span class="label">Safe Marsh:</span>
        <span class="value marsh">10</span>
        <span class="label">Jelly Monsters Eaten:</span>
        <span class="value monster">0</span>
        <br>
        <span class="label">Countdown:</span>
        <span class="value ">00</span>
      </div>
    </header>  
  `);

  let styleCont = document.getElementById('style-container');
  styleCont.appendChild(scoreBoard);

      // headings
      addElement('h2').innerText = 'GAME OVER';
      addElement('h3').innerText = 'The jelly monsters army won this round!';

      // Croc image + attributes
      let crocImg = addElement('img');
      setAttributes (crocImg, {'src': 'imges/croc-faint.png', 'alt': 'croc-logo', 'class': 'logo-img2'})

      addElement('br');

      // button
      let startbtn = addElement('button');
      startbtn.setAttribute('id', 'start-button');
      startbtn.innerText = 'Try again';
      document.getElementById('start-button').onclick = () => {
          removeScreen ();
          location.reload();
          drawSplashScreen();
      };
  }
  
  drawWinScreen = () => {
    createContainer();

        // creates scoreboard
        let scoreBoard = buildScoreBoard(`
          <header>
          <div class="score">
            <span class="label">Safe Marsh:</span>
            <span class="value marsh">10</span>
            <span class="label">Jelly Monsters Eaten:</span>
            <span class="value monster">0</span>
            <br>
            <span class="label">Countdown:</span>
            <span class="value time">00</span>
          </div>
         </header>  
    `);
      
      let styleCont = document.getElementById('style-container');
      styleCont.appendChild(scoreBoard);


    // add headings
    addElement('h2').innerText = 'You are a HERO!';
    addElement('h3').innerText = 'All the Marshmallows are safe and sound in the gingerbread house';

    // Croc image + attribute
    let crocWin =  addElement('img');
    setAttributes (crocWin, {'src': 'imges/croc-jump.png', 'alt': 'croc-logo', 'class': 'logo-img'})
    
    addElement('br');
    
    // button
    let playAgainbtn = addElement('button')
    playAgainbtn.setAttribute('id', 'start-button')
    playAgainbtn.innerText = 'Play Again';

    document.getElementById('start-button').onclick = () => {
        removeScreen ();
        location.reload();
        drawSplashScreen();
        };
  }


// Setting Game State // ==============================

  
  callGameOver = () =>{
    removeScreen();
    return drawGameOverScreen();
  }

  callWonGame = () =>{
    removeScreen();
    return drawWinScreen();
  }

// START GAME // =========================================

  drawSplashScreen();

  startGame = () => {
    removeScreen(); //clear the screen
    drawGameScreen (); //draw the canvas for the game
    const myGame = new Game(); //create instance for Game
    myGame.init(); //initiate game
  }
};
  

