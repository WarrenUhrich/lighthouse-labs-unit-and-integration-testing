import { announceResult } from "./helpers";

describe('pickOppositeTest', () => {
    it('should return the opposite choice', () => {
        const result = announceResult('moai', 'axe');
        expect(result).toBe('Tied');
    });
});
