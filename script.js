let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generateTarget() will be used to generate a new target value to be guessed
const generateTarget = () =>{
    return Math.floor(Math.random() * 10);
};

// compareGuesses() will be used to see whose guess is closer to the target value
const compareGuesses = (humanGuess, computerGuess, generateTarget) => {
    let humanGuessDiff = Math.abs(humanGuess - generateTarget);
    let computerGuessDiff = Math.abs(computerGuess - generateTarget);
    if (humanGuessDiff < computerGuessDiff) {
        return true;
    } else {
        return false;
    }
};

// updateScore() keeps track of who is winning
const updateScore = winner => {
    if (winner === 'human'){
        humanScore++;
    } else {
        computerScore++;
    }
};

// advanceRound() updates current round number in web browser
const advanceRound = () => {
    currentRoundNumber++;
};node