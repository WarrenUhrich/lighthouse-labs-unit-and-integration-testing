const { pickWinningOption, pickRandomOption, getResult } = require('./helpers');

describe('pickWinningOption function', () => {

    // 🗿 -> 🌳
    // 🌳 -> 🪓
    // 🪓 -> 🗿

    it('returns 🌳 if given 🗿', () => {
        const result = pickWinningOption('🗿');
        expect(result).toBe('🌳');
    });

    it('returns 🪓 if given 🌳', () => {
        const result = pickWinningOption('🌳');
        expect(result).toBe('🪓');
    });

    it('returns 🗿 if given 🪓', () => {
        const result = pickWinningOption('🪓');
        expect(result).toBe('🗿');
    });

    it('throws an error if given invalid input', () => {
        expect(() => {
            pickWinningOption('123');
        }).toThrow('Invalid selection.');
    }); 
});

describe('pickRandomOption function', () => {

    it('returns one of 🗿,🌳,🪓', () => {
        const result = pickRandomOption();
        const options = ['🗿','🌳','🪓'];
        const wasFound = options.includes(result);
        expect(wasFound).toBe(true);
    });

});

describe('getResult function', () => {

    it('return a win message if the player choice beats the computer', () => {
       const result = getResult('🗿', '🪓');
       expect(result).toBe('YOU WIN!');
    });

    it('return a tie message if the player choice matches the computer', () => {
        const result = getResult('🌳', '🌳');
        expect(result).toBe('TIE GAME!');
    });

    it('return a lose message if the player choice loses to the computer', () => {
       const result = getResult('🪓', '🗿');
       expect(result).toBe('YOU LOSE!');
    });

    it('throws an error if given invalid input', () => {
        expect(() => {
            getResult('123', '123');
        }).toThrow('Invalid emojis.');
    }); 
});
