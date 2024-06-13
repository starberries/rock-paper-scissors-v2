function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        let humanChoiceCase = humanChoice.toLowerCase();
        if (humanChoiceCase != computerChoice) {
            if (
                (humanChoiceCase == 'rock' && computerChoice == 'scissors') ||
                (humanChoiceCase == 'paper' && computerChoice == 'rock') ||
                (humanChoiceCase == 'scissors' && computerChoice == 'paper')
            ) {
                console.log(`You win! ${humanChoiceCase} beats ${computerChoice}!`)
                humanScore += 1
            } else if (
                (humanChoice == 'rock' && computerChoice == 'paper') ||
                (humanChoice == 'paper' && computerChoice == 'scissors') ||
                (humanChoice == 'scissors' && computerChoice == 'rock')
            ) {
                console.log(`You lose! ${computerChoice} beats ${humanChoiceCase}!`)
                computerScore += 1
            };
        } else {
            console.log(`You tied! ${humanChoiceCase} vs. ${computerChoice}!`)
        };
    };

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    };
};

function getHumanChoice() {
    let input = prompt('Choose rock, paper, or scissors.');
    return input
};