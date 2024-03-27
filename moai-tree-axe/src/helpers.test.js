const {
    pickWinningOption,
    pickRandomOption,
    getResult
} = require('./helpers');

// Group of tests!
describe('pickWinningOption function', () => {

    /**
     * 🗿 => 🌳
     * 🌳 => 🪓
     * 🪓 => 🗿
     */

    // Individual test!
    it('returns 🪓 if player chose 🌳', () => {
        const actual = pickWinningOption('🌳');
        const expected = '🪓';

        expect(actual).toBe(expected);
    });

    it('returns 🗿 if player chose 🪓', () => {
        const actual = pickWinningOption('🪓');
        const expected = '🗿';

        expect(actual).toBe(expected);
    });

    it('returns 🌳 if player chose 🗿', () => {
        const actual = pickWinningOption('🗿');
        const expected = '🌳';

        expect(actual).toBe(expected);
    });

    it('throws an error if the input is invalid', () => {
        expect(() => { // expect has its own try...catch inside
                       // it can run our function and see if it errors!
            pickWinningOption('🎄');
        }).toThrow('Invalid selection.');
    });

});

describe('pickRandomOption Function', () => {
    
    it('returns one of: 🗿, 🪓, or 🌳', () => {
        const validOptions = ['🗿', '🪓', '🌳'];
        const actual = pickRandomOption();
        const wasFound = validOptions.includes(actual);

        expect(wasFound).toBe(true);
    });

});

describe('getResult Function', () => {
    
    // What will this function do? (return {string})
    // getResult(playerChoice, computerChoice)
    // Should... ? What should it do?
    // 1. It should return 'Player wins!' when playerChoice=🌳 and computerChoice=🗿
    // 2. It should return 'Computer wins!' when playerChoice=🪓 and computerChoice=🗿
    // 3. It should return 'Tie game!' when playerChoice=computerChoice
    // Edge cases:
    // 1. Invalid input.
    // 2. Missing input(s).

    it('returns \'Player wins!\' if the player input beats the computer input', () => {
        const result = getResult('🌳', '🗿');
        expect(result).toBe('Player wins!');
    });

    it('returns \'Computer wins!\' if the computer input beats the player input', () => {
        const result = getResult('🪓', '🗿');
        expect(result).toBe('Computer wins!');
    });

    it('returns \'Tie game!\' if the player input beats the computer input', () => {
        const result = getResult('🪓', '🪓');
        expect(result).toBe('Tie game!');
    });

    it('throws an error if either input is missing', () => {
        expect(() => {
            getResult();
        }).toThrow('Missing input(s).');
    });

    it('throws an error if either input is not one of: 🗿, 🪓, or 🌳', () => {
        expect(() => {
            getResult('🐦', '🦎');
        }).toThrow('Invalid input(s).');
    });

});
