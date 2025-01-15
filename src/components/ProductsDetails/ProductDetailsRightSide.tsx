"use client";
import { useState } from "react";
import { TProduct } from "@/Types";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi2";
import { useCart } from "@/context/useCart";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductDetailsRightSide = ({ product }: { product: TProduct }) => {
  const [activeSize, setActiveSize] = useState<string>(product?.size[0]);
  const [activeColor, setActiveColor] = useState<string>(
    product?.colors[0]?.colorName
  );
  const [count, setCount] = useState<number>(1);
  const increment = () => setCount((prev) => Math.min(prev + 1, 5));
  const decrement = () => setCount((prev) => Math.max(prev - 1, 1));
  const router = useRouter();
  const handleSizeClick = (size: string) => {
    setActiveSize(size);
  };
  const handleColorClick = (color: string) => {
    setActiveColor(color);
  };
  const { addToCart } = useCart();

  const handleAddToCart = (
    quantity: number,
    size: string,
    color: string,
    price: number,
    productId: string,
    name: string,
    image: string
  ) => {
    const data = { quantity, productId, size, color, price, name, image };
    addToCart(data);
    toast.success("Product has been added to your cart successfully!", {
      position: "top-center",
    });
    router.replace("/my-cart");
  };

  return (
    <div>
      {/* Size Selection */}
      <div className=" items-center w-max gap-x-2">
        <p className="poppins-medium">Size: {activeSize}</p>
        <div className="flex items-center gap-5 pt-3">
          {product?.size?.map((si, idx) => (
            <p
              key={idx}
              onClick={() => handleSizeClick(si)}
              className={`cursor-pointer poppins-light px-3 py-1 border border-gray-300 rounded ${
                activeSize === si ? "bg-red-600 text-white" : "bg-white"
              } hover:bg-red-600 hover:text-white`}
            >
              {si}
            </p>
          ))}
        </div>
      </div>

      {/* COLOR */}
      <div className="items-center w-max gap-x-2 pt-5">
        <p className="poppins-medium">Color: {activeColor}</p>
        <div className="flex items-center gap-5 pt-3">
          {product?.colors?.map((color, idx) => (
            <p
              key={idx}
              onClick={() => handleColorClick(color.colorName)}
              style={{ backgroundColor: color.colorCode }} // Apply the color dynamically
              className={`cursor-pointer w-[12px] h-[4px] p-3 border-2 border-gray-300 rounded ${
                color?.colorName === activeColor
                  ? "border-4 border-[#E3E3E3]"
                  : ""
              }`}
            ></p>
          ))}
        </div>
      </div>

      {/* QUANTITY */}

      <div className="items-center w-max gap-x-2 pt-5">
        <p className="poppins-medium pb-3">Quantity:</p>
        <div className="flex border">
          <button
            onClick={decrement}
            className="bg-tertiaryLite hover:bg-tertiary  font-bold py-2 px-4 rounded-l"
          >
            <HiOutlineMinus />
          </button>
          <input
            type="text"
            value={count}
            readOnly
            className="w-12 text-center border-r border-l border-gray-300 outline-none"
          />
          <button
            onClick={increment}
            className="bg-tertiaryLite hover:bg-tertiary  font-bold py-2 px-4 rounded-r"
          >
            <HiOutlinePlus />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-5 pt-5">
        <button
          onClick={() =>
            handleAddToCart(
              count,
              activeSize,
              activeColor,
              product?.offerPrice,
              product?._id,
              product?.name,
              product?.images[0]
            )
          }
          className="bg-red-600 text-white poppins-medium w-full py-2 rounded hover:bg-red-700"
        >
          ADD TO CART
        </button>
        <Link href={"/check-outs"} className="w-full">
          <button className="bg-gray-600 text-white poppins-medium w-full py-2 rounded hover:bg-gray-700">
            BUY IT NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailsRightSide;
