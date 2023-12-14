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
      className="mr-5 rounded-md pr-7 pl-7 pt-2 pb-2 bg-[#FFEEE8] border border-[#EE4D2D] text-[#EE4D2D]"
    >
      add to cart
    </button>
  );
}
