"use client";
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [cartt, setCartt] = useState([{}]);
  const [toShip, setToShip] = useState([{}]);
  const carttArr = cartt.slice(1);
  const toShipArr = toShip.slice(1);
  return (
    <UserContext.Provider
      value={{ cartt, setCartt, carttArr, toShip, setToShip, toShipArr }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
