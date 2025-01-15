import LoginModal from "@/components/LoginModal/LoginModal";
import { isLogin } from "@/services/auth/auth.services";
import Link from "next/link";
import React from "react";

const ShowAuth = () => {
  const isLoginUser = isLogin();
  return (
    <div>
      {isLoginUser ? <Link href={"/"}>Dashboard</Link> : <LoginModal />}
    </div>
  );
};

export default ShowAuth;
