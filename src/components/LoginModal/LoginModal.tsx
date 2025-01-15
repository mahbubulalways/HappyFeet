"use client";
import { useState } from "react";
import Modal from "../Reused/Modal/Modal";
import { FaUserCircle } from "react-icons/fa";
import MInput from "../Reused/Input/MInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { TSignIn } from "@/Types";
import login_user from "@/services/actions/login_user";
import { LuLoader } from "react-icons/lu";
import { toast } from "sonner";
import { isLogin, storeUserInfo } from "@/services/auth/auth.services";
import Link from "next/link";
const LoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setIsError("");
  };

  const { register, handleSubmit } = useForm<TSignIn>();
  const onSubmit: SubmitHandler<TSignIn> = async (data) => {
    try {
      setIsLoading(true);
      setIsError("");
      const result = await login_user(data);
      if (!result?.success) {
        setIsError(result?.message);
      }
      storeUserInfo(result?.data?.accessToken);
      toast.success(result?.message, { position: "top-center" });
      setIsLoading(false);
      closeModal();
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="text-white flex items-center gap-2"
      >
        <FaUserCircle className="h-5 w-5" /> Sign in
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Sign In">
        {isError && (
          <p className="pb-2  text-center text-red-700 text-[15px]">
            {isError}
          </p>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            <MInput
              label="Email"
              type="email"
              register={register("email", { required: true })}
              defaultValue={"shahariarshahin1000@gmail.com"}
            />
            <MInput
              label="Password"
              type="password"
              register={register("password", { required: true })}
              defaultValue={"123456789"}
            />
          </div>
          <div className="pt-4 flex items-center justify-between ">
            <Link
              onClick={closeModal}
              href={"/account/forgot-password"}
              className="poppins-lite"
            >
              Forgot your password?
            </Link>
            <h1 className="poppins-lite">Sign Up</h1>
          </div>
          <button
            type="submit"
            className="bg-[#dd6610] text-white w-full py-2.5 mt-6 poppins-medium uppercase"
          >
            {isLoading ? (
              <LuLoader className="h-6 w-6 mx-auto animate-spin" />
            ) : (
              " Sign In"
            )}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default LoginModal;
