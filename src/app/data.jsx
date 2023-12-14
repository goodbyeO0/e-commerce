/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

export default async function Data() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const json = await response.json();

  return (
    <div className="w-11/12 m-auto ">
      <ul className="grid grid-cols-4">
        {json.data.map((data, i) => {
          return (
            <div
              key={i}
              className="border border-slate-800 w-[310px] h-[550px] relative m-auto mt-5 bg-white rounded-lg shadow-md shadow-slate-400"
            >
              <div className="p-2 ">
                <Link href={`/product/${data.mal_id}`}>
                  <li className="p-2">
                    <Image
                      src={data.images.webp.image_url}
                      width={900}
                      height={900}
                      alt="Picture of the product"
                    />
                    <p className="mt-3 uppercase font-semibold">{data.title}</p>
                  </li>
                </Link>
              </div>

              <div className="p-2 absolute bottom-0">
                <p>free shipping</p>
                <p className="text-[#EE4D2D] font-semibold">RM 10.99</p>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
