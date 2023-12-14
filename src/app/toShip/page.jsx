"use client";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function ToShip() {
  const { toShip } = useContext(UserContext);
  console.log(toShip);
  return (
    <>
      <div>ToShip</div>
    </>
  );
}
