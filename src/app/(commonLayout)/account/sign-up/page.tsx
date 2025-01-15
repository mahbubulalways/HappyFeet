"use client";
import MInput from "@/components/Reused/Input/MInput";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type TSignUp = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TSignUp>();
  const onSubmit: SubmitHandler<TSignUp> = (data) => console.log(data);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 flex flex-col h-[90vh] items-center justify-center">
      <div className=" shadow-xl border rounded-md w-full p-10">
        <h2 className="text-3xl uppercase text-center poppins-medium ">
          sign up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5 w-full pt-8">
            <MInput
              label="Name"
              type="text"
              register={register("name", { required: true })}
            />
            <MInput
              label="Email"
              type="email"
              register={register("email", { required: true })}
            />
            <MInput
              label="Password"
              type="password"
              register={register("password", { required: true })}
            />
            <MInput
              label="Confirm password"
              type="password"
              register={register("confirmPassword", { required: true })}
            />
          </div>
          <div className="pt-4">
            <Link href={"/account/sign-in"} className="poppins-lite flex gap-1">
              Already have an account?
              <span className="underline text-[#c3540f]"> Sign In</span>
            </Link>
          </div>
          <button className="bg-[#dd6610] text-white w-full py-2.5 mt-6 poppins-medium uppercase transition-all duration-300 hover:bg-[#c3540f]">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
