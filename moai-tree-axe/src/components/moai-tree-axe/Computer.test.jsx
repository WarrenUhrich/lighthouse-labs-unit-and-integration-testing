import { render, fireEvent, findByText } from '@testing-library/react';
import Computer from './Computer';

describe('Computer component', () => {

    // If we click 💻, it turns into 🤖
    it('can activate cheating mode on-click of the avatar/emoji', () => {

        let cheating = false;
        const mockFunction = jest.fn(() => cheating = !cheating);
        
        const { getByText } = render(<Computer
            computerChoice={{choice: undefined}}
            cheating={cheating}
            setCheating={mockFunction}
        />);

        const defaultEmoji = '💻';
        // Is the default emoji there at the start?
        const computerAvatarElement = getByText(defaultEmoji);
        expect(computerAvatarElement).toBeInTheDocument();

        // 2) is to click on that element and see if it changes to a robot.
        fireEvent.click(computerAvatarElement);

        const cheatingEmoji = '🤖';
        // Check if the face did change after click?
        findByText(cheatingEmoji).then((foundElement) => {
            expect(foundElement).toBeInTheDocument();
        });
    });

});
