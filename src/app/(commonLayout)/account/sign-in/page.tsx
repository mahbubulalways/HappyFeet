import MInput from "@/components/Reused/Input/MInput";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 flex flex-col h-[90vh] items-center justify-center">
      <div className=" shadow-xl border rounded-md w-full p-10">
        <h2 className="text-3xl uppercase text-center poppins-medium ">
          sign in
        </h2>
        <div className="flex flex-col gap-5 w-full pt-8">
          {/* <MInput label="Email" name="email" />
          <MInput label="Password" name="password" /> */}
        </div>

        <div className="pt-4 flex items-center justify-between ">
          <h1 className="poppins-lite">Forgot your password?</h1>
          <Link
            href={"/account/sign-up"}
            className="poppins-lite text-[#c3540f] underline"
          >
            Sign Up
          </Link>
        </div>

        <button className="bg-[#dd6610] text-white w-full py-2.5 mt-6 poppins-medium uppercase transition-all duration-300 hover:bg-[#c3540f]">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
