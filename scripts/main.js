window.onload = () => {

  // HELPERS for DOM manipulation =====================

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

  // SCREENS ========================================================

  removeScreen = () => {
      let screen = document.getElementById('style-container');
      return   screen.parentNode.removeChild(screen);
      
  };

  drawSplashScreen = () => {
    console.log('draw spalsh screen')

    createContainer();
    //heading
    addElement('h1').innerText = 'Croc saves Marshland';

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

    //description
    addElement('p').innerText = 'Use the arrows to help Croc intercepting the monsters!';

    // Arrows image + attributes
    let ArrowsImg = addElement('img');
    setAttributes (ArrowsImg, {'src': 'imges/arrows.png', 'alt': 'arrows-logo', 'class': 'logo-img'})

  };

  drawGameScreen = () => { 
    console.log('draw game screen');

    createContainer();
    let scoreBoard = buildScoreBoard(`
      <header>
        <div class="score">
          <span class="label">Defeated monsters:</span>
          <span class="value">0</span>
        </div>
      </header>
  `);
    
    let styleCont = document.getElementById('style-container');
    styleCont.appendChild(scoreBoard);

    

    //creates canvas
    let canvas = addElement('canvas');
    //sets attributes
    setAttributes (canvas, {'id': 'canvas', 'width': '1250px', 'height': '810px'});
  }

  drawGameOverScreen = (score) => {
    console.log('draw game over screen')

      createContainer();
      //headings
      addElement('h1').innerText = 'GAME OVER';
      addElement('h3').innerText = 'The monster army won this round!';

      // Croc image + attributes
      let crocImg = addElement('img');
      setAttributes (crocImg, {'src': 'imges/croc-faint.png', 'alt': 'croc-logo', 'class': 'logo-img'})

      //button
      let startbtn = addElement('button');
      startbtn.setAttribute('id', 'start-button');
      startbtn.innerText = 'Try again';
      document.getElementById('start-button').onclick = () => {
          removeScreen ();
          return drawSplashScreen();
      };
  }
  
  drawWinScreen = () => {
    console.log('draw win screen')
    createContainer();
    //add headings
    addElement('h1').innerText = 'You are a HERO!';
    addElement('h3').innerText = 'The Marsh is safe and sound in the gingerbread house';

    //Croc image + attribute
    let crocWin =  addElement('img');
    setAttributes (crocWin, {'src': 'imges/croc-jump.png', 'alt': 'croc-logo', 'class': 'logo-img'})

    //button
    let playAgainbtn = addElement('button')
    playAgainbtn.setAttribute('id', 'start-button')
    playAgainbtn.innerText = 'Play Again';

    document.getElementById('start-button').onclick = () => {
        removeScreen ();
        return drawSplashScreen();
        };
  }

  //uncomment to test the screens
  // drawGameOverScreen()
  // drawWinScreen()


  //Setting Game State ==============================

  
  callGameOver = () =>{
    console.log('called game over')
    removeScreen();
    drawGameOverScreen();

  }

  callWonGame = () =>{
    console.log('called won game')
    removeScreen();
    drawWinScreen();
  }


  drawSplashScreen();

  startGame = () => {
    removeScreen(); //clear the screen
    drawGameScreen (); //draw the canvas for the game
    const myGame = new Game(); //create instance for Game
    myGame.init(); //initiate game
  }
};
  

