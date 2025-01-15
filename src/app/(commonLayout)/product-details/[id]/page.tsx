import ProductsDetails from "@/components/ProductsDetails/ProductsDetails";
import get_single_product_by_id from "@/services/actions/products_data_fetching/get_single_product_by_id";

type TParams = {
  params: {
    id: string;
  };
};

const ProductsDetailsPage = async ({ params }: TParams) => {
  const { id } = params;
  const product = await get_single_product_by_id(id);
  if (!product) {
    return <p>LOADING</p>;
  }
  return (
    <div className="container">
      <ProductsDetails product={product?.data} />
    </div>
  );
};

export default ProductsDetailsPage;
