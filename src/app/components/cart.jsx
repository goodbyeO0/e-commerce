"use client";
import { useDispatch } from "react-redux";
import { addToCheckout } from "../redux/checkout/checkoutSlice";

export default function Cart({ id }) {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addToCheckout({ id: id }));
  };

  return (
    <>
      <button
        onClick={handleCart}
        className="mr-5 rounded-md pr-7 pl-7 pt-2 pb-2 bg-[#FFEEE8] border border-[#EE4D2D] text-[#EE4D2D]"
      >
        add to cart
      </button>
    </>
  );
}
