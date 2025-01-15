import { ReactNode } from "react";
import { CartProvider } from "./CartContext";

export default function GlobalProvider({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
