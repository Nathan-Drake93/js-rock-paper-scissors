let choices = ["rock", "paper", "scissors"]
let playerPick;
let compPick;
let humanScore = 0;
let computerScore = 0;
let goAgain = false;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(){
    while(true){
        let input = prompt("Pick your weapon: Rock, Paper, Scissors");
        // if user cancels
        if (input === null || input === ""){
            return null;
        }
        input = input.trim().toLowerCase()
        switch (input){
            case "rock": return 0;
            case "paper": return 1;
            case "scissors": return 2;
            default:
                alert("Please choose one of the available selections")
        }
    }
}

function playRound(playerChoice, compChoice){
    let outcome;
    const compareChoice = [
        [null, false, true],
        [true, null, false],
        [false, true, null]];

    outcome = compareChoice[playerChoice][compChoice];
    if (outcome === null){
        return `The match is a tie. Both players chose ${choices[playerChoice]}.`;
    }
    else if (outcome){
        humanScore++;
        return `The player has won. ${choices[playerChoice]} beats ${choices[compChoice]}.`;
    }

    else {
        computerScore++;
        return `The computer has won. ${choices[compChoice]} beats ${choices[playerChoice]}.`;
    }
}

function output(ruling){
    console.log("player picked " + playerPick);
    console.log("computer picked " + compPick);
    console.log(ruling);
    console.log(`
        The score is now
        Human: ${humanScore}
        Computer: ${computerScore}`);
}

function playAgain(){
    let check = confirm("Play again?");
    if (check){
        humanScore = 0;
        computerScore = 0;
        return true;
    }
    else {
        return false;
    }
}

do{
    for (let i = 0; i < 5; i++){
        playerPick = getHumanChoice();
        if (playerPick === null){
            console.log("Player has canceled the game.");
            goAgain = false;
            break;
        }
        compPick = getComputerChoice();
        let ruling = playRound(playerPick, compPick);
        output(ruling);
    }

    if (playerPick === null){
        console.log("The game has been canceled.")
        break;
    }
    else if (humanScore > computerScore){
        console.log("The human player WINS!!!");
    }
    else if (computerScore > humanScore) {
        console.log("The computer WINS!!!");
    }
    else {
        console.log("The game is a TIE.");
    }
    goAgain = playAgain();
}
while(goAgain);