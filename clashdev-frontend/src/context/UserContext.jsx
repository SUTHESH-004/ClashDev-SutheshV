import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [UserStatus, setUserStatus] = useState(false);
  const [UserName, setUserName] = useState("Unknown");
  const [Email,setEmail] = useState("emailNotKnown");

  return (
    <UserContext.Provider
      value={{ UserStatus, setUserStatus, UserName, setUserName ,Email,setEmail}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
