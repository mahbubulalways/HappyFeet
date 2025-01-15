import get_payment_info from "@/services/actions/order_data_fetching/get_payment_info";
import moment from "moment";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCircleCheck } from "react-icons/fa6";

type TParams = {
  params: {
    transac_Id: string;
  };
};

const OrderSuccessPage = async ({ params }: TParams) => {
  const result = await get_payment_info(params?.transac_Id);
  if (!result?.success) {
    notFound();
  }
  return (
    <div className="max-w-[400px] mx-auto flex flex-col justify-center items-center h-screen">
      <div className="bg-white border shadow-md w-full">
        <div className=" px-5 py-8 ">
          <div>
            <FaCircleCheck className="h-14 w-14 mx-auto text-green-700" />
            <h1 className="poppins-bold text-center text-[24px] pt-2 text-[#1669A1]">
              Payment successful
            </h1>
            <p className="text-center poppins-light text-[14px] pb-3 text-gray-500">
              Thank you for your purchase. Your order is being processed. Please
              check your email address.
            </p>

            <p className="border-t"></p>
          </div>
          <div className="pt-4">
            <h1 className="poppins-medium text-xl">Order summery</h1>
            <div className="flex items-center justify-between poppins-light text-[15px] pt-2">
              <h1>Payment status:</h1>
              <h1>Paid</h1>
            </div>
            <div className="flex items-center justify-between poppins-light text-[15px] pt-2">
              <h1>Payment Date:</h1>
              <h1>{moment(result?.data?.date).format("ll")}</h1>
            </div>
            <div className="flex items-center justify-between poppins-light text-[15px] pt-2">
              <h1>Transaction ID:</h1>
              <h1>{result?.data?.transaction_Id}</h1>
            </div>
            <div className="flex items-center justify-between poppins-light text-[15px] pt-2">
              <h1>Amount:</h1>
              <h1>TK{result?.data?.amount}</h1>
            </div>
            <div className="flex items-center justify-between poppins-light text-[15px] pt-2">
              <h1>VAT:</h1>
              <h1>TK{result?.data?.vat}0.00</h1>
            </div>
            <div className="flex items-center justify-between poppins-medium text-[15px] pt-2">
              <h1>Total:</h1>
              <h1>TK{result?.data?.amount}</h1>
            </div>
          </div>
        </div>
        <Link href={"/"}>
          <button className="bg-[#1669A1] text-white poppins-medium py-2 w-full">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
