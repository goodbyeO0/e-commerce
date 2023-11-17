import Image from "next/image";

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
  json.data.forEach((dataItem) => {
    groupedArray.forEach((group) => {
      if (dataItem.mal_id === group[0]) {
        imageUrl.push(dataItem.images.webp.image_url);
      }
    });
  });
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
    </>
  );
}

export default page;
