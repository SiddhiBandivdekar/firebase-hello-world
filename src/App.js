import React, { useEffect, useState } from "react";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import { auth } from "./firebase";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <div>{user ? <Dashboard user={user} /> : <Login />}</div>
    </div>
  );
};

export default App;
