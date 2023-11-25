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
      <h1 className="p-3 text-4xl font-semibold text-[#EE4D2D]">
        LADAZA <span className="font-normal">| Shopping Cart</span>
      </h1>

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
              className="self-center shadow-xl shadow-black rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <p className="text-center text-4xl border border-slate-400 w-20 h-20 leading-[80px]">
                {lengthsArray[i]}
              </p>
            </div>
          </div>
        );
      })}
      <hr className="font-extrabold border border-black" />
      <div className="flex">
        <p className="p-3 text-2xl">
          Total price: RM{(arrayId.length * 10.9).toFixed(2)}
        </p>
        <Link
          href="/payment"
          className="pl-9 pr-9 pb-3 pt-3 mt-2 ml-32 bg-[#EE4D2D] text-white hover:bg-[#ee4d2de6]"
        >
          Payment
        </Link>
      </div>
    </>
  );
}

export default page;
