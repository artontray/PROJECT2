 /**
  * When loading page, we configure :
  * - We show a Help box to show up the rules of the Game -> When Closing this box:
  * 
  *      - Two click event Listeners ("new-card" and "i-am-good") 
  *      - Rungame() function
  */
 document.addEventListener("DOMContentLoaded", function () {
     let buttons = document.getElementsByTagName('button');
     for (let button of buttons) {
         button.addEventListener('click', function () {
             if (this.getAttribute('data-type') === 'new-card') {
                 // Click Event detected, Let's disabled both buttons
                 document.querySelector('#new-card').disabled = true;
                 document.querySelector('#i-am-good').disabled = true;
                 //player ask for a new card
                 AddCard(3, 'player1', SelectCard());
                 CheckResult();
             } else if (this.getAttribute('data-type') === 'i-am-good') {
                 document.querySelector('#i-am-good').disabled = true;
                 document.querySelector('#new-card').disabled = true;
                 //player 1 want to continue with 2 Cards, so let's add a new card to Player 2
                 AddCard(3, 'player2', SelectCard());
                 CheckResult();
             } else {
                 alert(`Unknown button type`);
                 throw `Unknown button type - Aborting!`;
             }
         });
     }
     //Start the game
     RunGame();
 });
 
 
 
 
 /**
  * Function CheckResult()
  * This function is called only if player 1 asked for a new card or decided to continue with only 2 Cards
  * - Check the score of both player and select the winner
  * - Check if score is up to 21
  * - Check if score is equal for both player -> Draw
  * - Check if Player 2 have still a card to play, if yes AddCard() is called
  */
 function CheckResult() {
    
 }
 
 /**
  * Function CalculateScore()
  * - Gets the current score from the DOM thanks to alt attribute of each card image
  * - This function will store this data and calculate the total score of each players.
  * - The total score will be displayed into a div with ID : "scorePlayer1" and "scorePlayer2"
  * - return : scorePlayer1 and scorePlayer1
  */
 function CalculateScore() {

 }
 
 
 /**
  * Function RunGame()
  * This function will start the game by :
  * - Give 2 displayed cards to both player
  * - Checking the score of both player :
  *      - Disable the "i-am-good" button for Player 1 if his score is smaller then Player 2
  */
 function RunGame() {

 }
 
 /**
  * Function AddCard(WhichCard,Player,Card)
  * - WhichCard : can be 1,2 or 3 means first card, second card and third card
  * - Player : can be player1 or player2
  * - Card : is a random Card (from 1 to 13) selected by the function SelectCard() or 0 if undisplayed Card
  */
 function AddCard(WhichCard, Player, Card) {

 }
 
 /**
  * Function SelectCard()
  * - Select a random number between 1 and 13
  * - This number will be used to select a card into CarteTable (Card Array)
  */
 function SelectCard() {

 }
 /**
  * Function ShowResult(Result)
  * - Show an image in middle of the game according the value of Result
  *      - Result : youwin -> it will load the image youwin.png
  *      - Result : youloose -> it will load the image youloose.png
  *      - Result : draw -> it will load the image draw.png
  */
 function ShowResult(Result, Withsound) {

 }
 
 /**
  * Function incrementScore(Player)
  * Increment one point to the winner
  */
 function incrementScore(Player) {

 }