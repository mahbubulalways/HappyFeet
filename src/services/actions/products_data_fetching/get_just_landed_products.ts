"use server";
const get_just_landed_products = async () => {
  try {
    const res = await fetch(
      `https://green-steps-server.vercel.app/api/v1/product/get-just-landed-products`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default get_just_landed_products;
