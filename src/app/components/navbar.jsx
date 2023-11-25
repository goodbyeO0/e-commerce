"use client";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Navbar() {
  const checkoutIdArray = useSelector((state) => state.checkout.checkoutItems);
  console.log(checkoutIdArray);
  const resultString = checkoutIdArray.map((item) => item.text.id).join("a");
  console.log(resultString);
  return (
    <>
      <div className="flex justify-between items-center p-3 bg-[#F54D2F] h-28 text-white">
        <Link href="/" className="text-4xl">
          LADAZA
        </Link>
        <div className="flex items-center">
          <Link href="/ship" className="mr-5 text-2xl">
            to ship
          </Link>
          <Link href={`/checkout/${resultString}`} className="text-2xl">
            cart
            <span className="text-teal-400 text-2xl">
              {checkoutIdArray.length}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
