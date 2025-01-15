import get_just_landed_products from "@/services/actions/products_data_fetching/get_just_landed_products";
import ShowingProduct from "../Common/ShowingProduct";

const RelatedProducts = async () => {
  const products = await get_just_landed_products();
  return (
    <div className="pt-10 xl:pt-20">
      <h1 className="poppins-medium text-xl uppercase">Related Products</h1>
      <div className="pt-10 ">
        <ShowingProduct products={products?.data} />
      </div>
    </div>
  );
};

export default RelatedProducts;
