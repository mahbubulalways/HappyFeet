import { authKey } from "@/constant";
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/localStroage";
import { jwtDecode } from "jwt-decode";

export const storeUserInfo = async (accessToken: string) => {
  return setToLocalStorage(authKey, accessToken);

  //   const storedInLocalStorage = localStorage.setItem("refreshToken", token);
};

// get user info from local storage
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role.toLowerCase(),
    };
  }
};

// check login
export const isLogin = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authKey) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};
