import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const globalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser
      .then((res) => {
        setUser(res);
        setIsLoggedIn(true);
      })
  }, []);
  return (
    <GlobalContext.Provider value={{

    }}>
      {children}
    </GlobalContext.Provider>
  );
}
