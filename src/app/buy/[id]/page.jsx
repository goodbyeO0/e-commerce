import Image from "next/image";
import Link from "next/link";

async function page({ params }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const json = await response.json();
  const product = json.data.find((item) => item.mal_id == params.id);
  return (
    <>
      <div className="w-4/6 h-4/6 m-auto">
        <h1 className="text-6xl font-extrabold p-5 text-center">CHECKOUT</h1>
        <div className="grid grid-cols-4 items-center">
          <Image
            src={product.images.webp.image_url}
            width={300}
            height={900}
            alt="Picture of the product"
            className="m-8 col-span-1"
          />
          <div className="col-span-3 flex flex-col justify-center items-center">
            <p>{product.title}</p>
            <p>price: RM 10.90</p>
            <Link
              href="/payment"
              className="p-2 border  border-slate-950 bg-orange-400 font-bold rounded-lg hover:bg-orange-300 text-white hover:text-slate-400 h-10 w-24"
            >
              payment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
