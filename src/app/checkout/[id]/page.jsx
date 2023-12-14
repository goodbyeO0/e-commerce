"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Checkout({ params }) {
  console.log(params.id);

  // make an array that has array of id(s) with same id from the params
  const mergedArray = params.id
    .split("a")
    .reduce((acc, value) => {
      const lastSubArray = acc[acc.length - 1];
      if (lastSubArray && lastSubArray[0] === value) {
        lastSubArray.push(value);
      } else {
        acc.push([value]);
      }
      return acc;
    }, [])
    .reduce((acc, arr) => {
      const existing = acc.find((subArr) => subArr[0] === arr[0]);
      existing ? existing.push(...arr.slice(1)) : acc.push(arr);
      return acc;
    }, []);
  const intMergedArray = mergedArray.map((arr) =>
    arr.map((str) => parseInt(str))
  );
  console.log(mergedArray);
  console.log(intMergedArray);

  const [product, setProduct] = useState(null);
  const [isPending, setIsPending] = useState(true);

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
  const totalAllItems = intMergedArray.flat().length;

  return (
    <>
      {isPending && (
        <div className="text-3xl font-bold text-orange-500 text-center">
          Loading ...
        </div>
      )}
      <div className="w-4/6 m-auto bg-white">
        <div className="text-center p-10">
          <Link
            href={"/"}
            className="p-3 text-4xl font-semibold text-[#EE4D2D] text-center"
          >
            LADAZA <span className="font-normal">| Shopping Cart</span>
          </Link>
        </div>
        {product &&
          product.data.map((data, i) => {
            let jsxContent = null;
            intMergedArray.forEach((arr, j) => {
              if (data.mal_id === arr[0]) {
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
                        <p className="font-semibold text-3xl p-2">
                          {data.title}
                        </p>
                        <p className=" text-xl p-2">
                          quantity : <span>{arr.length}</span>
                        </p>
                        <p className=" text-xl p-2">
                          Price :{" "}
                          <span className="text-[#EE4D2D]">RM 10.99</span>
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
        <div className="mb-5 flex justify-between items-center">
          <div>
            <p>
              Total Items : <span>{totalAllItems}</span>
            </p>
            <p>
              Total Price :{" "}
              <span className="text-[#EE4D2D]">
                {(totalAllItems * 10.99).toFixed(2)}
              </span>
            </p>
          </div>
          <Link
            href={"/payment"}
            className="pl-9 pr-9 pb-3 pt-3 mt-2 ml-32 bg-[#EE4D2D] text-white hover:bg-[#ee4d2de6] mb-5 mr-3"
          >
            PAYMENT
          </Link>
        </div>
      </div>
    </>
  );
}
