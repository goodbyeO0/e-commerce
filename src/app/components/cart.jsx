"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cart/cartSlice";
import { addToCheckout } from "../redux/checkout/checkoutSlice";

export default function Cart({ id }) {
  const [cart, setCart] = useState(0);
  const dispatch = useDispatch();

  const handleCart = () => {
    setCart(cart + 1);
    dispatch(addCart(cart));
    dispatch(addToCheckout({ id: id }));
  };
  console.log(id);

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
