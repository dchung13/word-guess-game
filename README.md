# word-guess-game
word guessing game with timer

html:
need doctype, metadata
need body, h1, h2, span:You win, You lose, Play again, span: score count
java:
need setTimerInterval (for game timer)
    when timer hits 0, game ends
        if word is not complete, add 1 to count
    when start button is clicked
        timer resets
        addEventListener("click")
need eventlistener("keydown")
    when user pushes a key
        read keyinput
        check word to see if keyinput matches any character in the word
            if keyinput matches character
                then replace _ with keyinput
need score count
    want to see total wins, total losses
    localStorage.setItem
need message appear
    when user loses game
        timer stops, textContent"You lose"
    when user completes word
        timer stops, textContent"You win"
        win count +1
setTimerInterval
var wins:
var losses:
addEventListener("click")
addEventListener("keydown")
    element.getAttribute("data-state")
    element.getAttribute(word)
        if (state === hidden)
        element.setAttribute(visible)
var array listOfWords = [] "s y n t a x"
var array scores = [wins, losses]
function random to get a random index number from listOfWords
    var randomIndex = Math.random(Math.floor() * listOfWords.Length)
    return selectedWord = listOfWords[randomIndex]
var selectedWord
var wordArray = selectedWord.text.split(" ");
//wordArray = ["s", "y", "n", "t", "a", "x"]
data-state = hidden, when hidden, show _
data-state = visible







