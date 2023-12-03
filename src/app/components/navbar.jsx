"use client";
import UserContext from "../context/UserContext";
import { useContext } from "react";

export default function Navbar() {
  const { carttArr } = useContext(UserContext);
  carttArr.map((data) => {
    console.log(data.id);
  });
  return (
    <>
      <div className="flex justify-between p-3 border border-slate-700">
        <div>LADAZA</div>
        <div>
          cart <span className="text-green-700">{carttArr.length}</span>
        </div>
      </div>
    </>
  );
}
