import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const User = () => {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div className="card">
      <h2>User Context</h2>

      {user ? (
        <>
          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>No user is logged in.</p>

          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

export default User;
