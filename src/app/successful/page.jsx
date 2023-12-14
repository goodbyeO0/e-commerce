"use client";
import Timer from "../components/timer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Successful() {
  const { setCartt, setToShip, cartt } = useContext(UserContext);
  useEffect(() => {
    setToShip(cartt);
    setCartt([{}]);
  }, []);
  const router = useRouter();

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
