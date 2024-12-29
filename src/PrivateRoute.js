import React from "react";
import { Navigate } from "react-router-dom";
import { account } from "./AppwriteConfig";

export default function PrivateRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(null);

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        await account.get();
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show a loader while checking authentication
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}
