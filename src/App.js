import React, {useState} from 'react';
import UserList from "./components/UserList";
import './App.css';





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

        </header>
        <div className="ButtonBanner">
          <button className="Button" onClick={handleClick} className="Button">
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
