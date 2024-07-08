import React, { useState } from "react";

export default function Proj() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = { username, password };
    setUserList([...userList, newUser]);

    setUsername(""); // Clear input fields after submission
    setPassword("");
  };

  const findUser = (submittedUsername, submittedPassword) => {
    return userList.find(
      (user) => user.username === submittedUsername && user.password === submittedPassword
    );
  };

  const loggedInUser = findUser(username, password); // Check for login after form submission

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {loggedInUser && ( // Display login status conditionally
        <p>
          You are logged in as: {loggedInUser.username}
        </p>
      )}
    </div>
  );
}
