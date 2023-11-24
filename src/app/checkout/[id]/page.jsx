import Image from "next/image";
import Link from "next/link";

async function page({ params }) {
  console.log(params.id);
  const arrayId = params.id.split("a").map((item) => +item);

  console.log(arrayId);

  const groupedArray = arrayId.reduce((acc, currentValue) => {
    const foundGroup = acc.find((group) => group.includes(currentValue));
    if (foundGroup) {
      foundGroup.push(currentValue);
    } else {
      acc.push([currentValue]);
    }
    return acc;
  }, []);
  console.log(groupedArray);

  const lengthsArray = groupedArray.map((group) => group.length);
  console.log(lengthsArray);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const json = await response.json();

  const imageUrl = [];
  for (const group of groupedArray) {
    for (const dataItem of json.data) {
      if (dataItem.mal_id === group[0]) {
        imageUrl.push(dataItem.images.webp.image_url);
        break;
      }
    }
  }
  console.log(imageUrl);

  return (
    <>
      <h1 className="text-6xl p-3">CHECKOUT</h1>

      {imageUrl.map((url, i) => {
        return (
          <div
            key={i}
            className="p-12 grid grid-cols-2 items-center h-4/6 w-4/6 m-auto"
          >
            <Image
              src={url}
              width={300}
              height={300}
              alt="Picture of the product"
              className="self-center"
            />
            <div className="flex flex-col justify-center">
              <p className="text-center text-4xl">X{lengthsArray[i]}</p>
            </div>
          </div>
        );
      })}
      <hr className="font-extrabold border border-black" />
      <div className="flex">
        <p className="p-3 text-xl">price: RM{arrayId.length * 10.9}</p>
        <Link
          href="/payment"
          className="p-2 border mt-2 ml-32 border-slate-950 bg-orange-400 font-bold rounded-lg hover:bg-orange-300 text-white hover:text-slate-400 h-10 w-24"
        >
          payment
        </Link>
      </div>
    </>
  );
}

export default page;
