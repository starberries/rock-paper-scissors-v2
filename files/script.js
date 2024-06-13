let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissors'
            break;
    }
};

function getHumanChoice() {
    let input = prompt('Choose rock, paper, or scissors.');
    return input
}

function playRound(humanChoice, computerChoice) {
    let humanChoiceCase = humanChoice.toLowerCase();
    if (humanChoiceCase != computerChoice) {
        console.log(`${humanChoiceCase} vs. ${computerChoice}!`)
    } else {
        console.log('You tied!')
    }
};