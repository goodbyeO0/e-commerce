"use client";
import { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import Image from "next/image";
import Link from "next/link";

export default function ToShip() {
  const { toShip } = useContext(UserContext);
  const [isPending, setIsPending] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
      );
      const json = await res.json();
      setProduct(json);
      setIsPending(false);
    };

    fetchData();
  }, []);

  console.log(toShip);

  return (
    <>
      <div className="text-center p-10">
        <Link
          href={"/"}
          className="p-3 text-4xl font-semibold text-[#EE4D2D] text-center"
        >
          LADAZA <span className="font-normal">| Shipping Cart</span>
        </Link>
      </div>
      {product &&
        product.data.map((data, i) => {
          let jsxContent = null;
          toShip.forEach((arr, j) => {
            if (data.mal_id == arr.id) {
              jsxContent = (
                <div key={i}>
                  <div className="flex items-center w-3/4 m-auto">
                    <Image
                      src={data.images.webp.image_url}
                      width={300}
                      height={300}
                      alt="Picture of the product"
                      className="roudned-lg shadow-md shadow-black"
                    />
                    <div className="ml-5">
                      <p className="font-semibold text-3xl p-2">{data.title}</p>
                      <p className=" text-xl p-2">
                        quantity : <span>{j}</span>
                      </p>
                    </div>
                  </div>
                  <hr className="border-black border-1 m-5" />
                </div>
              );
            }
          });
          return jsxContent;
        })}
    </>
  );
}
