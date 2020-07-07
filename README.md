# Croc saves Marshland

## Description

Croc saves Marshland is a game where the player has to move Croc to stop the monsters from colliding with the hairy marshmallows. After 20 seconds, the speed intervals randomize themselves and get quicker for higher difficulty. If you survive 1 minute you win the game. If the monsters get to pass Croc and collide with the Marshmallows, it’s game over.

MVP (DOM - CANVAS)

## MVP (DOM - CANVAS)
- Croc starts from the middle and uses the arrows to move horizontally/vertically/diagonally.
- Random monsters come from the right side of the screen and disappear when they reach the left side.
- Random marshmallows come from the bottom-left side of the screen and move to the top side.
- If a monster collides with a marshmallow, the game ends.
- If no marshmallows are killed you win.
- If marshmallows reach the house in the top-left side of the screen, they disappear.

## Backlog
- Timer
- Sounds
- Special Effects
- Sprites
- Speed up
- Score
- Multiple enemies
- Bonus items randomly appearing to slow down the speed
- Bonuses
- Badges

## Data structure
### main.js
```
drawSplashScreen(){}
drawGameScreen(){}
drawGameOverScreen(){}
drawWinScreen(){}
```
game.js
```
game () {
- constructor()
- init()
- animate ()
- drawPlayer ()
- drawCharacters ()
- drawGingerBHouse ()
- clearCanvas ()
- drawBackground ()
- detectCollision()
- gameOver ()
- winner ()
}
```
component.js
```
component{
- constructor()
- boundaries()
- drawComponent()
}
```
player.js
```
player extends Component(){
- constructor () {}
- move ()
}
```
monsters.js
```
Monster extends Component(){
- constructor()
- move()
- collisionPlayer()
- collisionMarsh()
}
```
marshmallows.js
```
Marsh extends Component(){
constructor()
move()
collisionHouse()
collisionMonster()
}
```
gingerbHouse.js
```
house extends Component ()
```
## States e States Transitions
Definition of the different states and their transition (transition functions)
```
splashScreen()
- drawSplashScreen ()
- addEventListener(startGame)
  
startGame()
- drawGameScreen()
- game.init()
- game.start()
  
gameOver()
- drawGameOverScreen()
- addEventListener(tryAgain) 

Win()
- drawWinScreen()
- addEventListener(playAgain) 
```
## Task
```
main - drawSplashScreen(){addeventListener}
main - drawGameScreen()
game - constructor ()
component - component()
game - init()
game - animate ()
game - drawBackground ()
player - player
game - drawCroc ()
game - clearCanvas ()
monster - enemyMonster ()
monster - constructor()
monster	- move()
game - drawMonsters ()
game - detectCollision ()
monster	- collision()
marshmallows - friendMarsh ()
marshmallows  - constructor()
marshmallows - move()
game - drawMarshs ()
gingerBHouse - gingerBHouse ()
game - drawGingerBHouse ()
marshmallows - collision()
main - drawGameOverScreen(){addeventListener}
game - gameOver ()
main - drawWinScreen(){addeventListener}
game - winner ()
```
## Links

### Trello
[Trello] https://trello.com/b/Onyb4FWR/project-1-croc-game

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/NubivagantYansa/Project-1-Croc-game)
[Link Deploy](http://github.com)

### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)

### Credits
*Credit sprites: bevouliin ( https://bevouliin.com/ )