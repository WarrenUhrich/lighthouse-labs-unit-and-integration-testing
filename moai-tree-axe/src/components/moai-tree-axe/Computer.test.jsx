import { render, fireEvent, waitFor } from '@testing-library/react';
import Computer from './Computer';

describe('Computer component', () => {

    it('can activate cheating mode on-click of the Avatar/Emoji', () => {

        let cheating = false;

        const mockFunction = jest.fn(() => cheating = !cheating);

        const {getByText} = render(<Computer
            computerChoice={{choice: undefined}}
            cheating={cheating}
            setCheating={mockFunction}
        />);

        const defaultEmoji = '💻';
        // The default emoji is there at the start!
        const computerAvatar = getByText(defaultEmoji);
        expect(computerAvatar).toBeInTheDocument();

        // Click the computer, and have it change to the robot head...
        fireEvent.click(computerAvatar);

        const cheatingEmoji = '🤖';
        // Check if face has changed.
        // const updatedComputerAvatar = getByText(cheatingEmoji);
        waitFor(() => getByText(cheatingEmoji)).then((updatedComputerAvatar) => {
            expect(updatedComputerAvatar).toBeInTheDocument();
        });
        
        
    });

});