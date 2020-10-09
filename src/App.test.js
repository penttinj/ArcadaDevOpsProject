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
})


// todo: click button, expect text on button to change, then find a list of users