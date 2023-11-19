"use client";
import Timer from "../components/timer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptyCheckout, addToShip } from "../redux/checkout/checkoutSlice";
import { useSelector } from "react-redux";

export default function Successful() {
  const dispatch = useDispatch();
  const router = useRouter();
  const checkoutIdArray = useSelector((state) => state.checkout.checkoutItems);
  const idArray = checkoutIdArray.map((item) => item.text.id);

  useEffect(() => {
    if (idArray.length > 0) {
      dispatch(addToShip(idArray));
      dispatch(emptyCheckout());
    }
  }, [dispatch, idArray]);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <>
      <h1 className="text-6xl text-green-700">Yay</h1>
      <div className="text-green-400">Order Placed</div>
      <div>You will be redirected to the main page in</div>
      <div className="text-red-600">
        <Timer time={3} />
      </div>
    </>
  );
}
