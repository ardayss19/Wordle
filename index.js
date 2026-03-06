const inputWord= ""
const displayWord= [ ]
const answerWord = ""
const possibleWords = ["","",]

function wordMtach(inputWord,answerWord) {
    if (inputWord == answerWord)
        console.log("CONGRATS YOU WON!!!");
    return answerWord;
}

function letterMatch () {
    // return some sort of object with colours
    //tell them how many letters match
}


function displayWord() {
    //this is just to show what everything looks like for UI

}

function restartGame() {
    // restarts with random word
    answerWord = possibleWords[Math.floor((Math.random()*100))]

    //reset number of strikes
    // do we need a new const for the number of attempts? 

    // print to inform the player
    console.log("Restart the game, Guess the new word")
}

// this only happens if they dont get the word after the 6 attempts: if attempts >6 => function endGame
function endGame() {
    // just need to print 
    console.log("Game finished, you suck, LOL!");
    console.log("The correct answer was:" + answerWord);
}