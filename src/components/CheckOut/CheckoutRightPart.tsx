"use client";
import { useCart } from "@/context/useCart";
import Image from "next/image";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";

const CheckoutRightPart = () => {
  const {
    cart,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromLocalStorage,
  } = useCart();
  const subTotalPrice = cart?.reduce((accumulator, item) => {
    return accumulator + item?.price * item?.quantity;
  }, 0);

  return (
    <div className="bg-[#f4f4f4] p-2 md:p-3 xl:p-5 flex flex-col justify-between">
      <div className="h-[300px] overflow-y-auto flex flex-col gap-5">
        {cart?.map((cart) => (
          <div
            key={cart?.productId}
            className="flex items-center justify-between flex-wrap"
          >
            <div className="flex gap-1 sm:gap-3">
              <Image
                src={cart?.image}
                alt="product image"
                height={500}
                width={1000}
                className="w-[60px] sm:w-[80px] border rounded"
              />
              <div>
                <h1 className="poppins-medium text-sm sm:text-base">
                  {cart?.name.substring(0, 18)}...
                </h1>
                <div className="flex items-center gap-3 sm:gap-5">
                  <div>
                    <p className="text-[12px] sm:text-[14px] poppins-light">
                      Color: {cart?.color}
                    </p>
                    <p className="text-[12px] sm:text-[14px] poppins-light">
                      Size: {cart?.size}
                    </p>
                  </div>
                  <div className="flex border w-max">
                    <button
                      onClick={() => decreaseCartQuantity(cart?.productId)}
                      className="bg-tertiaryLite hover:bg-tertiary font-bold py-2 px-2 xl:px-4 rounded-l"
                    >
                      <HiOutlineMinus className="text-gray-500" />
                    </button>
                    <input
                      type="text"
                      readOnly
                      value={cart?.quantity}
                      className="w-8 sm:w-10 xl:w-12 text-center border-r border-l border-gray-300 outline-none text-sm text-gray-500 poppins-light"
                    />
                    <button
                      onClick={() => increaseCartQuantity(cart?.productId)}
                      className="bg-tertiaryLite hover:bg-tertiary font-bold py-2 px-2 xl:px-4 rounded-r"
                    >
                      <HiOutlinePlus className="text-gray-500" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromLocalStorage(cart?.productId)}
                    className="poppins-light text-[12px] sm:text-[14px] text-red-500 underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <p className="pr-2 text-sm sm:text-base">
              TK{(cart?.price * cart?.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="pr-2 pt-2">
        <div className="flex items-center justify-between text-sm sm:text-base">
          <p className="poppins-light">Subtotal</p>
          <p className="poppins-light">TK{subTotalPrice}</p>
        </div>
        <div className="flex items-center justify-between pb-2 text-sm sm:text-base">
          <p className="poppins-light">Delivery charge</p>
          <p className="poppins-light">TK100.00</p>
        </div>
        <p className="border-t-2 border-[#1669A1]"></p>
        <div className="flex items-center justify-between pt-2">
          <p className="text-[#1669A1] text-xl sm:text-2xl poppins-bold">
            Total
          </p>
          <p className="text-[#1669A1] text-xl sm:text-2xl poppins-bold">
            TK{subTotalPrice + 100}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutRightPart;
