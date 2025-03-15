import React, { useState } from "react";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // Mock authentication
    if (email === "test@example.com" && password === "password123") {
      setUser({ email });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      {user ? <h2>Welcome, {user.email}!</h2> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
