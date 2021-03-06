import React, { useState } from 'react';
import UserList from "./components/UserList";
import './App.css';
import logo from "./logo.svg"





function App() {
  const [clicked, setClicked] = useState(null);
  const [users, setUsers] = useState("null");

  async function getUsers() {
    const response = await fetch("https://8pipgsuihc.execute-api.eu-central-1.amazonaws.com/users")
      .catch(e => console.log(`Couldn't fetch users: ${e}`));
    console.log("response", response);
    const json = await response.json();
    console.log("json:", json);
    setUsers(json);
  }

  function handleClick() {
    setClicked(!clicked);
    getUsers();
  }

  // Button for getting users, one for show/hide
  return (
    <div className="App">
      <div className="layout">
        <header className="App-header">
          <img className="arcada-logo" src={logo} alt="Arcada Logo"></img>
          <div className="left">Software development process - DevOps</div>
          <div className="right">Kristoffer Kuvaja-Adolfsson<br />Fredrik Ståhl<br />Johan Penttinen</div>
        </header>
        <div className="ButtonBanner">
          <h1 className="UsersHeading">Users</h1>
            <p>
            The button below will get IDs and Usernames from our overflowing S3 bucket.</p>
            <p>
            It will then paste them below for your convenience.
            </p>
            <button className="Button" onClick={handleClick}>
              {clicked ? "Hide Users" : "Get Users"}
            </button>
        </div>
        <div className="UserListBanner">
          {clicked ? <UserList data={users} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
