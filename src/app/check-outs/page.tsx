"use client";
import MInput from "@/components/Reused/Input/MInput";
import { useCart } from "@/context/useCart";
import { TCart, TCheckout } from "@/Types";
import { manageBangladesh } from "@/utils/banhladeshdivisions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import logo from "@/assets/logo/logo.svg";
import { useRouter } from "next/navigation";
import CheckoutRightPart from "@/components/CheckOut/CheckoutRightPart";
import checkout_now from "@/services/actions/products_data_fetching/checkout_now";

const CheckOutPage = () => {
  const router = useRouter();
  const [selectedDivision, setSelectedDivision] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");

  //   shopping Cart
  const { cart } = useCart();
  const subTotalPrice = cart?.reduce((accumulator, item) => {
    return accumulator + item?.price * item?.quantity;
  }, 0);
  // Array of payment methods
  const paymentMethods = [
    { id: "cashOnDelivery", label: "Cash on Delivery" },
    { id: "onlinePayment", label: "Online Payment" },
  ];

  const { register, handleSubmit } = useForm<TCheckout>();

  const bangladeshDivisionDistrict = manageBangladesh;

  const divisions =
    bangladeshDivisionDistrict?.map((d) => d.divisionName) ?? [];

  const findDistricts = bangladeshDivisionDistrict?.find(
    (division) => division.divisionName === selectedDivision
  );

  const findUpazilas = findDistricts?.districts?.find(
    (district) => district?.district.name === selectedDistrict
  );

  const handleChange = (e: FieldValues) => {
    setPaymentMethod(e.target.value);
  };

  const onSubmit: SubmitHandler<TCheckout> = async (data) => {
    data.order = cart;
    data.paymentType = paymentMethod;
    data.totalPrice = subTotalPrice + 100;
    try {
      const result = await checkout_now(data);
      router.replace(result?.data?.url);
    } catch (error) {
      console.log(error);
    }
  };

  if (!cart?.length) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="poppins-light">Your shopping is empty</h1>
        <Link href={"/"}>
          <button className="mt-3 bg-red-500 text-white poppins-medium px-8 py-2">
            Continue to shopping
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col items-center container pt-10">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            className="bg-black w-[200px] px-2 py-1"
          />
        </Link>
        <h1 className="text-4xl poppins-bold text-[#105989] mx-auto pt-3">
          Checkout Now
        </h1>
      </div>
      <div className="container flex flex-col-reverse md:flex-row justify-between items-center pt-10 pb-20 gap-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full xl:w-[50%]"
        >
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div>
              <select
                {...register("personInfo.division", { required: true })}
                className="border-[1.5px] border-gray-400/50 focus:outline-none bg-white px-2 w-full py-3 placeholder:text-gray-500 font placeholder:text-[14px] poppins-light"
                onChange={(e) => {
                  setSelectedDivision(e.target.value);
                }}
              >
                <option value="">Select Division</option>
                {divisions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                {...register("personInfo.district", { required: true })}
                className="border-[1.5px] border-gray-400/50 focus:outline-none bg-white px-2 w-full py-3 placeholder:text-gray-500 font placeholder:text-[14px] poppins-light"
                onChange={(e) => {
                  setSelectedDistrict(e.target.value);
                }}
              >
                <option value="">Select District</option>
                {findDistricts?.districts?.map((option, index) => (
                  <option key={index} value={option.district.name}>
                    {option.district.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                {...register("personInfo.upazila", { required: true })}
                className="border-[1.5px] border-gray-400/50 focus:outline-none bg-white px-2 w-full py-3 placeholder:text-gray-500 font placeholder:text-[14px] poppins-light"
              >
                <option value="">Select Upazila</option>
                {findUpazilas?.district?.upazilas?.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <MInput
            label="Full Name"
            register={register("personInfo.fullName", { required: true })}
            type="text"
          />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <MInput
              label="Email"
              register={register("personInfo.email", { required: true })}
              type="email"
            />
            <MInput
              label="Mobile"
              register={register("personInfo.mobileNumber", { required: true })}
              type="number"
            />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <MInput
              label="Address"
              register={register("personInfo.address", { required: true })}
              type="text"
            />
            <MInput
              label="Postal code/optional"
              register={register("personInfo.postalCode", { required: true })}
              type="number"
            />
          </div>
          <div className="flex flex-col gap-2 pt-3">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center space-x-3">
                <input
                  type="radio"
                  id={method.id}
                  name="paymentMethod"
                  value={method.id}
                  checked={paymentMethod === method.id}
                  onChange={handleChange}
                  className="h-5 w-5"
                />
                <label
                  htmlFor={method.id}
                  className="poppins-light cursor-pointer"
                >
                  {method.label}
                </label>
              </div>
            ))}
          </div>
          {paymentMethod === "onlinePayment" ? (
            <button
              type="submit"
              className="mt-2 bg-[#1669a1] hover:bg-[#105989] w-full py-3 text-white poppins-medium"
            >
              Pay With SSLCommerz
            </button>
          ) : (
            <button
              type="submit"
              className="mt-2 bg-[#1669a1] hover:bg-[#105989] w-full py-3 text-white poppins-medium"
            >
              Confirm Order
            </button>
          )}
        </form>
        <div className="w-full xl:w-[50%]">
          <CheckoutRightPart />
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
