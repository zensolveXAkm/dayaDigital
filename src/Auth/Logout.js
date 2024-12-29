import React from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../AppwriteConfig";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
