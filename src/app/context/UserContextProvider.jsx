"use client";
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [cartt, setCartt] = useState([{}]);
  const carttArr = cartt.slice(1);
  return (
    <UserContext.Provider value={{ cartt, setCartt, carttArr }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
