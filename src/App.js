import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (_userName, _useAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {id: Math.random().toString(), name: _userName, age: _useAge}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
