"use client";
import { IoIosCart } from "react-icons/io";
import { useCart } from "@/context/useCart";
import Link from "next/link";

const ShoppingCart = () => {
  const { cart } = useCart();
  return (
    <Link href={"/my-cart"}>
      <div className="relative">
        <button className="relative p-3 bg-gray-700 text-white rounded-full">
          <IoIosCart className="h-6 w-6" />
          {cart?.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cart?.length}
            </span>
          )}
        </button>
      </div>
    </Link>
  );
};

export default ShoppingCart;
