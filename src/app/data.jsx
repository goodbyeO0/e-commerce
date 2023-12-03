/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import UserContextProvider from "./context/UserContextProvider";

export default async function Data() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const json = await response.json();

  return (
    <div>
      <ul className="grid grid-cols-5">
        {json.data.map((data, i) => {
          return (
            <div
              key={i}
              className="border border-slate-800 m-3 w-[300px] h-[650px] grid grid-rows-3 relative"
            >
              <div className="p-2">
                <Link href={`/product/${data.mal_id}`}>
                  <li className="p-2">
                    <Image
                      src={data.images.webp.image_url}
                      width={900}
                      height={900}
                      alt="Picture of the product"
                    />
                    <p className="mt-3">{data.title}</p>
                  </li>
                </Link>
              </div>

              <div className="p-2 absolute bottom-0">
                <p>free shipping</p>
                <p>RM 10.99</p>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
