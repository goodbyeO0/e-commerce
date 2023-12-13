"use client";
import { useEffect, useState } from "react";

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
  console.log(mergedArray);

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

  console.log(product);
  for (let i = 0; i < product.data.length; i++) {
    for (let j = 0; j < mergedArray.length; j++) {
      if (product.data[i] === mergedArray[0][j]) {
        console.log(product.data[i]);
      }
    }
  }
  return (
    <>
      <h1 className="text-6xl font-semibold">Checkout</h1>
      <div>Delivery</div>
      {product && product.data.map((dataa, i) => console.log(dataa.title))}
      {product && product.data.map((dataa, i) => console.log(dataa.mal_id))}
      {product &&
        product.data.map((dataa, i) => {
          mergedArray[0][0] === dataa.mal_id ? (
            <p>{dataa.title}</p>
          ) : (
            <p>Something wrong</p>
          );
        })}
    </>
  );
}
