import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { auth } from "../firebase";

const Dashboard = ({ user }) => {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {user && (
        <div className="dashboard">
          <h1>Hello World!</h1>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
