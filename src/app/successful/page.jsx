"use client";

import Timer from "../components/timer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptyCheckout } from "../redux/checkout/checkoutSlice";

export default function Successful() {
  const dispatch = useDispatch();
  dispatch(emptyCheckout());
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <>
      <h1 className="text-6xl text-green-700">Yay</h1>
      <div className="text-green-400">Order Placed</div>
      <div>You will be redirect to main page in</div>
      <div className="text-red-600">
        <Timer time={3} />
      </div>
    </>
  );
}
