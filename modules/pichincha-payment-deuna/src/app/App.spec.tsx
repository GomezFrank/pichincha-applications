import React from 'react';
import { render } from '@testing-library/react-native';

import PichinchaPaymentDeuna from './App';

test('renders correctly', () => {
  const { getByTestId } = render(<PichinchaPaymentDeuna />);
  expect(getByTestId('heading')).toHaveTextContent('Welcome');
});
