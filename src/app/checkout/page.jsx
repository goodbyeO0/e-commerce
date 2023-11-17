"use client";

export default function Checkout() {
  const dataApi = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
    );
    const json = await response.json();
  };

  // return (
  //   <>
  //     {/* <ul>
  //       {dataApi.data.map((currData, i) => {
  //           groupedById.map((currId, i) => {
  //               if(currData == currId[i].id) {
  //                   return (
  //                       <div key={i}></div>
  //                   )
  //               }
  //           })
  //       })}
  //     </ul> */}
  //   </>
  // );
}
