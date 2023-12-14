import React from 'react';
import {render} from '@testing-library/react-native';

import Separator from '../components/Separator';

describe('Separator', () => {
  test('renders the separator', () => {
    const {getByTestId} = render(<Separator />);
    const separator = getByTestId('separator');

    expect(separator).toBeTruthy();

    expect(separator.props.style).toContainEqual({width: 250, height: 1});
  });
});
