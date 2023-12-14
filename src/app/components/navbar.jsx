"use client";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import Link from "next/link";

export default function Navbar() {
  const { carttArr, toShipArr, toShip } = useContext(UserContext);
  console.log(carttArr);
  const cartArray = carttArr.map((data) => {
    return data.id;
  });

  const cartArrayStr = cartArray.join("a");
  console.log(cartArray);
  console.log(cartArrayStr);
  return (
    <>
      <div className="flex justify-between p-3 border border-slate-700">
        <div>LADAZA</div>
        <div className="flex items-center space-x-4">
          <Link href={`/checkout/${cartArrayStr}`}>
            cart <span className="text-green-700">{carttArr.length}</span>
          </Link>
          <Link href={`/toShip`}>
            ToShip <span>{toShipArr.length}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
