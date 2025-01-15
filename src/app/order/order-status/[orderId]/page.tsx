import React from "react";

type TParams = {
  params: {
    orderId: string;
  };
};

const OrderStatusPage = ({ params }: TParams) => {
  const steps = [
    { title: "Order Received", status: "completed" },
    { title: "Order Processed", status: "completed" },
    { title: "Package", status: "completed" },
    { title: "Out for Delivery", status: "in-progress" },
    { title: "Waiting for Call", status: "pending" },
    { title: "Delivered", status: "pending" },
  ];

  return (
    <div className="container flex flex-col justify-center items-center h-screen p-6">
      <h1 className="text-2xl poppins-bold pb-2 uppercase text-[#1669A1]">
        Order Status
      </h1>
      <p className="pb-3 text-gray-500">Order ID: {params.orderId}</p>
      <div className="flex flex-col ">
        {steps.map((step, index) => (
          <div key={index}>
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.status === "completed"
                    ? "bg-green-500"
                    : step.status === "in-progress"
                    ? "bg-yellow-500"
                    : "bg-gray-300"
                }`}
              >
                <span className="text-white poppins-medium text-2xl">
                  {index + 1}
                </span>
              </div>
              <div className="ml-4 flex flex-col">
                <h2 className="text-lg poppins-medium">{step.title}</h2>
                <p
                  className={`text-sm poppins-light ${
                    step.status === "completed"
                      ? "text-green-600"
                      : step.status === "in-progress"
                      ? "text-yellow-600"
                      : "text-gray-600"
                  }`}
                >
                  {step.status === "completed"
                    ? "Completed"
                    : step.status === "in-progress"
                    ? "In Progress"
                    : "Pending"}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="w-1 h-10 bg-[#1669A1]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatusPage;
