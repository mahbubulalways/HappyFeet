import { TProduct } from "@/Types";
import MaintainImage from "./MaintainImage";
import ProductDetailsRightSide from "./ProductDetailsRightSide";
import RelatedProducts from "./RelatedProducts";

const ProductsDetails = ({ product }: { product: TProduct }) => {
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-20 items-center">
        <MaintainImage images={product?.images} />
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl poppins-medium ">{product?.name}</h1>
          <div className="grid grid-cols-2 w-max gap-x-5 gap-y-2">
            <p className="poppins-medium">Brand: </p>
            <p className="text-gray-600 poppins-light">{product?.brand}</p>
            <p className="poppins-medium">Product Code: </p>
            <p className="text-gray-600 poppins-light">
              {product?.productCode}
            </p>
            <p className="poppins-medium">Availability: </p>
            <p className="poppins-medium">{product?.availability}</p>
          </div>
          <div className="flex items-center gap-3  md:gap-8 pt-1.5">
            <p className="poppins-bold text-gray-500 text-3xl xl:text-4xl">
              <del>Tk{product?.price}</del>
            </p>
            <p className="text-red-600 poppins-bold text-3xl xl:text-4xl">
              TK{product?.offerPrice}
            </p>
            <p className="bg-red-600 text-white poppins-medium text-[14px] xl:text-[16px] px-2 xl:px-3 py-1">
              -{product?.discount}%
            </p>
          </div>
          <ProductDetailsRightSide product={product} />
        </div>
      </div>
      <div className="pt-10 xl:pt-20">
        <h1 className="text-xl poppins-medium">DESCRIPTION</h1>
        <p className="poppins-light text-gray-600 pt-3">
          Grab the latest pair of these super cute & fun sneaker by
          BUBBLEGUMMERS for your kids. You can easily choose this from our kids
          selection that offers you comfortable & durable shoes which you would
          want to ensure for your child. It features padded velcro closure, also
          a lace-up style & a lightweight rubber material is used to make the
          outsole that extends the fun look of the product. This pair of
          sneakers allows a safe assessment of comfort while your kids walk
          around or run in the playground, go with you any functions or
          anywhere.
        </p>
        <h1 className="text-xl poppins-medium pt-10">FEATURES</h1>
        <div className="flex pt-3 flex-col gap-2 poppins-light text-gray-600">
          {product?.features.map((feature, idx) => (
            <p key={idx}>{feature}</p>
          ))}
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductsDetails;
