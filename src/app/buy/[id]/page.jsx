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
      <div>CHECKOUT</div>
      {isPending && (
        <div className="text-6xl font-bold text-orange-600">LOADING</div>
      )}
      <div className="flex items-center justify-center w-9/12 m-auto">
        {product && (
          <Image
            src={product.images?.webp?.image_url}
            width={300}
            height={300}
            alt="Picture of the product"
          />
        )}
        {product && (
          <div className="ml-11">
            <div>
              <p>{product.title}</p>
              <p>
                Price : <span>RM 10.99</span>
              </p>
            </div>
            <div className="mt-14 bg-orange-300 text-white font-semibold text-center rounded-lg hover:text-orange-200 active:bg-orange-600">
              <Link href={`/payment`}>PAYMENT</Link>
            </div>
          </div>
        )}
        <div></div>
      </div>
    </>
  );
}
