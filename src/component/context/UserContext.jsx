import { createContext, useState } from "react";

export const userContext = createContext();

const UserContainer = ({ children }) => {
  let [userName, setUserName] = useState("COCSIT");

  function changeName() {
    setUserName("College of Computer Science and Information Technology");
  }

  return (
    <userContext.Provider value={{ userName, changeName }}>
      {children}
    </userContext.Provider>
  );
};
export default UserContainer;
