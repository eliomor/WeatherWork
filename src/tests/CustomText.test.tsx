import React from 'react';
import {render} from '@testing-library/react-native';

import CustomText from '../components/CustomText';

describe('CustomText', () => {
  test('renders text with the provided content', () => {
    const textContent = 'Hello, World!';
    const {getByText} = render(<CustomText>{textContent}</CustomText>);
    const textElement = getByText(textContent);
    expect(textElement).toBeTruthy();
  });

  test('applies custom font size when provided', () => {
    const customStyle = {fontSize: 20};
    const {getByText} = render(
      <CustomText style={customStyle}>Custom Styled Text</CustomText>,
    );
    const textElement = getByText('Custom Styled Text');

    expect(textElement.props.style).toContainEqual({fontSize: 20});
  });

  test('applies custom color when provided', () => {
    const customStyle = {color: 'blue'};
    const {getByText} = render(
      <CustomText style={customStyle}>Custom Styled Text</CustomText>,
    );
    const textElement = getByText('Custom Styled Text');

    expect(textElement.props.style).toContainEqual({color: 'blue'});
  });
});
