import React from "react";
import { render } from "@testing-library/react";
import UserList from "./UserList";

test('renders list of users', () => {
    const mockData = [
        {username: "pelle", id: 1},
        {username: "bob", id: 2},
        {username: "alice", id: 3},
    ]
    const { getByText } = render(<UserList data={mockData}/>);
    const pelle = getByText(/pelle/i);
    expect(pelle).toBeInTheDocument();
  });
  