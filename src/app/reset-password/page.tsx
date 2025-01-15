"use client";
import MInput from "@/components/Reused/Input/MInput";
import reset_password from "@/services/actions/reset_password";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuLoader } from "react-icons/lu";

type TSearchParams = {
  searchParams: {
    email: string;
    token: string;
  };
};

const ResetPasswordPage = ({ searchParams }: TSearchParams) => {
  type TResetPass = {
    newPassword: string;
    confirmPassword?: string;
    email: string;
    token: string;
  };
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");
  const { register, handleSubmit } = useForm<TResetPass>();
  const onSubmit: SubmitHandler<TResetPass> = async (data) => {
    setIsError("");
    setIsLoading(true);
    try {
      if (data.newPassword !== data.confirmPassword) {
        setIsError("Passwords do not match");
        setIsLoading(false);
        return;
      }
      data.email = searchParams?.email;
      data.token = searchParams?.token;
      delete data.confirmPassword;
      const result = await reset_password(data);
      if (!result?.success) {
        setIsError(result?.message);
        setIsLoading(false);
      } else {
        setIsSuccess(result?.message);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="w-full max-w-[500px]  mx-auto flex flex-col justify-center items-center h-[100vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg pb-10 px-10 border  flex-col gap-5 w-full"
      >
        <h1 className="poppins-medium text-2xl  text-green-800 pt-10 uppercase text-center">
          Greensteps
        </h1>
        {!isSuccess && (
          <h1 className="poppins-medium text-xl pt-2 pb-5 uppercase text-center">
            Reset password
          </h1>
        )}
        {isError && (
          <p className="pb-4  text-center text-red-700 text-[15px]">
            {isError}
          </p>
        )}
        {isSuccess ? (
          <p className="pt-10 text-center">{isSuccess}</p>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              <MInput
                label="Enter password"
                type="password"
                register={register("newPassword", { required: true })}
              />
              <MInput
                label="Confirm password"
                type="password"
                register={register("confirmPassword", { required: true })}
              />
            </div>

            <button
              type="submit"
              className="bg-[#dd6610] text-white w-full py-2.5 mt-6 poppins-medium uppercase"
            >
              {isLoading ? (
                <LuLoader className="h-6 w-6 mx-auto animate-spin" />
              ) : (
                " Reset Password"
              )}
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ResetPasswordPage;
