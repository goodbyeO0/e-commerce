import Link from "next/link";

Link;

export default function Unsuccessful() {
  return (
    <>
      <h1 className="text-6xl font-bold text-red-700">Payment Failed</h1>
      <div>Your order has not placed</div>
      <Link href="/payment" className="text-blue-700">
        Retry Payment &gt;
      </Link>
    </>
  );
}
