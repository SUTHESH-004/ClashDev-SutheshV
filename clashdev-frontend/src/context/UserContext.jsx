import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [UserStatus, setUserStatus] = useState(false);
  const [UserName, setUserName] = useState("Unknown");

  return (
    <UserContext.Provider
      value={{ UserStatus, setUserStatus, UserName, setUserName }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
