import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Game from '../Game';

describe('tests for the Game component', () => {

  test('can toggle the cheating state by clicking on the robot head icon', () => {
    const {getByTestId} = render(<Game />);

    const robotHeadIcon = getByTestId('robot-head-icon');

    fireEvent.click(robotHeadIcon);
    
    expect(robotHeadIcon).toHaveClass('cheating');
    
    fireEvent.click(robotHeadIcon);
    
    expect(robotHeadIcon).not.toHaveClass('cheating');
  });

});
