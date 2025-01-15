import ShowingProduct from "@/components/Common/ShowingProduct";
import DataLoader from "@/components/Loader/DataLoader";
import get_just_landed_products from "@/services/actions/products_data_fetching/get_just_landed_products";

const BestSellerProducts = async () => {
  const products = await get_just_landed_products();
  if (!products) {
    return <DataLoader />;
  }
  return (
    <div className="pt-16 xl:pt-20 container">
      <h1 className="poppins-bold text-2xl xl:text-3xl uppercase">
        Best Seller
      </h1>
      <div className="pt-5 xl:pt-10 ">
        <ShowingProduct products={products?.data} />
      </div>
    </div>
  );
};

export default BestSellerProducts;
