/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "@/app/components/navbar";
import Cart from "@/app/components/cart";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Product({ params }) {
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
      } catch (error) {
        console.error("Error fetching data : ", error);
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <>
      <Navbar />
      {isPending && (
        <div className="text-3xl font-bold text-orange-500">
          Be patient ma fren
        </div>
      )}

      {product && (
        <div className="grid grid-cols-3">
          <div>
            <img
              src={product.images.webp.image_url}
              alt="Picture of the product"
              className="w-[500px] h-[600px] object-cover p-3"
            />
          </div>
          <div className="col-span-2 p-2 relative">
            <p>{product.title}</p>
            <p className="mt-32">{product.synopsis}</p>
            <div className="absolute bottom-0 p-2">
              <Cart id={product.mal_id} />
              <Link
                href={`/buy/${params.id}`}
                className="border border-orange-500 bg-slate-400 rounded-md p-2"
              >
                buy now
              </Link>
            </div>
            <p className="text-3xl font-bold text-orange-500 mt-5">RM 10.99</p>
          </div>
        </div>
      )}
    </>
  );
}
