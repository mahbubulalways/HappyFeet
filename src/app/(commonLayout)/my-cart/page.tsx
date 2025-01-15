"use client";
import { useCart } from "@/context/useCart";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";

const MyCartPage = () => {
  const {
    cart,
    removeFromLocalStorage,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useCart();

  if (!cart?.length) {
    return (
      <p className="poppins-medium h-[60vh] flex flex-col justify-center items-center">
        Your cart is empty
      </p>
    );
  }

  const subTotalPrice = cart?.reduce((accumulator, item) => {
    return accumulator + item?.price * item?.quantity;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mb-10 text-center poppins-bold text-[#1669A1]">
        My Cart
      </h1>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Color
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Total price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => (
              <tr key={item.productId} className="border-t border-gray-200">
                {/* Product Image */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <Image
                    src={item.image}
                    alt={"image"}
                    className="w-32  rounded-md"
                    height={500}
                    width={500}
                  />
                </td>

                {/* Product Name */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm font-medium text-gray-900 poppins-light">
                    {item.name.substring(0, 25)}...
                  </p>
                </td>

                {/* Size */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm text-gray-500 poppins-light">
                    {item.size}
                  </p>
                </td>

                {/* Color */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm text-gray-500 poppins-light">
                    {item.color}
                  </p>
                </td>

                {/* Price */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm text-gray-500 poppins-light">
                    TK {item.price.toFixed(2)}
                  </p>
                </td>

                {/* Quantity */}
                <td className=" whitespace-nowrap">
                  <div className="flex border w-max">
                    <button
                      onClick={() => decreaseCartQuantity(item?.productId)}
                      className="bg-tertiaryLite hover:bg-tertiary  font-bold py-2 px-4 rounded-l"
                    >
                      <HiOutlineMinus className="text-gray-500" />
                    </button>
                    <input
                      type="text"
                      readOnly
                      value={item?.quantity}
                      className="w-12 text-center border-r border-l border-gray-300 outline-none text-sm text-gray-500 poppins-light"
                    />
                    <button
                      onClick={() => increaseCartQuantity(item?.productId)}
                      className="bg-tertiaryLite hover:bg-tertiary  font-bold py-2 px-4 rounded-r"
                    >
                      <HiOutlinePlus className="text-gray-500" />
                    </button>
                  </div>
                </td>

                {/* total price */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm text-gray-500 poppins-light">
                    TK {(item.price * item?.quantity).toFixed(2)}
                  </p>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => removeFromLocalStorage(item.productId)}
                    className="px-4 py-1 bg-red-500 text-white rounded poppins-light"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-20 flex justify-end">
        <div>
          <p className="poppins-medium text-xl">
            Sub total : TK {subTotalPrice.toFixed(2)}{" "}
          </p>
          <Link href={"/check-outs"}>
            <button className="bg-red-600 w-full mt-5 shake-button text-white poppins-medium py-3">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCartPage;
