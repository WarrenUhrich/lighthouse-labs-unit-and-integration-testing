/**
 * Decide winner based on player and computer selection
 * 
 * @param {string} playerSelection "Moai" || "Tree" || "Axe"
 * @param {string} computerSelection "Moai" || "Tree" || "Axe"
 * @returns {string}
 */
export function announceResult(playerSelection, computerSelection) {
    const outcomes = {
        'Moai': 'Axe',
        'Tree': 'Moai',
        'Axe': 'Tree'
    };

    if (!(playerSelection && computerSelection)) {
        return 'Waiting';
    }

    if (outcomes[playerSelection] === computerSelection) {
        return 'Won';
    }

    if (outcomes[computerSelection] === playerSelection) {
        return 'Lost';
    }

    return 'Tied';
}

/**
 * Format feedback string based on result
 * 
 * @param {string} result "Waiting" || "Won" || "Lost" || "Tied"
 * @returns {string}
 */
export function feedbackMessage(result) {
    const messages = {
        Waiting: 'Waiting for a choice... 🕰',
        Won: 'You win! 🙌',
        Lost: 'The computer wins! 🤖',
        Tied: 'It\'s a tie! 👔'
    };
    return messages[result];
}

/**
 * Computer chooses one of: "Moai", "Tree", or "Axe"
 * 
 * @returns {string}
 */
export function computerChoice() {
    const choices = ['Moai', 'Tree', 'Axe'];
    const choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}
