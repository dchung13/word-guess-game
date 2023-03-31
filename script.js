//Timer element
/*var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

//var message = 
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
},60000); 

*/
var listOfWords = ["j,a,v,a,s,c,r,i,p,t"];
var selectedWord;


function randomWord () {
    var randomIndex = Math.floor(Math.random() * listOfWords.Length)
    return selectedWord = listOfWords[randomIndex]};


    randomWord();
    console.log(selectedWord);
 //   console.log(wordArray);

var wordArray = selectedWord.split(",");
console.log(listOfWords)