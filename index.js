/*
VARIABLES
*/

const inputWord = ""
const displayArray = ["*****","*****","*****","*****","*****","*****"] // add words from input, is blank before hand
const answerWord = "START"
const possibleWords = ["","",""]

function wordMatch(str) {

}

function letterMatch(str) {
    // has to return some sort of object with colours
    // tell them how many letters match
    // maybe colours for UI
}

function display(arr) {
    // this is just to show what everything looks like for UI
    // loop through the displayArray console.log()
    // other steps for looking nice e.g. help section at the bottom

}

function inputToDisplay(obi) {
    // displays results from Letter match (with colours)
    // change value in display arry
}

function turnBasedLogic() {

}

function restartGame() {
    //restarts with random word
    answerWord = ""
    inputWord = ""
    displayArray  = ["*****","*****","*****","*****","*****","*****"]
}

function endGame() {
    // this only happen if they do not get the word
    // says game finished you suck, lol
}

function chooseAnswerWord() {
    const answerWord = possibleWords[Math.floor((Math.random()*100))]
    return answerWord
}