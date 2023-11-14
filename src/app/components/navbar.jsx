"use client";
import { useSelector } from "react-redux";
export default function Navbar() {
  const carts = useSelector((state) => state.cart.carts);
  console.log(carts.length);
  return (
    <>
      <div className="flex justify-between p-3 border border-slate-700">
        <div>LADAZA</div>
        <div>
          cart <span className="text-green-700">{carts.length}</span>
        </div>
      </div>
    </>
  );
}
