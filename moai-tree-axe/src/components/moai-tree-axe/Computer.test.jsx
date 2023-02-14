import { render, fireEvent, waitForElement, prettyDOM } from '@testing-library/react';
import Computer from './Computer';

describe('Computer component', () => {

    // it('can activate cheating mode on-click of avatar', () => {

    //     const { getByText } = render(<Computer
    //         computerChoice={{choice: undefined}}
    //         cheating={false}
    //         playerChoice={{choice: undefined}}
    //     />);

    //     const avatarElement = getByText('💻');

    //     fireEvent.click(avatarElement);

    //     console.log(prettyDOM(avatarElement));

    //     // waitForElement(() => getByText('🤖')).then((updatedAvatarElement) => {
    //     //     expect(updatedAvatarElement).toBeInDocument();
    //     // });

    //     // const mockFunction = jest.fn();
    //     // expect(mockFunction).toBeCalled();
    //     // expect(mockFunction).toBeCalledTimes(3);
    //     // expect(mockFunction).toBeCalledWith('test string', 2);
    // });

});