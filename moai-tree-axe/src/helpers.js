/**
 * Computer picks the opposite option
 * Computer picks a random option
 * Result (show a WIN, LOSS, or TIE)
 */

// Cheating function! Whatever the player picks, we should pick the opposite...
export const pickWinningOption = (playerChoice) => {
    const validOptions = ['🗿', '🪓', '🌳'];
    if(!validOptions.includes(playerChoice)) throw new Error('Invalid selection.');
    
    switch(playerChoice) {
        case '🗿':
            return '🌳';
        case '🪓':
            return '🗿';
        case '🌳':
            return '🪓';
    }
};

// Should pick a valid choice of 🗿, 🪓, or 🌳
export const pickRandomOption = () => {
    const validOptions = ['🗿', '🪓', '🌳'];
    const randomIndex = parseInt(Math.random() * 3);
    const randomChoice = validOptions[randomIndex];

    return randomChoice;
};

// Receive both player and PC choice...
// Return text as to the outcome...
// 1. Player Wins!
// 2. Computer Wins!
// 3. Tie!
export const getResult = (playerChoice, computerChoice) => {
    const validOptions = ['🗿', '🪓', '🌳'];

    // Check if valid options are available.
    if(!validOptions.includes(playerChoice)) throw Error('Invalid input.');
    if(!validOptions.includes(computerChoice)) throw Error('Invalid input.');

    // Tie:
    if(playerChoice === computerChoice) return 'Tie game! 😲';

    // Player Wins:
    if(playerChoice === '🗿' && computerChoice === '🪓') return 'You win! 🎉';
    if(playerChoice === '🪓' && computerChoice === '🌳') return 'You win! 🎉';
    if(playerChoice === '🌳' && computerChoice === '🗿') return 'You win! 🎉';

    // Computer Wins:
    if(computerChoice === '🗿' && playerChoice === '🪓') return 'Computer wins! 💻';
    if(computerChoice === '🪓' && playerChoice === '🌳') return 'Computer wins! 💻';
    if(computerChoice === '🌳' && playerChoice === '🗿') return 'Computer wins! 💻';
};
