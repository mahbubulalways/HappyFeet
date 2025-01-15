"use server";
type TPayload = {
  email: string;
  newPassword: string;
  token: string;
};
const reset_password = async (payload: TPayload) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/auth/recover-password?email=${payload.email}&token=${payload?.token}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newPassword: payload.newPassword }),
      cache: "no-store",
    }
  );
  return await res.json();
};

export default reset_password;
