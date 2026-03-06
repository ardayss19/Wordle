/*
VARIABLES
*/

//Obi

//readline stuff for user inputs
const readLine = require("node:readLine")
const chalk = require("node:chalk@4")


const {stdin: input, stdout: output} = require("node:process");
const rl = readLine.createInterface({input, output});


let inputWord = ""
let displayArray = ["*****","*****","*****","*****","*****","*****"] // add words from input, is blank before hand
const answerWord = "START"
const possibleWords = ["SNACK","SLATE","START"]

let attempts = 0
let won = false

/*
FUCNTIONS
*/

// rachel
function wordMatch(str) {

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
    //restarts with random word
    inputWord = ""
    displayArray  = ["*****","*****","*****","*****","*****","*****"]
}

// rachel
function endGame() {
    // this only happen if they do not get the word
    // says game finished you suck, lol
}

function chooseAnswerWord() {
    const answerWord = possibleWords[Math.floor((Math.random()*possibleWords.length))]
    return answerWord
}

function askQuestion() {
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

    while (attempts <= 6 && !won) {
        const guess = await askQuestion(`Attempt ${attempts} + 1/6: `)
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