const {
    pickWinningOption,
    pickRandomOption,
    getResult
} = require('./helpers');


describe('pickWinningOption function', () => {

    /**
     * 🗿  => 🌳
     * 🪓 => 🗿
     * 🌳 => 🪓
     */

    it('returns 🌳 if player picked 🗿', () => {
        const actual = pickWinningOption('🗿');
        const expected = '🌳';

        expect(actual).toBe(expected);
    });

    it('returns 🗿 if player picked 🪓', () => {
        const actual = pickWinningOption('🪓');
        const expected = '🗿';

        expect(actual).toBe(expected);
    });

    it('returns 🪓 if player picked 🌳', () => {
        const actual = pickWinningOption('🌳');
        const expected = '🪓';

        expect(actual).toBe(expected);
    });

    it('throws an error if the input is invalid', () => {
        expect(() => {
            pickWinningOption('🐺')
        }).toThrow('Invalid selection.');
    });

});

describe('pickRandomOption function', () => {

    it("returns one of '🗿', '🪓', '🌳'", () => {
        const validOptions = ['🗿', '🪓', '🌳'];
        const result = pickRandomOption();
        const wasFound = validOptions.includes(result);

        expect(wasFound).toBe(true);
    });

});

describe('getResult function', () => {

    it('returns a Player Win message if the player beats the computer', () => {
        const result = getResult('🗿', '🪓');
        expect(result).toBe('You win! 🎉');
    });

    it('returns a Computer Win message if the computer beats the player', () => {
        const result = getResult('🪓', '🗿');
        expect(result).toBe('Computer wins! 💻');
    });

    it('returns a Tie Game message if the player and computer pick the same', () => {
        const result = getResult('🌳', '🌳');
        expect(result).toBe('Tie game! 😲');
    });

    it('throws an error if the input is invalid', () => {
        expect(() => {
            getResult('🐺');
        }).toThrow('Invalid input.');
    });

});
