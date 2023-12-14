"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Buy({ params }) {
  const [product, setProduct] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
        );
        const json = await res.json();
        const foundProduct = json.data.find((item) => item.mal_id == params.id);
        setProduct(foundProduct);
        setIsPending(false);
      } catch (err) {
        console.error("Error fetching data : ", err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="w-4/6 h-4/6 m-auto">
        <div className=" mt-5">
          <Link
            href={"/"}
            className="p-3 text-4xl font-semibold text-[#EE4D2D]"
          >
            LADAZA <span className="font-normal">| Shopping Cart</span>
          </Link>
        </div>
        <div className="grid grid-cols-4 items-center">
          <Image
            src={product.images.webp.image_url}
            width={300}
            height={900}
            alt="Picture of the product"
            className="m-8 col-span-1"
          />
          <div className="col-span-3 flex flex-col justify-center items-center text-2xl">
            <p className="font-semibold">{product.title}</p>
            <p className="">
              Price:{"      "}
              <span className="text-3xl text-[#EE4D2D] font-bold">
                RM 10.90
              </span>
            </p>
            <Link
              href="/payment"
              className="pl-9 mt-16 pr-9 pb-3 pt-3 border bg-[#EE4D2D] text-white hover:bg-[#ee4d2de6] rounded-md"
            >
              payment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
