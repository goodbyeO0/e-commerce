/* eslint-disable @next/next/no-img-element */
import Navbar from "@/app/components/navbar";
import Cart from "@/app/components/cart";
import UserContextProvider from "@/app/context/UserContextProvider";

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
          <p>{product.title}</p>
          <p className="mt-32">{product.synopsis}</p>
          <div className="absolute bottom-0 p-2">
            <Cart id={product.mal_id} />
            <button className="border border-orange-500 bg-slate-400 rounded-md p-2">
              buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
