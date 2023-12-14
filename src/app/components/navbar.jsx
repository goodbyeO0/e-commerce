"use client";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";

export default function Navbar() {
  const { carttArr, toShipArr } = useContext(UserContext);
  console.log(carttArr);
  const cartArray = carttArr.map((data) => {
    return data.id;
  });

  const cartArrayStr = cartArray.join("a");
  console.log(cartArray);
  console.log(cartArrayStr);
  return (
    <>
      <div className=" w-full bg-gradient-to-b from-[#FA5130] to-[350%]">
        <div className="flex justify-between h-[100px] items-center w-10/12 m-auto">
          <Link
            href={"/"}
            className="flex items-center text-white font-semibold text-2xl"
          >
            <CiShop className="w-[60px] h-[60px]" />
            LADAZA
          </Link>
          <div className="flex items-center">
            <Link
              href={`/checkout/${cartArrayStr}`}
              className=" flex items-center "
            >
              <FaShoppingCart className="w-[40px] h-[40px] text-white" />
              <span className=" bottom-[10px] right-[7px] relative font-semibold bg-orange-200 rounded-lg px-2 text-[#FA5130]">
                {carttArr.length}
              </span>
            </Link>
            <Link href={`/toShip`} className="flex items-center ml-3">
              <MdOutlineLocalShipping className="w-[50px] h-[50px] text-white" />
              <span className=" bottom-[10px] right-[7px] relative font-semibold bg-orange-200 rounded-lg px-2 text-[#FA5130]">
                {toShipArr.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
