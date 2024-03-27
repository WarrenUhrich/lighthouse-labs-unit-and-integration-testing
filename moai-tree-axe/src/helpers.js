/**
 * Our goal with our helpers...
 *
 * Cheating!
 * pickWinningOption will take in a player's choice and pick its weakness!
 * (Return winning option!)
 * 
 * Normal!
 * pickRandomOption will pick something randomly to use against the player!
 * (Return random option!)
 * 
 * Who won!?
 * getResult will look at the player choice, the computer choice, and decide the winner!
 * (Return message re: who won!)
 * 
 */

/**
 * Picks winning option.
 * 
 * @param {string} playerChoice - Moai, Axe, or Tree from the player!
 * @return {string} - The choice that would beat the player!
 */
export const pickWinningOption = (playerChoice) => { // INPUT: playerChoice {string}
    // How do we decide which emoji to return?
    if('🌳' === playerChoice) {
        return '🪓';
    }

    if('🗿' === playerChoice) {
        return '🌳';
    }

    if('🪓' === playerChoice) {
        return '🗿';
    }

    throw new Error('Invalid selection.');
    // OUTPUT: the computer's choice -> {string}
};

/**
 * Picks random option.
 * 
 * @return {string} - Random choice of: 🗿, 🪓, or 🌳
 */
export const pickRandomOption = () => {
    const options = ['🗿', '🪓', '🌳'];
    const randomIndex = Math.floor(Math.random() * 3); // 0, 1, 2

    return options[randomIndex];
};

/**
 * Determine a winner or tie given a player and computer choice.
 * 
 * @param {string} playerChoice 
 * @param {string} computerChoice 
 * @return {string} - A message communicating who won, or if it was a tie.
 */
export const getResult = (playerChoice, computerChoice) => {
    const validOptions = ['🗿', '🪓', '🌳'];

    if(undefined === playerChoice || undefined === computerChoice) throw new Error('Missing input(s).');
    if(!validOptions.includes(playerChoice) || !validOptions.includes(computerChoice)) throw new Error('Invalid input(s).');

    // Player Wins
    if('🗿' === playerChoice && '🪓' === computerChoice) return 'Player wins!';
    if('🪓' === playerChoice && '🌳' === computerChoice) return 'Player wins!';
    if('🌳' === playerChoice && '🗿' === computerChoice) return 'Player wins!';

    // Computer Wins
    if('🗿' === computerChoice && '🪓' === playerChoice) return 'Computer wins!';
    if('🪓' === computerChoice && '🌳' === playerChoice) return 'Computer wins!';
    if('🌳' === computerChoice && '🗿' === playerChoice) return 'Computer wins!';

    // Tie Game
    if(playerChoice === computerChoice) return 'Tie game!';
};
