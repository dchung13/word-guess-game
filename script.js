function startPlay() {
document.getElementById('startButton').style.display="block"
var startButton = document.getElementById("#startButton")
startButton.addEventlistener("clicked", function())
console.log("clicked")

   
} 
// once button clicked, page changes to word game block

var  word = "";
var wordGuess = [];
var wrongGuess = [];
var 

//

//Timer element
var timerEl = document.getElementById('#timer');
/*var mainEl = document.getElementById('main');

//var message = 
*/
function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
    if (timeleft === 0) {
        timerEl.textContent = timeLeft;
        clearInterval(timeInterval);
        //.textContent = "You lose"
    } else if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    } 
},60000); }

*/



//generate random word from list of words in the array
function randomWord () {

    var listOfWords = ["javascript", "computer", "syntax", "assignment", "bootcamp", "coding"];
    var selectedWord;

    var randomIndex = Math.floor(Math.random() * listOfWords.Length)
    return selectedWord = listOfWords[randomIndex]};
    console.log(selectedWord);

 //   console.log(wordArray);

var wordArray = selectedWord.split(",");
console.log(listOfWords)

//to display key pressed on the screen

function keydownAction(event) {
    console.log(event);
    var keyPress = event.key;
    

    document.querySelector("#key").textContent = keyPress;
    document.addEventListener("keydown", keydownAction);

}
