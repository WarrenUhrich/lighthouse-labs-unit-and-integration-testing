/**
 * Computer picks the opposite option
 * Computer picks a random option
 * Result (show a WIN, LOSS, or TIE)
 */

export const pickWinningOption = (playerChoice) => {
    switch(playerChoice) {
        case '🗿':
            return '🌳';
        case '🌳':
            return '🪓';
        case '🪓':
            return '🗿';
        default:
            throw new Error('Invalid selection.');
    }
};

export const pickRandomOption = () => {
    const options = ['🗿','🌳','🪓']; // 0-2

    const randomIndex = Math.floor(Math.random() * 3);

    return options[randomIndex];
};

export const getResult = (playerChoice, computerChoice) => {
    const WIN_MESSAGE = 'YOU WIN!';
    const LOSE_MESSAGE = 'YOU LOSE!';
    const TIE_MESSAGE = 'TIE GAME!';
    
    const opposites = {
        '🌳': '🗿',
        '🪓': '🌳',
        '🗿': '🪓',
    };

    if(Object.keys(opposites).includes(playerChoice) === false || Object.keys(opposites).includes(computerChoice) === false) {
        throw new Error('Invalid emojis.');
    }

    if(playerChoice === computerChoice) {
        return TIE_MESSAGE;
    }

    if(opposites[playerChoice] === computerChoice) {
        return WIN_MESSAGE;
    }

    if(opposites[computerChoice] === playerChoice) {
        return LOSE_MESSAGE;
    }
};
