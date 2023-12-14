"use client";

import React, { useEffect } from "react";
import Timer from "../components/timer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Payment() {
  const router = useRouter();
  let timeOutId;

  useEffect(() => {
    timeOutId = setTimeout(() => {
      router.push("/unsuccessful");
    }, 7000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [router]);

  const handleClick = () => {
    clearTimeout(timeOutId);
    router.push("/successful");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-4/6">
          <h1 className="text-6xl font-extrabold text-center">PAYMENT</h1>
          <div className="flex justify-center items-center">
            <p className="text-center mr-2">
              Please complete the transaction within:
            </p>
            <Timer time={7} />
          </div>
          <div className="flex justify-center">
            <Image
              src="/qrIzz.jpg"
              width={350}
              height={900}
              alt="Picture of the product"
            />
          </div>
          <div className="flex justify-center mt-3">
            <Link
              onClick={handleClick}
              href="/successful"
              className="font-semibold rounded-lg border p-2 border-slate-950 bg-orange-500 text-slate-300 hover:bg-orange-300 hover:text-white"
            >
              Click this button if you have already approved this transaction
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
