import React from "react";
import Timer from "../components/timer";
import Image from "next/image";

function page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-4/6">
          <h1 className="text-6xl font-extrabold text-center">PAYMENT</h1>
          <div className="flex justify-center items-center">
            <p className="text-center mr-2">
              Please complete the transaction within:
            </p>
            <Timer />
          </div>
          <div className="flex justify-center">
            <Image
              src="/qr.jpeg"
              width={350}
              height={900}
              alt="Picture of the product"
            />
          </div>
          <div className="flex justify-center mt-3">
            <button className="font-semibold rounded-lg border p-2 border-slate-950 bg-orange-500 text-slate-300 hover:bg-orange-300 hover:text-white">
              Click this button if you have already approved this transaction
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
