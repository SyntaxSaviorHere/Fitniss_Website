import { createContext, useContext, useState } from "react";

const usersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([]);

  const addUser = (user) => {
    setUsersList((prevState) => [...prevState, user]);
  };

  return (
    <usersContext.Provider value={{ usersList, addUser }}>
      {children}
    </usersContext.Provider>
  );
};

export const useUsers = () => {
  return useContext(usersContext);
};
