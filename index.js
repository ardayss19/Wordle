/*
VARIABLES
*/

//Obi

//readline stuff for user inputs
const readLine = require("node:readLine")
const chalk = require("chalk")


const {stdin: input, stdout: output} = require("node:process");
const rl = readLine.createInterface({input, output});


let inputWord = ""
let displayArray = ["*****","*****","*****","*****","*****","*****"] // add words from input, is blank before hand
let answerWord = "START"
const possibleWords = ["SNACK","SLATE","START"]

let attempts = 0
let won = false

/*
FUCNTIONS
*/

// rachel
function wordMtach(inputWord,answerWord) {
    if (inputWord == answerWord)
        console.log("CONGRATS YOU WON!!!");
    return answerWord;
}

//rachel
function letterMatch(str) {
    // has to return some sort of object with colours
    // tell them how many letters match
    // maybe colours for UI
}
//rachel
function display(arr) {
    // this is just to show what everything looks like for UI
    // loop through the displayArray console.log()
    // other steps for looking nice e.g. help section at the bottom
    for (const w of arr) {
        console.log(`${w}\n`)
    }

}

function inputToDisplay(str) {
    // displays results from Letter match (with colours)
    // change value in display arry
    displayArray[attempts] = str
}

// rachel
function restartGame() {
    // restarts with random word
    answerWord = possibleWords[Math.floor((Math.random()*100))]

    //reset number of strikes
    // do we need a new const for the number of attempts? 

    // print to inform the player
    console.log("Restart the game, Guess the new word")
}

// rachel
// this only happens if they dont get the word after the 6 attempts: if attempts >6 => function endGame
function endGame() {
    // just need to print 
    console.log("Game finished, you suck, LOL!");
    console.log("The correct answer was:" + answerWord);
}

function chooseAnswerWord() {
    answerWord = possibleWords[Math.floor((Math.random()*possibleWords.length))]
    return answerWord
}

function askQuestion(query) {
    return new Promise(ans => rl.question(query, ans))
}

//Obi
/*
GAMEPLAY
*/



async function gameLoop() {

    console.log("Welcome to La Worrdle")
    //chooseAnswerWord()
    display(displayArray)

    while (attempts < 6 && !won) {
        const guess = await askQuestion(`Attempt ${attempts + 1}/6: `)
        const cleanGuess = guess.toUpperCase().trim()

        if (wordMatch(cleanGuess)) {
            won = true
            console.log("CONGRATS YOU !!!")
        } else {
            const colouredWord = letterMatch(cleanGuess)
            inputToDisplay(colouredWord)
            display(displayArray)
            attempts += 1
        }
    }

    if(!won) {endGame()}
    rl.close()
}

gameLoop()
