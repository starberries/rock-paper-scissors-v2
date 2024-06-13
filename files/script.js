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