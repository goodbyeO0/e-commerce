/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Cart from "@/app/components/cart";
import Link from "next/link";

export default async function Product({ params }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const json = await response.json();
  const product = json.data.find((item) => item.mal_id == params.id);

  return (
    <>
      <Navbar />

      <div className="grid grid-cols-3">
        <div>
          <img
            src={product.images.webp.image_url}
            alt="Picture of the product"
            className="w-[500px] h-[600px] object-cover p-3"
          />
        </div>
        <div className="col-span-2 p-2 relative">
          <p className="text-2xl">{product.title}</p>
          <p className="mt-8 text-4xl font-semibold text-[#EE4D2D]">RM 10.99</p>
          <p className="mt-32">{product.synopsis}</p>
          <div className="absolute bottom-0 p-2">
            <Cart id={product.mal_id} />
            <Link
              href={`/buy/${params.id}`}
              className=" bg-[#EE4D2D] rounded-md pr-7 pl-7 pt-3 pb-3 text-white"
            >
              buy now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
