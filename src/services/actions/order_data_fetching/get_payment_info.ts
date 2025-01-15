"use server";
const get_payment_info = async (trans_id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/order/payment/get-payment-info/${trans_id}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default get_payment_info;
