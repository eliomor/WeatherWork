import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import CustomButton from '../components/CustomButton';

describe('CustomButton', () => {
  test('renders button with the provided title', () => {
    const title = 'Click Me';
    const {getByText} = render(<CustomButton title={title} />);
    const button = getByText(title);
    expect(button).toBeTruthy();
  });

  test('calls onPress when the button is pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <CustomButton title="Click Me" onPress={onPressMock} />,
    );
    const button = getByText('Click Me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
