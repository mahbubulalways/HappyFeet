"use server";

import { TCheckout } from "@/Types";
const checkout_now = async (payload: TCheckout) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/order/create-order`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default checkout_now;
