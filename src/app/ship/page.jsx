"use client";
import { useSelector } from "react-redux";

export default function Ship() {
  const cartId = useSelector((state) => state.checkout.cartItems);
  const cartIdArray = [...cartId[0].text];
  console.log(cartIdArray);
  return (
    <>
      <div>Ship</div>
    </>
  );
}
