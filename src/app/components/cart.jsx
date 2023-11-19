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
        className="mr-5 border border-orange-500 bg-slate-400 rounded-md p-2"
      >
        add to cart
      </button>
    </>
  );
}
