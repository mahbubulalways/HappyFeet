"use server";
const get_single_product_by_id = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/product/get-single-product/${id}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default get_single_product_by_id;
