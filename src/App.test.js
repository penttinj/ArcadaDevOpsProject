import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

describe("Users button behavior", () => {

  test('renders get users button', () => {
    const {getByRole} = render(<App />);
    const usersButton = getByRole('button');
    expect(usersButton).toBeInTheDocument();
    expect(usersButton.innerHTML).toBe("Get Users");
  });

  test("click button and change buttontext to hide users", () => {
    const {getByRole} = render(<App />);
    const usersButton = getByRole('button');
    usersButton.click();
    expect(usersButton.innerHTML).toBe("Hide Users");
  })
});

test('renders users header', () => {
  const {getByRole} = render(<App />);
  const usersHeader = getByRole('h1');
  expect(usersHeader).toBeInTheDocument();
  expect(usersHeader.innerHTML).toBe("Users");
});


// todo: click button, then find a list of users