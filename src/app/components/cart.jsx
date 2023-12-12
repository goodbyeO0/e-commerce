"use client";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Cart({ id }) {
  const { cartt, setCartt } = useContext(UserContext);

  const handleCart = () => {
    const updatedCartt = [...cartt, { id }];
    setCartt(updatedCartt);
  };

  return (
    <button
      onClick={handleCart}
      className="mr-5 border border-orange-500 bg-slate-400 rounded-md p-2"
    >
      add to cart
    </button>
  );
}
