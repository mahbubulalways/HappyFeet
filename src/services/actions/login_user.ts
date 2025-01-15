"use server";
import { TSignIn } from "@/Types";

const login_user = async (payload: TSignIn) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
};

export default login_user;
