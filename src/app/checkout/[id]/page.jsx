export default async function Checkout({ params }) {
  console.log(params.id);
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
  return (
    <>
      <h1 className="text-6xl font-semibold">Checkout</h1>
      <div>Delivery</div>
    </>
  );
}
