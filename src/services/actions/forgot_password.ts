"use server";
type TPayload = {
  email: string;
};
const forgot_Password = async (payload: TPayload) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/auth/forget-password`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    }
  );
  return await res.json();
};

export default forgot_Password;
