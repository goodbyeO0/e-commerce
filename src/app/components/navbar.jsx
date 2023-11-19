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
      <div className="flex justify-between p-3 border border-slate-700">
        <div>LADAZA</div>
        <div>
          <Link href={`/checkout/${resultString}`}>
            cart{" "}
            <span className="text-green-700">{checkoutIdArray.length}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
