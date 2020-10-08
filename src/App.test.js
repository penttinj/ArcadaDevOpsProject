import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders get users button', () => {
  const { getByText } = render(<App />);
  const usersButton = getByText(/Get Users/i);
  expect(usersButton).toBeInTheDocument();
});
