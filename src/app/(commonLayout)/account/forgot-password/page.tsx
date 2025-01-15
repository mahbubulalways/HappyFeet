"use client";
import MInput from "@/components/Reused/Input/MInput";
import forgot_Password from "@/services/actions/forgot_password";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuLoader } from "react-icons/lu";

type TForgotPass = {
  email: string;
};
const ForgotPassword = () => {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");
  const { register, handleSubmit } = useForm<TForgotPass>();
  const onSubmit: SubmitHandler<TForgotPass> = async (data) => {
    try {
      setIsLoading(true);
      setIsError("");
      const result = await forgot_Password(data);
      console.log(result);
      if (!result?.success) {
        setIsError(result?.message);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsSuccess(result?.message);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full max-w-[600px]  mx-auto flex flex-col justify-center items-center h-[80vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-white shadow-md px-10 pb-16 border"
      >
        {!isSuccess && (
          <h1 className="poppins-medium text-2xl pt-10 pb-8 uppercase text-center">
            Forgot password ?
          </h1>
        )}
        {isError && (
          <p className="pb-4  text-center text-red-700 text-[15px]">
            {isError}
          </p>
        )}{" "}
        <div>
          {isSuccess ? (
            <p className=" pt-16  text-center text-black  text-[16px]">
              {isSuccess}
            </p>
          ) : (
            <>
              <div className="flex flex-col gap-5 w-full">
                <MInput
                  label="Enter email address"
                  type="email"
                  register={register("email", { required: true })}
                  defaultValue={"shahariarshahin1000@gmail.com"}
                />
              </div>

              <button
                type="submit"
                className="bg-[#dd6610] text-white w-full py-2.5 mt-6 poppins-medium uppercase"
              >
                {isLoading ? (
                  <LuLoader className="h-6 w-6 mx-auto animate-spin" />
                ) : (
                  " Find Account"
                )}
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
