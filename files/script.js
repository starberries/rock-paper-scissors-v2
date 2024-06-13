let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
};

function getHumanChoice() {
    let input = prompt('Choose rock, paper, or scissors.');
    return input
};

function playRound(humanChoice, computerChoice) {
    let humanChoiceCase = humanChoice.toLowerCase();
    if (humanChoiceCase != computerChoice) {
        console.log(`${humanChoiceCase} vs. ${computerChoice}!`)
    } else {
        console.log('You tied!')
    }
};