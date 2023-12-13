"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
  const [isPending, setIsPending] = useState(false);
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
      <h1 className="text-6xl font-semibold">Checkout</h1>
      <div>Delivery</div>
      {product &&
        product.data.map((data, i) => {
          let jsxContent = null;
          intMergedArray.forEach((arr, j) => {
            if (data.mal_id === arr[0]) {
              jsxContent = (
                <div key={i} className="flex items-center m-5">
                  <Image
                    src={data.images.webp.image_url}
                    width={300}
                    height={300}
                    alt="Picture of the product"
                  />
                  <p className="m-auto font-bold text-4xl">: {arr.length}</p>
                </div>
              );
            }
          });
          return jsxContent;
        })}
      <hr className=" border-black mt-5 mb-5 border-4" />
      <div>
        <p>
          Total Items : <span>{totalAllItems}</span>
        </p>
        <p>
          Total Price : <span>{(totalAllItems * 10.99).toFixed(2)}</span>
        </p>
      </div>
    </>
  );
}
